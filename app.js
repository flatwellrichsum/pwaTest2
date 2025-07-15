if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('Service Worker registered', reg.scope))
      .catch(err => console.log('Service Worker registration failed:', err));
  });
}

let expression = '';

function press(val) {
  expression += val;
  document.getElementById('display').value = expression;
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById('display').value = result;
    expression = result.toString();
  } catch (e) {
    document.getElementById('display').value = 'Error';
    expression = '';
  }
}
