let isStarted = false
//false인 경우에는 if (isStarted === false){이부분} 이부분이 작동됩니다.
// 코드 실행 NO!!!

// 인증번호 버튼과 인증완료 버튼 제어문
function pressedBtn() {
    if (isStarted === false) {
        isStarted = true;
        //true === 코드실행 GO!!!
        //시작 여부 확인 코드

        // 인증번호 출력
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, '0')
        document.getElementById("auth").innerText = token;
        // document.getElementById("auth").style.color = `#${token}`;


        // 글자 색상 비활성화, cursor 기본 적용
        document.getElementById('checkBt_1').setAttribute("style", "color: lightgray;")
        document.getElementById('checkBt_1').style.cursor = 'auto'

        // '인증완료'버튼 활성화
        // ==============================================
        document.getElementById('finish').disabled = false
        // '인증완료'버튼이 활성화 됩니다.
        document.getElementById('finish').setAttribute("style", "color: #fff;")
        // '인증완료'버튼의 글자 색상 #fff적용
        document.getElementById('finish').style.cursor = 'pointer'
        // '인증완료'버튼 위에 마우스 올릴때 pointer로 변환
        document.getElementById('finish').style.backgroundColor = '#0068ff'
        // '인증완료'버튼 배경 색상 변경
        document.getElementById('finish').innerText = '인증확인'


        // 타이머
        let time = 180;
        // 시간 초 정하기
        let timer = null;
        //혹시라도 몰라 자세하게 입력한거임
        // 데이터 낭비하기 싫어 작성하는 것!!!

        // 3분 이내에 버튼을 누를시 알림창 띄우기
        if (time >= 0) {
            document.getElementById("finish").addEventListener('click', hello);

            function hello() {
                alert('인증이 완료되었습니다.')
                document.getElementById('finish').disabled = true
                // '인증완료'버튼이 비활성화 됩니다.
                document.getElementById('finish').innerText = '인증완료'
                document.getElementById('finish').setAttribute("style", "color: lightgray;")
                // '인증완료'버튼의 글자 색상 #fff적용
                document.getElementById('finish').style.cursor = 'auto'
                // '인증완료'버튼 위에 마우스 올릴때 pointer로 변환
                document.getElementById('finish').style.backgroundColor = 'transparent'
                clearInterval(timer)
                document.getElementById('auth').textContent = '000000'
                document.getElementById('timer').textContent = '3:00'
                document.getElementById('timer').style.color = '#0068FF'
                document.getElementById('timer').style.fontWeight = '500'

                document.getElementById('join').disabled = false
                document.getElementById('join').setAttribute("style", "border: 1px solid #0068ff;")
                document.getElementById('join').style.backgroundColor = '#ffffff'
                document.getElementById('join').style.color = '#0068FF'
            }
        }


        // 1. 타이머 숫자 적용
        // 2. 타이머 3, 2, 1, 0초, 그 외 글자 색상 변경
        // 3. 0초에 '인증완료'버튼 비활성화
        // === 이 기능들을 1초후에 실행하기
        timer = setInterval(function () {
            // 0초 이상일때
            if (time >= 0) {

                const min = String(Math.floor(time / 60))
                const sec = String(time % 60).padStart(2, '0')
                document.getElementById('timer').innerText = min + ':' + sec
                time = time - 1


                // 3, 2, 1 초가 되었을때 글자 변화
                if (time === 2) {
                    document.getElementById('timer').style.color = "#f09"
                } else if (time === 1) {
                    document.getElementById('timer').style.color = "#f05"
                } else if (time === 0) {
                    document.getElementById('timer').style.color = "#f02"
                    document.getElementById('timer').style.fontWeight = "700"
                } else if (time === -1) {
                    document.getElementById('timer').style.color = "#f00"
                    document.getElementById('timer').style.fontWeight = "900"
                    document.getElementById('finish').disabled = 'true'


                    document.getElementById('finish').disabled = true
                    // '인증완료'버튼이 비활성화 됩니다.
                    document.getElementById('finish').setAttribute("style", "color: lightgray;")
                    // '인증완료'버튼의 글자 색상 #fff적용
                    document.getElementById('finish').style.cursor = 'auto'
                    // '인증완료'버튼 위에 마우스 올릴때 pointer로 변환
                    document.getElementById('finish').style.backgroundColor = 'transparent'
                    // '인증완료'버튼 배경 색상 변경
                    document.getElementById('finish').innerText = '인증완료'

                    document.getElementById('auth').textContent = '000000'
                    document.getElementById('timer').textContent = '3:00'
                    document.getElementById('timer').style.color = '#0068FF'
                    document.getElementById('timer').style.fontWeight = '500'

                    document.getElementById('join').disabled = false
                    document.getElementById('join').setAttribute("style", "border: 1px solid #0068ff;")
                    document.getElementById('join').style.backgroundColor = '#ffffff'
                    document.getElementById('join').style.color = '#0068FF'
                } else {
                    document.getElementById('timer').style.color = "#0068ff"
                    document.getElementById('timer').style.fontWeight = "500"
                }
            }
            //time = -1일때 작동 
            // time = -1 === 0초
            else {
                isStarted = false;
                clearInterval(timer)
                //전역 clearInterval()메서드는 에 대한 호출로 이전에 설정된 시간이 지정된 반복 작업을 취소합니다.
                // 데이터 정리?
                //나도 모르는 데이터 낭비하고 있을껄???
                //그러니 원할한 사이트를 구현시킨다.
                //변수 timer 정지시켜라!!!
            }
        }, 1000)
        // 1초 후에 진행
    } else if (isStarted === true) {
        alert('타이머가 이미 작동중입니다.')
        // 타이머 실행하고 있을때 버튼을 누를때 작동
    }

}
