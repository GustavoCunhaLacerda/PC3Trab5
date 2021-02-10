import './App.css';
import React from 'react';

import Card from './components/layout/Card';
import Ex1 from './components/Ex1';
import Ex2 from './components/Ex2';
import Ex3 from './components/Ex3';
import Ex4 from './components/Ex4';
import Ex5 from './components/Ex5';
import Ex6 from './components/Ex6';
import Ex7 from './components/Ex7';
import Ex8 from './components/Ex8';
import Ex9 from './components/Ex9';


export default function App(props) {
    return (
        <div className="App">

            <h1>Programação de Computadores 3 - Trabalho 5</h1>
            <h2>Prof: José Gonçalo</h2>
            <h2>Aluno: Gustavo Cunha Lacerda</h2>

            <div className="Cards">
                <Card title="Exercício #01">
                    <Ex1></Ex1>
                </Card>
                <Card title="Exercício #02" color="#2980b9">
                    <Ex2></Ex2>
                </Card>
                <Card title="Exercício #03" color="#8e44ad">
                    <Ex3></Ex3>
                </Card>
                <Card title="Exercício #04" color="#2ecc71">
                    <Ex4></Ex4>
                </Card>
                <Card title="Exercício #05" color="#e67e22">
                    <Ex5></Ex5>
                </Card>
                <Card title="Exercício #06" color="#2c3e50">
                    <Ex6></Ex6>
                </Card>
                <Card title="Exercício #07" color="#e84393">
                    <Ex7></Ex7>
                </Card>
                <Card title="Exercício #08" color="#f39c12">
                    <Ex8></Ex8>
                </Card>
                <Card title="Exercício #09" color="#e74c3c">
                    <Ex9></Ex9>
                </Card>
            </div>

        </div>
    );
};