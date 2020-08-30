import {registers} from '../../reducers/registers';
import { REGISTER_USER, REGISTER_USER_ERROR, GET_DATA } from '../../actions/types';


describe('reducers', () => {

    //if an initial state is returned when we pass undefined
    it('returns the initial state', () => {
        expect(registers(undefined, {} )).toEqual({"data": [], "errorMessage": "", "successMessage": ""});
    });
    
    it('when action is GET_DATA, return data', () => {        
        const userRegister = [{ "firstname": "test3", "lastname": "test3", "email": "test3@gmail.com", "eventdata":"2022-08-25T21:33:00.000Z" }];
        expect(
            registers([], { type:GET_DATA, payload: userRegister})
        ).toEqual({data:[{"firstname": "test3", "lastname": "test3", "email": "test3@gmail.com", "eventdata":"2022-08-25T21:33:00.000Z"}]});
    })

    it('when action is REGISTER_USER, return state with a success message', () => {      
        expect(
            registers([], { type:REGISTER_USER, payload: "User was registered"})
        ).toEqual({ "errorMessage": "", "successMessage": "User was registered",});
    })

    it('when action is REGISTER_USER_ERROR, return state with a error message', () => {      
        expect(
            registers([], { type:REGISTER_USER_ERROR, payload: "User was not registered"})
        ).toEqual({ "errorMessage": "User was not registered", "successMessage": "",});
    })
});



