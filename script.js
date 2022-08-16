/* Requisito 3 */
const inputEmail = document.getElementsByName('email')[0];
const inputPassword = document.getElementsByName('password')[0];
const btnEnter = document.getElementById('login-button');
const family = document.getElementsByName('family');
const checkBoxSkills = document.getElementsByClassName('subject');
const checkBoxRate = document.getElementsByName('rate');
const evaluationForm = document.getElementById('evaluation-form');
const formData = document.getElementById('form-data');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputFormEmail = document.getElementById('input-email');
const house = document.getElementById('house');

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

// Requisito 21

const selectedFamily = () => {
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked === true) return family[index].value;
  }
};

const checkedSkills = () => {
  const skills = [];
  for (let index = 0; index < checkBoxSkills.length; index += 1) {
    if (checkBoxSkills[index].checked === true) skills.push(checkBoxSkills[index].value);
  }
  return skills.join(', ');
};

const selectedRate = () => {
  for (let index = 0; index < checkBoxRate.length; index += 1) {
    if (checkBoxRate[index].checked === true) return checkBoxRate[index].value;
  }
};

const sendForm = (e) => {
  e.preventDefault();
  evaluationForm.style.display = 'none';
  formData.innerText = `Nome: ${inputName.value} ${inputLastName.value}
  Email: ${inputFormEmail.value}
  Casa: ${house.value}
  Família: ${selectedFamily()}
  Matérias: ${checkedSkills()}
  Avaliação: ${selectedRate()}
  Observações: ${textArea.value}`;
};

sendButton.addEventListener('click', sendForm);
