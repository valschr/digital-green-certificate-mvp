import styled from 'styled-components'

const HeroWrapper = styled.div`
    background-color: ${props => props.theme.mainGreen};
    padding-left: ${props => props.theme.containerPadding};
    padding-right: ${props => props.theme.containerPadding};
`

const Heading = styled.h1`
    color: white;
    margin: 0;
    padding-bottom: 35px;
    padding-top: 55px;
`

export default ({ text }) => (
    <HeroWrapper>
        <Heading className="font-hero" >{text}</Heading>
    </HeroWrapper>
)