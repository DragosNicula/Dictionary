import React, { Component } from 'react'

class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wordInput: '',
            wordSearchBox: '',
            message: '',
            wordList: []  
        }
    }

    changeInputBox(event) {
        this.setState({
        wordInput: event.target.value
        });
    }

    changeSearchBox(event) {
        this.setState({
            wordSearchBox: event.target.value
        })
    }

    addWordInMapList() {
        let wordList = this.state.wordList;
        wordList.push(this.state.wordInput);
        wordList.map((value, index) => {
        });
    }

    searchWordInDataBase() {
        let searchedWord = this.state.wordSearchBox;
        for (let i = 0; i <= this.state.wordList.length; ++i) {
            if (searchedWord === this.state.wordList[i]) {
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
                <input type="text" onChange={(event) => this.changeInputBox(event)}></input>
                <br></br>
                <br></br>
                <button onClick={() => this.addWordInMapList()}>Add Word</button>
                <h3>Search your word in the box below</h3>
                <input type="text" onChange={(event) => this.changeSearchBox(event)}></input>
                <br></br>
                <br></br>
                <button onClick={() => this.searchWordInDataBase()}>Search Word</button>
                <br></br>
                <br></br>
                <h3>{ this.state.message }</h3>
            </div>
        )
    }
}

export default UserInput
