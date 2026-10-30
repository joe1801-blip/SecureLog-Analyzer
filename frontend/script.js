const botao = document.getElementById("botao-analisar");
const mensagem = document.getElementById("mensagem");

async function analisarRegistros() {
    botao.disabled = true;
    botao.textContent = "Analisando...";
    mensagem.textContent = "";

    try {
        const resposta = await fetch("/api/analisar");
        const dados = await resposta.json();

        if (!resposta.ok) {
            throw new Error(dados.erro || "Não foi possível analisar os registros.");
        }

        document.getElementById("total-sucessos").textContent = dados.sucessos;
        document.getElementById("total-falhas").textContent = dados.falhas;
        document.getElementById("total-registros").textContent = dados.total;

        const tabela = document.getElementById("lista-registros");
        tabela.innerHTML = "";

        if (dados.registros.length === 0) {
            tabela.innerHTML = '<tr><td colspan="2" class="vazio">Nenhum registro válido encontrado.</td></tr>';
        } else {
            dados.registros.forEach((registro) => {
                const linha = document.createElement("tr");
                const ip = document.createElement("td");
                const status = document.createElement("td");
                const etiqueta = document.createElement("span");

                ip.textContent = registro.ip;
                etiqueta.textContent = registro.resultado;
                etiqueta.className = `etiqueta ${registro.resultado.toLowerCase()}`;
                status.appendChild(etiqueta);
                linha.appendChild(ip);
                linha.appendChild(status);
                tabela.appendChild(linha);
            });
        }

        const areaAlertas = document.getElementById("lista-alertas");
        areaAlertas.innerHTML = "";

        if (dados.alertas.length === 0) {
            areaAlertas.innerHTML = '<p class="vazio">Nenhum IP atingiu o limite de falhas.</p>';
        } else {
            dados.alertas.forEach((alerta) => {
                const item = document.createElement("div");
                item.className = "alerta";
                item.textContent = `${alerta.ip} — ${alerta.quantidade} tentativas malsucedidas`;
                areaAlertas.appendChild(item);
            });
        }
    } catch (erro) {
        mensagem.textContent = erro.message;
    } finally {
        botao.disabled = false;
        botao.textContent = "Analisar registros";
    }
}

botao.addEventListener("click", analisarRegistros);
