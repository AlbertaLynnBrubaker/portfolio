import styled from 'styled-components'

const Card = styled.div`
  background: linear-gradient(45deg, transparent, var(--color-primary), transparent);
  width: ${props => props.width ? '80%;' : ""};
  padding: ${props => props.padding ? '2.4rem 5rem;' : '2rem;'};
  border-radius: 2rem;
  transition: var(--transition);
  text-align: center;
  

  &:hover {
    cursor: default;
    transform: scale(1.03);
  }

  h3 {
    font-size: 1.3rem;
    color: var(--color-bg);
    text-align: center;
    margin-bottom: 2rem;
  }
`

export default Card