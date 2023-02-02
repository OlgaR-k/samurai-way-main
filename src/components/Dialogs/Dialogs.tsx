import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

export const DialogItem = (props: any) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export const Message = (props: any) => {
    return (
        <div className={s.message}> {props.message} </div>
    )
}
export const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem name={'Olga1'} id={'1'}/>
                <DialogItem name={'Olga2'} id={'2'}/>
                <DialogItem name={'Olga3'} id={'3'}/>
                <DialogItem name={'Olga4'} id={'4'}/>
                <DialogItem name={'Olga5'} id={'5'}/>
                <DialogItem name={'Olga6'} id={'6'}/>

            </div>

            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
            </div>

        </div>
    )
}