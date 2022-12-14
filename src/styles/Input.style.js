import styled from 'styled-components'

const Input = styled.input`
  height: ${props => props.varHeight ? '16rem;' : '3rem;'};
  width: 95%;
  border-radius: 1rem;
  border: 1px solid var(--color-primary);
  padding: 1rem;
  color: var(--color-white);
  background: var(--color-bg);
`

export default Input