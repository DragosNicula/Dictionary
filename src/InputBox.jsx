import React from 'react';

export function InputBox(props) {
    return(
        <input style={{width: "30%", marginLeft: "35%"}} type="text" class="form-control" placeholder={props.placeholder} onChange={props.change}></input>
    )
}