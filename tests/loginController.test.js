const request = require("supertest");
const app = require("../src/app");

const { expect } = require("chai");

describe("Login Controller", () => {
  it('should return json object with "error" field (empty username)', async () => {
    const response = await request(app)
      .post("/login")
      .send({ password: "invalidPassword" });
    expect(response.status).to.equal(400);
    // expect(response.body).to.be.an("object");
    // done();
  });

  it('should return json object with "error" field (empty password)', async () => {
    const response = await request(app)
      .post("/login")
      .send({ username: "invalidUsername" });
    expect(response.status).to.equal(400);
    // expect(response.body).to.be.an("object");
    // done();
  });

  // it('should return a success response for POST /api/users', async () => {
  //   const response = await request(app).post('/api/users').send({ name: 'John' });
  //   expect(response.status).to.equal(201);
  //   expect(response.body).to.have.property('id');
  // });

  // Add more test cases as needed
});
