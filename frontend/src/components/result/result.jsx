
import styled from 'styled-components'
import { ReactComponent as SuccessIcon } from './../../svgs/success.svg';
import { ReactComponent as FailedIcon } from './../../svgs/failed.svg';

const formattedDate = d => `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    p {
        text-align: center;
    }
`

const StyledTokenError = styled.span`
  color: ${(props) => props.theme.errorRed};
  display: block;
  margin-top: 15px;
`

const Result = ({ validTill, name, tokeError }) => {
    const isSuccess =  validTill > new Date().getTime() && !tokeError
    // TODO: add translation lib
    return (
        <Wrapper >
            {isSuccess ? <SuccessIcon /> : <FailedIcon />}
            {isSuccess && <p className="font-label" >gültig bis<br /> {formattedDate(validTill)}</p>}
            {!isSuccess && <p className="font-label" >ungültig<br /> (bis {formattedDate(validTill)})</p>}
            <p className="font-label" >{name}</p>
            {tokeError && <StyledTokenError className="font-label" >{tokeError}</StyledTokenError>}
        </Wrapper>
    )
}
export default Result