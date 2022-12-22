let stat = "aprovada";
let result

switch (stat) {
    case "aprovada":
            result = "Parabéns, você foi aprovada(o)!";
        break;
    case "lista":
        result = "Você está na nossa lista de espera";
        break;
    case "reprovada":
        result = "Você foi reprovada(o)";
        break;
    default:
        result = "nformação incorreta";
}

console.log(result);