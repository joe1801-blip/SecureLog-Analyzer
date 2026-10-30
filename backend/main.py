from pathlib import Path
from flask import Flask, jsonify, send_from_directory

BASE_DIR = Path(__file__).resolve().parent.parent
FRONTEND_DIR = BASE_DIR / "frontend"
LOGS_FILE = Path(__file__).resolve().parent / "logs.txt"

app = Flask(__name__, static_folder=str(FRONTEND_DIR))


def analisar_logs():
    sucessos = 0
    falhas = 0
    tentativas_ip = {}
    registros = []

    if not LOGS_FILE.exists():
        raise FileNotFoundError("O arquivo logs.txt não foi encontrado.")

    with LOGS_FILE.open("r", encoding="utf-8") as arquivo:
        for linha in arquivo:
            linha = linha.strip()

            if not linha:
                continue

            dados = linha.split(",")

            if len(dados) != 2:
                continue

            ip = dados[0].strip()
            resultado = dados[1].strip().upper()

            if resultado == "SUCESSO":
                sucessos += 1
            elif resultado == "FALHA":
                falhas += 1
                tentativas_ip[ip] = tentativas_ip.get(ip, 0) + 1
            else:
                continue

            registros.append({"ip": ip, "resultado": resultado})

    alertas = [
        {"ip": ip, "quantidade": quantidade}
        for ip, quantidade in tentativas_ip.items()
        if quantidade >= 3
    ]

    return {
        "sucessos": sucessos,
        "falhas": falhas,
        "total": len(registros),
        "registros": registros,
        "alertas": alertas
    }


@app.route("/")
def inicio():
    return send_from_directory(FRONTEND_DIR, "index.html")


@app.route("/api/analisar")
def api_analisar():
    try:
        return jsonify(analisar_logs())
    except FileNotFoundError as erro:
        return jsonify({"erro": str(erro)}), 404


@app.route("/<path:arquivo>")
def arquivos_frontend(arquivo):
    return send_from_directory(FRONTEND_DIR, arquivo)


if __name__ == "__main__":
    app.run(debug=True)
