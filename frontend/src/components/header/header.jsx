import styled from 'styled-components'
import { ReactComponent as InfoIcon } from './../../svgs/info.svg';
import Container from './../container/container'

const HeaderWrapper = styled.div`
    background-color: ${props => props.transparent ? 'transparent' : props.theme.mainGreen};
    padding-top: 20px;
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    svg {
        color: ${props => props.transparent ? props.theme.mainGreen : 'white'};
    }
`

const Header = ({ transparent, children }) => (
    <HeaderWrapper transparent={transparent} >
        <Container>
          <InfoIcon />
          {children}
        </Container>
    </HeaderWrapper>
)
export default Header