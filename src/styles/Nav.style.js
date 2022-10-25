import styled from 'styled-components'

const Nav = styled.nav`

background: rgba(0, 0, 0, .3);
width: max-content;
padding: .7rem 1.7rem;
z-index: 2;
position: fixed;
left: 50%;
transform: translateX(-50%);
bottom: 2rem;
display: flex;
gap: .8rem;
border-radius: 3rem;
backdrop-filter: blur(15px);


a {
  background: transparent;
  padding: .9rem;
  border-radius: 50%;
  display: flex;
  color: var(--color-light);
  font-size: 1.5rem;
}

a:hover {
  background: rgba(0, 0, 0, .3)
}

a.active {
  background: var(--color-bg);
  
}
`

export default Nav