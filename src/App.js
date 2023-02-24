import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Programs from "./pages/Programs";
import UserPrograms from "./pages/UserPrograms"

const App = () =>
  <Router>
    <Routes>
      <Route path='/' element={<Programs />} />
      <Route path='/myprograms' element={<UserPrograms />} />
    </Routes>
  </Router>


export default App;
