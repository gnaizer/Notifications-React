import React from 'react';

export class DeleteBox extends React.Component {
//item

  render (){
    const { name, description, id } = this.props.item;
    return (
    
<div className="wearer-row">
       <div className="wearer-icon">
        <img src="./img/avatar.png"/>
        <div className="wearer-info">
        <div className="name-time">
        {/* this.props.item.name */}
        <p className="name">{ name }</p> 
         <svg width="6" height="6">
         <circle r="3" cx="3" cy="3" fill="#B3B3B3"/>
        </svg>
        <p className="time">2 mins ago</p>
       </div>
        <div className="notification">
        <p>{ description }</p>
        </div>
       </div>
       </div>
        <div className="delete-box"  onClick = {this.props.handleDelete.bind(null, this.props.item)}>
         <svg fill="#B52F54" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
           <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
           <path d="M0 0h24v24H0z" fill="none"/>
         </svg>
         </div>
            </div>
           )}
       }






