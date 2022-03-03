var testFolder = './data'; // 실행하는 위치의 디렉토리
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
    console.log(filelist);
});