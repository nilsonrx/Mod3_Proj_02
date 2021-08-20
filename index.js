//Importando o express

const express = require('express')
const app = express();

//Definindo a Porta

const port = 3000;
const games = ['Resident Evil','Need For Speed','The Punisher','Final Fantasy','Zelda','Final Fight',];

//GET Home 
app.get('/', (req, res) => {
    res.send("Sejam Bem Vindos A Games Mania");
});

games.forEach(function (item, indice) {
    console.log(indice, item);
});

//Lendo os games
app.get('/games', (req, res) => {
    res.send(games);
})


//GET /Jogos , Listando todos os Jogos
app.get('/games', (req, res) =>{
    res.send(games);
});
//GET /Jogos /ID, listando pelo iD

app.get('/games/:id', (req, res) =>{
    const id = req.params.id;
    const game = games[id];
    if (!game){
        res.send('Jogo não encontrado')}
    res.send(game);

});

//Add Games
app.post('/addgames',(req,res) =>{
    const game = req.body.games;

    const id = games.length + 1;

    games.push(game);

    res.send(`Game adicionado com sucesso: ${game}  ID :${id}`)
});


//Atualizando a lista de Games
app.put('/games/:id',(req, res)=>{
    const id = req.params.id -1;
    const game = req.body.game;
    jogos[id] = game;
    res.send(`O jogo de ID ${id} foi atualizado, o nome agora é ${games}`)
})

//Deletando a lista de Games
app.delete('/games/:id',(req, res)=>{
    const id = req.params.id -1;
    const game = games[id]
    if(!game){
        res.send('Nenhum jogo encontrado...')
    }
    delete jogos[id];
    res.send(`O jogo ${games} foi deletado com sucesso!`);
})

app.listen(port, ()=> {
    console.info(`App running on http://localhost:${port}/`);
})


