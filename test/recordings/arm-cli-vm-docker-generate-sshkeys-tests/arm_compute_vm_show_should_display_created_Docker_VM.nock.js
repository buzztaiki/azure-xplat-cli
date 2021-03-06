// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMDockerSSH/providers/Microsoft.Compute/virtualMachines/xplatvmdockssh?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"747cf39a-e980-40f3-af1d-4ca9d59cb089\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"Canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"14.04.1-LTS\",\r\n        \"version\": \"14.04.201409090\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"clidfb01ffc2672badf-os-1485672016196\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstdockssh602.blob.core.windows.net/xplatscntdockssh6833/clidfb01ffc2672badf-os-1485672016196.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmdockssh\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIICjTCCAXmgAwIBAgIBATAJBgcqhkjOPQQBMAAwIhgPMjAxNzAxMjkwNjMwMTZa\\r\\nGA8yMDI3MDEyOTA2MzAxNlowGTELMAkGA1UEBhMCVVMxCjAIBgNVBAoMAWIwggEh\\r\\nMA0GCSqGSIb3DQEBAQUAA4IBDgAwggEJAoIBAHt0cwOsB4vndSn4NUVl6KA2yWlU\\r\\nqDU7sCJdb5xj5cnRRNtpWwboTzSYZLhQIak2ETwt/bJBWTcPXGmD+GhnObeHoPk6\\r\\nKoEiEnmMdX7R2CpfJeskuRIDKGcbGeSplvfgj4Df4v/DQcC8LwCLl4UR9d6EdLRs\\r\\nMRmzPUOZnXH39rGRGGooGVXBSWMmHDqqRlYh/F1g++AoEYxcbI+5ChfPzPta/ZQY\\r\\nSTTv0d69aRJryuuwPL4HGXDhW3O5HvvuGEM+8guhwemPA0mA8lLRvWUX6nkTdwWO\\r\\n1Kbwvh96A7TwgLNeF7k/RlygggqVU6Js9qe+aK+STlKi/wP/tr8yo3hrbekCAwEA\\r\\nATAJBgcqhkjOPQQBA4IBAQBqxpUDi4dKJeNf4mlNTDaQ2ZL92z9d9LuE/84W9Ypi\\r\\n7lVJXihMSZCuLPLc2Zu5OrXnRFDLVX/1VQk5JdshWJztN2qCeLKRRFOuropPf3po\\r\\nV7s4/XOoNow9UJ5IP1+ZqQ9SmKNt5AFZgG54hKLzzSz+TSr+yqtJH0R38FbX4+Ei\\r\\nPpyHSBo59TLq9p1lkh6nyWhxwtIRztXi01byJdRjGGQdqmxascN3mIvxxkx2P0hF\\r\\n4vV4p89l/V4aZSxL+rxyYtZm3iGIIoHWZW1srmQPaSYX2pmZeClbSwkJ1npB5Uqb\\r\\nxTrWMIJzt7J1rJr6foXfKKd1ZRX4wDoetkLBjxHGElPC\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMDockerSSH/providers/Microsoft.Network/networkInterfaces/xplatnicdockssh\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstdockssh602.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Azure.Extensions\",\r\n        \"type\": \"DockerExtension\",\r\n        \"typeHandlerVersion\": \"1.0\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {\"docker\":{\"port\":\"2376\"}},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\",\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMDockerSSH/providers/Microsoft.Compute/virtualMachines/xplatvmdockssh/extensions/DockerExtension\",\r\n      \"name\": \"DockerExtension\"\r\n    }\r\n  ],\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMDockerSSH/providers/Microsoft.Compute/virtualMachines/xplatvmdockssh\",\r\n  \"name\": \"xplatvmdockssh\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3405',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': '244aef43-485a-4044-a0ba-4c21e376a866',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'd2dcba6c-8a1e-4891-b3ed-85fc6caca052',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T064840Z:d2dcba6c-8a1e-4891-b3ed-85fc6caca052',
  date: 'Sun, 29 Jan 2017 06:48:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMDockerSSH/providers/Microsoft.Compute/virtualMachines/xplatvmdockssh?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"747cf39a-e980-40f3-af1d-4ca9d59cb089\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"Canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"14.04.1-LTS\",\r\n        \"version\": \"14.04.201409090\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"clidfb01ffc2672badf-os-1485672016196\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstdockssh602.blob.core.windows.net/xplatscntdockssh6833/clidfb01ffc2672badf-os-1485672016196.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmdockssh\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIICjTCCAXmgAwIBAgIBATAJBgcqhkjOPQQBMAAwIhgPMjAxNzAxMjkwNjMwMTZa\\r\\nGA8yMDI3MDEyOTA2MzAxNlowGTELMAkGA1UEBhMCVVMxCjAIBgNVBAoMAWIwggEh\\r\\nMA0GCSqGSIb3DQEBAQUAA4IBDgAwggEJAoIBAHt0cwOsB4vndSn4NUVl6KA2yWlU\\r\\nqDU7sCJdb5xj5cnRRNtpWwboTzSYZLhQIak2ETwt/bJBWTcPXGmD+GhnObeHoPk6\\r\\nKoEiEnmMdX7R2CpfJeskuRIDKGcbGeSplvfgj4Df4v/DQcC8LwCLl4UR9d6EdLRs\\r\\nMRmzPUOZnXH39rGRGGooGVXBSWMmHDqqRlYh/F1g++AoEYxcbI+5ChfPzPta/ZQY\\r\\nSTTv0d69aRJryuuwPL4HGXDhW3O5HvvuGEM+8guhwemPA0mA8lLRvWUX6nkTdwWO\\r\\n1Kbwvh96A7TwgLNeF7k/RlygggqVU6Js9qe+aK+STlKi/wP/tr8yo3hrbekCAwEA\\r\\nATAJBgcqhkjOPQQBA4IBAQBqxpUDi4dKJeNf4mlNTDaQ2ZL92z9d9LuE/84W9Ypi\\r\\n7lVJXihMSZCuLPLc2Zu5OrXnRFDLVX/1VQk5JdshWJztN2qCeLKRRFOuropPf3po\\r\\nV7s4/XOoNow9UJ5IP1+ZqQ9SmKNt5AFZgG54hKLzzSz+TSr+yqtJH0R38FbX4+Ei\\r\\nPpyHSBo59TLq9p1lkh6nyWhxwtIRztXi01byJdRjGGQdqmxascN3mIvxxkx2P0hF\\r\\n4vV4p89l/V4aZSxL+rxyYtZm3iGIIoHWZW1srmQPaSYX2pmZeClbSwkJ1npB5Uqb\\r\\nxTrWMIJzt7J1rJr6foXfKKd1ZRX4wDoetkLBjxHGElPC\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMDockerSSH/providers/Microsoft.Network/networkInterfaces/xplatnicdockssh\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstdockssh602.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Azure.Extensions\",\r\n        \"type\": \"DockerExtension\",\r\n        \"typeHandlerVersion\": \"1.0\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {\"docker\":{\"port\":\"2376\"}},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\",\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMDockerSSH/providers/Microsoft.Compute/virtualMachines/xplatvmdockssh/extensions/DockerExtension\",\r\n      \"name\": \"DockerExtension\"\r\n    }\r\n  ],\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMDockerSSH/providers/Microsoft.Compute/virtualMachines/xplatvmdockssh\",\r\n  \"name\": \"xplatvmdockssh\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3405',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': '244aef43-485a-4044-a0ba-4c21e376a866',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'd2dcba6c-8a1e-4891-b3ed-85fc6caca052',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T064840Z:d2dcba6c-8a1e-4891-b3ed-85fc6caca052',
  date: 'Sun, 29 Jan 2017 06:48:39 GMT',
  connection: 'close' });
 return result; }]];