function gerarReceita() {
    const ingredientes = document.getElementById("ingredientes").value;
    const resultado = document.getElementById("resultado");
    const receitaDiv = document.getElementById("receita");
    const loading = document.getElementById("loading");

    if (ingredientes.trim() === "") {
        alert("Digite pelo menos 1 ingrediente!");
        return;
    }

    resultado.classList.remove("hidden");
    receitaDiv.innerHTML = "";
    loading.classList.remove("hidden");

    setTimeout(() => {
        loading.classList.add("hidden");

        receitaDiv.innerHTML = `
            <h3>🍮 Sobremesa Criada!</h3>
            <p><strong>Ingredientes informados:</strong> ${ingredientes}</p>
            <br>
            <h4>🍰 Receita Sugerida</h4>
            <p><strong>Nome:</strong> Doce Surpresa SweetMind</p>
            <p><strong>Tempo:</strong> 25 minutos</p>
            <p><strong>Modo de preparo:</strong> Misture todos os ingredientes e leve à geladeira por 2 horas.</p>
            <p><strong>Dica:</strong> Adicione chocolate derretido por cima para deixar mais cremoso ✨</p>
        `;
    }, 1500);
}
