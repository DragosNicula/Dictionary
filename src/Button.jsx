import React from 'react';

export function Button(props) {
    
    return(
        <div>
            <button class={props.class} onClick={props.event}>{props.name}</button>
        </div>
    )
}