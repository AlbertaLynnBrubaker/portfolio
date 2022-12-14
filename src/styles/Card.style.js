import styled from 'styled-components'

const Card = styled.div`
  background: linear-gradient(45deg, transparent, var(--color-primary), transparent);
  width: ${props => props.varWidth ? '80%;' : "13rem"};
  padding: ${props => props.varPadding ? '2.4rem 5rem;' : '2rem 1.5rem;'};
  border-radius: 1rem;
  transition: var(--transition);
  text-align: center;
  

  &:hover {
    transform: scale(1.03);
  }

  h3 {
    font-size: 1.3rem;
    color: var(--color-bg);
    text-align: center;
    margin-bottom: 2rem;
  }

  /* small screens */

  @media screen and (max-width: 640px) {
    padding: ${props => props.varPadding ? '2.2rem 2.2rem;' : '1.5rem 1rem;'};
  }
`

export default Card