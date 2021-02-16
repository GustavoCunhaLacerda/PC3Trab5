import React from 'react';
import { TextField, Button } from '@material-ui/core';

const ordenarString = () => {
    const texto = document.getElementById('ex19-texto').value;
    
    const textoOrdenado = [...texto].sort((a, b) => a.localeCompare(b)).join("");

    document.getElementById('ex19-string-ordenada').innerHTML = textoOrdenado;
}

export default function Ex19(props) {

    const inputStyle = {
        width: "400px",
        height: "50px",
        margin: "20px"
    };

    const answerStyle = {
        alignContent: "center"
    };

    return (
        <div className="Ex19">
            <p>Coloque em ordem crescente uma sequência de caracteres</p>
            <div>
                <TextField id="ex19-texto" label="texto" variant="outlined" style={inputStyle} />
            </div>
            <div style={answerStyle}>
                <Button
                    onClick={ _ => ordenarString()}
                    variant="contained"
                    size="medium"
                    style={{
                        backgroundColor: "#0652DD",
                        color: "#fff",
                        marginTop: "20px"
                    }}>
                        ordenar string
                </Button>
                <p style={{marginTop: "20px"}}> <span id="ex19-string-ordenada"></span></p>
            </div>
        </div>
    );
};