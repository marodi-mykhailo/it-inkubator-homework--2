import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }
    const setClass = () => {
        return s[props.affair.priority]
    }

    return (
        <div style={{padding: "10px"}}>
            <span> {props.affair.name}</span>
            <span style={{padding: "0 20px"}} className={setClass()}>{props.affair.priority}</span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
