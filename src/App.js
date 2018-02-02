import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export class App extends React.Component {

  constructor(props){
  super(props);
    
    this.state = {
      buyItems: ['bread','fruit','milk'],
      message: ''
    }

  }

addItem(e){
  e.preventDefault();
  const {buyItems} = this.state;
  const newItem = this.newItem.value;
  const isOnTheList = buyItems.includes(newItem);

  if(isOnTheList){

    this.setState({
    message: "This item allready added!"
    })

  }else{
    newItem !== '' && this.setState({
    buyItems: [...this.state.buyItems, newItem],
    message: ''
  })
  }
  
 
this.addForm.reset();

}

removeItem(item){
  const newBuyItems = this.state.buyItems.filter(buyItem =>{
    return buyItem !== item;
  })

  this.setState({
    buyItems: [...newBuyItems]
  })

if(newBuyItems.length === 0){
  this.setState({
    message: "List items is empty!"
  })
}
}

clearAll(){
  this.setState({
    buyItems: [],
    message: "List items is empty!"
  })
}

  render(){
    const {buyItems, message} = this.state;
    return(
      <div>
        <header>
        <h1>Shoping list</h1>
        <form ref={input => this.addForm = input} className="form-inline" onSubmit = {(e) => {this.addItem(e)}}>
            <label className="sr-only" htmlFor="newItemInput">Add new items: </label>
            <input ref={input => this.newItem = input} type="text" className="form-control" id="newItemInput"/>
          <button type="submit" className="btn btn-primary">Add</button>
          </form>
        </header>
        <div className="content">
        {
        (message !== '' || buyItems.length === 0) && <p className="message text-danger">{message}</p>
        }
        {
          buyItems.length > 0 &&
        <table className="table">
        <caption>Shoping list</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>item</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
        {
          buyItems.map(item => {
            return (
            <tr key={item}>
              <th scope="row">1</th>
              <td>{item}</td>
              <td className="text-right">
                <button onClick={(e) => this.removeItem(item)} type="button" className="remove-btn">remove</button>
              </td>
            </tr>
            )
          })
        }
        </tbody>
        <tfoot>
          <tr>
          <td colSpan="2">&nbsp;</td>
          <td className="text-right">
              <button onClick = {(e) => this.clearAll()} className="remove-btn">clear All</button>
          </td>
          </tr>
          </tfoot>
        </table>
        }
      </div>
      </div>
      ) 
  }
}
