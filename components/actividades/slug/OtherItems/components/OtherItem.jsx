import React from 'react'
import { TittleSection } from '../../common'
import { WrapperData } from '../../common/WrapperData'
export const OtherItem = ({ id, style, tittle, children }) => {
    return (
        <section id={id || ''} style={style || ''}>
            <TittleSection tittle={tittle} />
            <WrapperData>
                {children}
            </WrapperData>
        </section>
    )
}
