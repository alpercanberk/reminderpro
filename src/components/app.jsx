import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addReminder,deleteReminder} from '../actions/index.js';
import { bindActionCreators } from 'redux';
import moment from 'moment';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      text:'',
      duedate:''
    }
    this.renderReminders = this.renderReminders.bind(this);
  }
  addReminder(){
    this.props.addReminder(this.state.text,this.state.duedate);
  }
  deleteReminder(id){
    this.props.deleteReminder(id);
  }


  renderReminders(){
    const {reminders} = this.props //what is this?
    return(
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
          return(<li key={reminder.id} className ="list-group-item">

                    <div className="list-item">
                      <div>{reminder.text}</div>
                      <div><em>{moment(new Date(reminder.duedate)).fromNow()}</em></div>
                    </div>

                    <div
                      className="list-item delete-button"
                      onClick={() => this.deleteReminder(reminder.id)}>
                      &#x2715;
                    </div>

                  </li>)
          })
        }
      </ul>
    )
  }
  render(){
    return(
      <div className="App">
        <div className="title">
          ReminderPro
        </div>
        <div className="form-inline reminder-form">
          <div className = "form-group">
            <input
              className="form-control"
              placeholder="I have to ..."
              onChange={(event) => { this.setState({text:event.target.value}); }}
            />
            <input className="form-control"
              type="datetime-local"
              onChange={event => this.setState({duedate:event.target.value})}>

            </input>
          </div>
          <button
            onClick = {() => this.addReminder()}
            className="btn btn-success"
            >
              Add Reminder
          </button>
        </div>
        {this.renderReminders()}

      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    reminders:state

  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({addReminder,deleteReminder},dispatch);

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
