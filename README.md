Projeto de um CRUD simples feito com MEAN-STACK

Feito somente com o propósito de testes utilizando essa live disponível no YouTube (https://www.youtube.com/watch?v=TMExI-5U29k)

Ainda falta a implementação do UPDATE e do DELETE, e a inclusão de estilos nas views (possivelmente com Bootstrap).

Para startar o projeto no Mac OS:

1 - iniciar o servidor do MongoDB, através do comando mongod (caso este comando não esteja disponível, será necessário adicionar o MongoDB ao PATH variable com o comando export PATH=<mongodb-install-directory>/bin:$PATH)

2 - Iniciar o back-end através do comand 'npm start' que irá executar os scripts e instalar as dependencias automaticamente

3 - Iniciar o front-end através do módulo http-server do Node (caso precise ser instalado, o comando é 'npm install -g http-server'), através do comando 'http-server -p 4000', sendo 4000 o numero da porta utilizada e por onde a aplicação principal será acessada.
