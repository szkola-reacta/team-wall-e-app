import React from 'react';

import SectionHead from './SectionHead/SectionHead';
import SectionBody from './SectionBody/SectionBody';

import './sass/app.scss';

export default function CategorySection({label, list}) {
    return (
        <div className="pop-sec-container">
            <SectionHead label={label}/>
            <SectionBody list={list}/>
        </div>
    )
}
