import React from 'react';
import { TextField, Button } from '@material-ui/core';

const potencia = () => {
    const base = parseInt((document.getElementById('ex16-base').value).replace(',', '.'));
    const expoente = parseInt((document.getElementById('ex16-expoente').value).replace(',', '.'));

    let resultado = '';
    for (let i = 0; i <= expoente; i++) {
        resultado += Math.pow(base, i);
        resultado += ' '
    } 

    document.getElementById('ex16-resultado').innerHTML = resultado;
}

export default function Ex16(props) {

    const inputStyle = {
        width: "100px",
        height: "50px",
        margin: "20px"
    };

    const answerStyle = {
        alignContent: "center"
    };

    return (
        <div className="Ex16">
            <p>Potênciação exibindo os resultados de cada operação utilizando o laço de repetição for e a função
matemática Math.pow()</p>
            <div>
                <TextField id="ex16-base" label="base" variant="outlined" style={inputStyle} />
                <TextField id="ex16-expoente" label="expoente" variant="outlined" style={inputStyle} />
            </div>
            <div style={answerStyle}>
                <Button
                    onClick={ _ => potencia()}
                    variant="contained"
                    size="medium"
                    style={{
                        backgroundColor: "#6c5ce7",
                        color: "#fff",
                        marginTop: "20px"
                    }}>
                        calcular potências
                </Button>
                <p style={{marginTop: "20px"}}>Resultados da potência: <span id="ex16-resultado"></span></p>
            </div>
        </div>
    );
};