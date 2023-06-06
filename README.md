# CRUD - React js e JSON Server +(página privada do admin com todos os usuarios cadastrados)

## Baixados:
    Styled-components       (npm install styled-components);
    React-Router-Dom        (npm i react-router-dom);
    JSON-Server             (npm install json-server);  


## Onde ficam salvos os dados do usuario?
    Os dados ficam salvos dentro do arquivo db.json.


## Arrumando a rota do servidor no package.json
    Vá em package.json e adicione dentro de "scripts":{} + um nome de local para ser chamado para rodar esses dados salvos no json server, em uma rota no localhost.
    ex:
        "scripts": {
        "server": "json-server --watch ./mock/db.json --port 3001"
        },

    Fazendo desse jeito, você vai evitar de ter que digitar no terminar toda vez "json-server --watch db.json" para rodar o servidor.


## Para Rodar o Backend:
    npm run server;

## Para Rodar o Frontend
    npm run server;


## Para acessar o user ADMIN:
    Para acessar o usuario ADMIN:
        email: admin@admin.com
        password: 123
