# SecureLog Analyzer — versão web

Projeto acadêmico em Python com uma interface feita em HTML, CSS e JavaScript.

## Requisitos

- Python 3 instalado
- Visual Studio Code

## Instalação

Abra o terminal do VS Code na pasta principal do projeto e execute:

```bash
python -m pip install -r requirements.txt
```

## Como iniciar

No terminal, execute:

```bash
python backend/main.py
```

Depois, abra o navegador no endereço:

http://127.0.0.1:5000

Clique em **Analisar registros** para carregar os dados de `backend/logs.txt`.

## Estrutura

- `backend/main.py`: servidor Flask e análise dos registros.
- `backend/logs.txt`: registros fictícios usados no exemplo.
- `frontend/index.html`: estrutura da página.
- `frontend/style.css`: aparência da interface.
- `frontend/script.js`: interação com a página.
- `requirements.txt`: dependência Flask.

Os registros são fictícios. O alerta de três falhas é um critério didático e não comprova uma invasão.
