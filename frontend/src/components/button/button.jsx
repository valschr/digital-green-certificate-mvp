import styled, { css } from 'styled-components'

const BTN = styled.button`
  padding-top: 8px;
  padding-bottom: 8px;
  width: 150px;
  text-align: center;
  background-color: ${props => props.theme.mainGreen};
  display: block;
  text-decoration: none;
  color: white;
  border-radius: 4px;
  border: none;
  ${props => props.floating && css`
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      bottom: 32px;
  `}
`

const Button = ({ onClick, children, floating }) => (
    <BTN className="font-label" floating={floating} onClick={onClick} >{children}</BTN>
)
export default Button