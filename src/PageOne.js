import { Component } from "react";

export class GroceryList extends Component {
    state = {
        userInput: '',
        list: []
    }

    onChangeEvent (e){
      this.setState({userInput: e})
    }

    addItem (input) {
        if (input === '') {
            alert ('Please enter an item')
        }
        else {
            let listArray = this.state.list
            listArray.push(input);
            this.setState({list: listArray, userInput: ''});
        }
    }

    crossOut (e) {
        const li = e.target;
        li.classList.toggle('cross')
    }

    deleteItem () {
        let listArray = this.state.list
        listArray.length = 0;
        this.setState({list: listArray})
    }
    submitForm (e) {
        e.preventDefault()
    }

    render () {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <input
                        type='text' 
                        placeholder="Please enter your grocery list ..."
                        value={this.state.userInput}
                        onChange={(e)=> {this.onChangeEvent(e.target.value)}}/>
                    <button className="Add" onClick={() => this.addItem(this.state.userInput)}>Add</button>
                    <button className="Delete" onClick={() => this.deleteItem(this.state.userInput)}>Delete</button>
                    <ul>{this.state.list.map((item, index) => (
                        <li key={index} onClick={this.crossOut}>
                            <img src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/null/external-grocery-food-delivery-wanicon-lineal-color-wanicon.png" alt="grocery icon" width='50px' className="icon"/>
                            {item}
                        </li>
                ))}</ul>
                </form>
            </div>
        )
    }
}



















