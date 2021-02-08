import React from 'react';
import { Button } from '@material-ui/core';

export default function Ex2(props) {
    return (
        <div className="Ex2">
            <p>Apresentando mensagens de alerta pressionando botão</p>
            <Button
                onClick={_ => alert('Isso é um alerta acionado por um botão')}
                variant="contained"
                size="medium"
                style={{
                    backgroundColor: "#2980b9",
                    color: "#fff"
                }}>
                    Alerta
            </Button>
        </div>
    );
};