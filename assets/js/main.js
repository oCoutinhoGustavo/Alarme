const relogio = document.querySelector('#relogio')
const form = document.querySelector('#form')
const pararAlarme = document.querySelector('#pararAlarmeHTML')
let horaDoAlarme
const audio = new Audio('./assets/audio/alarme.mp3');
let reset = String(0).padStart(2, '0')


const rel = (tempo) => {
  const data = new Date;
  const horas = String(data.getHours()).padStart(2, '0');
  const minutos = String(data.getMinutes()).padStart(2, '0');
  const segundos = String(data.getSeconds()).padStart(2, '0');

  relogio.innerHTML = `${horas}:${minutos}:${segundos}`

  if (`${horaDoAlarme}:00` == `${horas}:${minutos}:${segundos}`) {
  
    console.log('oioi');
    const btn = criaBtnParaSom()
    pararAlarme.appendChild(btn)

    audio.play()
  }
}
setInterval(rel, 1000);


form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputHoras = document.querySelector('#horas')
  const inputMinutos = document.querySelector('#minutos')
  const horas = inputHoras.value;
  const minutos = inputMinutos.value;

  const seuAlarme = document.querySelector('#seuAlarme')

  if (seuAlarme) {
    seuAlarme.remove()
  }

  const p = criaP();
  const btn = criaBtn();
  horaDoAlarme = `${horas}:${minutos}`

  inputHoras.value = reset;
  inputMinutos.value = reset;
  p.innerHTML = `<br>Seu alarme está para:<br> <b>${horaDoAlarme}</b><br>`
  p.appendChild(btn)
  form.appendChild(p)


})

const criaP = () => {
  const p = document.createElement('p')
  p.id = 'seuAlarme'
  return p
}

const criaBtn = () => {
  const btn = document.createElement('button')
  btn.innerText = 'remover alarme'
  btn.id = 'btnRemover'
  btn.type = 'button';
  return btn
}
const criaBtnParaSom = () => {
  const btn = document.createElement('button')
  btn.innerText = 'Para alarme'
  btn.id = 'pararAlarme'
  btn.type = 'button';
  return btn
}


document.addEventListener('click', (e) => {
  const click = e.target

  if (click.id == 'btnRemover') {
    click.parentElement.remove()
    horaDoAlarme = ''
  }

  if (click.id == 'pararAlarme') {
    const seuAlarme = document.querySelector('#seuAlarme')
    seuAlarme.remove();
    click.remove()

    audio.pause();
    audio.currentTime = 0;
  }
})
