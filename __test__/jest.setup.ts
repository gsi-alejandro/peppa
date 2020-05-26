import { closeCluster, connect } from '../src/index';
import { bucketName, connectionString, connectUri, password, username } from './testData';
beforeAll(async () => {
  connect(connectUri);

  // alternative connectio way
  // connect({
  //   connectionString,
  //   username,
  //   password,
  // }).getBucket(bucketName);
});

afterAll(async () => {
  closeCluster();
});
