# Desafio módulos 3, 4 e 5

## **Projeto**

Neste desafio construi uma aplicação contendo um sistema de autenticação (falso), e uma área restrita onde terá um componente de lista de atividades. As rotas são as seguintes: 

- `/auth`: Página de autenticação.
- `/todo`: Pagina inicial para quem está autenticado.
- `/not-found`: Redirecione para esta página todo acesso a uma rota inexistente.
- `/not-authorized`: Redirecione para esta página todo acesso a uma rota que não possuir autorização de acesso.

Ao fazer a autenticação, um token de acesso é armazenado no Local Storage. Além disso, a aplicação faz uma chamada por meio de um hook de serviço para a rota */api/todo*, que por meio de um servidor feito com express na pasta */server* retorna os dados de uma API de mock feita no site https://mockapi.io/, permetindo obter todas as atividade e seus respectivos detalhes, adicionar, deletar, e alterar o estado (completa ou não) das tarefas.

Além de servir como middleware com a API, o servidor também retorna os arquivos estáticos gerados pela aplicação React.

Ainda foi criado um Dockerfile usando uma imagem node, e um Docker Compose que roda o script de build da aplicação e inicia o projeto para um ambiente de desenvolvimento. Ademais, foi feito o deploy do projeto no heroku, você pode conferir no seguinte link:  [https://app-todo-south-system.herokuapp.com/todo](https://app-todo-south-system.herokuapp.com/todo)

## **Instruções para execução:**

- Clonar repositório ([https://github.com/dedecanton/desafio-modulo-3)](https://github.com/dedecanton/desafio-modulo-3)
- Rodar no root do projeto o comando ***docker-compose up***
- Após terminar os processos do Docker Compose, o projeto vai estar rodando na porta 3000 do localhost.