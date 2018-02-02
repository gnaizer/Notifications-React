import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './Header';
import {NotificationWrapper} from './NotificationWrapper';



export class Notification extends React.Component {

  constructor(props){
  super(props);
    }
  

  render(){
     
    return(
        <div className="body">
            <Header />
            <NotificationWrapper />
        </div>
    )
  }
}