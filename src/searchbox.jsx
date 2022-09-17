import React, { Component } from 'react'
import { dictionary } from './addbox.jsx'

export class SearchBox extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            wordSearched: '',
            message: '',
        }
    }

    searchBox(event) {
        this.setState({ wordSearched: event.target.value });
    }

    searchWordInDataBase() {
        let wordSearched = this.state.wordSearched;
        for (let i = 0; i <= dictionary.length; ++i) {
            if (wordSearched === dictionary[i]) {
                this.setState({message: "Your word is in the dictionary"})
                break;
            } else {
                this.setState({message: "Your word is not in the dictionary"})
            }
        }
    }

    render() {
        return(
            <div>
                <h3>Search your word in the box below</h3>
                <input type="text" onChange={(event) => this.searchBox(event)}></input>
                <br></br>
                <br></br>
                <button onClick={() => this.searchWordInDataBase() }>Search Word</button>
                <br></br>
                <br></br>
                <h1> { this.state.message } </h1>
            </div>
        )
    }
}