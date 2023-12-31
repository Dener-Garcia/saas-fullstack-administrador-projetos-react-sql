# Indice

- [Iniciando Projeto](#start)
- [Limpando o Projeto](#cleaning)
- [Estruturando pastas](#folders)
- [Usando react router 6.0](#routes)
- [Hooks do projeto](#routes)

- [Trabalhando com Hooks](#hooks)
- [Passando propriedas com props](#props)
- [Loops com React](#loops)
- [Regex para substituir parte de uma string](#regex)
- [Formatando numero para moeda](#currecy)
- [Compatilhando estados entre componentes useContext](#shared)
- [Somando valores com reduce](#reduce)


<a id="start"></a>

## Configurando projeto e dependencias

Usaremos o vite como bandle para o projeto

<a id="cleaning"></a>

## Limpando projeto React com Vite

Por padrão vem alguns arquivos e componentes no projeto por isso vamos apagar os seguintes e pastas

- apague o arquivo src > App.css
- limpe o arquivo src > App.tsx
- limpe o arquivo src > index.css
- apague o arquivo logo.svg
- apague o arquivo  public > vite.svg
- apague o arquivo assets > react.svg

<a id="folder"></a>

## Estruturas de pastas

Por padrão estruturamos as pastas do React da seguinte maneira.

- src > components = todos os componentes que vamos criar vao ficar dentro de pastas
- src > components > Header = sera nosso componente Header.tsx e tambem o seu index.css
- src > api = todas funcoes relacionadas a chamadas de api ficaram aqui.
- src > utils = todas funcoes reutilizaveis e genericas colocamos nessa pasta 

<a id="routes"></a>

## Usando rotas no React

Para criar uma troca de páginas sem recarregar a página usamos o react router dom uma biblioteca que auxilia nesse redirecionamento.

- Instale a biblioteca com
> npm install react-router-dom

Faça o import no arquivo app.jsx

```
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
```

No arquivo app envolva todos os componetes usando a estrutura abaixo:

``` javascript
<BrowserRouter>
    <NavBar /> = componente de menu comum
    <Routes>
        <Route path="/" element={<NomeComponenteHome />} />
        <Route path="/caminhoDesejado" element={<NomeComponente />} />
    </Routes>
</BrowserRouter>
```
Para criar os links, fazendo uma referencia a tag "<a>" do html usamos o <link>

``` javascript
    <Link to="/">Pagina home</Link>
    <Link to="/caminhoDesejado">Nome da pagina</Link>
```

<a id="type"></a>

## Tipando com typescript

Tipando um componente que usa props
    Devemos fornecer uma interface e declarar as props e quais tipos elas são.

<a id="dbFake"></a>

## Usando extensão db.json

Essa extensão serve para simular um backend com banco de dados no nosso sistema localmente

- Crie um arquivo na raiz chamado db.json
- Crie um script no package.json para rodar o nosso back-end local
    - "backend": "json-server --watch db.json --port 5000",
- Abra seu navegador e digite localhost:5000 e veja se o JSON server esta rodando

<a id="hooks"></a>

## Hooks

### useHistory

O useHistory permite fazer redirect nas paginas do sistema, exemplo quando ele quiser fazer um post vamos redirecionar ele para outra pagina.
