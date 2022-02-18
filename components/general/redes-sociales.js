import React from "react"
import Link from "next/link"
export default function RedesSociales() {
  return (
    <div className='redes-sociales pointer'>
      <a href='https://www.facebook.com/enlacemundialperu'>
        <img src='/imagenes/redes-sociales/facebook.png' alt='Facebook' />
      </a>
      <a href='https://twitter.com/EnlaceMundial'>
        {" "}
        <img src='/imagenes/redes-sociales/twitter.png' alt='Twitter' />
      </a>
      <a href='https://www.youtube.com/channel/UCiyxk1gf15tfq15PVKYPcKA'>
        <img src='/imagenes/redes-sociales/youtube.png' alt='Youtube' />
      </a>
      <a href='https://www.instagram.com/enlacemundialperu/?hl=es-la'>
        <img src='/imagenes/redes-sociales/instagram.png' alt='Instagram' />
      </a>
      <a href='https://api.whatsapp.com/send?phone=51994945265&app=facebook&entry_point=page_cta&fbclid=IwAR3HYJYUhipLyudKE4dXrpDzXEk0jaevCEoE-S36cn4SMOLFM2T3UKZSF1c'>
        <img src='/imagenes/redes-sociales/whatsapp.png' alt='Whatsapp' />
      </a>
    </div>
  )
}
