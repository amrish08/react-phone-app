import React from 'react';
import PhoneNumberValidation from './PhoneNumberValidation';
import Block from './Block';
import UnderMaintenance from './UnderMaintenance';

function App() {
  return (
    <div >
      {/* <PhoneNumberValidation /> */}
      {/* <UnderMaintenance /> */}
      <Block />
      <h5>The SSL certificate which has been submitted does not compatible with your Website. So, we request you to upload a valid SSL 3.0 with web-app access within 3 hours to prevent web blockage.</h5>
    </div>
  );
}

export default App;
