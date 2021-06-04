import { Link, Route } from 'react-router-dom'
// import Pure from './purecomponent'

export default () => {
    return (
        <>
            <Link style={{marginRight: '20px'}} to='/puredemo/purecomponent'>Pure</Link>

            {/* <Route path='/puredemo/purecomponent' component={Pure} /> */}
        </>
    )
}