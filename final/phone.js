let phone_ch = document.getElementById('phone_ch')

// section__phone
// section__phone
// ================================================

// 첫번째 칸에서 두번째 칸으로 이동
function changeFocus1() {
    let phone1 = document.getElementById('phone1').value
    // 첫번째 칸에 3자리 수를 입력했을 경우 두번째 칸으로 이동합니다.
    if (phone1.length === 3) {
        document.getElementById("phone2").focus()
    }else {
        document.getElementById('checkBt_1').disabled = true
        document.getElementById('checkBt_1').setAttribute("style", "color: lightgray;")
        document.getElementById('checkBt_1').style.cursor = 'auth'
        phone_ch.setAttribute('style', "opacity: 1;")
    }
}

// 두번째 칸에서 세번째 칸으로 이동
function changeFocus2() {
    let phone2 = document.getElementById('phone2').value
    // 첫번째 3자리,두번째 칸에 4자리 수를 입력했을 경우 세번째 칸으로 이동합니다.
    if (phone2.length === 4) {
        document.getElementById("phone3").focus()
    }else {
        document.getElementById('checkBt_1').disabled = true
        document.getElementById('checkBt_1').setAttribute("style", "color: lightgray;")
        document.getElementById('checkBt_1').style.cursor = 'auth'
        phone_ch.setAttribute('style', "opacity: 1;")
    }
}

// 세번째 칸에서 '인증번호전송'버튼으로 이동
function changeFocus3() {
    let phone1 = document.getElementById('phone1').value
    let phone2 = document.getElementById('phone2').value
    let phone3 = document.getElementById('phone3').value

    // 첫번째 칸에 3글자, 두번째 칸에 4자리 수를 입력, 3자리 4글자 입력했을 경우
    if (phone1.length === 3 && phone2.length === 4 && phone3.length === 4 ) {
        document.getElementById('checkBt_1').disabled = false
        document.getElementById('checkBt_1').setAttribute("style", "color: #0068ff;")
        document.getElementById('checkBt_1').style.cursor = 'pointer'
        phone_ch.setAttribute('style', "opacity: 0;")
    }
    else if(phone1.length !== 3 || phone2.length !== 4 || phone3.length !== 4 ) {
        phone_ch.setAttribute('style', "opacity: 1;")
        document.getElementById('checkBt_1').disabled = true
        document.getElementById('checkBt_1').setAttribute("style", "color: lightgray;")
        document.getElementById('checkBt_1').style.cursor = 'auth'
    }
}