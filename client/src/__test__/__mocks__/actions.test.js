import { loadRegisters, RegisterUser } from '../../actions/index';
import { REGISTER_USER, GET_DATA } from '../../actions/types';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

const middlewares= [ thunk ]; 
const mockStore = configureStore( middlewares );

beforeEach( () => moxios.install() );
afterEach( () => moxios.uninstall() );

it('load registers', () => {

    const store = mockStore({ registers:{data:[] } });

    moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response:[
            { "id": 1, "firstname": "test", "lastname": "test", "email": "test@gmail.com", "eventdata":"2020-08-25T21:33:00.000Z" },
            { "id": 2, "firstname": "test1", "lastname": "test1", "email": "test1@gmail.com", "eventdata":"2020-08-25T21:33:00.000Z" },
            { "id": 3, "firstname": "test2", "lastname": "test2", "email": "test2@gmail.com", "eventdata":"2020-08-25T21:33:00.000Z" },
          ]
        });
    });
 
    return store.dispatch(loadRegisters()).then( () => {
            const actions = store.getActions();
            expect(actions.length).toBe(1);     
            expect(actions[0].type).toBe(GET_DATA);
            expect(actions[0].payload).not.toBeNull();       
            expect(actions[0].payload.length).toBe(3);       
        });
});


it('register user', () => {
  
  const store = mockStore({ 
      registers: {
          data: [{firstname:"test", lastname:"test", email:"test@gmail.com", eventdate:"2020-08-25T21:33:00.000Z"}]
      }
  });

  const sendData = {
    firstname: "test6",
    lastname: "test6",
    email: "test6@gmail.com",
    eventdate : new Date("2021-10-25T21:33:00.000Z")
  }

  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status: 200,
      response:[
        { "id": 1, "firstname": "test", "lastname": "test", "email": "test@gmail.com", "eventdata":"2020-08-25T21:33:00.000Z" },
      ]
    });
  });
 
  return store.dispatch(RegisterUser(sendData)).then( () => {
    const actions = store.getActions();
    expect(actions.length).toBe(1);     
    expect(actions[0].type).toBe(REGISTER_USER);
    expect(actions[0].payload).not.toBeNull();       
    expect(actions[0].payload).toBe("User was registered");       
  });

})

