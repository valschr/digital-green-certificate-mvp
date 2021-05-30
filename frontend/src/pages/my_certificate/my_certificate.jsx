import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import dayjs from 'dayjs'
import { useHistory } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import CTA from "../../components/cta/cta";
import Header from "../../components/header/header";
import Pulse from "../../components/pulse/pulse";
import Container from '../../components/container/container'
import QRCode from "react-qr-code";
import { getPersonalID } from "../../utils/localStorage";
import { decode } from "../../utils/jwtHandler";
import { setToken, getToken } from "../../utils/localStorage";


const GET_TOKEN = gql`
  query getIdentityToken($uid: String) {
    getIdentityToken(uid: $uid) {
      token
    }
  }
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 45px;
  padding-bottom: 45px;
  align-items: center;
`;

const ValidTill = styled.p`
  width: 100%;
  text-align: center;
`;

const PersonName = styled.p`
  width: 100%;
  text-align: center;
`;

const MyCertificate = (props) => {
  const personalID = getPersonalID();
  const token = getToken()

  const { loading, error, data } = useQuery(GET_TOKEN, {
    variables: { uid: personalID },
    skip: !!token
  });

  const history = useHistory();
  const [qrCodeWrapperWidth, setQrCodeWrapperWidth] = useState(0);
  const qrWrapper = useRef(null);

  useEffect(() => {
    if (!personalID) {
      return history.replace("/add-certificate-id");
    }
    if (data && data.getIdentityToken) {
      const tkn = decode(data.getIdentityToken.token)
      const expires = new Date(tkn.data.expires)
      setToken(data.getIdentityToken.token, expires)
    }
    // Update the document title using the browser API
    if (qrWrapper.current) {
      setQrCodeWrapperWidth(qrWrapper.current.getBoundingClientRect().width);
    }
  }, [data, loading, error, personalID, history]);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  
  const tokenToUse = token || data.getIdentityToken.token
  const decodedToken = decode(tokenToUse)

  return (
    <div>
      <Header transparent={true}>
        <CTA target="/scan" text="scan" />
      </Header>
      <Container>
        <Content ref={qrWrapper}>
          <Pulse />
          {qrCodeWrapperWidth && (
            <QRCode size={qrCodeWrapperWidth - 64} value={tokenToUse} />
          )}
          <ValidTill className="font-label">
            gültig bis
            <br />
            {dayjs(decodedToken.data.expires).format('DD.MM.YYYY')}
          </ValidTill>
          <PersonName className="font-label">{decodedToken.data.name}</PersonName>
        </Content>
      </Container>
    </div>
  );
};
export default MyCertificate;
