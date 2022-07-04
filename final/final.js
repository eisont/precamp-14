// input id이름
let mail = document.getElementById('mail')
let Name = document.getElementById('name')
let pw1 = document.getElementById('pw1')
let pw2 = document.getElementById('pw2')

// 오류메시지 id이름
let email = document.getElementById('email')
let username = document.getElementById('username')
let password = document.getElementById('password')
let passwordCH = document.getElementById('passwordCH')
let address = document.getElementById('address')
let sex = document.getElementById('sex')


function joinBt() {
    if (mail.value !== '') { //입력했을 경우
        //메일 입력칸 문자열을 '@' 기준으로 나눈다.
        const mail_split = mail.value.split('@')
        if (mail_split.length !== 2) { //메일 칸에 '@' 없을 경우
            email.setAttribute('style', "opacity: 1;")
        } else { //메일 칸에 '@' 있을 경우
            email.setAttribute('style', "opacity: 0;")
        }
    } else { //메일칸에 입력하지 않을 경우
        email.setAttribute('style', "opacity: 1;")
    }

    //이름 확인
    if (Name.value === '') { //이름 칸이 비었을 경우
        username.setAttribute('style', "opacity: 1;")
    } else { //이름칸에 입력했을 때
        username.setAttribute('style', "opacity: 0;")
    }

    // 비번 확인
    if (pw1.value !== '' && pw2.value !== '') { //pw1, pw2 입력한 경우
        password.setAttribute('style', "opacity: 0;")
        passwordCH.setAttribute('style', "opacity: 0;")

        if (pw1.value === pw2.value) { //pw1와 pw2 적은 상태에서 같은 경우
            password.setAttribute('style', "opacity: 1;")
            password.style.color = 'blue';
            passwordCH.setAttribute('style', "opacity: 0;")
            password.innerText = '비밀번호 일치합니다.'
        } else if (pw1.value !== pw2.value) { // pw1와 pw2 적은 상태에서 다른 경우
            password.innerText = '비밀번호를 일치하지 않습니다.'
            passwordCH.innerText = '비밀번호를 일치하지 않습니다.'
            password.setAttribute('style', "opacity: 1;")
            passwordCH.setAttribute('style', "opacity: 1;")
        }
    } else if (pw1.value !== '' && pw2.value === '') { //pw1에는 입력하고 pw2에는 입력하지 않은 경우
        password.setAttribute('style', "opacity: 0;")
        passwordCH.setAttribute('style', "opacity: 1;")
        passwordCH.innerText = '비밀번호를 입력해주세요.'
    } else if (pw1.value === '' && pw2.value !== '') { //pw1에는 입력하지 않고 pw2에는 입력한 경우
        password.setAttribute('style', "opacity: 1;")
        passwordCH.setAttribute('style', "opacity: 0;")
        password.innerText = '비밀번호를 입력해주세요.'
    } else { //pw1과 pw2 값이 않을 경우
        password.setAttribute('style', "opacity: 1;")
        passwordCH.setAttribute('style', "opacity: 1;")
    }



    //지역선택
    let select = document.getElementById('sel').value

    if (select === '0') {
        address.setAttribute('style', "opacity: 1;")
    } else {
        address.setAttribute('style', "opacity: 0;")
    }



    //성별 선택
    let femail = document.getElementsByName("gender")[0].checked
    let male = document.getElementsByName("gender")[1].checked

    if (femail === true && male === false) { //여성이 선택되었을 경우
        sex.setAttribute('style', "opacity: 0;")
    } else if (femail === false && male === true) { //남성이 선택되었을 경우
        sex.setAttribute('style', "opacity: 0;")
    } else { //둘다 선택이 안되었을 경우
        sex.setAttribute('style', "opacity: 1;")
    }





    // 이메일칸 양식에 맞게 적었을때
    // 이름을 적었을 때
    // 비밀번호를 적었을때
    // 비밀번호를 똑같이 적었을때
    // 번호를 적었을때
    // 지역을 선택했을 때
    // 남성 여성을 선택했을 때
    if(mail.value !== '' && Name.value !== '' && pw1.value !== '' && pw2.value !== '' && select !== '0'){
        alert('코드캠프에 가입을 축하합니다.')
    }
}