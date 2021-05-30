import styled from 'styled-components'
import {
    Link,
  } from "react-router-dom";

const IconButtonWrapper = styled(Link)`
    display: flex; 
    align-items: center;
    flex-direction: column;
    text-decoration: none;
    color: black;
`

const TextLabel = styled.span`
    margin-top: 18px;
    display: block;
`

export default ({ icon, text, children, target }) => (
    <IconButtonWrapper to={target} >
        {children}
        <TextLabel className="font-label" >{text}</TextLabel>
    </IconButtonWrapper>
)