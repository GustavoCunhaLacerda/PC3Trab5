import React from 'react';
import { TextField, Button } from '@material-ui/core';

const power = (b, e) => {
    let res = 1;
    for (let i = 0; i < e; i++) {
        res *= b;
    }

    return res;
}

const potencia = () => {
    const base = parseInt((document.getElementById('ex15-base').value).replace(',', '.'));
    const expoente = parseInt((document.getElementById('ex15-expoente').value).replace(',', '.'));

    let resultado = '';
    for (let i = 0; i <= expoente; i++) {
        resultado += power(base, i);
        resultado += ' '
    } 

    document.getElementById('ex15-resultado').innerHTML = resultado;
}

export default function Ex15(props) {

    const inputStyle = {
        width: "100px",
        height: "50px",
        margin: "20px"
    };

    const answerStyle = {
        alignContent: "center"
    };

    return (
        <div className="Ex15">
            <p>Potênciação exibindo os resultados de cada operação utilizando o laço de repetição for</p>
            <div>
                <TextField id="ex15-base" label="base" variant="outlined" style={inputStyle} />
                <TextField id="ex15-expoente" label="expoente" variant="outlined" style={inputStyle} />
            </div>
            <div style={answerStyle}>
                <Button
                    onClick={ _ => potencia()}
                    variant="contained"
                    size="medium"
                    style={{
                        backgroundColor: "#fd79a8",
                        color: "#fff",
                        marginTop: "20px"
                    }}>
                        calcular potências
                </Button>
                <p style={{marginTop: "20px"}}>Resultados da potência: <span id="ex15-resultado"></span></p>
            </div>
        </div>
    );
};