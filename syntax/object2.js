// array, object : 처리 
// function : 모아주기
/**
 * 자바 스크립트에서는 function이 값이 될 수 있음
 * 처리 방법을 담고 있는 구문이면서, 그것 자체가 값이 될 수 있음
 * 연관된 데이터를 그룹핑하는 객체 -> 배열과 객체에 담을 수 있다.
 */
var f = function (){
    console.log(1+1);
    console.log(1+2);
}

console.log(f);
f();

var a = [f];
a[0]();

var o = {
    func : f
}
o.func();

// var i = if(true){console.log(1)} -> 값이 될 수 없음

// var w = while(true){console.log(1)}; -> 값이 될 수 없음