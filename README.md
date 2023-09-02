# Urna_Eletronica

## Team
- Bernardo Roberto Andrade Silva - Back-End Dev
- Rayanne Aparecida Diniz Leite - Database Dev
- Roger Dornas Oliveira - Back-End Dev
- Tatiana Alvares Guimaraes de Oliveira - Front-End Dev

## Escopo
O sistema proposto é uma ferramenta para votações online, onde o usuário deve se cadastrar para criar uma eleição ou votar em uma eleição já existente. Dentre suas funcionalidades, temos o cadastro de usuários, a autenticação de candidatos e eleitores, a confirmação do voto, a vizualização de gráficos da distribuição de votos, e a divulgação de resultado por email.

## Tecnologias
- Protótipos: Adobe XD, Lucidchart, dbdiagram.io
- Banco de Dados: MySQL
- Back-End: Java Script, Node.js (Framework: Express)
- Front-End: HTML, CSS (Framework: Bootstrap)

## BACKLOG DO PRODUTO
- Como usuário, desejo criar uma conta, utilizando um e-mail, senha, nome e data de nascimento; 
- Como usuário, desejo programar uma eleição;
- Como usuário, desejo me candidatar;
- Como eleitor, desejo ver os candidatos desta eleição;
- Como eleitor, desejo votar em um candidato;
- Como candidato, desejo votar em um candidato;
- Como eleitor, desejo votar no segundo turno de uma eleição;
- Como eleitor, desejo ver o a distribuição de votos;
- Como usuário, desejo ver as eleições em que votei;
- Como administrador, desejo encerrar uma eleição;

## BACKLOG DA SPRINT
- Como usuário, desejo criar uma conta;  
    - Instalar MySQL Server (Rayanne);
    - Instalar Node.js e Express (Bernardo / Roger);
    - Implementar banco de dados e tabela de usuários (Rayanne);
    - Implementar tela inicial, e páginas de cadastro e login (Tatiana);
    - Integrar os formulários de cadastro e login com o banco de dados (Bernardo / Roger);
    - Implementar mensagem de confirmação de cadastro e área do usuário (Tatiana);
- Como usuário, desejo programar uma eleição;
    - Criar tabela de eleições e candidatos no banco de dados (Rayanne);
    - Implementar página e formulário de criação da eleição (Tatiana);
    - Integrar o formulário de criação da eleição com o banco de dados (Bernardo / Roger);
    - Criar funções para início e término automático da votação (Bernardo / Roger);
    - Criar função para geração de códigos de autenticação (Bernardo / Roger);
    - Criar página da eleição (Tatiana);
- Como eleitor, desejo votar em um candidato;
    - Criar tabela de votos em candidato no banco de dados (Rayanne);
    - Criar tabela de votos por usuário no banco de dados (Rayanne);
    - Implementar página da votação (Tatiana);
    - Integrar o formulário de votação com o banco de dados (Bernardo / Roger);
    - Implementar função para confirmação do voto (Bernardo / Roger);
    - Criar função que retorne se o usuário já votou em uma eleição (Bernardo / Roger);
    - Criar função que retorne as eleições nas quais o usuário já votou (Bernardo / Roger);
    - Adaptar a página da votação para mostrar que o usuário já votou nesta eleição (Tatiana);
    - Adaptar a página do usuário para mostrar eleições participadas (Tatiana);
- Como eleitor, desejo ver o a distribuição de votos;
    - Gerar dados de teste para a criação dos gráficos (Rayanne);
    - Instalar biblioteca de Java Script para geração gráficos (Bernardo / Roger);
    - Implementar página de vizualização de gráficos (Tatiana);
    - Criar funções para gerar gráficos integrados com o banco de dados (Bernardo / Roger);
