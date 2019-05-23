const isProdMode = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
  baseUrl: isProdMode ? 'http://api.yueqizhixiang.com/api' : 'http://api.yueqizhixiang.com/api',
  socketHost: isProdMode ? 'http://api.yueqizhixiang.com/api' : 'http://api.yueqizhixiang.com/api',
  imageFormatUrl: isProdMode ? 'http://api.yueqizhixiang.com/api/imageSize' : 'http://api.yueqizhixiang.com/api/imageSize',
  imageUrl: isProdMode ? 'http://api.yueqizhixiang.com' : 'http://api.yueqizhixiang.com',
  hostName: isProdMode ? 'http://www.yueqizhixiang.com' : 'http://www.yueqizhixiang.com',
  payUrl: isProdMode ? 'http://pay.yueqizhixiang.com/pagepay/pagepay.php?' : 'http://pay.yueqizhixiang.com/pagepay/pagepay.php?',
  timeout: 30000,
}
// module.exports = {
//   cdnUrl: isProdMode ? 'http://localhost:8081/api' : 'http://localhost:8081/api',
//   baseUrl: isProdMode ? 'http://localhost:8081/api' : 'http://localhost:8081/api',
//   socketHost: isProdMode ? 'http://localhost:8081/api' : 'http://localhost:8081/api',
//   imageFormatUrl: isProdMode ? 'http://localhost:8081/api/imageSize' : 'http://localhost:8081/api/imageSize',
//   imageUrl: isProdMode ? 'http://localhost:8081' : 'http://localhost:8081',
//   hostName: isProdMode ? 'http://www.yueqizhixiang.com' : 'http://localhost:3000',
//   payUrl: isProdMode ? 'http://pay.yueqizhixiang.com/pagepay/pagepay.php?' : 'http://pay.yueqizhixiang.com/pagepay/pagepay.php?',
//   timeout: 30000,
// }
