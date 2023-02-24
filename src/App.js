import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Programs from "./pages/Programs";
import MyPrograms from "./pages/MyPrograms"

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={ <Programs/> } />      
      <Route path='/myprograms' element={ <MyPrograms/> } />  
    </Routes>
 </Router>

  );
}

export default App;
