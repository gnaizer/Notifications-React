import React from 'react';
import {DeleteBox} from './DeleteBox'; 
import logo from './img/logow.png';
import avatar from './img/avatar.png';
import search from './img/search.png';

const arr = 
[
    {
      "id": 56,
      "name": "Myrko's parents",
      "master_id": 15,
      "created_at": "2017-12-15T11:04:54.008Z",
      "updated_at": "2017-12-15T11:04:54.008Z"
    },
    {
      "id": 64,
      "name": "For dima 1",
      "master_id": 15,
      "created_at": "2017-12-18T13:53:56.061Z",
      "updated_at": "2017-12-18T13:53:56.061Z"
    },
    {
      "id": 65,
      "name": "For Dima 2",
      "master_id": 15,
      "created_at": "2017-12-18T13:54:12.060Z",
      "updated_at": "2017-12-18T13:54:12.060Z"
    },
    {
      "id": 66,
      "name": "for Dima",
      "master_id": 15,
      "created_at": "2017-12-18T14:40:45.101Z",
      "updated_at": "2017-12-18T14:41:18.994Z"
    }
  ]

  

export class NotificationWrapper extends React.Component {

  constructor(props){
    super(props);
      this.filterList = this.filterList.bind(this);
      this.state = {text:'',items:[
        { name: 'item1', description: 'some description', id: 1 },
        { name: 'item2', description: 'some description 2222', id: 2 },
        { name: 'item3', description: 'some description 2222563663', id: 3 },
        { name: 'item4', description: 'some description 2222r34t3t3', id: 4 },
        { name: 'item5', description: 'some description 2222t4teteet', id: 5 }
      ], search: null};
      this.openDoor = [1,2,3,4,5,]
    }

    handleDelete (itemToBeDeleted){
      var newItems = this.state.items.filter((_item) =>{
        return _item.id != itemToBeDeleted.id;
      });
      this.setState({items: newItems});
    }

    filterList(event){
      let searchString;
    this.setState({search: event.target.value.toLowerCase()})
    console.log('filterList event.target.value', event.target.value);
  }

    render(){

      let filteredWearers = arr.filter(
        (wearer) => {
            if(this.state.search !== null){
                return wearer.name.toLowerCase().indexOf(this.state.search) !== -1
            }
            else return true
        }
    );

   let wearerList = filteredWearers.map((wearer)=> <li> {wearer.name} </li>);



   console.log(this.openDoor);

     return(

  <div className="article">
  <h2>Notifications</h2>
  <div className="main-menu">
  <div className="header-bottom">
  <div>
          <svg fill="#B52F54" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
          <p>Group 1</p>
  </div>
  </div>
  <div className="all-wearers">
  <div  className="wearer-icon">
      <svg fill="#B52F54" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
  </div>
  <div className="dropdown">
      <button className="dropbtn">
        <p>All wearers</p>
        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10l5 5 5-5z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </button>



      <div className="dropdown-content">
        <input className="input-1" type="text" placeholder="Search" onChange={this.filterList}/>
        { wearerList.map((wearer) => {
          return <a key={ wearer } className='wearers' href=''>{ wearer }</a>
        })}
      </div>
  </div>



    <div className="search-notifications">
        <input className="input-2" type="text" placeholder="Search" onChange = {this.filterDescription}/>
        {}
    </div>
   </div>
</div> 

  
  
    { this.state.items.map(row => (
      <DeleteBox
        item={ row }
        handleDelete = {this.handleDelete.bind(this)}/>
      ))}

 </div>
      )
  }
}
