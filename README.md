<!-- LOGO DO PROJETO -->
<br />
<div align="center">
  <img src="Layout/Logo-removebg.png" alt="Logo" width="150" height="150">

  <h3 align="center">Desafio Roman</h3>

  <p align="center">
    A plataforma de sugestões de projetos!
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore o projeto »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Ricardo-rtc">Ricardo Tamahe</a>
    ·
    <a href="https://github.com/fernandopereira25608">Fernado Pereira</a>
    ·
    <a href="https://github.com/hinriqui">Henrique Costa</a>
  </p>
</div>


<!-- SOBRE O PROJETO -->
## Sobre o projeto
<p align="justify">Os professores de uma escola de tecnologia, ao longo do tempo, criam diversas situações-problema com escopos de projetos propostos aos alunos, porém isto se dá de forma individualizada, com pouco compartilhamento e uniformidade entre os colegas de equipe.</p>
<p align="justify">Portanto, Roman é um sistema de propostas de projetos que serão compartilhados entre os professores. Este é o desenvolvimento de uma plataforma para sugestão de projetos, onde a interface com o usuário é uma <strong>aplicação mobile</strong>.</p>

## Ambientação

* [React Native](https://reactjs.org/)
* [ASP.NET Web API](https://dotnet.microsoft.com/apps/aspnet/apis)

## Instalação

1. Clone o repositório
   ```sh
   git clone https://github.com/Ricardo-rtc/Desafio-Roman
   ```

2. Execute os scripts da pasta [BD](https://github.com/Ricardo-rtc/Desafio-Roman/tree/main/BD)\
   ![image](https://user-images.githubusercontent.com/82384571/144037481-dbbd3607-aa7d-4186-9254-e566987a7c2c.png)

   
3. Altere a linha 34 da [DesafioRomanContext.cs](https://github.com/Ricardo-rtc/Desafio-Roman/blob/main/Back-end/desafio_roman_webApi/desafio_roman_webApi/Contexts/DesafioRomanContext.cs) com as informações do banco de dados gerado anteriormente
   ```cs
   optionsBuilder.UseSqlServer("Data Source=Nome do servidor; initial catalog=Nome do catálogo; user Id=Logon de autenticação; pwd=Senha de autenticação;");
   ```
   
4. Altere a linha 22 da [launchSettings.json](https://github.com/Ricardo-rtc/Desafio-Roman/blob/main/Back-end/desafio_roman_webApi/desafio_roman_webApi/Properties/launchSettings.json) com seu respectivo ip
   ```json
   "applicationUrl": "http://seu-endereço-ip:5000",
   ```

5. Abra o prompt de comando e execute a API
   ```cmd
   cd Back-end\desafio_roman_webApi\desafio_roman_webApi
   dotnet run
   ```
   
6. Instale os pacotes NPM da [RomanMobile](https://github.com/Ricardo-rtc/Desafio-Roman/tree/main/RomanMobile)
   ```sh
   npm install
   ```
   
7. Execute a interface mobile [RomanMobile](https://github.com/Ricardo-rtc/Desafio-Roman/tree/main/RomanMobile)
   ```sh
   npm react-native run-android
   ```
    
    
