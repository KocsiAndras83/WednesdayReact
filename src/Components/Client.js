import React from 'react';

import Pet from './Pet';

function Client({ client }) {
    return (
        <div className="Client">
            <p>{ client.name }</p>

            { client.pets.map((pet, i) => (<Pet key={ i } pet={ pet } />)) }
        </div>
    );
}

export default Client;
