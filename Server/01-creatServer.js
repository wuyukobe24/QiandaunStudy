// 1、导入http模块
import http from "http"
import fs from "fs"
// 2、导入path模块
import path from "path"
import { fileURLToPath } from 'url'
const __filenameNew = fileURLToPath(import.meta.url)
const __dirnameNew = path.dirname(__filenameNew)

// 3、创建web服务器实例
const server = http.createServer()
// 4、为服务器实例绑定reques事件，监听客户端请求
server.on('request', (req, res) => {
    var url = req.url
    if (url === "/") url = "/index.html"
    const fpath = path.join(__dirnameNew, url)
    console.log('fpath: ', fpath);
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        if (err) return res.end('404 not found~')
        console.log('data:', dataStr);
        res.end(dataStr)
    })
})
// 5、启动服务器
server.listen(8080, function() {
    console.log('服务器运行在：http://127.0.0.1:8080');
})