import { getCollection } from '../src';

const doc = {
  type: 'airlineX',
  id: 8093,
  callsign: 'CBS',
  iata: null,
  icao: null,
  name: 'Couchbase Airways',
};

test('insert 1 document', async () => {
  const collection = getCollection();
  const key = `${doc.type}_${doc.id}`;
  const result = await collection.upsert(key, doc);
  expect(result.token).toBeDefined();
});

test('query created document', async () => {
  const collection = getCollection();
  const key = `${doc.type}_${doc.id}`;
  const result = await collection.get(key);
  expect(result.value).toBeDefined();
});
