import React from 'react';

function Pokemon(props) {

    return <div>
        <p>You caught one! {props.name} </p>
        <p><img src={props.imgUrl} alt='pokemon' /></p>
    </div>
}

export default Pokemon;