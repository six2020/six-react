import React, { useState } from 'react'
import { Route, Link } from "react-router-dom";

const CountComponent = () => {

    let [count, setCount] = useState(0)

    let addHandle = () => {
        setCount(++count)
    }

    return (
        <div>
            <h2>hello world</h2>
            <div>{count}</div>
            <button onClick={addHandle}>add</button>
        </div>
    )
}

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

export default function App() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/count">Count</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/count" component={CountComponent} />
        </div>
    )
}