/* Requisito 3 */
const inputEmail = document.getElementsByName('email')[0];
const inputPassword = document.getElementsByName('password')[0];
const btnEnter = document.getElementById('login-button');

btnEnter.addEventListener('click', (event) => {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

/* Requisito 18 */

const agreementCheckBox = document.getElementById('agreement');
const sendButton = document.getElementById('submit-btn');

function validateFormSubmit() {
  if (agreementCheckBox.checked === true) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
}

validateFormSubmit();

const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');

textArea.addEventListener('keyup', () => {
  counter.innerHTML = `${500 - textArea.value.length} caracteres restantes`;
});

const btnSubmitForm = document.getElementById('submit-btn');
btnSubmitForm.addEventListener('click',(event)=>{
let arrayFormValues = [];

arrayFormValues.push(document.getElementsByName('rate:checked').value);
arrayFormValues.push(document.getElementsByName('house:selected').value);
arrayFormValues.push(document.getElementById('input-email').value);
arrayFormValues.push(document.getElementsByName('familia:checked').value);
arrayFormValues.push(document.getElementById('input-name').value);
arrayFormValues.push(document.getElementById('input-lastname').value);
arrayFormValues.push(document.getElementsByClassName('subject:checked').value);
arrayFormValues.push(document.getElementById('textarea').value);

let p = document.createElement('p');
  event.preventDefault();
  document.getElementById('evaluation-form').innerHTML = '';
  for(let i = 0; i<8;i++){
    p.innerHTML = arrayFormValues[i].value;
    document.getElementById('evaluation-form').appendChild(p);
  }
});
