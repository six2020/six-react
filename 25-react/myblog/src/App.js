// import './App.css';
import {Route} from 'react-router-dom'

// 管理页
import MarkDownEdit from './MarkDownEdit';

// blog 列表
import BlogList from './BlogList';

// 详情页
import FormatMD from './FormatMD';

function App() {
  return (
    <div className="App">

      <Route exact path="/" component={BlogList} />
      <Route exact path="/blog/:id" component={FormatMD} />
      <Route exact path="/admin" component={MarkDownEdit} />

    </div>
  );
}

export default App;
