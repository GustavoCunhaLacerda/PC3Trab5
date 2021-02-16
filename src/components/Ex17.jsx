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
        result += matriz[i][i];
    }

    document.getElementById('ex17-resultado').innerHTML = result;
}

export default function Ex17(props) {

    const inputStyle = {
        width: "100px",
        height: "50px",
        margin: "20px"
    };

    const answerStyle = {
        alignContent: "center"
    };

    return (
        <div className="Ex17">
            <p>Somatório Matriz Array Diagonal</p>
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
                        backgroundColor: "#009432",
                        color: "#fff",
                        marginTop: "20px"
                    }}>
                    calcular soma da diagonal
                </Button>
                <p style={{ marginTop: "20px" }}>Resultados da soma da diagonal: <span id="ex17-resultado"></span></p>
            </div>
        </div>
    );
};