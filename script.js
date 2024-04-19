// Fahrenheit vs. Celsius

const stupneFahrenheita = Number(prompt('Zadejte teplotu ve stupních Fahrenheita:'))

document.body.innerHTML = '<h1>' + 'Převodník stupňů Fahrenheita na stupně Celsia' + '</h1>'
document.body.innerHTML += '<p>' + 'Teplota ve stupních Celsia: ' + 5 * (stupneFahrenheita - 32) / 9 + ' °C' + '</p>'