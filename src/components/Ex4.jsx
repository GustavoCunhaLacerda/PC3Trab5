import React from 'react';
import { TextField, Button } from '@material-ui/core';

const maiorDeIdade = _ => {
    const idade = parseInt(document.getElementById("ex4-idade").value);

    document.getElementById("ex4-eMenor").innerHTML = idade < 18 ? "<strong>É</strong> menor de idade" : "<strong>Não é</strong> menor de idade";
};

export default function Ex4(props) {

    const inputStyle = {
        width: "90%",
        height: "50px",
        margin: "20px"
    };

    return (
        <div className="Ex4">
            <p>Verificar se o usuário é menor de idade</p>

            <TextField id="ex4-idade" label="idade" variant="outlined" style={inputStyle} />

            <Button
                onClick={_ => maiorDeIdade()}
                variant="contained"
                size="medium"
                style={{
                    backgroundColor: "#2ecc71",
                    color: "#fff",
                    marginTop: "20px"
                }}>
                Validar Idade
            </Button>

            <p><span id="ex4-username-res"> </span><span id="ex4-eMenor"> </span></p>
        </div>
    );
};