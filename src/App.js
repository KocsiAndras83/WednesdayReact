import React, { useState } from 'react';

import Client from './Components/Client';

import './App.css';

function App() {
    const [input, setInput] = useState('');
    const [data, setData] = useState(false);

    function fetchData() {
        fetch('api/clients?search=' + input)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }

    function clickHandler() {
        setData(false);
        fetchData();
    }


    return (
        <div className="App">
            <h1>Veterinarian admin - Clients</h1>

            <input value={ input } type="text" onChange={ (e) => setInput(e.target.value) } />

            <button onClick={ () => clickHandler() } disabled={ input.length < 3 }>
                Search
            </button>

            { data &&
                data.map((client, i) => <Client key={ i } client={ client } />)
            }
        </div>
    );
}

export default App;
