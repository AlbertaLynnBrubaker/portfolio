import styled from 'styled-components'

const Button = styled.button`  
  width: max-content;
  display: inline-block;
  color: ${props => props.primary ? 'var(--color-bg)' : 'var(--color-primary)'};
  background: ${props => props.primary ? 'var(--color-primary)' : '' };
  padding: 0.75rem 1.2rem;
  border-radius: .7rem;
  cursor: pointer;
  border: 1px solid var(--color-primary);
  transition: var(--transition);  

  &:hover {
    background: ${props => props.primary ? 'var(--color-bg)' : 'var(--color-primary)'};
    color: ${props => props.primary ? 'var(--color-white)' : 'var(--color-bg)'};
    border-color: ${props => props.primary ? '1px solid var(--color-primary)' : 'transparent'};
  }

  .btn-primary {
    background: var(--color-primary);
    color: var(--color-bg);
  }
`

export default Button