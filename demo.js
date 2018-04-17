#!/usr/bin/env node

var fs = require('fs')

var dirName = process.argv[2]

if(fs.existsSync("./" + dirName)){
    console.log(e);
}else{
    //process.chdir("/User/Administrator/Desktop") 
    fs.mkdirSync("./" + dirName)
    process.chdir("./" + dirName)
    fs.mkdirSync('css')
    fs.mkdirSync('js')

    fs.writeFileSync("./index.html", "<!DOCTYPE>")
    fs.writeFileSync("css/style.css", "h1{color: red;}")
    fs.writeFileSync("./js/main.js", "var string = \"Hello World\"")

    fs.appendFileSync('index.html', '<title>Hello</title>')
    fs.appendFileSync('./index.html', '<h1>Hi</h1>')

    fs.appendFileSync('./js/main.js', 'alert(string)')
}

process.exit(0)
