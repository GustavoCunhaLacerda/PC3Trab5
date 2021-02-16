import React from 'react';
import { TextField, Button } from '@material-ui/core';

const potencia = () => {
    const base = parseInt((document.getElementById('ex14-base').value).replace(',', '.'));
    const expoente = parseInt((document.getElementById('ex14-expoente').value).replace(',', '.'));

    let resultado = '';
    for (let i = 0; i <= expoente; i++) {
        resultado += Math.pow(base, i);
        resultado += ' '
    } 

    document.getElementById('ex14-resultado').innerHTML = resultado;
}

export default function Ex14(props) {

    const inputStyle = {
        width: "100px",
        height: "50px",
        margin: "20px"
    };

    const answerStyle = {
        alignContent: "center"
    };

    return (
        <div className="Ex14">
            <p>Potênciação exibindo os resultados de cada operação</p>
            <div>
                <TextField id="ex14-base" label="base" variant="outlined" style={inputStyle} />
                <TextField id="ex14-expoente" label="expoente" variant="outlined" style={inputStyle} />
            </div>
            <div style={answerStyle}>
                <Button
                    onClick={ _ => potencia()}
                    variant="contained"
                    size="medium"
                    style={{
                        backgroundColor: "#ced6e0",
                        color: "#000",
                        marginTop: "20px"
                    }}>
                        calcular potências
                </Button>
                <p style={{marginTop: "20px"}}>Resultados da potência: <span id="ex14-resultado"></span></p>
            </div>
        </div>
    );
};