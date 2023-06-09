// Validação de Email e senha
function validate() {
  const emailHeader = document.getElementById('email-header').value;
  const password = document.getElementById('password').value;

  if (emailHeader === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
const headerButton = document.getElementById('submit-header');
headerButton.addEventListener('click', validate);

// Botão de enviar
const submitButton = document.getElementById('submit-btn');

// Checkbox de Concordância
const agreement = document.getElementById('agreement');

// Função de habilita/desabilita o botão enviar
function enableButton() {
  submitButton.disabled = !agreement.checked;
}
agreement.addEventListener('change', enableButton);

// Formulário Original
const form = document.getElementById('evaluation-form');

// Botão para mutar o som
const muteButton = document.getElementById('mute-button');

// Aúdio de fundo
const audio = document.getElementById('audio');

// Função de mutar/desmutar botão de áudio
function muteUnmute() {
  if (audio.muted === true) {
    audio.muted = false;
    muteButton.src = 'sound.png';
  } else {
    audio.muted = true;
    muteButton.src = 'mute.png';
  }
}
muteButton.addEventListener('click', muteUnmute);

// Áre de comentários
const textArea = document.getElementById('textarea');

// Contador de caracteres
const counter = document.getElementById('counter');
counter.innerText = 500;

// Função que atualiza o contador
function count() {
  const result = 500 - textArea.value.length;
  counter.innerText = JSON.stringify(result);
}
textArea.addEventListener('keyup', count);

// Nome inserido
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');

// Formulário escondido
const hiddenForm = document.getElementById('form-data');

// Função que insere o nome no formulário escondido
function printName() {
  const nome = document.createElement('p');
  nome.innerHTML = `Nome: ${inputName.value} ${inputLastName.value}`;
  hiddenForm.appendChild(nome);
}

// Email inserido
const inputEmail = document.getElementById('input-email');

// Função que insere o email no formulário escondido
function printEmail() {
  const email = document.createElement('p');
  email.innerHTML = `Email: ${inputEmail.value}`;
  hiddenForm.appendChild(email);
}

// Casa inserida
const house = document.getElementById('house');

// Função que insere a casa no formulário escondido
function houseData() {
  const housePrint = document.createElement('p');
  housePrint.innerHTML = `Casa: ${house.value}`;
  hiddenForm.appendChild(housePrint);
}

// Família inserida
const family = document.getElementsByClassName('input-radio');

// Captura valor da família
let familyString = '';
function familyPrint(e) {
  familyString = e.target.value;
}
family[0].addEventListener('change', familyPrint);

// Função que insere a família no formulário escondido
function familyData() {
  const familyPrintFinal = document.createElement('p');
  familyPrintFinal.innerHTML = `Família: ${familyString}`;
  hiddenForm.appendChild(familyPrintFinal);
}

// Tecnologias inseridas
const techs = document.getElementsByClassName('input-checkbox');
const techsArray = [];
const ordemPadrao = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];
const techsArrayOrdenada = [];

// Captura tecnologias
function techsPrint(e) {
  if (e.target.checked) {
    techsArray.push(e.target.value);
  } else {
    techsArray.splice(techsArray.indexOf(e.target.value), techsArray.indexOf(e.target.value) + 1);
  }
}
techs[0].addEventListener('change', techsPrint);

// Função que compara 2 itens
function compareArray(a, b) {
  if (a === b) {
    techsArrayOrdenada.push(a);
  }
}

// Função que insere as tecnologias no formulário escondido
function techsData() {
  for (let i = 0; i < ordemPadrao.length; i += 1) {
    for (let i2 = 0; i2 < techsArray.length; i2 += 1) {
      compareArray(ordemPadrao[i], techsArray[i2]);
    }
  }
  const techsPrintFinal = document.createElement('p');
  techsPrintFinal.innerHTML = `Matérias: ${techsArrayOrdenada.join(', ')}`;
  hiddenForm.appendChild(techsPrintFinal);
}

// Avaliação inserida
const rate = document.getElementsByClassName('rate');
let rateString = '';

// Função que captura a nota de avaliação
function ratePrint(e) {
  rateString = e.target.value;
}
rate[0].addEventListener('change', ratePrint);

// Função que insere a avaliação no formulário escondido
function rateData() {
  const ratePrintFinal = document.createElement('p');
  ratePrintFinal.innerHTML = `Avaliação: ${rateString}`;
  hiddenForm.appendChild(ratePrintFinal);
}

// Função que insere as observações no formulário escondido
function textAreaData() {
  const textAreaPrint = document.createElement('p');
  textAreaPrint.innerHTML = `Observações: ${textArea.value}`;
  hiddenForm.appendChild(textAreaPrint);
}

function changeForm(e) {
  e.preventDefault();
  form.style.display = 'none';
  hiddenForm.style.display = 'flex';
  printName();
  printEmail();
  houseData();
  familyData();
  techsData();
  rateData();
  textAreaData();
}
submitButton.addEventListener('click', changeForm);