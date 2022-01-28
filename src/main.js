const sumar = (a, b) => {
  return a + b
}

const saludar = (str) =>{
  return ` Hola bienvenido:  ${str};`
}

const imprimirNumeros = () => {
  const array = [1,2,3,4,5];

  array.forEach( ele => console.log(ele) );
}

const funcionNuevaMaster() => {
  return "Hola soy nueva funcion desde master";
}

alert( saludar('Yair') );

console.log( "Resultado de sumar 2 y 5 =  ",  sumar(2, 5));

imprimirNumeros();

console.log( funcionNuevaMaster() );
