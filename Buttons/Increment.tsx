import React, {Dispatch, SetStateAction, useState} from 'react';
import increment from "./Increment";
import classes from "./Increment.module.css";

type IncPropsType = {
    count: number
    setCount: Dispatch<SetStateAction<number>>
}


const Increment = (props: IncPropsType) => {
    const [count, setCount] = useState(0);const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (props.count < 5) { //условие до 5
            props.setCount(props.count + 1)

        }
    }
    return (
        <button className={classes.increment}
                onClick={handleClick}
                disabled={props.count === 5}//выключаем кнопку после 5 на табло

        >
            <span>INC
            </span>
        </button>
    );
};

export default Increment;