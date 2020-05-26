import couchbase from "couchbase";
import { ConnectOpts } from "net";

interface ConnectOptions {
  connectionString: string;
  username: string;
  password: string;
}

interface BucketOptions extends ConnectOptions {
  bucketName: string;
}

export const connect = (connectOptions: ConnectOptions) => {
  const { connectionString, password, username } = connectOptions;
  const cluster = new couchbase.Cluster(connectionString, {
    username,
    password,
  });
  return cluster;
};

export const openBucket = (options: BucketOptions) => {
  const { connectionString, password, username, bucketName } = options;
  const cluster = new couchbase.Cluster(connectionString, {
    username,
    password,
  });

  const bucket = cluster.bucket(bucketName);
  return { bucket, cluster };
};
