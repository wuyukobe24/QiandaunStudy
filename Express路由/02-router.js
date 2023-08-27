
const express = require('express')
// 创建路由对象
const router = express.Router()
// 挂载具体的路由
router.get('/user/list', (req, res) => {
    res.send('get user list')
})
router.post('/user/add', (req, res) => {
    res.send('post add new user')
})
// 向外到处路由对象
module.exports = router