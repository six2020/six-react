import {Route, NavLink} from 'react-router-dom'

import Aaa from './Aaa'
import Bbb from './Bbb'

export default function About(){
    return (
        <div>
            <h2>组件：About</h2>
            
            <div>
                <NavLink to='/about/aaa'  style={{marginLeft: '20px'}}>aaa</NavLink>
                <NavLink to='/about/bbb'  style={{marginLeft: '20px'}}>bbb</NavLink>
            </div>

            <Route path='/about/aaa' component={Aaa} />
            <Route path='/about/bbb' component={Bbb} />

        </div>
    )
}
