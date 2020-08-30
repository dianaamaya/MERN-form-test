const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const faker = require('faker');
const { expect } = chai;

const server = require('../../../server/index');
chai.use(chaiHttp);


// users tests

describe('Users route', () => {

    // after all tests have run we drop our test database
    after('droping test db', async () => {
        await mongoose.connection.dropDatabase(() => {
          console.log('\n Test database dropped');
        });
        await mongoose.connection.close();
    });
    
    // routes
    const routeUsers = '/api/users';

    // predefined  values
    const date = faker.date.future();
    
    const newRegister = {
        firstname: "testname",
        lastname: "testlastname",
        email: faker.internet.email(),
        eventdate: date,
    };
    const badEventDate = {
        firstname: "testname",
        lastname: "testlastname",
        email: faker.internet.email(),
        eventdate: faker.date.past(),
    };
    const missingParameter = {
        lastname: "testlastname",
        email: faker.internet.email(),
        eventdate: date,
    };
    const badEmail = {
        firstname: "testname",
        lastname: "testlastname",
        email: "testemail",
        eventdate: date,
    };

    describe('POST', () => {

      it('should create a new register in database', async () => {
        try {
          const result = await chai
            .request(server)
            .post(routeUsers)
            .send(newRegister);

          expect(result.status).to.equal(200);
          expect(result.body).not.to.be.empty;
          expect(result.body).to.deep.equal({ "success": true });
        } catch (error) {
            throw new Error(error);
        }
      });

      it('should return error 403 if email is already registered with the same event date', async () => {
          try {
            const result = await chai
              .request(server)
              .post(routeUsers)
              .send(newRegister);            
          
          } catch (error) {
            expect(error.status).to.equal(403);
            expect(error.body).not.to.be.empty;
            expect(error.body).to.have.property('error');
          }
      });

      it('should return error 400 if date is less than the current date', async () => {
          try {
            const result = await chai
              .request(server)
              .post(routeUsers)
              .send(badEventDate);
              
          } catch (error) {
              expect(error.status).to.equal(400);
              expect(error.body).not.to.be.empty;
              expect(error.body).to.have.property('error');
          }
      });

      it('should return error 400 if any parameter is missing', async () => {
          try {
            const result = await chai
              .request(server)
              .post(routeUsers)
              .send(missingParameter);
              
          } catch (error) {
              expect(error.status).to.equal(400);
              expect(error.body).not.to.be.empty;
              expect(error.body).to.have.property('error');
          }
      });

      it('should return error 400 if email has a bad format', async () => {
          try {
            const result = await chai
              .request(server)
              .post(routeUsers)
              .send(badEmail);
              
          } catch (error) {
              expect(error.status).to.equal(400);
              expect(error.body).not.to.be.empty;
              expect(error.body).to.have.property('error');
          }
      });
    });


    describe('GET', () => {

      it('should get all registers from test database', async () => {
        try {
          const result = await chai
            .request(server)
            .get(routeUsers);
            
          expect(result.status).to.equal(200);
          expect(result.body).not.to.be.empty;
        } catch (error) {
            throw new Error(error);
        }
      });

    });   

});
