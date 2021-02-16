import './App.css';
import React from 'react';
import { Link } from '@material-ui/core';

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
import Ex10 from './components/Ex10';
import Ex11 from './components/Ex11';
import Ex12 from './components/Ex12';
import Ex13 from './components/Ex13';
import Ex14 from './components/Ex14';
import Ex15 from './components/Ex15';
import Ex16 from './components/Ex16';
import Ex17 from './components/Ex17';
import Ex18 from './components/Ex18';
import Ex19 from './components/Ex19';
import Ex20 from './components/Ex20';


export default function App(props) {
    return (
        <div className="App">

            <h1>Programação de Computadores 3 - Trabalho 5</h1>
            <h2>Prof: José Gonçalo</h2>
            <h2>Aluno: Gustavo Cunha Lacerda</h2>
            <h3>Código fonte disponível em <Link href="https://github.com/GustavoCunhaLacerda/PC3Trab5" color="inherit">github.com/GustavoCunhaLacerda/PC3Trab5</Link>
            </h3>

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
                <Card title="Exercício #10" color="#3742fa">
                    <Ex10></Ex10>
                </Card>
                <Card title="Exercício #11" color="#2ed573">
                    <Ex11></Ex11>
                </Card>
                <Card title="Exercício #12" color="#eccc68">
                    <Ex12></Ex12>
                </Card>
                <Card title="Exercício #13" color="#ff6348">
                    <Ex13></Ex13>
                </Card>
                <Card title="Exercício #14" color="#ced6e0">
                    <Ex14></Ex14>
                </Card>
                <Card title="Exercício #15" color="#fd79a8">
                    <Ex15></Ex15>
                </Card>
                <Card title="Exercício #16" color="#6c5ce7">
                    <Ex16></Ex16>
                </Card>
                <Card title="Exercício #17" color="#009432">
                    <Ex17></Ex17>
                </Card>
                <Card title="Exercício #18" color="#EA2027">
                    <Ex18></Ex18>
                </Card>
                <Card title="Exercício #19" color="#0652DD">
                    <Ex19></Ex19>
                </Card>
                <Card title="Exercício #20" color="#6F1E51">
                    <Ex20></Ex20>
                </Card>
            </div>

        </div>
    );
};