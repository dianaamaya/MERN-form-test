/**
 * component to display all registers
 */
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Moment from 'react-moment';

//local components
import * as actions from '../actions';

export const ListUsers =  ({ data }) => {
  
    return (
      data && <table className="table table-sm mx-auto">
             <thead>
                 <tr>
                   <th>N<sup>o</sup></th>  
                   <th>First name</th>  
                   <th>Last name</th>  
                   <th>Email</th>  
                   <th>Event data</th>  
                 </tr>
             </thead> 
             <tbody>
                 {                     
                  data.map((currentRegister, i) =>{
                    return (
                        <tr key={i} className="single-register">
                            <td>{i+1}</td>
                            <td>{currentRegister.firstname}</td>
                            <td>{currentRegister.lastname}</td>
                            <td>{currentRegister.email}</td>
                            <td>
                                <Moment format="DD/MM/YYYY HH:mm">
                                  {currentRegister.eventdate}
                                </Moment>
                            </td>
                         </tr>
                    )
                  })
                }
             </tbody>
          </table>
    );
}


const mapStateToProps = (state) => {
  //console.log(state);
  return {
    data: state.registers.data
  }
}

export default compose(connect(mapStateToProps, actions))(ListUsers)