import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Layout from './component/layout';

function App() {
  return (
    <>
    <Routes>
      <Route path = '/' element={<Layout/>}></Route>
    </Routes>
    </>
  );
}

export default App;
