# Important (node version 12)

1- Install and run couchbase sandbox

```
$ docker run -t --name couchbase-sandbox -p 8091-8094:8091-8094 -p 11210:11210 couchbase/server-sandbox:6.5.0
```

2- Get repo and install dependencies 
```
$ git clone https://github.com/gsi-alejandro/peppa.git
$ cd peppa
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
