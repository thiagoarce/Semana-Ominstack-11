const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    return res.json({
        evento : 'Semana Ominstack',
        aluno: 'Thiago'
    });
})

app.listen(3333);