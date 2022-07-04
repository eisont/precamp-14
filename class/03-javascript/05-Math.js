Math.random()
Math.random()*100000
Math.floor(Math.random()*100000)
String(Math.floor(Math.random()*100000))
// 6자리를 유지하면서 앞자리가 0일 경우 0을 집어넣어서 6자리를 만들어줍니다.
String(Math.floor(Math.random()*100000)).padStart(6,'0')
let token = String(Math.floor(Math.random()*100000)).padStart(6,'0')
token