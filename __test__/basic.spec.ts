import { createModel } from '../lib'

const collectionName = 'col1'

class User {
  constructor(public name: string) {}
}

const doc = {
  type: 'airlineR',
  id: 8093,
  callsign: 'CBS',
  user: new User('John'),
  letters: ['a', 'b'],
  isActive: false,
  createAt: new Date(),
  name: 'Ottoman',
}

test('insert 1 document', async () => {
  const schema = {
    type: String,
    id: Number,
    createAt: Date,
    isActive: Boolean,
    letters: [String],
    user: User,
  }
  const Model = createModel(collectionName, schema)
  const document = new Model(doc)
  const key = `${doc.type}_${doc.id}`
  const result = await document.save(key)
  expect(result.token).toBeDefined()
})

test('query created document', async () => {
  const Model = createModel(collectionName)
  const key = `${doc.type}_${doc.id}`
  const result = await Model.find(key)
  expect(result.value).toBeDefined()
})
