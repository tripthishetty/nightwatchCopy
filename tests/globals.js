var userNames = {
  memberURL: 'https://tripsprint95t.staging.socialmedialink.com',
  memberEmail: 'mark@yopmail.com',
  memberPassword: '12345678',
  memberFirstName: 'first',
  memberLastName: 'last',
  zipCode: '07093',
  birthDay: '10/10/1991',
  sprint: '95t',
  adminURL: 'https://admin.staging.socialmedialink.com',
  adminEmail: 'tripsprint95t@yopmail.com',
  adminPassword: 'General123$',
  facebookEmail: 'kqqdfbv_alisonsen_1454598705@tfbnw.net',
  facebookPass: 'general1234',
  twitterEmail: 'tripthi.testmember15@socialmedialink.com',
  twitterPass: 'general1234',
  instagramUserName: 'tripthi.shetty',
  instagramPass: 'abcd1234',
  superAdminEmail: 'tripthi.testmember3@socialmedialink.com',
  superAdminPass: 'General123$',
  account_no: 666,
  path: '/Users/tripthi/Documents/images/scriptImages/'
};

var cbt = require('cbt_tunnels');

module.exports = {
  beforeEach : function(done) {
    console.log('Starting up tunnel');
    cbt.start({
      'username': 'tripthi.shetty@socialmedialink.com',
      'authkey': 'u283c7d7d4fafeb7'
    }, function(err, data) {
      if (err) {
        done(err);
      } else {
        done(data);
      }
    });
  },
  userNames: userNames,
  afterEach : function(done) {
    console.log('Closing Down Tunnel');
    cbt.stop();
    done();
  }
}
