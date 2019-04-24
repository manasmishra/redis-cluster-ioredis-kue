// const xblkue = require('@xblockchainlabs/xblkue');
// const { Kue } = require('@xblockchainlabs/xblkue');
// const { redisConfig } = require('../configs');
var Redis = require('ioredis');
var kue = require('kue');

// module.exports.init = (logger) => {
//   xblkue.init(logger);
//   return true;
// }
let queue;
module.exports.queue = (prefix) => {
  // let options = {
  //   redis: {
  //     createClientFactory: function () {
  //       return new Redis.Cluster([{
  //         port: 6379
  //       }, {
  //         port: 6380
  //       }]);
  //     }
  //   }
  // };

  // if(typeof prefix !== undefined) {
  //   Object.assign(options, {prefix: prefix} )
  // }
  if (!queue) {
    console.log('\n\n Inside !queue')
    queue = kue.createQueue({
      redis: {
        createClientFactory: function () {
          return new Redis.Cluster([{
            port: 6381
          }, {
            port: 6380
          }]);
        }
      }
    });
  }
  return queue;
}
