import styled from 'styled-components'

const Container = styled.div`
  max-width: 768px;
  padding-left: ${props => props.theme.containerPadding};
  padding-right: ${props => props.theme.containerPadding};
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  box-sizing: border-box;
`

export default Container