import './App.css';
import Header from "./components/header/Header";
import {Route} from 'react-router-dom'

function App(props) {
  return (
    <div className="App">
        <Header logo={props.config.logo} routes={props.config.routes}/>
        <div className="content">
            {props.config.routes.map(({path,page})=><Route path={path} render={()=>page} exact/>)}
        </div>
    </div>
  );
}

export default App;
