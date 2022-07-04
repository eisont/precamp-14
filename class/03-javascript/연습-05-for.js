const children = ["철수", "영희", "훈이"]

for (let i = 0; i < 3; i++) {
    console.log(children[i] + '안녕하세요')
}

let student = ["박범수", '혜원', '은정', '치훈']

for(let i = 0; i< student.length; i++){
    console.log(`환영합니다. ${student[i]} 님 안녕하세요?`)
}

let persons = [
    {name: '철수', age:18},
    {name: '영희', age:22},
    {name: '도우너', age:5},
    {name: '말포이', age:14},
    {name: '도비', age:3},
]
for (let i = 0; i < persons.length; i++){
    if(persons[i].age > 18) {
        console.log(persons[i].name + '님은 성인입니다.')
    }else {
        console.log(persons[i].name + '님은 미성년자입니다.')
    }
}