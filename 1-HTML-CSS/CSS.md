# CSS

## - Básico do CSS

 -  Forma de incluir o arquivo css com a página HTML

```
<link rel="stylesheet" href= " ">
```
## - Sintaxe Css

```
Sintaxe css

h1 {
    color:red;
}

h1 - seletor  
color - propriedade  
red - valor  
```


    
## - Cores

-Principais formas de definir cores

- Nome (red,green,blue ,etc)
- Hexadecimal  (#FF0000 - Vermelho)
- RGB
 

## - Fontes

- font-family : Seleciona a familia de fonte
- font-size: Altera o tamanho da fonte
- font-weight: Altera peso da fonte
- line-height: Altera o espaçamento entre as linhas
- text-align: center/right/left - Alinha o texto no centro
- text-decoration: Decoração do texto
- color : Altera cor do texto

## - Background 

- background-color : Cor de fundo do elemento
- background-image: url() : Imagem de fundo do elemento
- background-repeat: repeat/no-repeat : Se o fundo vai ser repetir ou não.
- background-size: cover/contain - Tamanho do background.

## - Border

- border: 1px solid black - Define uma borda com largura de 1px, no estilo sólido e na cor preta.      
<br>

# Seletores

- Para definir uma classe no HTML.
- Pode ser usada inúmeras vezes
```
class= "nome-da-classe"
```
- Seletor de classe sempre inicia com um ponto e o nome da classe.
```
.class {

}
```
<br>

- Para definir um ID no HTML.
```
id = "nome-do-id
```

- Seletor de id sempre inicia com o jogo da velha # seguido do nome do id.
```
#nome-do-id {

}
```

- Seletor de tag.
- Selecione a tag diretamente.
```
h1 {

}
```

# Seletores avançados

- Seletor que seleciona todos os elementos da página.
```
* {

}
```

- Seletor de descendência.
```
li a {

}

- Seleciona o elemento 'a' que está dentro do elemento 'li'.
```

- Seletor de elemento filho.
```
li > a {

}

- Seleciona o elemento 'a' filho direto do elemento 'li'.
```

- Seletor de atributo
```
a[href='/recibo] - Seleciona o elemento 'a' com o atributo 'href' desejado.
```

## Pseudoclasses

- Seleciona o segundo elemento do tipo 'li'
```
li:nth-of-type(2){

}
```

## BOX Model

- Content: O conteúdo da caixa 

- Padding: Top/Right/Bottom/Left - Espaçamento ao redor de um conteúdo

- Border : Top/Right/Bottom/Left - Uma borda que fica entre a margin e o padding 

- Margin: Top/Right/Bottom/Left - Limpa uma área fora da border
<br>
<br>
# BULMA - Framework CSS

- Link para adiconá-lo ao seu projeto:
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css">
```

- # Classes no Bulma

- section: Cria uma sessão
- container: Cria um container
- title: Cria um Título
- subtitle: Cria um Subtítulo
