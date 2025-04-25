let display = document.getElementById('display');
let currentInput = '';  


document.querySelectorAll('.boton').forEach(button => {
  button.addEventListener('click', function() {
    const value = this.dataset.value || this.textContent;


    if (value === 'C') {
      currentInput = '';
      display.value = '';
      return;
    }


    if (value === '=') {
      calcular(currentInput);
      return;
    }


    currentInput += value;
    display.value = currentInput;
  });
});

function calcular(expresion) {
  try {

    expresion = expresion.replace('×', '*').replace('÷', '/');
    

    let resultado = eval(expresion);
    
    // Mostramos el resultado
    display.value = resultado;
    currentInput = resultado.toString(); 
  } catch (error) {
    display.value = 'Error';
    currentInput = '';
  }
}
