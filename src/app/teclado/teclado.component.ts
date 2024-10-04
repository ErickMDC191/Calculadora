import { Component } from '@angular/core';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrl: './teclado.component.css'
})
export class TecladoComponent {

  displayValue: string = ''; // Valor a ser exibido no input

  // Método para lidar com os cliques dos botões
  clicar(value: string) {
    if (value === '=') {
      // Executa o cálculo
      this.calcular();
    } else if (value === 'CE') {
      // Limpa o display
      this.displayValue = '';
    } else {
      // Adiciona o valor ao display
      this.displayValue += value;
    }
  }

  // Método para calcular o resultado
  calcular() {
    try {
      // Avalia a expressão no displayValue
      this.displayValue = eval(this.displayValue);
    } catch (error) {
      // Em caso de erro, exibe uma mensagem
      this.displayValue = 'Erro';
    }
  }
}

