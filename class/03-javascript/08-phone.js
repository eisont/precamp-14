function changeFocus1() {
    let phone1 = document.getElementById('phone1').value

    // 첫번째 칸에 3자리 수를 입력했을 경우 두번째 칸으로 이동합니다.
    if (phone1.length === 3) {
        document.getElementById("phone2").focus()
    }
}





function changeFocus2() {
    let phone2 = document.getElementById('phone2').value

    // 두번째 칸에 4자리 수를 입력했을 경우 세번째 칸으로 이동합니다.
    if (phone2.length === 4) {
        document.getElementById("phone3").focus()
    }
}