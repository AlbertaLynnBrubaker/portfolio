import flatifySample from '../../assets/FlatifySample.png'
import flatbaseSample from '../../assets/FlatbaseSample.png'
import rainbowSample from '../../assets/RainbowSample.png'

const projects = [
  {
    id: 1,
    title: 'Rainbow',
    image: rainbowSample,
    description: 'A social media site with an emphasis on being a place for LGBTQ+ people to gather and share their lives',
    github: 'https://github.com/AlbertaLynnBrubaker/rainbow-capstone-project',
    youtube: '',
    demo: ''
  },
  {
    id: 2,
    title: 'DnD Flatbase',
    image: flatbaseSample,
    description: 'A full stack web application for players of Dungeons & Dragons to create, store, and modify character sheets',
    github: 'https://github.com/AndreaRose92/dnd-flatbase-backend',
    youtube: '',
    demo: ''
  },
  {
    id: 3,
    title: 'Flatify',
    image: flatifySample,
    description: 'A close one-for-one UI clone of the Spotify web application',
    github: 'https://github.com/cyoojin513/flatify',
    youtube: '',
    demo: ''
  }
]

export {projects}