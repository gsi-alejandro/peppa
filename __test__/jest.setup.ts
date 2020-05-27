import { closeCluster, connect } from '../lib/index';
import { bucketName, connectionString, connectUri, password, username } from './testData';
beforeAll(async () => {
  connect(connectUri);
});

afterAll(async () => {
  closeCluster();
});
