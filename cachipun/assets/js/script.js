var numero_juegos = prompt('Ingresa la cantidad de veces que quieres jugar: ');
      var contador = 0;
      while(contador < numero_juegos){
        var jugada_persona = prompt('Ingrese tu jugada. Piedra, papel ó tijera.', 'piedra');
        ganador = defineGanador(jugada_persona, poderMaquina());
        contador++;

        switch (ganador) {
          case 'personita':
            alert(`¡Felicidades personita, haz ganado!`)
            break;
          case 'máquina':
            alert(`Personita, haz perdido contra la máquina`)
            break;
          default:
            alert('El resultado es un empate')
        }

        function poderMaquina() {
          switch (Math.floor(Math.random() * 3)) {
            case 0:
              return 'piedra';
              break;
            case 1:
              return 'papel';
              break;
            case 2:
              return 'tijera';
              break;
          }
        }

        function defineGanador(humano, maquina) {
          let resultado = '';
          if (humano == maquina) {
            resultado = 'empate';
          }
          else if ((humano == 'tijera' && maquina == 'papel') ||
            (humano == 'papel' && maquina == 'piedra') ||
            (humano == 'piedra' && maquina == 'tijera')) {
            resultado = 'humano';
          }
          else {
            resultado = 'máquina';
          }
          return resultado;
        }
      }