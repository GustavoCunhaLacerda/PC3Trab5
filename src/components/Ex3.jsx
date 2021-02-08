import React from 'react';
import { TextField, Button } from '@material-ui/core';



const maiorEMenor = _ => {
    const n1 = parseInt(document.getElementById("ex3-numero1").value);
    const n2 = parseInt(document.getElementById("ex3-numero2").value);
    const n3 = parseInt(document.getElementById("ex3-numero3").value);

    document.getElementById("ex3-maior").innerHTML = Math.max(n1, n2, n3);
    document.getElementById("ex3-menor").innerHTML = Math.min(n1, n2, n3);
};

export default function Ex3(props) {

    const inputStyle = {
        width: "100px",
        height: "50px",
        margin: "20px"
    };

    const answerStyle = {
        alignContent: "center"
    };

    return (
        <div className="Ex3">
            <p>Receber 3 números e informar qual é o maior e o menor</p>
            <div>
                <TextField id="ex3-numero1" label="numero 1" variant="outlined" style={inputStyle} />
                <TextField id="ex3-numero2" label="numero 2" variant="outlined" style={inputStyle} />
                <TextField id="ex3-numero3" label="numero 3" variant="outlined" style={inputStyle} />
            </div>
            <div style={answerStyle}>
                <Button
                    onClick={_ => maiorEMenor()}
                    variant="contained"
                    size="medium"
                    style={{
                        backgroundColor: "#8e44ad",
                        color: "#fff",
                        marginTop: "20px"
                    }}>
                        Maior número
                </Button>
                <p style={{marginTop: "20px"}}>O menor número é: <span id="ex3-menor"></span></p>
                <p style={{marginTop: "20px"}}>O maior número é: <span id="ex3-maior"></span></p>
            </div>
        </div>
    );
};