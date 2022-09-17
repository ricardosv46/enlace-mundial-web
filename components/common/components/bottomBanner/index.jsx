import React from 'react'
import Link from 'next/link'

export const BottomBanner = ({ href = "", TextButtom = "", Class = "" }) => {
    return (
        <div className={`mt-4 ${Class || ''}`}>
            <Link href={typeof href === 'string' ? href : '#'} passHref>
                <a className="btn btn-primary rounded-0 px-5">{TextButtom || ''}</a>
            </Link>
        </div>
    )
}
