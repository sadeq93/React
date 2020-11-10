import React from 'react';
// import images
import f_delivery from './exercises/f-delivery.png';
import coin from './exercises/coin.png';
import chat from './exercises/chat.png';

import './App.css';
import HobbyList from './Hobbies';
import CustomerService from './Customer-service';
import Counter from './Counter';
function App() {
  return (
    <div className="App">
    {/* EX1 */}
    <HobbyList/>

    {/* EX2 */}
    <CustomerService
    img_src      = {f_delivery}
    title        = 'Free shipping'
    description  = 'Free shipping service description'
    />
     <CustomerService
    img_src      = {coin}
    title        = '100% Money back'
    description  = 'Money back service description'
    />
     <CustomerService
    img_src      = {chat}
    title        = 'Online support 24/7'
    description  = 'Online support service description'
    />

    {/* EX3 */}
    <Counter/>
    </div>
  );
}

export default App;
