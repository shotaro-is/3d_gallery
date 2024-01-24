import { createRoot } from 'react-dom/client'
import './styles.css'
import { App } from './App'


// const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
const height = 0



const images = [
  // Front
  { position: [0, height, 1.5], rotation: [0, 0, 0], url: '/arts/CryptoParisian_000_0xbdde08b_d57e5_c9fd563ee7ac_61618cb2ecdc0ce0_pressed.png' },
  // Back
  { position: [-0.8, height, -0.6], rotation: [0, 0, 0], url: '/arts/CryptoTokyoite_592_0xbdde08b_d57e5_c9fd563ee7ac_61618cb2ecdc0ce0_pressed.png' },
  { position: [0.8, height, -0.6], rotation: [0, 0, 0], url: '/arts/CryptoPatagonian_861_0xbdde08b_d57e5_c9fd563ee7ac_61618cb2ecdc0ce0_pressed.png'},
  // Left
  { position: [-1.75, height, 0.25], rotation: [0, Math.PI / 2.5, 0], url: '/arts/CryptoVenetian_582_0xbdde08b_d57e5_c9fd563ee7ac_61618cb2ecdc0ce0_pressed.png' },
  { position: [-2.15, height, 1.5], rotation: [0, Math.PI / 2.5, 0], url: '/arts/CryptoNewYorker_258_0xbdde08b_d57e5_c9fd563ee7ac_61618cb2ecdc0ce0_pressed.png' },
  { position: [-2, height, 2.75], rotation: [0, Math.PI / 2.5, 0], url: '/arts/CryptoMexa_687_0xbdde08b_d57e5_c9fd563ee7ac_61618cb2ecdc0ce0_pressed.png' },
  // Right
  { position: [1.75, height, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: '/arts/CryptoLondoner_18_0xbdde08b_d57e5_c9fd563ee7ac_61618cb2ecdc0ce0_pressed.png' },
  { position: [2.15, height, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: '/arts/CryptoGalactican_732_0xbdde08b_d57e5_c9fd563ee7ac_61618cb2ecdc0ce0_pressed.png' },
  { position: [2, height, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: '/arts/CryptoBerliner_940_0xbdde08b_d57e5_c9fd563ee7ac_61618cb2ecdc0ce0_pressed.png'  }
]

createRoot(document.getElementById('root')).render(<App images={images} />)
