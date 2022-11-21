let peso = 33
let altura = 1.30
let imc = (peso)/(altura^2)
console.log(imc)

if(imc< 18.5){
    console.log("você está  abaixo do peso");
} else if(imc > 18.5&& imc <25){
    console.log ("peso normal");
}else if (imc > 25&& imc <29){
    console.log ("sobrepeso");
}else if (imc >29&& imc <30){
  console.log ("obesidade grau I");
}else if (imc > 30&& imc <34){
    console.log ("obesidade grau II");
}else if (imc >34){
        console.log ("obesidade grau III");
    }

