# GIT E GITHUB

## O que é GIT

-   Git é um sistema de controle de versão de arquivos.     
-   Com ele podemos desenvolver projetos colaborativos com facilidade.     
-   Registra diferentes modificações de um arquivo.     
-   Permite recuperar uma versão específica.        
-   Pode resolver os seguintes problemas:       
    -   Perda de arquivos importantes        
    -   Resgate de versão anterior
<hr>

## Fluxo de trabalho

-   Workdir
    -   Diretório de arquivos do projeto no computador.     

-   Index       
    - Área temporária de arquivos       

-   HEAD        
    -   Aponta para o último commit(versão salva) do projeto
<hr>

## O que é GitHub

-   Serviço para hospedar projetos Git      
-   Permite projetos privados ou Open Source        
-   Ajuda a desenvolver um networking entre programadores       
-   Serve como um portfólio online
<hr>

## Principais comandos terminal

- echo [texto desejado]
    -   Apresenta um texto no console

- cd [caminho desejado]
    -   Navega para outra pasta 

-  ls
    -   Mostra os elementos presentes na pasta

-   pwd
    -   Mostra em qual path o usuário está no momento na arvore de diretórios       

-   mkdir [nome da pasta desejado]
    -   Cria uma nova pasta     

-   rm [nome do arquivo]
    -   Apaga um arquivo        

-   rm -rf [nome da pasta]
    -   Apaga uma pasta     

-   sudo [comando]
    -   Permite rodar comandos que necessitam de privilégio de super usuário        

-   touch [nome desejado do arquivo]
    -   Cria ou atualiza um arquivo     

-   cat [nome do arquivo]
    -   Captura o conteúdo de um arquivo e mostra na tela        

-   less [nome do arquivo]
    -   Mostra o conteúdo de um arquivo no console      

-   history
    -   Mostra o histórico de comandos      

-   grep [texto desejado] [arquivo desejado]
    -   Filtra o conteúdo de um arquivo através do texto desejado e mostra na tela o resultado      

-   cp [nome do arquivo] [nome do novo arquivo]
    -   Copia o conteúdo de um arquivo para um novo arquivo     

-   mv [nome do arquivo] [nome do novo arquivo]
    -   Move o conteúdo de arquivo para outro apagando o anterior       

-   clear
    -   Limpa os textos que estão aparecendo no console     

-   code .
    -   Abre o arquivo ou pasta no visual studio code

-   exit
    -   Fecha a sessão atual
<hr>

## Configurando o git

-   $ git config --global user.name "nome"
    -   Comando para adicionar seu nome 

-   $ git config --global user.email "email"  
    -   Comando para adicionar seu email
<hr>

## Criando um repositório

mkdir [nome da pasta]      
    - Cria a pasta desejada     

cd [nome da pasta]          
    - Entra na pasta desejada       

git init  
    - Inicia o git na pasta selecionada
<hr>

## Ciclo de vida dos arquivos

-   Arquivos possuem 2 estados:     
    - Monitorado
    - Não Monitorado        
<br>
-   Arquivos Monitorados:        
    -   Arquivos do último Snapshoot
        -   Podem estar:
            -   Inalterados
            -   Modificados
            -   Selecionados
<br>
-   Arquivos Não Monitorados:
    -   Arquivos que não estavam no último Snapshoot
    -   Arquivos que não estão em seleção
<hr>

## Principais comandos GIT

-   ls 
    - Exibe os arquivos da pasta
-   touch [nomearquivo] 
    -   Cria o arquivo desejado
-   git init 
    - Inicia o git na pasta atual.
-   nano [nomearquivo]  
    -   Abre um editor de texto.
-   git status 
    -    Exibe o atual status do repositório.        
-   git add [nomearquivo]   
    -   Adiciona arquivo e prepara para o commit.
-   git add .   
    -   Adiciona todos os arquivos para commit     
-   git commit -m '[mensagem]'  
    -   Realiza o commit com a mensagem do que foi alterado.
<hr>

## LOG GIT
-   git log 
    -   Exibe o histórico de commits.
-   git log --pretty=oneline    
    -   Exibe apenas as informações importantes do commit de uma forma mais curta.      
-   git log --stat
    -   Exibe o status do log dos commit
<hr>

## Visualizando diferenças
-   git diff / git diff [nomearquivo]
    -   Exibe as diferenças nas alterações do arquivo
<hr>

## Desfazendo alterações
-   git commit --amend
    -   Altera o conteúdo ou a mensagem do último commit
-   git reset HEAD [nomearquivo]
    -  Retira o arquivo que foi preparado para commit
-   git checkout -- [nomearquivo]
    -   Desfaz modificações do arquivo
<hr>

## BRANCHS

-   Branchs(ramos) servem para desenvolvermos features isoladas,     
-   A branch master é a principal,      
-   É possível misturar as branchs usando o comando merge.          
<br>

-   git branch
    -   Exibe as branch/ramos disponíveis

-   git branch [nomedesejado]
    -   Cria uma nova branch/ramo

-   git checkout [nomebranch]
    - Altera para a branch desejada

-   git branch -D [nomebranch]
    -   Deleta a branch desejada

-   git checkout -b [nomebranch]
    -   Cria uma nova branch e ja altera para ela
<hr>

## MERGE

-   Envia as mudanças de uma branch para outra
-   Apenas a branch alvo sofrerá alterações
<br>

-   git merge [nomeBranchAserAdicionada]
    -   Primeiro você altera para a branch master e depois realiza o merge da outra branch
    -   Adiciona as alterações da branch desejada à branch master
<hr>

## CLONE

- git clone [URLdoREPOSITORIO]
    -   Clona um repositório desejado
<hr>

## Criando repositório e enviando para o GitHub

git init    
    -   Inicia o git na pasta

git add README.md                    
    -   Cria um README

git commit -m "mensagem"               
    -   Realiza um commit

git remote add origin [URLdoREPOSITORIO]    HTTPs            
    -   Aqui linka o repositório local do git com o repositório do GitHub 

git push origin master            
    -   Aqui envia os arquivos para o repositório do GitHub, a origem dele(github) e a branch do repositório(master)
<hr>

## Baixando atualizações de um projeto

git pull origin master
    -   Realiza o download dos arquivos da origem master do repositório
<hr>

## Ignorando arquivos

touch .gitignore        
    -   Cria o gitignore que é usado para selecionar os arquivos que não serão enviados para o repositório do git hub, basta colocar os nomes do arquivos dentro dele.

