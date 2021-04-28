import React, { useState } from 'react';

function Pet({ pet }) {
    const [buttonText, setButtonText] = useState(pet.isVaccinated.toString());

    function myFetch() {
        setButtonText('...');

        fetch('api/pets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: pet.name, isVaccinated: !pet.isVaccinated }),
        }).then((response) => response.json())
            .then((data) => {
                if(data.success) pet.isVaccinated = !pet.isVaccinated;
                setButtonText(pet.isVaccinated.toString());
            });
    }

    function handleClick() {
        setButtonText(false);
        myFetch();
    }

    return (
        <div className="Pet">
            <p>
                { pet.name } - Vaccinated:{' '}

                <button onClick={ () => handleClick() }>
                    { buttonText }
                </button>
            </p>
        </div>
    );
}

export default Pet;
