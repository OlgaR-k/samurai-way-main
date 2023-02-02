import React from "react";
import s from './Posts.module.css';

type PostsType = {
    message: string
    countLike: number
}
export const Posts = (props: PostsType) => {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU"
            alt=""/>
            {props.message}
            <div>
                <span>Like {props.countLike}</span>
            </div>
        </div>

    );
}