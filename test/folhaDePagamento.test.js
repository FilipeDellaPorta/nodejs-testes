import { calculaDescontos, somaHorasExtras } from "../index.js";

test("Deve retornar a soma das horas extras", () => {
  const esperado = 2500;
  const retornado = somaHorasExtras(2000, 500);

  expect(retornado).toBe(esperado);
});

test("Deve descontar o valor do salário", () => {
  const esperado = 2300;
  const retornado = calculaDescontos(2500, 200);

  expect(retornado).toBe(esperado);
});

/*const verifiqueSe = (valor) => {
    const assercoes = {
      ehExatamenteIgualA(esperado) {
        if (valor !== esperado) {
          throw {};
        }
      },
    };
    return assercoes;
  };
  
  const teste = (titulo, funcaodeTeste) => {
    try {
      funcaodeTeste();
      console.log(`${titulo} passou!`);
    } catch {
      console.error(`${titulo} não passou!`);
    }
  };
  
  teste("somaHorasExtras", () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);
  
    verifiqueSe(retornado).ehExatamenteIgualA(esperado);
  });
  
  teste("calculaDesconto", () => {
    const esperado = 2300;
    const retornado = calculaDescontos(2500, 200);
  
    verifiqueSe(retornado).ehExatamenteIgualA(esperado);
  });*/
