# Knex-Edge-ADODB
>ADODB client for knex
>
>[![NPM Version][npm-image]][npm-url]

### Install
[![NPM](https://nodei.co/npm/knex-edge-adodb.png)](https://nodei.co/npm/knex-edge-adodb/)

### Example:
```js
const knex = require('knex');
const adodb = knex({
    client: require('knex-edge-adodb'),
    connection: 'Provider=Microsoft.ACE.OLEDB.12.0;Data Source=D:\\Projects\\npms\\knex-edge-adodb\\edge-adodb.Mdb;'
})


adodb('users').where({
    id: 1
}).select()
    .then(console.log);
```

### Caveat
> This package is extremely barebones

[npm-image]: https://img.shields.io/npm/v/knex-edge-adodb.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/knex-edge-adodb