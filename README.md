# SecureLog Analyzer

O SecureLog Analyzer é um projeto que desenvolvi utilizando Python para analisar registros de acesso e identificar possíveis atividades suspeitas.

A ideia do projeto é verificar tentativas de login, separar os acessos realizados com sucesso daqueles que apresentaram falhas e identificar endereços IP que possuem várias tentativas malsucedidas.

## Tecnologias utilizadas

- Python
- Flask
- HTML
- CSS
- JavaScript

## O que o sistema faz?

- Conta a quantidade de logins realizados com sucesso.
- Conta as tentativas de login com falha.
- Mostra os endereços IP e os resultados dos acessos.
- Identifica IPs com três ou mais tentativas malsucedidas.
- Exibe alertas na interface quando encontra essas situações.

## Resultado do projeto

Esta é a interface desenvolvida para o SecureLog Analyzer:

![Interface do SecureLog Analyzer](imagens/interface.png)

## Como executar o projeto

Primeiro, é necessário ter o Python instalado no computador.

Abra a pasta do projeto no Visual Studio Code e execute o comando abaixo no terminal para instalar o Flask:

```bash
python -m pip install -r requirements.txt
```

Depois, inicie o sistema com:

```bash
python backend/main.py
```

Com o servidor iniciado, abra o navegador e acesse:

http://127.0.0.1:5000

Na página, clique em **Analisar registros** para visualizar os dados do arquivo `backend/logs.txt`.

## Organização dos arquivos

```text
SecureLog-Analyzer/
│
├── backend/
│   ├── main.py
│   └── logs.txt
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── imagens/
│   └── interface.png
│
├── README.md
├── requirements.txt
└── .gitignore
```

## Sobre o desenvolvimento

Desenvolvi este projeto como uma forma de praticar Python e começar a trabalhar com desenvolvimento web.

Durante a criação, pude trabalhar com leitura de arquivos, estruturas condicionais, contadores, dicionários e integração entre Python e uma página web.

Ainda pretendo melhorar o projeto e adicionar novas funcionalidades conforme avanço nos meus estudos.

**Observação:** os registros utilizados são fictícios e servem apenas para testes. A identificação de três falhas é um critério de demonstração e não confirma uma invasão.