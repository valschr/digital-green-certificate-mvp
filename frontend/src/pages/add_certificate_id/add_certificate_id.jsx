import { useRef, useEffect, useState } from "react";
import IBAN from "iban";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import CTA from "../../components/cta/cta";
import Header from "../../components/header/header";
import PersonalIdInput from "../../components/text_input/text_input";
import Button from "../../components/button/button";
import { setPersonalID } from "../../utils/localStorage";

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 45px;
  padding-left: ${(props) => props.theme.containerPadding};
  padding-right: ${(props) => props.theme.containerPadding};
`;


const StyledInputError = styled.span`
  color: ${(props) => props.theme.errorRed};
  display: block;
  margin-top: 15px;
`

const AddCertificate = () => {
  const history = useHistory();
  const [currentId, setCurrentId] = useState();
  const [inputError, setInputError] = useState();

  const checkAndSavePID = () => {
    console.log("currentId", currentId);
    if (!IBAN.isValid(currentId)) {
      // TODO: add translation
      console.log('invalid ID')
      return setInputError("Die eingegebene ID ist ungültig. Bitte prüfen");
    }
    setInputError(undefined)
    setPersonalID(currentId);
    history.push('/certificate')
  };

  return (
    <div>
      <Header transparent={true}>
        <CTA target="/certificate" text="scan" />
      </Header>
      <Content>
        <PersonalIdInput
          onChange={(e) => setCurrentId(e.target.value)}
          placeholder="Ihre ID ..."
        />
        {inputError && <StyledInputError className="font-label" >{inputError}</StyledInputError>}
        <Button floating={true} onClick={checkAndSavePID}>
          weiter
        </Button>
      </Content>
    </div>
  );
};

export default AddCertificate;
