import React from "react"
import Link from "next/link"
export default function RedesSociales() {
  return (
    <div className='redes-sociales pointer'>
      <Link href='https://www.facebook.com/enlacemundialperu' passHref>
        <img src='/imagenes/redes-sociales/facebook.png' alt='Facebook' />
      </Link>
      <Link href='https://twitter.com/EnlaceMundial' passHref>
        <img src='/imagenes/redes-sociales/twitter.png' alt='Twitter' />
      </Link>

      <Link
        href='https://www.youtube.com/channel/UCiyxk1gf15tfq15PVKYPcKA'
        passHref
      >
        <img src='/imagenes/redes-sociales/youtube.png' alt='Youtube' />
      </Link>
      <Link
        href='https://www.instagram.com/enlacemundialperu/?hl=es-la'
        passHref
      >
        <img src='/imagenes/redes-sociales/instagram.png' alt='Instagram' />
      </Link>

      <Link
        href='https://api.whatsapp.com/send?phone=51994945265&app=facebook&entry_point=page_cta&fbclid=IwAR3HYJYUhipLyudKE4dXrpDzXEk0jaevCEoE-S36cn4SMOLFM2T3UKZSF1c'
        passHref
      >
        <img src='/imagenes/redes-sociales/whatsapp.png' alt='Whatsapp' />
      </Link>
    </div>
  )
}
