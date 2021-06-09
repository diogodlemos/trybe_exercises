const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

const select = document.getElementsByTagName('select')[0];
for (let key in states) {
  let estado = document.createElement('option');
  estado.innerText = states[key];
  select.appendChild(estado);
}