function calcular () {
var txt1 = document.getElementById('txt1')
var n1 = Number(txt1.value)
var n2 = 1
var res = document.getElementById('res')

if (n1 == null) {
  alert('Insira um número, por favor.')
} else {
  while (n2 <= 10) {
    var n3 = n1 * n2
    res.innerHTML += `${n1} x ${n2} = <strong>${n3}</strong><br/>`
    n2++
  }
 }
}

function limpar () {
  res.innerHTML = ''
}