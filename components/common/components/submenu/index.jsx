import React from 'react'
import styles from './styles.module.scss'
import DropdownButton from "react-bootstrap/DropdownButton";
import { Dropdown } from "react-bootstrap";

export const SubMenuTittle = ({ data }) => {
    return (
        <section>
            {/* sub menu items dekstop */}
            <header
                className={`${styles.headerInterior} d-none d-md-flex bg-light py-2`}
            >
                {/* Desktop */}
                <nav className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            {data.map((item) => {
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
            {/* sub menu item mobile */}
            <header className='d-md-none mt-3 pl-3 container'>
                <DropdownButton
                    id="dropdown-basic-button"
                    title="INFORMACIÓN"
                >
                    {data.map((item, key) => <Dropdown.Item key={key} href={item.url}>{item.texto}</Dropdown.Item>)}
                </DropdownButton>
            </header>
        </section>

    )
}
