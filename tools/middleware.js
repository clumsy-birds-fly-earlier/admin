/**
 * http mock 中间件
 * @param {path} mockFile mock 文件路径
 * @returns middleware
 */
exports.mockMiddleware = mockFile => (req, res, next) => {
  const mockMap = require(mockFile)
  delete require.cache[mockFile]
  const api = mockMap[req.path]
  if (
    !req.headers.referer ||
    req.path.split('.').length > 1 ||
    mockMap.enable === false ||
    !api ||
    typeof api !== 'function'
  ) {
    next()
  } else {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader('service-mock-middleware', 'This is a mock data.')
    res.json(api(req, res)).end()
  }
}
