import React from 'react';
import { TextField, Button } from '@material-ui/core';

const multipo3e5 = _ => {
    const number = parseInt(document.getElementById('ex7-number').value);

    document.getElementById('ex7-m3').innerHTML = number%3 == 0 ? 'Sim' : 'Não';
    document.getElementById('ex7-m5').innerHTML = number%5 == 0 ? 'Sim' : 'Não';
}

export default function Ex7(props) {

    const inputStyle = {
        width: "100px",
        height: "50px",
        margin: "20px"
    };

    return (
        <div className="Ex7">
            <p>Encontre os múltiplos de 3 ou 5</p>
            <div>
                <TextField id="ex7-number" label="numero" variant="outlined" style={inputStyle} />
            </div>
            <Button
                onClick={_ => multipo3e5()}
                variant="contained"
                size="medium"
                style={{
                    backgroundColor: "#e84393",
                    color: "#fff",  
                    marginTop: "20px"
                }}>
                verificar
            </Button>
            <p style={{marginTop: "20px"}}>Multiplo de 3: <span id="ex7-m3"></span></p>
            <p style={{marginTop: "20px"}}>Multiplo de 5: <span id="ex7-m5"></span></p>
        </div>
    );
};