const relogio = document.querySelector('#relogio')
const form = document.querySelector('#form')
let horaDoAlarme

const rel = () => {
  const data = new Date;
  const horas = String(data.getHours()).padStart(2, '0');
  const minutos = String(data.getMinutes()).padStart(2, '0');
  const segundos = String(data.getSeconds()).padStart(2, '0');

  relogio.innerHTML = `${horas}:${minutos}:${segundos}`

  if (`${horaDoAlarme}:00` == `${horas}:${minutos}:${segundos}`) {
    console.log('oioi');
  }
}
setInterval(rel, 1000);


form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputHoras = document.querySelector('#horas')
  const inputMinutos = document.querySelector('#minutos')
  const horas = String(inputHoras.value).padStart(2, '0')
  const minutos = String(inputMinutos.value).padStart(2, '0')

  if (horas.length <= 2 && minutos.length <= 2) {
    const p = criaP(); 
    const btn = criaBtn();
    horaDoAlarme = `${horas}:${minutos}`
    inputHoras.value = '';
    inputMinutos.value = '';
    p.innerText = horaDoAlarme
    btn.id
    p.appendChild(btn)
    form.appendChild(p)

  } else{
    alert('Insira uma hora válida121')
  }
})

const criaP = () => {
  const p = document.createElement('p')
  return p
}

const criaBtn = () => {
  const btn = document.createElement('button')
  return btn
}