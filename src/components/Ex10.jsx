import React from 'react';
import { TextField, Button } from '@material-ui/core';

const ePrimo = (num) => {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) { return false; }
    }
    return true;
}

const calcularPrimos = () => {
    let primos = [2];
    for (let i = 3; i <= 200; i++) {
        if (ePrimo(i)) {
            primos.push(i);
        }
    }
    
    document.getElementById('ex10-primos').innerHTML = primos;

}

export default function Ex10(props) {

    const inputStyle = {
        width: "100px",
        height: "50px",
        margin: "20px"
    };

    const answerStyle = {
        alignContent: "center"
    };

    return (
        <div className="Ex10">
            <p>Exibir números primos que estão entre o número 0 e o 200</p>
            <div style={answerStyle}>
                <Button
                    onClick={_ => calcularPrimos()}
                    variant="contained"
                    size="medium"
                    style={{
                        backgroundColor: "#3742fa",
                        color: "#fff",
                        marginTop: "20px"
                    }}>
                        calcular primos
                </Button>
                <p style={{marginTop: "20px"}}id="ex10-primos"></p>
            </div>
        </div>
    );
};