const display = document.getElementById('display');

function appendValue(value) {
  display.textContent += value;
}

function clearDisplay() {
  display.textContent = '';
}

function deleteLast() {
  display.textContent = display.textContent.slice(0, -1);
}

function calculate() {
  try {
    display.textContent = eval(display.textContent) || 0;
  } catch {
    display.textContent = 'Error';
  }
}
