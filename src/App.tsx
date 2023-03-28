
import '../src/styles/app.scss';
import {Routes, Route } from "react-router-dom"
import User from './component/User';
import LogIn from './component/LogIn';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LogIn/>}/>
        <Route path="/user" element={<User/>}/>

      </Routes>
    </div>
  );
}

export default App;
