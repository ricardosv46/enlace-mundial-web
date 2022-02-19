import React from "react"
import Link from "next/link"

import styles from "./styles.module.scss"

export default function MenuInteriorCrucero() {
  const items = [
    {
      texto: "Detalles",
      url: "#detalles",
    },
    {
      texto: "Itinerario",
      url: "#itinerario",
    },
    {
      texto: "Incluye ",
      url: "#incluye",
    },
    {
      texto: "Notas",
      url: "#notas",
    },
    {
      texto: "Cruceros similares",
      url: "#cruceros-similares",
    },
  ]

  return (
    <section>
      <header
        className={`${styles.headerInterior} d-none d-md-flex bg-light mt-3 py-2`}
      >
        {/* Desktop */}
        <nav className='container'>
          <div className='row'>
            <div className='col-12'>
              {items.map((item, index) => {
                return (
                  <a
                    key={item.texto}
                    className={`${styles.headerInterior_link} text-dark text-uppercase font-weight-bold`}
                    href={item.url}
                  >
                    {item.texto}
                  </a>
                )
              })}
            </div>
          </div>
        </nav>
      </header>
    </section>
  )
}
