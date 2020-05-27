# Getting started

```typescript
import { connect, createModel } from "package-name";
connect("couchbase://localhost/travel-sample@admin:password");

const Furniture = createModel('Furniture', { name: String });

const couch = new Furniture({name:'Couch'});
couch.save().then(() => console.log('Nice Job!'));
```


# Development Guide
Clone repo

Install dependencies
```
$ yarn install
```

Compile ts watching for changes
```
yarn dev
```

Run test watching for lib changes (recommended: run along side with yarn dev - in other terminal or use IDE run tools)
```
yarn test:dev
```

Formatting code (configure IDE or Editor to improve format XP)
```
$ yarn lint
```

# Generate documentation
```
yarn docs
```

local publish docs recommended way:
```
$ yarn global add serve
$ serve docs/.vuepress/dist
```

# Environment setup (node version 12 LTS)

1- Install and run couchbase sandbox

```
$ docker run -t --name couchbase-sandbox -p 8091-8094:8091-8094 -p 11210:11210 couchbase/server-sandbox:6.5.0
```

2- Get repo and install dependencies 
```
$ git clone https://github.com/gsi-alejandro/package-name.git
$ cd package-name
$ yarn install
```


3- Run command test 

```
$ yarn test
```
<small> test will save a document and get it from db.</small>

4- Check results on  http://localhost:8091/ 




## Other scripts
```
$ yarn dev
$ yarn build
$ yarn test --coverage
