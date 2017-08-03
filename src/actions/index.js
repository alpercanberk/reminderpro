import {ADD_REMINDER,DELETE_REMINDER} from '../constants';


export const addReminder = (text,duedate) => {
  const action = {
    type:ADD_REMINDER,
    text:text,
    duedate
  }
  console.log("Action in AddReminder",action);
  return action;
}

export const deleteReminder = (id) => {
  const action = {
    type:DELETE_REMINDER,
    id:id
  }
  return action;
}
