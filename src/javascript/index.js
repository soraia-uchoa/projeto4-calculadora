document.getElementById('themeBtn').addEventListener('click', () => {

    document.body.classList.toggle('light')

    document.getElementById('all').classList.toggle('all-light')

    document.getElementById('calcName').classList.toggle('calc-name-light')

    document.getElementById('screenCalcDark').classList.toggle('screen-calc-light')

    document.getElementById('calc').classList.toggle('calc-light')

    document.getElementById('screenResultDark').classList.toggle('screen-result-light')

    document.getElementById('result').classList.toggle('result-light')

})

document.getElementById('clearBtn').addEventListener('click', () => {
    
    document.getElementById('calc').innerText = ''

    document.getElementById('result').innerText = ''

})

document.querySelectorAll('#numBtn').forEach((el) => {
    
    el.addEventListener('click', () => {

        document.getElementById('calc').innerText +=  el.innerText

    })

})

document.querySelectorAll('#opBtn').forEach((el) => {

    el.addEventListener('click', () => {

        document.getElementById('calc').innerText += el.value 

    })

})

document.getElementById('resultBtn').addEventListener('click', () => {

    let calc = eval(document.getElementById('calc').innerHTML)

    document.getElementById('result').innerText = calc

})