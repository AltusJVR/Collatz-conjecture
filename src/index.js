import x3n from './x3n';

const chooseNumberForm = document.querySelector('.choose_number_form');
const chooseNumber = document.querySelector('.choose_number');
const outputList = document.querySelector('.output_list');

const checkEvenOrOdd = num => {
  if (num % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
};

const dataOutput = async data => {
  const calculatedArray = data.calculatedArray;
  const startingNumber = data.startingNumber;
  const arrayLength = calculatedArray.length;
  const seedNumber = document.querySelector('.starting_number');
  const arrayL = document.querySelector('.array_length');

  seedNumber.innerHTML = `Seed Number: ${startingNumber}`;
  arrayL.innerHTML = `No of iterations: ${arrayLength}`;
  calculatedArray.forEach(calc => {
    let li = document.createElement('li');
    li.innerText = `${checkEvenOrOdd(calc)}: ${calc}`;
    outputList.append(li);
  });
};

const getNumber = async () => {
  chooseNumberForm.addEventListener('submit', async e => {
    e.preventDefault();
    if (outputList.hasChildNodes) {
      outputList.innerHTML = '';
    } else {
      return;
    }
    const number = parseInt(chooseNumber.value);
    const data = await x3n(number);
    dataOutput(data);
  });
};

getNumber();
