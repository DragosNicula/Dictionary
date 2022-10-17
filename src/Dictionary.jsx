import React, { useState } from 'react';
import { AddBox } from './AddBox.jsx'
import { SearchBox } from './SearchBox.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

export function Dictionary() {
    let [dataBase, setDataBase] = useState([]);
    
    return(
        <div>
            <br></br>
            <h1>Dictionary App</h1>
            <br></br>
            <AddBox dataBase={dataBase} setDataBase={setDataBase}/>
            <br></br>
            <SearchBox dataBase={dataBase}/>
            
        </div>
    )
}