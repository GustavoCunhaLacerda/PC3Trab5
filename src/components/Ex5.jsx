import React from 'react';
import { TextField, Button } from '@material-ui/core';



const calcularMedia = _ => {
    const n1 = parseFloat(document.getElementById("ex5-numero1").value);
    const n2 = parseFloat(document.getElementById("ex5-numero2").value);
    const n3 = parseFloat(document.getElementById("ex5-numero3").value)

    document.getElementById("ex5-media").innerHTML = ((n1 + n2 + n3) / 3.0);
};

export default function Ex5(props) {

    const inputStyle = {
        width: "100px",
        height: "50px",
        margin: "20px"
    };

    const answerStyle = {
        alignContent: "center"
    };

    return (
        <div className="Ex5">
            <p>Receber 3 números e informar qual é a média</p>
            <div>
                <TextField id="ex5-numero1" label="numero 1" variant="outlined" style={inputStyle} />
                <TextField id="ex5-numero2" label="numero 2" variant="outlined" style={inputStyle} />
                <TextField id="ex5-numero3" label="numero 3" variant="outlined" style={inputStyle} />
            </div>
            <div style={answerStyle}>
                <Button
                    onClick={_ => calcularMedia()}
                    variant="contained"
                    size="medium"
                    style={{
                        backgroundColor: "#e67e22",
                        color: "#fff",
                        marginTop: "20px"
                    }}>
                        média
                </Button>
                <p style={{marginTop: "20px"}}>A média é: <span id="ex5-media"></span></p>
            </div>
        </div>
    );
};