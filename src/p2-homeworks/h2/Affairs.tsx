import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter("all")}
    const setHigh = () => {props.setFilter("high")}
    const setMiddle = () => {props.setFilter("middle")}
    const setLow = () => {props.setFilter("low")}

    const setClass = (filter: FilterType) => {
        return filter === props.filter ? `${s.active}`: ''
    }

    return (
        <div>

            {mappedAffairs}

            <button className={setClass("all")} onClick={setAll}>All</button>
            <button className={setClass("high")} onClick={setHigh}>High</button>
            <button className={setClass("middle")} onClick={setMiddle}>Middle</button>
            <button className={setClass("low")} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
