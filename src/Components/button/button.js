import React from "react";
import Plus from './plus'
import './button.scss'

export default function Button() {
    return (
        <button className="btn" type="button">
            <Plus></Plus>
        </button>
    )
}