//=============================================================
// Quadrado feito de estrelas
//=============================================================

let n = 11;
let quadrado = [];

for (let index = 0; index < n; index += 1) {
  quadrado = [];
  for (index2 = 0; index2 < n; index2 += 1){ 
  quadrado += "*";
  }
  console.log(quadrado);
}

//=============================================================
// triangulo feito de estrelas
//=============================================================

let t = 11;
let triangulo = [];
for (let index = 0; index < t; index += 1) {
  triangulo = [];
  for (index = 0; index < t; index += 1){ 
    triangulo += "*";
    console.log(triangulo);
  }
}

//=============================================================
// triangulo invertido
//=============================================================

let i = 5;
let trianguloInvertido = "";
let symbol = "*";
let imputPosition = i -1;
for (let lineIndex = 0; lineIndex < i; lineIndex += 1){
  for (collumIndex = 0; collumIndex < i; collumIndex += 1){
    if (collumIndex < imputPosition){
      trianguloInvertido = trianguloInvertido + " ";
    } else {
      trianguloInvertido = trianguloInvertido + symbol;
    }
  }
  console.log(trianguloInvertido);
  trianguloInvertido = "";
  imputPosition -= 1;
}

//=============================================================
// triangulo invertido
//=============================================================