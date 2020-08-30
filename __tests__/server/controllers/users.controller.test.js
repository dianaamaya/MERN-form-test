const chai = require('chai');
const faker = require('faker');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const rewire = require('rewire');
const { expect } = chai;

const User = require('../../../server/models/User.js');
const userController = rewire('../../../server/controllers/users.controller.js');

chai.use(sinonChai);
let sandbox = null;

describe('Users controller', () => {

    // predefined  values
    const date = faker.date.future();
    
    const req = {
        user: {
           id: faker.random.number(),
        },         
        body: {
            firstname: "testname",
            lastname: "testlastname",
            email: faker.internet.email(),
            eventdate: date,
        },       
    };   

    let res = {
        json: function() {
          return this;
        },
        status: function() {
          return this;
        },
    };

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });
    
    afterEach(() => {
        sandbox.restore();
    });

    describe('REGISTER', () => {

        it('should return 200 if email and event data were not in db and it was saved', async () => {
            sandbox.spy(res, 'json');
            sandbox.spy(res, 'status');
            sandbox.stub(User, 'findOne').returns(
              Promise.resolve({
                id: faker.random.number(),
              }),
            );
           // sandbox.stub(User, 'findOne').returns(Promise.resolve(true));
           /* sandbox.stub(User.prototype, 'save').returns(
              Promise.resolve({
                id: faker.random.number(),
              }),
            );*/
      
            try {
              await userController.registerUser(req, res);
           
              expect(res.status).to.have.been.calledWith(200);
              expect(res.json.callCount).to.equal(1);
              expect(res.json).to.have.been.calledWith({
                success: true,
              })
            } catch (error) {
              throw new Error(error);
            }
        });

        it('should return 403 if the email is already registered in this event date.', async () => {
            sandbox.spy(res, 'json');
            sandbox.spy(res, 'status');
            sandbox.stub(User, 'findOne').returns(
              Promise.resolve({
                id: faker.random.number(),
              }),
            );

            try {
                await userController.registerUser(req, res);

                expect(res.status).to.have.been.calledWith(403);
                expect(res.json).to.have.been.calledWith({
                   error: "user is already registered in this event date",
                });
            } catch (error) {
                throw new Error(error);
            }


        });   
        
        

    });

    describe('LIST OF REGISTERS', () => {

        it('should return all registers', async () => {
      
            sandbox.spy(res, 'status');
            sandbox.spy(res, 'json');
      
            try {        
              await userController.getUsers(req, res);
              expect(res.json.callCount).to.equal(1);
              expect(res.status).to.have.been.calledWith(200);

            } catch (error) {
              throw new Error(error);
            }
        });

    });

});