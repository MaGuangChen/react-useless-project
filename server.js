var express = require('express');

//Create my app
var app = express();

app.use(express.static('public'))//第二個參數是檔案名稱

app.listen(3000,function (){
    console.log('Express server is up on port 3000');
});