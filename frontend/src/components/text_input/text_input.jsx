import styled from "styled-components";

const StyledPersonalIdInput = styled.input`
    border: 1px solid rgba(83, 83, 83, 0.5);
    border-radius: 4px;
    line-height: 45px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 16px;
`

const PersonalIdInput = (props) => (
    <StyledPersonalIdInput className="font-label" {...props} />
)
export default PersonalIdInput