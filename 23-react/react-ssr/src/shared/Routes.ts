import Home from './Home'
import CountComponent from './CountComponent'

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.getSomeData,
    },

    {
        path: '/count',
        component: CountComponent,
        exact: true
    },
]

export default routes