import React from "react";
import s from './MyPosts.module.css';
import {Posts} from "./Post/Posts";

export const MyPosts = (props: any) => {
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Posts message={'Hi, how are you?'} countLike={15}/>
                <Posts message={"It's my first post"} countLike={5}/>
            </div>
        </div>
    );
}