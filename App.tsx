import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Increment from "./Buttons/Increment";
import Reset from "./Buttons/Reset";
import img from "./image/buble.png"

type MonitorType = {
    count: number
}

function App(props: MonitorType) {
    const [count, setCount] = useState(props.count);
    return (
        <div className="App">
            <h1>Counter</h1>
            <div className="image-container">
                <img src={img} alt={'buble'}/>
            </div>
            <div className={'mainCounterBlock'}>
                {/* добавляем красный цвет к 5 + count значение переменной в строку*/}
                <div className={`count ${count === 5 ? 'red-text' : ''}`}>{count}</div>
                <Increment count={count} setCount={setCount}/>
                <Reset count={count} setCount={setCount}/>
            </div>
        </div>
    );
}

export default App;
