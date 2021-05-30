import styled from 'styled-components'
import { ReactComponent as InfoIcon } from './../../svgs/info.svg';

const HeaderWrapper = styled.div`
    background-color: ${props => props.transparent ? 'transparent' : props.theme.mainGreen};
    padding-left: ${props => props.theme.containerPadding};
    padding-right: ${props => props.theme.containerPadding};
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    svg {
        color: ${props => props.transparent ? props.theme.mainGreen : 'white'};
    }
`

export default ({ transparent, children }) => (
    <HeaderWrapper transparent={transparent} >
        <InfoIcon />
        {children}
    </HeaderWrapper>
)