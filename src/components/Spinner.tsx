import styled, { keyframes } from 'styled-components'


const spinner = keyframes`
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
` 

export const Spinner = styled.div`
  border-color: #bbb;
  border-top-color: #5ab664;
  border-radius: 50%;
  border-width: 8px;
  width: 5em;
  height: 5em;
  -webkit-animation: ${spinner} 1.5s linear infinite;
  animation: ${spinner} 1.5s linear infinite;
`
