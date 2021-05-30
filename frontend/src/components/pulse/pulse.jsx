import styled, { keyframes } from 'styled-components'

const leftToRight = keyframes`
    0% {
        left: 0;
    }
    50% {
        left: calc(100% - 30px);
    }
    100% {
        left: 0%;
    }
`;

const Bar = styled.div`
    width: 100%;
    background-color: #EDEDED;
    height: 3px;
    overflow: hidden;
    position: relative;
    margin-bottom: 32px;
`

const MovingItem = styled.div`
    height: 3px;
    width: 30px;
    background-color: black;
    position: absolute;
    top: 0px;
    animation: ${leftToRight} 2s linear infinite;
`

const Pulse = () => (
    <Bar >
        <MovingItem />
    </Bar>
)

export default Pulse