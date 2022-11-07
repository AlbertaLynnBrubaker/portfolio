import styled from 'styled-components'

const Article = styled.article`

  display: ${ props => props.flex ? 'flex;' : ''};

  .portfolio-buttons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }

  .icon {
    color: var(--color-bg);
    font-size: ${ props => props.varFontSize ? '2rem;' : '1.2rem;'};
    margin: .5rem .3rem;
  }

  .project-image img {
    border-radius: 1rem;
  }

  h4, h5 {
    color: var(--color-dark);
  }

  small {
  font-size: .7rem;
  color: var(--color-bg);
  }

  a {
    color: var(--color-bg);
  }
`

export default Article

