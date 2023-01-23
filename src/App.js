
/**import {Userdetails} from './Userdetails';
import {Navigationbar} from './Navigationbar';**/
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepagefire from './Homepagefire.js';
import Signup from './Signup.js';
import Signin from './Signin.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Homepagefire/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
      

      </Routes>

    </BrowserRouter>
  );
}

export default App;