![CI](https://github.com/couchbaselabs/node-ottoman/workflows/CI/badge.svg?branch=v2) 
[![npm version](https://badge.fury.io/js/ottoman.svg)](https://badge.fury.io/js/ottoman)
![npm](https://img.shields.io/npm/dw/ottoman)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Introduction
Ottoman's goal is to provide a better development experience while using Couchbase,
bringing to developers a reliable tool to build easy-to-design, maintain and scale systems.

#### Getting started

```javascript
import { connect, createModel } from "ottoman";
connect("couchbase://localhost/travel-sample@admin:password");

const User = createModel('User', { name: String });

const user = new User({name:'Jane Doe'});
user.save().then(() => console.log('Nice Job!'));
```

#### Ottoman v2 main goals
- [x] Start migration from v1 to v2
- [ ] Add support to Couchbase SDK 3
- [ ] Add typescript support
- [ ] Update Documentation and Examples
 
...and many more, new features coming soon.

## Documentation

To check out [examples](https://github.com/couchbaselabs/node-ottoman/blob/master/docs/first-app.md) and docs, visit [ottomanjs.com](http://ottomanjs.com).

## Questions

For questions and support please use [the official forum](http://forum.ottomanjs.com) or [contact community](http://couchbase.com/communities/nodejs). 

## Issues

Please make sure to read the [Issue Reporting Checklist](https://github.com/couchbaselabs/node-ottoman/blob/dev/.github/CONTRIBUTING.md#issue-reporting-guidelines) before opening an issue.
 
## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/couchbaselabs/node-ottoman/releases).

## Stay In Touch

- [Twitter](https://twitter.com/ottoman)
- [Blog](https://medium.com/ottoman)

## Contribution

Please make sure to read the [Contributing Guide](https://github.com/couchbaselabs/node-ottoman) before making a pull request. 
Thank you to all the people who already contributed to Couchbase Ottoman!

#### Development Guide

1. Install and run couchbase sandbox
```
$ docker run -t --name couchbase-sandbox -p 8091-8094:8091-8094 -p 11210:11210 couchbase/server-sandbox:6.5.0
```

2. Get repo and install dependencies 
```
$ git clone https://github.com/couchbaselabs/node-ottoman.git
$ cd node-ottoman
$ yarn install
```

3. Available scripts
```
$ yarn dev
$ yarn build
$ yarn lint
$ yarn test
$ yarn test --coverage
$ yarn docs
```
Check results on [http://localhost:8091/](http://localhost:8091/) couchbase web client

## License
© Copyright 2013 Couchbase Inc.

Licensed under the Apache License, Version 2.0.
See [the Apache 2.0 license](http://www.apache.org/licenses/LICENSE-2.0).

