import styled from 'styled-components'

import Container from './../container/container'

const HeroWrapper = styled.div`
    background-color: ${props => props.theme.mainGreen};
`

const Heading = styled.h1`
    color: white;
    margin: 0;
    padding-bottom: 25px;
    padding-top: 35px;
`

const Hero = ({ text }) => (
    <HeroWrapper>
        <Container>
          <Heading className="font-hero" >{text}</Heading> 
        </Container>
    </HeroWrapper>
)

export default Hero