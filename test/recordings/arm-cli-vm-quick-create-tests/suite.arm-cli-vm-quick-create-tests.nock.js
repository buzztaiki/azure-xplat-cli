// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '00000000-0000-0000-0000-000000000000',
    name: 'test subscription',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '00000000-0000-0000-0000-000000000000',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [];

 exports.randomTestIdsGenerated = function() { return ['xplatTestVMQCreate201','vm14422','vm28662','vm34550','vm42969','vm53316','stg2774'];};