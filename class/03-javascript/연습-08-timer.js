setTimeout(function () {
    console.log('3초가 지났습니다.')
}, 3000)

setInterval(function () {
    console.log('1초가 지났습니다.')
}, 1000)

// 
// 
// 
// 
// 


let time = 10

setInterval(function () {
    if (time >= 0) {
        console.log(time)
        time = time - 1
    }
}, 1000)


// 
// 
// 
// 
// 

let time = 180

setInterval(function(){
    if(time >= 0){
        // const min = String(Math.floor(time / 60)).padStart(2,'0')
        const min = Math.floor(time / 60)
        const sec = String(time % 60).padStart(2,'0')
        console.log(min+':'+sec)
        time=time-1
    }
},1000)