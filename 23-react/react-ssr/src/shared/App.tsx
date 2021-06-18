import React from 'react'
import { Route, Link } from "react-router-dom";
import routes from './Routes'

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

            {routes.map((route, index) => (
                <Route key={index} {...route} />
            ))}

            {/* <Route exact path="/" component={Home} />
            <Route path="/count" component={CountComponent} /> */}
        </div>
    )
}