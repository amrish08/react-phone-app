import React from 'react';
import PhoneNumberValidation from './PhoneNumberValidation';
import Block from './Block';
import UnderMaintenance from './UnderMaintenance';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Data from './Data';
import Users from './Users';

function App() {
  return (
    <div >
      {/* <PhoneNumberValidation /> */}
      {/* <UnderMaintenance /> */}
      <Block />
      {/* <BrowserRouter>
        <Routes>
          <Route path="" element={<PhoneNumberValidation />}></Route>
          <Route path="/data" element={<Data />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/block" element={<Block />}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
