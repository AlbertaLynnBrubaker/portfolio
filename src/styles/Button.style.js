import styled from 'styled-components'

const Button = styled.button`
  
  width: max-content;
  display: inline-block;
  color: ${props => props.primary ? 'var(--color-bg)' : 'var(--color-primary)'};
  background: ${props => props.primary ? 'var(--color-primary)' : '' };
  padding: 0.75rem 1.2rem;
  border-radius: .4rem;
  cursor: pointer;
  border: 1px solid var(--color-primary);
  transition: var(--transition);
  

  &:hover {
    background: var(--color-white);
    color: var(--color-bg);
    border-color: transparent;
  }

  .btn-primary {
    background: var(--color-primary);
    color: var(--color-bg);
  }
`

export default Button