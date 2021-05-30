import { useState } from "react";
import styled from "styled-components";
import CTA from "../../components/cta/cta";
import Header from "../../components/header/header";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import Button from "../../components/button/button";
import { ReactComponent as RedoIcon } from "./../../svgs/redo.svg";
import Result from "../../components/result/result";
import { verifyToken } from "../../utils/jwtHandler";

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 45px;
  padding-left: ${(props) => props.theme.containerPadding};
  padding-right: ${(props) => props.theme.containerPadding};
`;

const ScanCode = () => {
  const [scannedCode, setScannedCode] = useState(undefined);
  const [tokeError, setTokenError] = useState(undefined);

  const onScan = async (err, result) => {
    if (!result) return;
    const token = await verifyToken(result.text).catch(console.error)
    if (!token) {
        setTokenError('This token has expired or was manipulated')
        setScannedCode({
          validTill: new Date(1),
          name: ''
      });
      return
    }
    setScannedCode({
        validTill: new Date(token.data.expires),
        name: token.data.name
    });
  };
  const onError = (err) => {
    alert(err);
  };

  const onReset = () => {
    setScannedCode(undefined);
  };

  return (
    <div>
      <Header transparent={true}>
        <CTA target="/certificate" text="mein pass" />
      </Header>
      <Content>
        {!scannedCode && (
          <BarcodeScannerComponent onUpdate={onScan} onError={onError} />
        )}
        {scannedCode && (
          <Result tokeError={tokeError} validTill={scannedCode.validTill} name={scannedCode.name} />
        )}
        {scannedCode && (
          <Button floating={true} onClick={onReset}>
            <RedoIcon />
          </Button>
        )}
      </Content>
    </div>
  );
};
export default ScanCode;
