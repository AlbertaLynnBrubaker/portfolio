import styled from 'styled-components'

const Container = styled.div`
  width: var(--container-width-xl);
  margin: 0 auto;

  /* large screens */
  @media screen and (max-width: 1440px) {
    width: var(--container-width-lg);
    
    section {
      margin-top: 5rem;
    }
  }

  /* medium screens */
  @media screen and (max-width: 960px) {
    width: var(--container-width-md);

    section {
      margin-top: 5rem;
    }
  }

  /* small screens */

  @media screen and (max-width: 640px) {
    width: var(--container-width-sm);
    
    section > h2 {
      margin-bottom: 2rem;
    }
  }

  /* extra-small screens */

  @media screen and (max-width: 360px) {
    width: var(--container-width-xs);
    
    section > h2 {
      margin-bottom: 2rem;
    }
  }
`

export default Container