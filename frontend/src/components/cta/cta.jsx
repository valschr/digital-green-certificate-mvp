import styled from 'styled-components'
import {
    Link,
  } from "react-router-dom";

const CTALink = styled(Link)`
  padding-top: 8px;
  padding-bottom: 8px;
  width: 150px;
  text-align: center;
  background-color: ${props => props.theme.mainGreen};
  display: block;
  text-decoration: none;
  color: white;
  border-radius: 4px;
`

const CTA = ({ text, target }) => (
    <CTALink className="font-label" to={target} >{text}</CTALink>
)
export default CTA