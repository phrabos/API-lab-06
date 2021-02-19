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
  it('should return a single tea objects', async (done) => {
    const expectation =  [  
    {
        id: 1, 
        name: 'Da Hong Pao',
        image: 'dahongpao.jpg',
        description: 'roasted rock tea from Wuyi Mountain',
        category: 'Yancha',
        price: 35,
        aged: false,
    },
    {
        id: 5, 
        name: 'Rou Gui',
        image: 'rougui.jpg',
        description: 'roated spicy cinnamon bark flavor',
        category: 'Yancha',
        price: 25,
        aged: false,
    },
]
    const response = await request.get('/tea/category/Yancha')
  
    expect(response.status).toBe(200)
    expect(response.body).toEqual(expectation)
    done()
  })