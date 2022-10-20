import styled from 'styled-components'

const Article = styled.article`

  display: ${ props => props.flex ? 'flex;' : ""};
  .icon {
    color: var(--color-bg);
    font-size: 2rem;
    margin: .5rem .3rem;
  }

  small {
  font-size: .7rem;
  color: var(--color-light);
}
`

export default Article