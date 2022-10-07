import React from "react"
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import Link from "next/link"
export default function RedesSociales() {
  return (
    <div className='wrapper-redes-sociales pointer'>
      <h4>Síguenos:</h4>
      <div className="redes-sociales">
        <a href='https://www.facebook.com/enlacemundialperu'>
          {/* <img src='/imagenes/redes-sociales/facebook.png' alt='Facebook' /> */}
          <FaFacebook className="icon_svg_redes_sociales" />
        </a>
        <a href='https://twitter.com/EnlaceMundial'>
          {" "}
          {/* <img src='/imagenes/redes-sociales/twitter.png' alt='Twitter' /> */}
          <FaTwitter className="icon_svg_redes_sociales" />
        </a>
        <a href='https://www.youtube.com/channel/UCiyxk1gf15tfq15PVKYPcKA'>
          {/* <img src='/imagenes/redes-sociales/youtube.png' alt='Youtube' /> */}
          <FaYoutube className="icon_svg_redes_sociales" />
        </a>
        <a href='https://www.instagram.com/enlacemundialperu/?hl=es-la'>
          {/* <img src='/imagenes/redes-sociales/instagram.png' alt='Instagram' /> */}
          <FaInstagram className="icon_svg_redes_sociales" />
        </a>
        <a href='https://api.whatsapp.com/send?phone=+51994945265&text=Buen%20d%C3%ADa%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20tours%20%F0%9F%8F%94%20%F0%9F%A7%97%F0%9F%8F%BB%E2%80%8D%E2%99%80%EF%B8%8F%F0%9F%8F%96%F0%9F%8C%8B%E2%9B%BA%EF%B8%8F'>
          {/* <img src='/imagenes/redes-sociales/whatsapp.png' alt='Whatsapp' /> */}
          <FaWhatsapp className="icon_svg_redes_sociales" />
        </a>
      </div>
    </div>
  )
}
