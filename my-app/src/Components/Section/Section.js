import React from "react";
import PropTypes from 'prop-types';
import s from "../Section/Section.module.css";

function Section ({title, children}) {
    return (
        <div className={s.Section}>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired
}

export default Section;