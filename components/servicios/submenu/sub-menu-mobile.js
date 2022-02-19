import React from "react";
import Link from "next/link";

import styles from "./styles.module.scss";

import DropdownButton from "react-bootstrap/DropdownButton";
import { Dropdown } from "react-bootstrap";

export default function SubMenuMobile() {
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
      texto: "Incluye",
      url: "#incluye",
    },
    {
      texto: "Notas",
      url: "#notas",
    },
    {
      texto: "Tours similares",
      url: "#tours-similares",
    },
  ];

  return (
    <section>
      {/* Mobile */}
      <DropdownButton
        id="dropdown-basic-button"
        title="INFORMACIÓN"
        className={`${styles.headerInterior_mobile} d-md-none`}
      >
        {items.map((item, index) => {
          return (
            <Dropdown.Item key={index} href={item.url}>
              {item.texto}
              {/* <Link href="/" passHref>
                <a
                  className={`${styles.headerInterior_link} text-dark text-uppercase font-weight-bold`}
                >
                  {item.texto}
                </a>
              </Link> */}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </section>
  );
}
