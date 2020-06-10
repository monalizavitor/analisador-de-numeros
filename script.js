let number = document.getElementById('txtnum')
let list = document.getElementById('numberslist')
let res = document.getElementById('res')
let valores = []

function IsNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function InList(n, list) {
    if (list.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (IsNumber(number.value) && !InList(number.value, valores)) {
        valores.push(Number(number.value))
        let item = document.createElement('option')
        item.text = `O valor ${number.value} foi adicionado.`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Número inválido ou já encontrado na lista')
    }
    number.value = ''
    number.focus()
}

function finish() {
    if (valores.length == 0) {
        alert('Adicone algum valor para começar!')
    } else {
        let total = valores.length
        res.innerHTML += ''
        let soma = 0
        let media = 0
        let maior = valores[0]
        let menor = valores[0]
        for (let vetnum in valores) {
            soma += valores[vetnum]
            if (valores[vetnum] > maior) {
                maior = valores[vetnum]
            }
            if (valores[vetnum] < menor) {
                menor = valores[vetnum]
            }
            media = soma / total
        }
        
        res.innerHTML += `<p>Foram inseridos <strong>${total}</strong> números.<p/>`
        res.innerHTML += `<p>O maior valor inserido foi <strong>${maior}</strong>.<p/>`
        res.innerHTML += `<p>A média desses valores é <strong>${media}</strong>.<p/>`
        
    }
}
