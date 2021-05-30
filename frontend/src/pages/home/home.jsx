import styled from 'styled-components'

import Header from '../../components/header/header'
import Hero from '../../components/hero/hero'
import IconButton from '../../components/icon_button/icon_button'
import { ReactComponent as MyQRIcon } from './../../svgs/my_qr_code.svg';
import { ReactComponent as ScanIcon } from './../../svgs/scan_qr.svg';

const PageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding-top: 16px;
    padding-bottom: 16px;
    height: 100%;
    justify-content: space-around;
    max-height: 480px;
`

const Seperator = styled.hr`
    background-color: ${props => props.theme.mainGreen};
    margin-top: 16px;
    margin-bottom: 16px;
    width: 120px;
    height: 3px;
    box-shadow: none;
    border: none;
`

const HomePage = () => {
    return (
        <PageWrapper>
            <Header />
            <Hero text="Green Digital Certificate" />
            <ButtonWrapper>
                <IconButton text="mein pass" target="/certificate" >
                    <MyQRIcon />
                </IconButton>
                <Seperator />
                <IconButton text="scannen" target="/scan" >
                    <ScanIcon />
                </IconButton>
            </ButtonWrapper>
        </PageWrapper>
    )
}
export default HomePage