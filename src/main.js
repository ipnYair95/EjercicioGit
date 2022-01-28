const sumar = (a, b) => {
  return a + b
}

const saludar = (str) =>{
  return ` Bienvenido ${str};`
}

const imprimirNumeros = () => {
  const array = [1,2,3,4,5];

  array.forEach( ele => console.log(ele) );
}

alert( saludar('Yair') );

console.log( "Resultado",  sumar(2, 5));

imprimirNumeros();
