import MyComponent from './components/MyComponent4'
import Count from './components/Count'
import store from './store'
import {Provider} from 'react-redux'


function App() {
  return (

    <div className="App">
      <Provider  store={store} >
        <MyComponent/>
        <Count />
      </Provider>
      
    </div>
  );
}

export default App;
