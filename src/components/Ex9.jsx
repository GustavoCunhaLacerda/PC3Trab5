import React from 'react';
import { TextField, Button } from '@material-ui/core';

const ePrimo = (num) => {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) { return false; }
    }
    return true;
}

const primo1001 = _ => {
    let contador = 1, nPrimo = 2, num = 3;

    while (contador < 1001) {
        if (ePrimo(num)) {
            contador++;
            nPrimo = num;
        }
        num++;
    }

    document.getElementById('ex9-primo').innerHTML = nPrimo;
}

export default function Ex9(props) {

    return (
        <div className="Ex9">
            <p>Qual é o 1001º número primo?</p>
            <Button
                onClick={_ => primo1001()}
                variant="contained"
                size="medium"
                style={{
                    backgroundColor: "#e74c3c",
                    color: "#fff",
                    marginTop: "20px"
                }}>
                calcular
            </Button>
            <p style={{ marginTop: "20px" }} id="ex9-primo">O 1001º primo é </p>
        </div>
    );
};