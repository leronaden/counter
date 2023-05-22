import React, {Dispatch, SetStateAction, useState} from 'react';
import classes from "./Reset.module.css";

type ResetPropsType = {
    count: number
    setCount: Dispatch<SetStateAction<number>>
}

const Reset = (props: ResetPropsType) => {

    const handleClick = () => {
        if (props.count === 5) { //если значение 5 то ресет работает и сбрасывает до 0
            props.setCount(0)
        }
    }

    return (
        <button className={classes.reset}
                onClick={handleClick}
                disabled={props.count < 5}>
       RESET
        </button>
    );
};

export default Reset;