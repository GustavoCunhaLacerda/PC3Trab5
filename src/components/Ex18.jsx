import React from 'react';
import { Button, Table } from '@material-ui/core';

function calculo() {
    const matriz = [
        [12, -8, 15, 6],
        [1, 6, 20, -9],
        [0, -4, 0, -8],
        [-1, 6, 0, 15]
    ];

    const count = matriz.length;
    let result = 0;
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            if (matriz[i][j] % 2 === 0) {
                result += matriz[i][j];
            }
        }
    }

    document.getElementById('ex18-resultado').innerHTML = result;
}

export default function Ex18(props) {

    const inputStyle = {
        width: "100px",
        height: "50px",
        margin: "20px"
    };

    const answerStyle = {
        alignContent: "center"
    };

    return (
        <div className="Ex18">
            <p>Calcule o somatório dos números pares de uma Matriz</p>
            <div>
                <table style={{ width: '100%' }}>
                    <tbody>

                        <tr>
                            <td><p>12</p></td>
                            <td><p>-8</p></td>
                            <td><p>15</p></td>
                            <td><p>6</p></td>
                        </tr>
                        <tr>
                            <td><p>1</p></td>
                            <td><p>6</p></td>
                            <td><p>20</p></td>
                            <td><p>-9</p></td>
                        </tr>
                        <tr>
                            <td><p>0</p></td>
                            <td><p>-4</p></td>
                            <td><p>0</p></td>
                            <td><p>-8</p></td>
                        </tr>
                        <tr>
                            <td><p>-1</p></td>
                            <td><p>6</p></td>
                            <td><p>0</p></td>
                            <td><p>15</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style={answerStyle}>
                <Button
                    onClick={_ => calculo()}
                    variant="contained"
                    size="medium"
                    style={{
                        backgroundColor: "#EA2027",
                        color: "#fff",
                        marginTop: "20px"
                    }}>
                    calcular soma dos pares
                </Button>
                <p style={{ marginTop: "20px" }}>Resultados da soma dos pares: <span id="ex18-resultado"></span></p>
            </div>
        </div>
    );
};