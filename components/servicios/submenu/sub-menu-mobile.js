import React from "react";
import Link from "next/link";

import styles from "./styles.module.scss";

import DropdownButton from "react-bootstrap/DropdownButton";
import { Dropdown } from "react-bootstrap";

export default function SubMenuMobile() {
  const items = [
    {
      texto: "Detalles",
      url: "",
    },
    {
      texto: "Itinerario",
      url: "",
    },
    {
      texto: "Incluye",
      url: "",
    },
    {
      texto: "Notas",
      url: "",
    },
    {
      texto: "Tours similares",
      url: "",
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
            <Dropdown.Item key={index} href="/">
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
