document.addEventListener("DOMContentLoaded", function() {
    // Adiciona um ouvinte de evento para o envio do formulário
    document.querySelector(".loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Previne o envio do formulário padrão

        // Obtém os valores dos campos de entrada
        var username = this.querySelector("input[name='usuario']").value;
        var password = this.querySelector("input[name='senha']").value;

        // Verifica se os campos estão vazios
        if (username.trim() === "" || password.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return; // Sai da função sem continuar a validação
        }
          
          // Chama a função para exibir o alerta assim que a página carregar
          


        // Aqui você pode adicionar lógica adicional para validar o nome de usuário e senha.
        // Por exemplo, enviar uma solicitação AJAX para verificar as credenciais no servidor.

        // Exemplo simples de validação (usuário e senha iguais a "admin")
        if (username === "admin" && password === "admin") {
            // Aqui você pode redirecionar o usuário ou executar outras ações após o login bem-sucedido
            window.location.href = "http://127.0.0.1:5500/index.html";
        } else {
            alert("Usuário ou senha incorretos. Por favor, tente novamente.");
        }
    });
});