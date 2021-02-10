import React from 'react';
import { TextField, Button } from '@material-ui/core';

const somaFib = _ => {
    const n = parseInt(document.getElementById('ex8-number').value);

    let fibArray = [];
    if (n >= 0) { fibArray.push(0); }
    if (n >= 1) { fibArray.push(1); }

    if (n >= 2) {
        for (let i = 2; i <= n; i++) {
            fibArray.push(fibArray[i-2] + fibArray[i-1]);
        }
    }

    document.getElementById('ex8-termos').innerHTML = n;
    document.getElementById('ex8-soma').innerHTML = n ? fibArray.reduce( (total, num) => total + num ) : 0;
    // console.log(fibArray);
}

export default function Ex8(props) {

    const inputStyle = {
        width: "100px",
        height: "50px",
        margin: "20px"
    };

    return (
        <div className="Ex8">
            <p>Encontre a soma dos termos em uma sequência Fibonacci</p>
            <div>
                <TextField id="ex8-number" label="n" variant="outlined" style={inputStyle} />
            </div>
            <Button
                onClick={_ => somaFib()}
                variant="contained"
                size="medium"
                style={{
                    backgroundColor: "#f39c12",
                    color: "#fff",  
                    marginTop: "20px"
                }}>
                calcular
            </Button>
            <p style={{marginTop: "20px"}}>A soma até o <span id="ex8-termos">0</span>º termo é <span id="ex8-soma">0</span></p>
        </div>
    );
};