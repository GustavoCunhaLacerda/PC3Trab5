import './App.css';
import React from 'react';

import Card from './components/layout/Card';
import Ex1 from './components/Ex1';
import Ex2 from './components/Ex2';
import Ex3 from './components/Ex3';


export default function App(props) {
    return (
        <div className="App">

            <h1>Programação de Computadores 3 - Trabalho 5</h1>
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
            </div>

        </div>
    );
};