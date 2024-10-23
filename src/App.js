import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout';
import Routes from './routes/Routes';
import {BrowserRouter} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <div>
      <b>Hello</b> <br /> Refer to{' '}
      <a href="https://reactrouter.com/en/main" target="_blank">
        React router docs
      </a>{' '}
    </div>
     <Layout>
      <Routes/>
      </Layout>
    </div>
    </BrowserRouter>
  );
}

export default App;
