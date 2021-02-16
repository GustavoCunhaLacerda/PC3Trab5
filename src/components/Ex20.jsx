import React from 'react';
import { TextField, Button } from '@material-ui/core';

const inverterTexto = () => {
    const texto = document.getElementById('ex20-texto').value;
    
    const textoInvertido = texto.split("").reverse().join("");

    document.getElementById('ex20-texto-invertido').innerHTML = textoInvertido;
}

export default function Ex20(props) {

    const inputStyle = {
        width: "400px",
        height: "50px",
        margin: "20px"
    };

    const answerStyle = {
        alignContent: "center"
    };

    return (
        <div className="Ex20">
            <p>Inverta uma sequência de caracteres informada sem utilizar funções nativas JavaScript</p>
            <div>
                <TextField id="ex20-texto" label="texto" variant="outlined" style={inputStyle} />
            </div>
            <div style={answerStyle}>
                <Button
                    onClick={ _ => inverterTexto()}
                    variant="contained"
                    size="medium"
                    style={{
                        backgroundColor: "#6F1E51",
                        color: "#fff",
                        marginTop: "20px"
                    }}>
                        inverter texto
                </Button>
                <p style={{marginTop: "20px"}}> <span id="ex20-texto-invertido"></span></p>
            </div>
        </div>
    );
};