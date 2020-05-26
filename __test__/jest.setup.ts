import { openBucket } from "../src/index";
const bucketName = "travel-sample";
const username = "admin";
const password = "password";
const connectionString = "couchbase://localhost";
beforeEach(async () => {
  const { bucket, cluster } = openBucket({
    connectionString,
    username,
    password,
    bucketName,
  });
  const collection = bucket.defaultCollection();
  (global as any).__couchbase = {
    collection,
    bucket,
    cluster,
  };
});

afterAll(async () => {
  const { cluster } = (global as any).__couchbase;

  //  this way we can get a bucket connection and close it
  const conn = cluster._getConn({bucketName})
  conn.close();

  // get cluster instance and close it and all its bucket connection to allow jest finish correctly
  cluster.close();
});
