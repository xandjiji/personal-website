import React from 'react';
import '../css/App.css';

import Navbar from './Navbar';
import Vitrine from './Vitrine';

import VitrineMobile from './mobile/VitrineMobile'

function App() {

    return (
        <div className="App">
            <Navbar/>
            <VitrineMobile/>
            <Vitrine/>
        </div>
    );
}

export default App;
