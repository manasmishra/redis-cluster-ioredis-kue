var Redis = require('ioredis');
const kue = require('kue');
const queue = kue.createQueue({
  redis: {
    createClientFactory: function () {
      return new Redis.Cluster([{
        port: 6380,
        host: '127.0.0.1'
      }, {
        port: 6381,
        host: '127.0.0.1'
      }, {
        port: 6382,
        host: '127.0.0.1'
      }, {
        port: 6383,
        host: '127.0.0.1'
      }, {
        port: 6384,
        host: '127.0.0.1'
      }, {
        port: 6385,
        host: '127.0.0.1'
      }]);
    }
  }
});

var testRedis = () => {
  var job = queue.create('email', {
    title: 'welcome email for tj'
  , to: 'tj@learnboost.com'
  , template: 'welcome-email'
  }).save( function(err){
    if( !err ) console.log('\n\n job created is:>>>>>>>>>>>>>>>>', job.id );
  });
}

setInterval(testRedis, 10000);

queue.process('email', (job, done) => {
  const payload = job.data;
  console.log('jkskfgnskgnsdfkgn', payload)
  done()
});

queue.process('testemail', (job, done) => {
  const payload = job.data;
  console.log('jkskfgnskgnsdfkgn', payload)
  done()
});

// const xblog = require('./connections/xblog');
// const xblkue = require('@xblockchainlabs/xblkue');
// xblkue.init(xblog);
// var Redis = require('ioredis');
// const { Kue } = require('@xblockchainlabs/xblkue');
// module.exports.init = (logger) => {
//   Kue.init(logger);
//   return true;
// }
 
// // using https://github.com/72squared/vagrant-redis-cluster
 
// var queue = Kue({
//     redis: {
//       createClientFactory: function () {
//         return new Redis.Cluster([{
//           port: 6380
//         }, {
//           port: 6381
//         }, {
//           port: 6382
//         }, {
//           port: 6383
//         }, {
//           port: 6384
//         }, {
//           port: 6385
//         }]);
//       }
//     }
//   });
// let co = xblog.util().createCoInstance({headers:{},name: 'test' })
// const testFunc = () => {
//   var job = queue(co).create('email', {
//     title: 'welcome email for tj'
//   , to: 'tj@learnboost.com'
//   , template: 'welcome-email'
//   }).save( function(err){
//     console.log(err);
//     if( !err ) console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', job.id );
//   });
// }

// setInterval(testFunc, 10000);

// var queue1 = Kue({
//   redis: {
//     createClientFactory: function () {
//       return new Redis.Cluster([{
//         port: 6380
//       }, {
//         port: 6381
//       }, {
//         port: 6382
//       }, {
//         port: 6383
//       }, {
//         port: 6384
//       }, {
//         port: 6385
//       }]);
//     }
//   }
// });
// let co1 = xblog.util().createCoInstance({headers:{},name: 'test' })
// const testFunc1 = () => {
// var job1 = queue1(co1).create('email', {
//   title: 'welcome email for tj'
// , to: 'tj@learnboost.com'
// , template: 'welcome-email'
// }).save( function(err){
//   console.log(err);
//   if( !err ) console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', job1ß.id );
// });
// }

// setInterval(testFunc1, 10000);
// const queue1 = kue.createQueue({
//   redis: {
//     createClientFactory: function () {
//       return new Redis.Cluster([{
//         port: 6380,
//         host: '127.0.0.1'
//       }, {
//         port: 6381,
//         host: '127.0.0.1'
//       }, {
//         port: 6382,
//         host: '127.0.0.1'
//       }, {
//         port: 6383,
//         host: '127.0.0.1'
//       }, {
//         port: 6384,
//         host: '127.0.0.1'
//       }, {
//         port: 6385,
//         host: '127.0.0.1'
//       }]);
//     }
//   }
// });
// // let k =0;
// // var cluster = new Redis.Cluster();
// // cluster.on('connect', err => {
// //   console.log('connected');
// // })
// // cluster.on('error',function (err) {
// //   console.log("REDIS CONNECT error "+ err);
// //   console.log('node error', err.lastNodeError);
// // });

// var testRedis1 = () => {
//   // k = k+1;
//   // cluster.rpush('list-key', 'test '+k);
//   // cluster.lpop('list-key', function (err, res) {
//   //   console.log('res', res);
//   // // res === 'bar'
//   // });
//   var job = queue1.create('testemail', {
//     title: 'welcome email for tj'
//   , to: 'tj@learnboost.com'
//   , template: 'welcome-email'
//   }).save( function(err){
//     if( !err ) console.log('\n\n job created is:>>>>>>>>>>>>>>>>', job.id );
//   });
// }

// setInterval(testRedis1, 10000);

// queue1.process('testemail', (job, done) => {
//   // const timeout = setTimeout(done, 10000, Error('timeout'));
//   const payload = job.data;
//   // const data = ((oldKey, newKey, { [oldKey]: oldVal, ...others }) => {
//   //   return { [newKey]: oldVal, ...others };
//   // })('id', 'external_order_id', payload.data());
//   // if(data.type==='market') {
//   //   data.unit_price = 0;
//   // }
//   // try {
//   //   // await OrderBook.addOrder(data, payload.lco());

//   //   clearTimeout(timeout);
//   //   done();
//   // } catch (err) {
//   //   clearTimeout(timeout);
//   //   done(err);
//   // }
//   console.log('jkskfgnskgnsdfkgn', payload)
//   done()
// });