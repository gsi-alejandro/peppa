import couchbase from 'couchbase';
import { extractConnectionString } from '../utils/extract-connection-string';

export interface ConnectOptions {
  connectionString: string;
  username: string;
  password: string;
  bucketName?: string;
}

class PackageName {
  cluster;
  bucketName = '';
  buckets: any = {};

  connect(connectOptions: ConnectOptions | string) {
    const { connectionString, password, username, bucketName } =
      typeof connectOptions === 'object' ? connectOptions : extractConnectionString(connectOptions);
    const cluster = new couchbase.Cluster(connectionString, {
      username,
      password,
    });
    this.cluster = cluster;
    if (bucketName) {
      this.getBucket(bucketName);
    }
    return this.cluster;
  }

  getCollection(collectionName?: string) {
    const bucket = this.getBucket();
    return collectionName ? bucket.collection(collectionName) : bucket.defaultCollection();
  }

  getBucket(name?: string) {
    const bucketName = name || this.bucketName;

    if (!this.bucketName && bucketName) {
      this.bucketName = bucketName;
    }

    let bucket = this.buckets[bucketName];
    if (bucket) {
      return bucket;
    }
    bucket = this.cluster.bucket(bucketName);
    this.buckets[bucketName] = bucket;
    return this.buckets[bucketName];
  }

  close() {
    this.cluster.close();
  }
}

export const instance = new PackageName();

export const connect = (connectOptions: ConnectOptions | string) => {
  instance.connect(connectOptions);
  return instance;
};

export const openBucket = (options: ConnectOptions) => {
  const { bucketName, ...connectionOptions } = options;
  connect(connectionOptions).getBucket(bucketName);
  return instance;
};

export const getCollection = (collectionName?: string) => {
  return instance.getCollection(collectionName);
};

export const close = () => {
  instance.close();
};
