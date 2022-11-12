import React from "react"
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaWhatsapp, FaTiktok } from 'react-icons/fa'
import Link from "next/link"
export default function RedesSociales() {
  return (
    <div className='wrapper-redes-sociales pointer'>
      <h4>Síguenos:</h4>
      <div className="redes-sociales">

        <FaFacebook className="icon_svg_redes_sociales" onClick={() => window.open('https://www.facebook.com/enlacemundialperu')} />
        <FaTiktok className="icon_svg_redes_sociales" onClick={() => window.open('https://www.tiktok.com/@enlacemundialpe')} />
        <FaTwitter className="icon_svg_redes_sociales" onClick={() => window.open('https://twitter.com/EnlaceMundial')} />
        <FaYoutube className="icon_svg_redes_sociales" onClick={() => window.open('https://www.youtube.com/channel/UCiyxk1gf15tfq15PVKYPcKA')} />
        <FaInstagram className="icon_svg_redes_sociales" onClick={() => window.open('https://www.instagram.com/enlacemundialperu/?hl=es-la')} />
        <FaWhatsapp className="icon_svg_redes_sociales" onClick={() => window.open('https://api.whatsapp.com/send?phone=+51994945265&text=Buen%20d%C3%ADa%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20tours%20%F0%9F%8F%94%20%F0%9F%A7%97%F0%9F%8F%BB%E2%80%8D%E2%99%80%EF%B8%8F%F0%9F%8F%96%F0%9F%8C%8B%E2%9B%BA%EF%B8%8F')} />

      </div>
    </div>
  )
}
