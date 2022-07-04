let count = 0;

function pressedBtn() {
    count = count + 1;
    document.getElementById('counter').innerText = count;
}

function HomeBt() {
    const mainbutton = document.getElementById("MainBt")
    mainbutton.classList.add('Home')
    mainbutton.classList.remove('Game')
    mainbutton.classList.remove('BGM')
}

function GameBt() {
    const mainbutton = document.getElementById("MainBt")
    mainbutton.classList.add('Game')
    mainbutton.classList.remove('Home')
    mainbutton.classList.remove('BGM')
}

function BGMBt() {
    const mainbutton = document.getElementById("MainBt")
    mainbutton.classList.add('BGM')
    mainbutton.classList.remove('Home')
    mainbutton.classList.remove('Game')
}



let profilePhoto = document.getElementById('profile_photo');

function randomColor() {
    return Math.floor(Math.random() * 255);
}
profilePhoto.addEventListener('click', () => {
    profilePhoto.style.backgroundColor = 'rgba(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')'
})





// <!-- 끝말잇기 -->
// <!-- 끝말잇기 -->
const startWord = () => {
    const word = document.getElementById('word').innerText
    const lastWord = word[word.length - 1]

    const myword = document.getElementById('myword').value
    const firstword = myword[0]

    if (firstword === lastWord) {
        document.getElementById('input_result').innerText = '정답입니다!'
        document.getElementById('word').innerText = myword
        document.getElementById('myword').value = ""
    } else {
        document.getElementById('input_result').innerText = '이게 같다고?'
        document.getElementById('myword').value = ""
    }
}


// ??변수로 만들어서 대입하면 오류...
// let inputResult = document.getElementById("input_result")
// let inputWord = document.getElementById("input_word")
// let aaa = document.getElementById("input_word").value



// 입력하지 않았을 경우 제시어를 입력해주세요 문구 추가하기
// function wordBt() {
//     if (document.getElementById("input_word").value === '') {
//         inputResult.innerText = '제시어를 입력하세요.'
//         inputResult.classList.add('word__caution')
//         inputResult.classList.remove('word__color')
//     } else {
//         inputResult.innerText = inputWord.value
//         inputResult.classList.add('word__color')
//         inputResult.classList.remove('word__caution')
//     }

//     inputWord.value = null;
// }





// <!-- lotto -->
// <!-- lotto -->

let random_num = document.getElementById("randomNum")

let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let num3 = document.getElementById("num3")
let num4 = document.getElementById("num4")
let num5 = document.getElementById("num5")
let num6 = document.getElementById("num6")

function lottoBt() {
    document.getElementById("num1").innerText = String(Math.floor(Math.random() * 100)).padStart(2, '0')
    document.getElementById("num2").innerText = String(Math.floor(Math.random() * 100)).padStart(2, '0')
    document.getElementById("num3").innerText = String(Math.floor(Math.random() * 100)).padStart(2, '0')
    document.getElementById("num4").innerText = String(Math.floor(Math.random() * 100)).padStart(2, '0')
    document.getElementById("num5").innerText = String(Math.floor(Math.random() * 100)).padStart(2, '0')
    document.getElementById("num6").innerText = String(Math.floor(Math.random() * 100)).padStart(2, '0')
}