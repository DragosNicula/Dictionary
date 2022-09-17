import React, { Component } from 'react'

export let dictionary = [];

class AddBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wordInput: '',
        }
    }

    inputBox(event) {
        this.setState({
        wordInput: event.target.value
        });
    }

    addWordInMapList() {
        dictionary.push(this.state.wordInput);
        dictionary.map((value, index) => {
        });
    }

    render() {
        return(
            <div>
                <h3>Add your word in the box below</h3> 
                <input type="text" onChange={(event) => this.inputBox(event)}></input>
                <br></br>
                <br></br>
                <button onClick={() => this.addWordInMapList()}>Add Word</button>
            </div>
        )
    }
}

export default AddBox
