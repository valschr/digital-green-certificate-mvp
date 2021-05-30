import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import dayjs from 'dayjs'
import { useHistory } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import CTA from "../../components/cta/cta";
import Header from "../../components/header/header";
import Pulse from "../../components/pulse/pulse";
import QRCode from "react-qr-code";
import { getPersonalID } from "../../utils/localStorage";
import { decode } from "../../utils/jwtHandler";

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
  padding: 45px;
  padding-left: ${(props) => props.theme.containerPadding};
  padding-right: ${(props) => props.theme.containerPadding};
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

  const { loading, error, data } = useQuery(GET_TOKEN, {
    variables: { uid: personalID },
  });

  const history = useHistory();
  const [qrCodeWrapperWidth, setQrCodeWrapperWidth] = useState(0);
  const qrWrapper = useRef(null);

  useEffect(() => {
    if (!personalID) {
      return history.push("/add-certificate-id");
    }

    // Update the document title using the browser API
    if (qrWrapper.current) {
      setQrCodeWrapperWidth(qrWrapper.current.getBoundingClientRect().width);
    }
  }, [data, loading. error, personalID]);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const decodedToken = data ? decode(data.getIdentityToken.token) : null;
  console.log(decodedToken)
  return (
    <div>
      <Header transparent={true}>
        <CTA target="/scan" text="scan" />
      </Header>
      <Content ref={qrWrapper}>
        <Pulse />
        {qrCodeWrapperWidth && (
          <QRCode size={qrCodeWrapperWidth - 64} value={data.getIdentityToken.token} />
        )}
        <ValidTill className="font-label">
          gültig bis
          <br />
          {dayjs(decodedToken.data.expires).format('DD.MM.YYYY')}
        </ValidTill>
        <PersonName className="font-label">{decodedToken.data.name}</PersonName>
      </Content>
    </div>
  );
};
export default MyCertificate;
