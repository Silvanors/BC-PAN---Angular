# Requisitos

1. Node (nodejs.org)

2.No Visual Studio code (www.code.visualstudio.com) instalar as extenções abaixo:
   - Angular Language Service
   - Auto Close Tag
   - Auto Rename Tag
   - Tema (*opcional) 
   - Icones (*opcional) "Material Icon Theme"
   - editorConfig, Prettier, eslint:
     - ESLint
     - Prettier
     - EditorConfig for Vs code

3. Angular
   - npm install -g @angular/cli@14.1.2
   - Após instalação verificar o ng com o comando ng help
   - Em caso de erro, seguir os passos abaixo na ordem:
     - abrir o power shell como administrador e executar "Get-ExecutionPolicy -List"
     - desistalar o pacote com o comando "npm uninstall -g @angular/cli"
     - limpar cache com os comandos "npm cache clean --force", em seguida "npm cache verify"
     - executar o comando no shell "Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser"
     -por fim, reinstalar o angula "npm install -g @angular/cli@14.1.2"

4. Criar projeto no angular
    - comando: ng new "nome_do_projeto"
    - iniciar servidor com: ng serve
    - componentes no projeto com o comando: ng genarate component title ou ng g c title
    - na documentação do angular recaptular os 8 ciclos de vida do componente - "Component lifecycle" se necessário
    - Se precisar gerar um módulo: "ng g m lista", aqui criamos um módulo em um apasta que se chamará "lista" no projeto
