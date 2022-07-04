let isStarted = false
//false인 경우에는 if (isStarted === false){이부분} 이부분이 작동됩니다.
// 코드 실행 NO!!!

function pressedBtn() {
    if (isStarted === false) {
        isStarted = true;
        //true === 코드실행 GO!!!
        //시작 여부 확인 코드

        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, '0')
        document.getElementById("auth").innerText = token;

        let time = 2;
        let timer = null;
        //혹시라도 몰라 자세하게 입력한거임

        timer = setInterval(function () {
            if (time >= 0) {
                const min = String(Math.floor(time / 60)).padStart(2, '0')
                const sec = String(time % 60).padStart(2, '0')
                document.getElementById('timer').innerText = min + ':' + sec
                time = time - 1
            } else {
            //time -1일때 작동
                document.getElementById('finish').disabled = 'true'
                isStarted = false;
                clearInterval(timer)
                //전역 clearInterval()메서드는 에 대한 호출로 이전에 설정된 시간이 지정된 반복 작업을 취소합니다.
                // 데이터 정리?
                //나도 모르는 데이터 낭비하고 있을껄???
                //그러니 원할한 사이트를 구현시킨다.
                //변수 timer 정지시켜라!!!
            }
        }, 1000)
    } else if(isStarted === true){
        alert('타이머가 이미 작동중입니다.')
    }
}




// const pressedBtn = () => {
//     const token = String(Math.floor(Math.random() * 1000000)).padStart(6, '0')
//     // const font = String(Math.floor(Math.random() * 100)).padStart(3, '0')
//     const fontWeight = String(Math.floor(Math.random() * 10)) * 100
//     document.getElementById("auth").innerText = token;
//     document.getElementById("auth").style.color = `#${token}`;
//     document.getElementById("auth").style.fontWeight = fontWeight;
// }


// setInterval(function () {
//     if (time >= 0) {
//         // const min = String(Math.floor(time / 60)).padStart(2,'0')
//         const min = Math.floor(time / 60)
//         const sec = String(time % 60).padStart(2, '0')
//         timer.innerText = (min + ':' + sec)
//         time = time - 1
//         if (time === 2) {
//             timer.style.fontWeight = "300"
//         } else if (time === 1) {
//             timer.style.fontWeight = "500"
//         } else if (time === 0) {
//             timer.style.fontWeight = "700"
//         } else if (time === -1) {
//             timer.style.color = "#f00"
//             timer.style.fontWeight = "900"
//             ct.disabled = 'true' 
//         } else {
//             timer.style.color = "#000"
//             timer.style.fontWeight = "100"
//         }
//     }
// },1000)
// }