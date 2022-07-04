const classmates = ['철수', '영희', '훈이']
// undefined
classmates
// (3) ['철수', '영희', '훈이']
classmates[1]
// '영희'
classmates[2]
// '훈이'
classmates[0]
// '철수'
classmates.includes('훈이')
// true
classmates.includes('맹구')
// false
classmates.push('맹구')
// 4
classmates[4]
// undefined
classmates[0]
// '철수'
classmates[3]
// '맹구'
classmates.pop()
// '맹구'
classmates
// (3) ['철수', '영희', '훈이']