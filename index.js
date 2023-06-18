function search() {
    let animal = document.getElementById('animal')
    let age = document.getElementById('age')

    if (animal.value == 'סוס') {
        let sound = new Audio('horse.ogv')
        sound.play()
    } else if (animal.value == 'אריה' && age.value < 8) {
        alert('אתה קטן מדי, זה עלול להפחיד אותך')
    } else if (animal.value == 'אריה') {
        let sound = new Audio('lion.wav')
        sound.play()
    } else if (animal.value == 'כלב' && age.value <= 5) {
        alert('אתה קטן מדי, זה עלול להפחיד אותך')
    } else if (animal.value == 'כלב') {
        let sound = new Audio('dog.wav')
        sound.play()
    } else if (animal.value == 'דג' || animal.value == "ג'ירפה") {
        alert('חיה זו לא עושה שום צליל')
    } else {
        alert('חיה זו אינה קיימת במאגר שלנו')
    }
}

// if
// else if
// else
// && - and
// || - or
// < - less than
// > - greater than
// == - equal
// != - not equal
// <= - less than or equal
// >= - greater than or equal
