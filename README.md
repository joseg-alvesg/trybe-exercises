Este repositorio está destinado aos exercicios de aprendizado da Trybe

Criação e versionamento de git passo a passo:

1º Criação da pasta onde estara localizao o projeto em questão
ex:
    mkdir /home/"usuario"/trybe-exercises/


2º inicialização do git dentro da pasta especifica
ex:
    cd ~/trybe-exercises
    git init

3º criação do arquivo README.md

4º versionamento: 
   a partir desse momento você já está na primeira versão do seu projeto dentro do git main.
   deste ponto é importante seguir com a criação das branchs para não haver nenhuma quebra do seu projeto

    $ git branch nome
    //(este comando cria uma nova ramificação do projeto, copiando o projeto original em "uma nova pasta"(uma ramificação do projeto original" assim seu projeto original estara seguro de alterações errada.
    
    $ git checkout nome
    // para mudar o terminal para a ramificação em questão
    
    após feitas as alterações e garantindo que está tudo correto dentro do projeto
    
    $ git status
    // verifica todos os arquivos e pastas que foram alterados dentro do ramo em questão
    
    $ git add .
    // manda todas as alterações para a fase de stage
    ou
    $ git add nome_do_arquivo_alterado
    // manda os arquivos alterados para a fase de stage
    # fase stage te permite certificar de que há algo de errado com o projeto antes de efetivamente alterar a versão a qual está configurando
    
    $ git commit -m "texto informativo sobre as alterações feitas"
    // Este comando atualiza de fato a versão a qual se está configurando
    
    deste ponto em diante caso queira efetivar o projeto, basta voltar a pasta main utilizando o comando git checkout e utilizar o comando
    $ git merge nome_da_versão_alterada
    para integrar a versão alterada ao projeto principal
