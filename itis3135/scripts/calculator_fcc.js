

const calc = document.querySelector(‘.calc’);
const keys = calculator.querySelector(‘.keys’);

keys.addEventListener(‘click’, e => {
 if (e.target.matches(‘button’)) {
    const key = e.target;
    const action = key.dataset.action;
    if (!action) {
        console.log('number key!')
      }
      if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        console.log('operator key!')
      }
      if (action === 'decimal') {
        console.log('decimal key!')
      }
      
      if (action === 'clear') {
        console.log('clear key!')
      }
      
      if (action === 'calculate') {
        console.log('equal key!')
      }
 }
})