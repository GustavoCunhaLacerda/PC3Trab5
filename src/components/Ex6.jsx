import React from 'react';
import { TextField, Button } from '@material-ui/core';

const calcularIMC = _ => {
    const altura = parseFloat(document.getElementById('ex6-altura').value.replace(',', '.'));
    const peso = parseFloat(document.getElementById('ex6-peso').value);

    // console.log(altura, peso)

    const imc = peso / (altura * altura);

    let res;
    if (imc < 18.5) {
        res = ' - Baixo peso';
    } else if (imc < 25) {
        res = ' - Peso normal';
    } else if (imc < 30) {
        res = ' - Excesso de peso';
    } else if (imc < 35) {
        res = ' - Obesidade classe 1';
    } else if (imc < 40) {
        res = ' - Obesidade classe 2';
    } else {
        res = ' - Obesidade classe 3';
    }

    document.getElementById('ex6-imc').innerHTML = imc.toFixed(2);
    document.getElementById('ex6-imc-result').innerHTML = res;
}

export default function Ex6(props) {

    const inputStyle = {
        width: "100px",
        height: "50px",
        margin: "20px"
    };

    return (
        <div className="Ex6">
            <p>Calcular o IMC do usuário. Use as TAGs: &lt;input&gt;, &lt;button&gt; e &lt;div&gt;.</p>
            <div>
                <TextField id="ex6-peso" label="peso (kg)" variant="outlined" style={inputStyle} />
                <TextField id="ex6-altura" label="altura (m)" variant="outlined" style={inputStyle} />
            </div>
            <Button
                onClick={_ => calcularIMC()}
                variant="contained"
                size="medium"
                style={{
                    backgroundColor: "#2c3e50",
                    color: "#fff",
                    marginTop: "20px"
                }}>
                Calcular IMC
            </Button>
            <p style={{marginTop: "20px"}}>O IMC é: <span id="ex6-imc"></span><strong><span id="ex6-imc-result"></span></strong></p>
        </div>
    );
};