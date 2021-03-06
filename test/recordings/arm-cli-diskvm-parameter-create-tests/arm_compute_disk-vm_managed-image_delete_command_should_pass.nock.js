// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
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

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate3540/providers/Microsoft.Compute/images/xplattestimg8?api-version=2016-04-30-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/westus/operations/b623eab7-4fa7-415d-8aec-178f1eb0a63e?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/westus/operations/b623eab7-4fa7-415d-8aec-178f1eb0a63e?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '21502de0-6f98-4d84-959e-6be54f3bb855_131303808514503714',
  'x-ms-request-id': 'b623eab7-4fa7-415d-8aec-178f1eb0a63e',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'c015ff66-31e4-4d71-9939-2da00b715de6',
  'x-ms-routing-request-id': 'CENTRALUS:20170208T022516Z:c015ff66-31e4-4d71-9939-2da00b715de6',
  date: 'Wed, 08 Feb 2017 02:25:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate3540/providers/Microsoft.Compute/images/xplattestimg8?api-version=2016-04-30-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/westus/operations/b623eab7-4fa7-415d-8aec-178f1eb0a63e?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/westus/operations/b623eab7-4fa7-415d-8aec-178f1eb0a63e?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '21502de0-6f98-4d84-959e-6be54f3bb855_131303808514503714',
  'x-ms-request-id': 'b623eab7-4fa7-415d-8aec-178f1eb0a63e',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'c015ff66-31e4-4d71-9939-2da00b715de6',
  'x-ms-routing-request-id': 'CENTRALUS:20170208T022516Z:c015ff66-31e4-4d71-9939-2da00b715de6',
  date: 'Wed, 08 Feb 2017 02:25:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/westus/operations/b623eab7-4fa7-415d-8aec-178f1eb0a63e?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T02:25:16.1202545+00:00\",\r\n  \"endTime\": \"2017-02-08T02:25:21.1985246+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"b623eab7-4fa7-415d-8aec-178f1eb0a63e\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '21502de0-6f98-4d84-959e-6be54f3bb855_131303808514503714',
  'x-ms-request-id': '7d2c2a53-1654-4b00-842b-3915e00ebeeb',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14522',
  'x-ms-correlation-request-id': '7fd4fa0d-d433-44ed-80c1-c58bd4d1ef2b',
  'x-ms-routing-request-id': 'CENTRALUS:20170208T022546Z:7fd4fa0d-d433-44ed-80c1-c58bd4d1ef2b',
  date: 'Wed, 08 Feb 2017 02:25:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/westus/operations/b623eab7-4fa7-415d-8aec-178f1eb0a63e?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T02:25:16.1202545+00:00\",\r\n  \"endTime\": \"2017-02-08T02:25:21.1985246+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"b623eab7-4fa7-415d-8aec-178f1eb0a63e\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '21502de0-6f98-4d84-959e-6be54f3bb855_131303808514503714',
  'x-ms-request-id': '7d2c2a53-1654-4b00-842b-3915e00ebeeb',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14522',
  'x-ms-correlation-request-id': '7fd4fa0d-d433-44ed-80c1-c58bd4d1ef2b',
  'x-ms-routing-request-id': 'CENTRALUS:20170208T022546Z:7fd4fa0d-d433-44ed-80c1-c58bd4d1ef2b',
  date: 'Wed, 08 Feb 2017 02:25:46 GMT',
  connection: 'close' });
 return result; }]];