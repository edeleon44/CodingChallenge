import React, { Component } from 'react';
import list from './list';
import './App.css';


// Higher order to find searchTermm
  function isSearched(searchTerm){
    return function(item){
      return !searchTerm || item.description.toLowerCase().includes(searchTerm) || item.name.toLowerCase().includes(searchTerm) || item.related.toLowerCase().includes(searchTerm);

    }
  }

class App extends Component {

  //setting up internal component state
  // constructor to initialize state
  constructor(props){
    super(props);
    this.state = {
      list: list,
      searchTerm: ''
    }

    //Bind all functions to the App itself -- always bind within Constructor
    this.removeItem = this.removeItem.bind(this);
    this.searchValue = this.searchValue.bind(this);
  }


  //Remove Item Function
  removeItem(id){
    console.log('remove item');
    // Filter Method to filter out the clicked item and render the updated list
    function isNotId(item){
      return item.objectId !== id;
    }
    // create a new list withing remove function using const
    const updatedList = this.state.list.filter(isNotId);
    //assign it to list using setState method
    // Trigger click event -- removeItem modifies internal state -- comp. state / render updates view
    this.setState({ list: updatedList });
  }

  searchValue(event){
    console.log(event);
    this.setState( { searchTerm: event.target.value });
  }

  render() {

    //Allows to children and parent to talk to eachother
    const { list, searchTerm } = this.state;

    return (
      <div className="App">

        <Search
          onChange={ this.searchValue }
          value={ searchTerm }
          />

        {
          list.filter( isSearched(searchTerm) ).map(item =>
                <div key={ item.objectId }>
                  <h1>{ item.description }  { item.name }</h1>
                  <p> Product Inventory: { item.num_phones } || Related Items: { item.related }</p>
                  <button type="button" onClick={ ()=> this.removeItem(item.objectId) } >Remove</button>
                </div>
            )
        }

      </div>
    );
  }
}

class Search extends Component {
  render(){
    return(
      <form>
        <input
          type="text"
          placeholder="Search Inventory"
          onChange={ this.props.onChange }
          value={ this.props.value }
        >
        </input>
      </form>
    )
  }
}

export default App;
