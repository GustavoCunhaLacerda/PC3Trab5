import React from 'react';
import { TextField, Button } from '@material-ui/core';

const potencia = () => {
    const base = parseFloat((document.getElementById('ex13-base').value).replace(',', '.'));
    const expoente = parseFloat((document.getElementById('ex13-expoente').value).replace(',', '.'));

    document.getElementById('ex13-resultado').innerHTML = Math.pow(base, expoente);
}

export default function Ex13(props) {

    const inputStyle = {
        width: "100px",
        height: "50px",
        margin: "20px"
    };

    const answerStyle = {
        alignContent: "center"
    };

    return (
        <div className="Ex13">
            <p>Potênciação com qualquer base ou expoente</p>
            <div>
                <TextField id="ex13-base" label="base" variant="outlined" style={inputStyle} />
                <TextField id="ex13-expoente" label="expoente" variant="outlined" style={inputStyle} />
            </div>
            <div style={answerStyle}>
                <Button
                    onClick={ _ => potencia()}
                    variant="contained"
                    size="medium"
                    style={{
                        backgroundColor: "#ff6348",
                        color: "#fff",
                        marginTop: "20px"
                    }}>
                        calcular potência
                </Button>
                <p style={{marginTop: "20px"}}>Resultado da potência: <span id="ex13-resultado"></span></p>
            </div>
        </div>
    );
};