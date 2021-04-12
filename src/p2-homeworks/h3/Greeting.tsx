import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onEnterHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnterHandler} // деструктуризация пропсов
) => {
    const inputClass = !!error ? s.error : ''

    return (
        <div>
            <input value={name} onChange={setNameCallback}
                   onKeyDown={onEnterHandler} className={inputClass}
                   onBlur={setNameCallback}
            />
            <span>{error}</span>
            <button disabled={!name} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
