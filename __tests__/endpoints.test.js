const { app } = require('../app.js')
const {data} = require('../data.js')
const supertest = require('supertest')
const request = supertest(app)

it('should return all tea objects', async (done) => {
  const expectation = {data}
  const response = await request.get('/tea')

  expect(response.status).toBe(200)
  expect(response.body).toEqual(expectation)
  done()
})

it('should return a single tea objects', async (done) => {
    const expectation = {selectedTea:data[0]}
    const response = await request.get('/tea/1')
  
    expect(response.status).toBe(200)
    expect(response.body).toEqual(expectation)
    done()
  })