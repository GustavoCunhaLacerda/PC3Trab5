import React from 'react';
import { TextField, Button } from '@material-ui/core';

const delta = () => {
    const elA = parseFloat(document.getElementById('ex11-a').value);
    const elB = parseFloat(document.getElementById('ex11-b').value);
    const elC = parseFloat(document.getElementById('ex11-c').value);

    const delta = (elB * elB) - (4 * elA * elC);

    document.getElementById('ex11-delta').innerHTML = delta;
}


export default function Ex11(props) {

    const inputStyle = {
        width: "100px",
        height: "50px",
        margin: "20px"
    };

    const answerStyle = {
        alignContent: "center"
    };

    return (
        <div className="Ex11">
            <p>Calcule o Delta de uma função de segundo grau</p>
            <div>
                <TextField id="ex11-a" label="a" variant="outlined" style={inputStyle} />
                <TextField id="ex11-b" label="b" variant="outlined" style={inputStyle} />
                <TextField id="ex11-c" label="c" variant="outlined" style={inputStyle} />
            </div>
            <div style={answerStyle}>
                <Button
                    onClick={ _ => delta()}
                    variant="contained"
                    size="medium"
                    style={{
                        backgroundColor: "#2ed573",
                        color: "#fff",
                        marginTop: "20px"
                    }}>
                        calcular delta
                </Button>
                <p style={{marginTop: "20px"}}>Delta: <span id="ex11-delta"></span></p>
            </div>
        </div>
    );
};