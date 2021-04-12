import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message({avatar, name, message, time}: MessagePropsType) {
    return (
        <div className={s.message}>
            <div className={s.avatarWrapper}>
                <img className={s.avatar} src={avatar} alt={"avatar"}/>
            </div>
            <div className={s.content}>
                <div className={s.wrapper}>
                    <div className={s.name}>
                        {name}
                    </div>
                    <div className={s.text}>
                        {message}
                    </div>
                </div>
                <div className={s.time}>
                    {time}
                </div>
            </div>
        </div>
    )
}

export default Message
