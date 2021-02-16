import React from 'react';
import { TextField, Button } from '@material-ui/core';

const inverterTexto = () => {
    const texto = document.getElementById('ex12-texto').value;
    
    let textoInvertido = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }

    document.getElementById('ex12-texto-invertido').innerHTML = textoInvertido;
}

export default function Ex12(props) {

    const inputStyle = {
        width: "400px",
        height: "50px",
        margin: "20px"
    };

    const answerStyle = {
        alignContent: "center"
    };

    return (
        <div className="Ex12">
            <p>Inverta uma sequência de caracteres informada sem utilizar funções nativas JavaScript</p>
            <div>
                <TextField id="ex12-texto" label="texto" variant="outlined" style={inputStyle} />
            </div>
            <div style={answerStyle}>
                <Button
                    onClick={ _ => inverterTexto()}
                    variant="contained"
                    size="medium"
                    style={{
                        backgroundColor: "#eccc68",
                        color: "#fff",
                        marginTop: "20px"
                    }}>
                        inverter texto
                </Button>
                <p style={{marginTop: "20px"}}> <span id="ex12-texto-invertido"></span></p>
            </div>
        </div>
    );
};