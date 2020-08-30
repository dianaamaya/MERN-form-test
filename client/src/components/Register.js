/**
 * component to display all data (form and register list)
 */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import DateTimePicker from "react-datetime-picker";

//styles
import '../styles/datetime.css';

//local components
import { loadRegisters, RegisterUser } from '../actions/index';
//import * as actions from '../actions';
import ListUsers from './ListUsers';

export const Register = ({errorMessage, successMessage, RegisterUser, loadRegisters}) => {
 
  const [formData, setFormData] = useState({
    startDate: '',
    firstname:'',
    lastname:'',
    email:'',
    showalert:true,  
  })

  const closeAlert = () => {
    setFormData({
      ...formData,
      showalert : false
    })  
  }

  const handleDate = (date) => {
    setFormData({
      ...formData,
      startDate : date
    })
  }

  // update state
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name] : value
    })
  }

  const onSubmit = async (e) => {

    e.preventDefault();

    const sendData = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      eventdate : new Date(formData.startDate)
    }

    await RegisterUser(sendData);
    
    setFormData({
      ...formData,
      startDate: '',
      firstname:'',
      lastname:'',
      email:'',
      showalert:true
    }) 
      
    loadRegisters();
      
  }

  const message = successMessage ? successMessage : errorMessage;
  const classAlert = successMessage ?  'alert alert-success': 'alert alert-danger';
 
    
  return (
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <h2 className="mb-4">Registration form</h2>
          <form id="registration" onSubmit={onSubmit}>
            <fieldset>
              <div className="form-group">
                <label htmlFor="firstname"> First name: </label>
                <input name="firstname"
                  type="text"
                  id="firstname"
                  className="form-control"
                  value= {formData.firstname}
                  onChange = { handleInput }
                  placeholder="Enter your first name" 
                  required />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <label htmlFor="lastname"> Last name: </label>
                <input name="lastname"
                    type="text"
                    id="lastname"
                    value= {formData.lastname}
                    className="form-control"
                    onChange = {handleInput}
                    placeholder="Enter your last name"
                    required/>
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <label htmlFor="lastname"> Email: </label>
                <input name="email"
                  type="email"
                  id="email"
                  value= {formData.email}
                  className="form-control"
                  onChange = {handleInput}
                  placeholder="example@example.com"
                  required/>
              </div>
            </fieldset>
            <fieldset>   
              <div className="form-group">
                <label>Event Date: </label>          
            
                <DateTimePicker
                  name="startDate"
                  onChange={handleDate}
                  value={formData.startDate}
                  className = "mb-2 form-control"
                  minDate = {new Date()}
                  required= {true}
                  autoFocus ={false}
                />
              </div>  
            </fieldset>

            { message && formData.showalert ? 
                  <div className={classAlert}>
                    <button onClick={closeAlert} type="button" className="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    { message }                    
                  </div>                
            : null}    

            <button id="sendDataButton" type="submit" className="btn btn-primary">Register</button>
          </form>
          
        </div>
        <div className="col-sm-12 col-md-8">
         
            <h2 className="mb-4 text-center">
              Users Registred 
            </h2>
            
            <ListUsers/>            
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.registers.errorMessage,
    successMessage: state.registers.successMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    RegisterUser(data){
        dispatch(RegisterUser(data));
    },
    loadRegisters(){
      dispatch(loadRegisters());
    }
  }
}

//export default connect(mapStateToProps, mapDispatchToProps) (Register);
export default compose(connect(mapStateToProps, mapDispatchToProps))(Register)