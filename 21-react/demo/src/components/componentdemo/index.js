import { Link, Route } from 'react-router-dom'
import CC from './cc'
import FC from './fc'

export default () => {
    return (
        <>
            <Link style={{marginRight: '20px'}} to='/componentdemo/cc'>CC</Link>
            <Link style={{marginRight: '20px'}} to='/componentdemo/fc'>FC</Link>

            <Route path='/componentdemo/cc' component={CC} />
            <Route path='/componentdemo/fc' component={FC} />
        </>
    )
}