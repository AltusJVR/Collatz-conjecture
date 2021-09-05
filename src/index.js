import x3n from './x3n';

const chooseNumberForm = document.querySelector('.choose_number_form');
const chooseNumber = document.querySelector('.choose_number');
const outputList = document.querySelector('.output_list');

const dataOutput = async data => {
  const calculatedArray = data.calculatedArray;
  const startingNumber = data.startingNumber;

  const h3 = document.querySelector('.starting_number');
  h3.innerHTML = `Seed Number: ${startingNumber}`;
  calculatedArray.forEach(calc => {
    let li = document.createElement('li');
    li.innerText = calc;
    outputList.append(li);
  });
};

const getNumber = async () => {
  chooseNumberForm.addEventListener('submit', async e => {
    e.preventDefault();
    const number = parseInt(chooseNumber.value);
    const data = await x3n(number);
    dataOutput(data);
  });
};

getNumber();
