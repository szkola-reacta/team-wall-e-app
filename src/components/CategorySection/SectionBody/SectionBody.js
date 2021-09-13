import React from 'react'

export default function SectionBody({ list }) {
    return (
        <div className='pop-sec-container__sec-body'>
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}
