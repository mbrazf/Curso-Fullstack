# Estrutura Padrão HTML

```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Título</title>
</head>
<body>
        Conteúdo da página
</body>
</html>
```

# Principais tags HTML

```
<h1> - Título de maior destaque
<h2> - Título destaque
<h3> - Título destaque
<h4> - Título destaque
<h5> - Título destaque
<h6> - Título destaque

<p></p> - Parágrafo

<strong></strong> - Texto em negrito

<hr> - Uma linha horizontal no documento HTML

<br> - Quebra de linha
```

## Listas HTML

- Lista não ordenada
```
 <ul>
    <li> </li>  - Elementos da lista
    <li> </li>  - Elementos da lista
    <li> </li>  - Elementos da lista
</ul>
```

- Lista ordenada
```
<ol>
    <li> </li>  - Elementos da lista
    <li> </li>  - Elementos da lista
    <li> </li>  - Elementos da lista
</ol>
```
```
<div> </div> - É um elemento com comportamento de bloco que começa sempre em uma nova linha e ocupa toda a largura disponível da tela.(basicamente uma caixa para colocar os elementos dentro dele).

<span> </span> - É um elemento com o comportamento inline que usa somente a largura necessária do elemento que está inserido dentro dela.
```

# Atributos HTML

- Atributos em imagens
```
<img> - Tag de imagem

src = " " - URL da imagem a ser exibida

alt = " " - Texto alternativo caso a imagem não carregue
```

- Atributos em links
```
<a> href=""  alt=""</a>

<a> </a> - Tag de ancora(link)

href = " " - URL que deseja ser referenciada

target = " " 
_blank - Abre o link em outra aba 
self - Abre o link na própria aba
```

# Tabelas

- Exemplo de tabela
```
    <thead>
            <caption><h4>Satélites de Urano</h4></caption>
            <tr>
                <th>Nome</th>
                <th>Data de Descobrimento</th>
            </tr>
        </thead>
        
        <tbody>
            <tr>
                <td>Titânia</td>
                <td>1787</td>
            </tr>
            <tr>
                <td>Oberon</td>
                <td>1787</td>
            </tr>
        </tbody>
    </table>
```

```
<table> </table> - Cria uma tabela
<tr> </tr>  - Linha da tabela  
<th> </th>    - Table Header/Título
<td> </td> - Table Data/elemento da tabela

<thead> </thead> - Agrupa os elementos do head ta tabela/titulos
<tbody> </tbody> - Agrupa os elementos do body da tabela/dados

<caption> </caption> - Legenda/Titulo da tabela
```
        

# Formulários


```
<form action="https://www.google.com/search">
        <label for="q">O que deseja pesquisar ?</label>
        <input type="text" id="q" name="q" placeholder="Nasa, SpaceX, ISS">
        <input type="submit" value="Pesquisar">
    </form>
```
```
<form> </form> - Cria o formulário

action =" " - URL para qual o formulário será enviado

<label for=" "> - ID / Associa o Título do input ao input pelo ID

 </label> 
```

- input type text - input do tipo texto
- id - identificador do input
- name - nome do input mesmo do ID
- placeholder - Texto de fundo dentro do input  
- input type submit - Input do tipo submit/botão enviar.
- value - O que estára escrito no botão

## Validação de formulário

- required - Usado no input para validação dizendo que é obrigatório escrever algo.

- min=" " / max =" " - Mínimo de valor de número e máximo

- size=" " - Número de caracteres máximo

## Tipos de Input

- input type text - input do tipo texto
- input type submit - Input do tipo submit/botão enviar.
- input type number - Input que só aceita números.
- input type email - Input que só aceita emails.
- input type password - Input para senhas.
- input type radio - Input para selecionar uma opção.
- input type checkbox - Input para selecionar uma opção ou mais.
- input type color - Input usado para selecionar cores.
- input type date - Input usado para selecionar datas.
- input type file - Input usado para enviar arquivos.


# Novidades HTML5

-Tag de video
```
<video>
    <source src=" " type=" ">
</video>
```

- video - Tag para adicionar video
- source src - URL do video desejado
- type - Tipo do vídeo


-Tag para audio
```
<audio>
    <source src=" " type=" ">
</audio>
```
## Novos tipos de Input
```
<input type= "url"> - Input para URL
<input type range min=" " max=" "> -  Input para arrastar para o lado
<input type = "time"> - Input para tempo  
```

# Elementos Semânticos

- São elementos/tags com um significado claro

```
<header> </header>  - Cabeçalho tudo que for ficar no topo da página

<nav> </nav> - Barra de navegação 

<aside> </aside> - Elementos que ficam na lateral

<section> </section> - Seção onde você coloca elementos

<article> </article> - Artigo da página/Post de forum, blog jornal

<footer> </footer> - Rodapé da página

<figure> </figure> - Tag de imagem

<figcaption> </figcaption> - Legenda de uma imagem

```