// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website', 'website'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_STORAGE_ACCESS_KEY'] = '/hYt36JRM3StLgfEuTa4IOi9yWzKhBKhRY3V3WZjq97Fv/84wToozLuT0aVqioUtreSTBJMD+LXI4g5jI5MGWA==';
  process.env['BLOB_SOURCE_PATH'] = 'https://teststorage1220.blob.core.windows.net/myvhds/testsvc1683.vhd';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '02c2dc81e5a58e6d89f9e2f0f54a1079',
  date: 'Sun, 15 Mar 2015 03:36:20 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/disks')
  .reply(200, "<Disks xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Disk><OS>Linux</OS><Location>West US</Location><LogicalDiskSizeInGB>30</LogicalDiskSizeInGB><MediaLink>http://azsmnet7371.blob.core.windows.net/myvhds/azsmnet2049.vhd</MediaLink><Name>azsmnet2049-azsmnet2049-0-201407221853020145</Name><SourceImageName>b39f27a8b8c64d52b05eac6a62ebad85__Ubuntu-14_04-LTS-amd64-server-20140122.1-alpha2-en-us-30GB</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-07-22T18:53:02Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><Label>clitestvm989disk</Label><Location>West US</Location><LogicalDiskSizeInGB>30</LogicalDiskSizeInGB><MediaLink>https://azsmnet7371.blob.core.windows.net/disks/clitestvm989disk</MediaLink><Name>clitestvm989disk</Name><IsPremium>false</IsPremium><CreatedTime>2014-10-21T23:35:04Z</CreatedTime><IOType>Standard</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://psteststo3785.blob.core.windows.net/myvhds/pstestsvc3240.vhd</MediaLink><Name>pstestsvc3240Prod-pstestsvc3240-0-201502271954520049</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Team-Foundation-Server-2013-Update4-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2015-02-27T19:54:52Z</CreatedTime><IOType>Standard</IOType></Disk><Disk><Label>testDataDiskLabel5</Label><Location>West US</Location><LogicalDiskSizeInGB>1</LogicalDiskSizeInGB><MediaLink>https://psteststo3785.blob.core.windows.net/myvhds/pstestsvc32405.vhd</MediaLink><Name>pstestsvc3240Prod-pstestsvc3240-0-201502271954530794</Name><IsPremium>false</IsPremium><CreatedTime>2015-02-27T19:54:53Z</CreatedTime><IOType>Standard</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://psteststo3785.blob.core.windows.net/myvhds/pstestsvc32403.vhd</MediaLink><Name>pstestsvc3240Prod-pstestsvc32402-0-201502271955560253</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Team-Foundation-Server-2013-Update4-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2015-02-27T19:55:56Z</CreatedTime><IOType>Standard</IOType></Disk><Disk><Label>testDataDiskLabel</Label><Location>West US</Location><LogicalDiskSizeInGB>1</LogicalDiskSizeInGB><MediaLink>https://psteststo3785.blob.core.windows.net/myvhds/pstestsvc32404.vhd</MediaLink><Name>pstestsvc3240Prod-pstestsvc32402-0-201502271955570441</Name><IsPremium>false</IsPremium><CreatedTime>2015-02-27T19:55:57Z</CreatedTime><IOType>Standard</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://teststorage1220.blob.core.windows.net/myvhds/testsvc1683.vhd</MediaLink><Name>testsvc1683Prod-testsvc1683-0-201407091936090623</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Visual-Studio-14-Professional-CTP-14.0.21901.1-AzureSDK-2.3-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-07-09T19:36:09Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://teststorage1220.blob.core.windows.net/myvhds/testsvc16833.vhd</MediaLink><Name>testsvc1683Prod-testsvc16832-0-201407091936450678</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Visual-Studio-14-Professional-CTP-14.0.21901.1-AzureSDK-2.3-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-07-09T19:36:45Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><Label>testDataDiskLabel</Label><Location>West US</Location><LogicalDiskSizeInGB>1</LogicalDiskSizeInGB><MediaLink>https://teststorage1220.blob.core.windows.net/myvhds/testsvc16834.vhd</MediaLink><Name>testsvc1683Prod-testsvc16832-0-201407091936460803</Name><IsPremium>false</IsPremium><CreatedTime>2014-07-09T19:36:46Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://teststorage8893.blob.core.windows.net/myvhds/testsvc2573.vhd</MediaLink><Name>testsvc2573Prod-testsvc2573-0-201406262154350580</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Visual-Studio-14-Professional-CTP-14.0.21730.1-AzureSDK-2.3-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-06-26T21:54:35Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://teststorage8893.blob.core.windows.net/myvhds/testsvc25733.vhd</MediaLink><Name>testsvc2573Prod-testsvc25732-0-201406262155090611</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Visual-Studio-14-Professional-CTP-14.0.21730.1-AzureSDK-2.3-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-06-26T21:55:09Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><Label>testDataDiskLabel</Label><Location>West US</Location><LogicalDiskSizeInGB>1</LogicalDiskSizeInGB><MediaLink>https://teststorage8893.blob.core.windows.net/myvhds/testsvc25734.vhd</MediaLink><Name>testsvc2573Prod-testsvc25732-0-201406262155100764</Name><IsPremium>false</IsPremium><CreatedTime>2014-06-26T21:55:10Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://teststorage9607.blob.core.windows.net/myvhds/testsvc3126.vhd</MediaLink><Name>testsvc3126Prod-testsvc3126-0-201406270912400318</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Visual-Studio-14-Professional-CTP-14.0.21730.1-AzureSDK-2.3-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-06-27T09:12:40Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://teststorage9607.blob.core.windows.net/myvhds/testsvc31263.vhd</MediaLink><Name>testsvc3126Prod-testsvc31262-0-201406270913140663</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Visual-Studio-14-Professional-CTP-14.0.21730.1-AzureSDK-2.3-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-06-27T09:13:14Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><Label>testDataDiskLabel</Label><Location>West US</Location><LogicalDiskSizeInGB>1</LogicalDiskSizeInGB><MediaLink>https://teststorage9607.blob.core.windows.net/myvhds/testsvc31264.vhd</MediaLink><Name>testsvc3126Prod-testsvc31262-0-201406270913160335</Name><IsPremium>false</IsPremium><CreatedTime>2014-06-27T09:13:16Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://teststorage7709.blob.core.windows.net/myvhds/testsvc3808.vhd</MediaLink><Name>testsvc3808Prod-testsvc3808-0-201406262319500676</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Visual-Studio-14-Professional-CTP-14.0.21730.1-AzureSDK-2.3-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-06-26T23:19:50Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://teststorage7709.blob.core.windows.net/myvhds/testsvc38083.vhd</MediaLink><Name>testsvc3808Prod-testsvc38082-0-201406262320340518</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Visual-Studio-14-Professional-CTP-14.0.21730.1-AzureSDK-2.3-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-06-26T23:20:34Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><Label>testDataDiskLabel</Label><Location>West US</Location><LogicalDiskSizeInGB>1</LogicalDiskSizeInGB><MediaLink>https://teststorage7709.blob.core.windows.net/myvhds/testsvc38084.vhd</MediaLink><Name>testsvc3808Prod-testsvc38082-0-201406262320350777</Name><IsPremium>false</IsPremium><CreatedTime>2014-06-26T23:20:35Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://teststorage6510.blob.core.windows.net/myvhds/testsvc6012.vhd</MediaLink><Name>testsvc6012Prod-testsvc6012-0-201407220240240694</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Visual-Studio-14-Professional-CTP-14.0.21901.1-AzureSDK-2.3-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-07-22T02:40:24Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://teststorage6510.blob.core.windows.net/myvhds/testsvc60123.vhd</MediaLink><Name>testsvc6012Prod-testsvc60122-0-201407220241250946</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Visual-Studio-14-Professional-CTP-14.0.21901.1-AzureSDK-2.3-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-07-22T02:41:25Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><Label>testDataDiskLabel</Label><Location>West US</Location><LogicalDiskSizeInGB>1</LogicalDiskSizeInGB><MediaLink>https://teststorage6510.blob.core.windows.net/myvhds/testsvc60124.vhd</MediaLink><Name>testsvc6012Prod-testsvc60122-0-201407220241270010</Name><IsPremium>false</IsPremium><CreatedTime>2014-07-22T02:41:27Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://teststorage7599.blob.core.windows.net/myvhds/testsvc6313.vhd</MediaLink><Name>testsvc6313Prod-testsvc6313-0-201406262357010441</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Visual-Studio-14-Professional-CTP-14.0.21730.1-AzureSDK-2.3-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-06-26T23:57:01Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://teststorage7599.blob.core.windows.net/myvhds/testsvc63133.vhd</MediaLink><Name>testsvc6313Prod-testsvc63132-0-201406262357340730</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Visual-Studio-14-Professional-CTP-14.0.21730.1-AzureSDK-2.3-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-06-26T23:57:34Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://teststorage9408.blob.core.windows.net/myvhds/testsvc6911.vhd</MediaLink><Name>testsvc6911Prod-testsvc6911-0-201406270743540136</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Visual-Studio-14-Professional-CTP-14.0.21730.1-AzureSDK-2.3-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-06-27T07:43:54Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://teststorage9408.blob.core.windows.net/myvhds/testsvc69113.vhd</MediaLink><Name>testsvc6911Prod-testsvc69112-0-201406270744560992</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Visual-Studio-14-Professional-CTP-14.0.21730.1-AzureSDK-2.3-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-06-27T07:44:57Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><Label>testDataDiskLabel</Label><Location>West US</Location><LogicalDiskSizeInGB>1</LogicalDiskSizeInGB><MediaLink>https://teststorage9408.blob.core.windows.net/myvhds/testsvc69114.vhd</MediaLink><Name>testsvc6911Prod-testsvc69112-0-201406270744580441</Name><IsPremium>false</IsPremium><CreatedTime>2014-06-27T07:44:58Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://teststorage8888.blob.core.windows.net/myvhds/testsvc7578.vhd</MediaLink><Name>testsvc7578Prod-testsvc7578-0-201407220102060772</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Visual-Studio-14-Professional-CTP-14.0.21901.1-AzureSDK-2.3-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-07-22T01:02:06Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://teststorage8888.blob.core.windows.net/myvhds/testsvc75783.vhd</MediaLink><Name>testsvc7578Prod-testsvc75782-0-201407220102420009</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Visual-Studio-14-Professional-CTP-14.0.21901.1-AzureSDK-2.3-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-07-22T01:02:42Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><Label>testDataDiskLabel</Label><Location>West US</Location><LogicalDiskSizeInGB>1</LogicalDiskSizeInGB><MediaLink>https://teststorage8888.blob.core.windows.net/myvhds/testsvc75784.vhd</MediaLink><Name>testsvc7578Prod-testsvc75782-0-201407220102430993</Name><IsPremium>false</IsPremium><CreatedTime>2014-07-22T01:02:44Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><Label>testDataDiskLabel5</Label><Location>West US</Location><LogicalDiskSizeInGB>1</LogicalDiskSizeInGB><MediaLink>https://teststorage9971.blob.core.windows.net/myvhds/testsvc78695.vhd</MediaLink><Name>testsvc7869Prod-testsvc7869-0-201410291057430428</Name><IsPremium>false</IsPremium><CreatedTime>2014-10-29T10:57:43Z</CreatedTime><IOType>Standard</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://teststorage4972.blob.core.windows.net/myvhds/testsvc9111.vhd</MediaLink><Name>testsvc9111Prod-testsvc9111-0-201406301842390525</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Visual-Studio-14-Professional-CTP-14.0.21730.1-AzureSDK-2.3-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-06-30T18:42:39Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://teststorage4972.blob.core.windows.net/myvhds/testsvc91113.vhd</MediaLink><Name>testsvc9111Prod-testsvc91112-0-201406301843450681</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Visual-Studio-14-Professional-CTP-14.0.21730.1-AzureSDK-2.3-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-06-30T18:43:45Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><Label>testDataDiskLabel</Label><Location>West US</Location><LogicalDiskSizeInGB>1</LogicalDiskSizeInGB><MediaLink>https://teststorage4972.blob.core.windows.net/myvhds/testsvc91114.vhd</MediaLink><Name>testsvc9111Prod-testsvc91112-0-201406301843470535</Name><IsPremium>false</IsPremium><CreatedTime>2014-06-30T18:43:47Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://teststorage7282.blob.core.windows.net/myvhds/testsvc9970.vhd</MediaLink><Name>testsvc9970Prod-testsvc9970-0-201407072208140503</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Visual-Studio-14-Professional-CTP-14.0.21730.1-AzureSDK-2.3-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-07-07T22:08:14Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://teststorage7282.blob.core.windows.net/myvhds/testsvc99703.vhd</MediaLink><Name>testsvc9970Prod-testsvc99702-0-201407072208470351</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Visual-Studio-14-Professional-CTP-14.0.21730.1-AzureSDK-2.3-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-07-07T22:08:47Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><Label>testDataDiskLabel</Label><Location>West US</Location><LogicalDiskSizeInGB>1</LogicalDiskSizeInGB><MediaLink>https://teststorage7282.blob.core.windows.net/myvhds/testsvc99704.vhd</MediaLink><Name>testsvc9970Prod-testsvc99702-0-201407072208480554</Name><IsPremium>false</IsPremium><CreatedTime>2014-07-07T22:08:48Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://teststoragevvnbksef.blob.core.windows.net/myvhds/testsvclwgrhmuv.vhd</MediaLink><Name>testsvclwgrhmuvProd-testsvclwgrhmuv-0-201406171936220461</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Visual-Studio-14-Professional-CTP-14.0.21730.1-AzureSDK-2.3-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-06-17T19:36:22Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://teststoragevvnbksef.blob.core.windows.net/myvhds/testsvclwgrhmuv3.vhd</MediaLink><Name>testsvclwgrhmuvProd-testsvclwgrhmuv2-0-201406171937260158</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Visual-Studio-14-Professional-CTP-14.0.21730.1-AzureSDK-2.3-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-06-17T19:37:26Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://teststoragehdeahhzj.blob.core.windows.net/myvhds/testsvcmvdh0g12.vhd</MediaLink><Name>testsvcmvdh0g12Prod-testsvcmvdh0g12-0-201406180801530852</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Visual-Studio-14-Professional-CTP-14.0.21730.1-AzureSDK-2.3-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-06-18T08:01:53Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>http://teststoragehdeahhzj.blob.core.windows.net/myvhds/testsvcmvdh0g123.vhd</MediaLink><Name>testsvcmvdh0g12Prod-testsvcmvdh0g122-0-201406180802260424</Name><SourceImageName>03f55de797f546a1b29d1b8d66be687a__Visual-Studio-14-Professional-CTP-14.0.21730.1-AzureSDK-2.3-WS2012R2</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-06-18T08:02:26Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><Label>testDataDiskLabel</Label><Location>West US</Location><LogicalDiskSizeInGB>1</LogicalDiskSizeInGB><MediaLink>https://teststoragehdeahhzj.blob.core.windows.net/myvhds/testsvcmvdh0g124.vhd</MediaLink><Name>testsvcmvdh0g12Prod-testsvcmvdh0g122-0-201406180802270642</Name><IsPremium>false</IsPremium><CreatedTime>2014-06-18T08:02:27Z</CreatedTime><IOType>Standard_LRS</IOType></Disk><Disk><AttachedTo><DeploymentName>testwinvm125</DeploymentName><HostedServiceName>testwinvm125</HostedServiceName><RoleName>testwinvm125</RoleName></AttachedTo><OS>Windows</OS><Location>West US</Location><LogicalDiskSizeInGB>128</LogicalDiskSizeInGB><MediaLink>https://portalvhds38v5hbggr1fmp.blob.core.windows.net/vhds/testwinvm125-testwinvm125-2015-03-15.vhd</MediaLink><Name>testwinvm125-testwinvm125-0-201503150334060989</Name><SourceImageName>a699494373c04fc0bc8f2bb1389d6106__Windows-Server-2012-R2-201502.01-en.us-127GB.vhd</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2015-03-15T03:34:07Z</CreatedTime><IOType>Standard</IOType></Disk></Disks>", { 'cache-control': 'no-cache',
  'content-length': '19378',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '86793dd7faf3859b9f65e2d9ba7ba147',
  date: 'Sun, 15 Mar 2015 03:36:22 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'af1b2c90d8e5884a85a617df7271d44f',
  date: 'Sun, 15 Mar 2015 03:36:21 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/disks/azsmnet2049-azsmnet2049-0-201407221853020145')
  .reply(200, "<Disk xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><OS>Linux</OS><Location>West US</Location><LogicalDiskSizeInGB>30</LogicalDiskSizeInGB><MediaLink>http://azsmnet7371.blob.core.windows.net/myvhds/azsmnet2049.vhd</MediaLink><Name>azsmnet2049-azsmnet2049-0-201407221853020145</Name><SourceImageName>b39f27a8b8c64d52b05eac6a62ebad85__Ubuntu-14_04-LTS-amd64-server-20140122.1-alpha2-en-us-30GB</SourceImageName><IsPremium>false</IsPremium><CreatedTime>2014-07-22T18:53:02Z</CreatedTime><IOType>Standard_LRS</IOType></Disk>", { 'cache-control': 'no-cache',
  'content-length': '576',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '0e361e60bce38228b2e61388c3b4cfc0',
  date: 'Sun, 15 Mar 2015 03:36:22 GMT' });
 return result; }]];