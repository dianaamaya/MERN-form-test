import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { ListUsers } from '../../components/ListUsers';
import ConnectedListUsers from '../../components/ListUsers';

configure({ adapter: new Adapter() });
const mockStore  = configureStore([]);

//checking the presentational component (the exported ListUsers function) 
//use a mock of the store
it('renders no registers when store is empty - presentation', () => {
    const store = mockStore({ 
        registers :{
            data: []
        }        
    });
    const wrapper = shallow(<ListUsers store = {store}/>);
    expect(wrapper.find(".single-register").length).toBe(0);
})

// checking the exported connection
// use a mock of the store
it('renders no registers when store is empty - connection', () => {
    //initial state
    const getState = { registers: {
        data: []
    }};
    const store = mockStore(getState);
    const wrapper = render(<ConnectedListUsers store = {store}/>);
    expect(wrapper.find(".single-register").length).toBe(0);
})

// check if there are registers
it('renders registers when store is not empty', () => {
    //initial state
    const store = mockStore({ 
        registers: {
            data: [{firstname:"test", lastname:"test", email:"test@gmail.com", eventdate:"2020-08-25T21:33:00.000Z"}]
        }
    });
    const wrapper = render(<ConnectedListUsers store = {store}/>);
    expect(wrapper.find(".single-register").length).toBe(1);
})
