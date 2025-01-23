document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário para que o JavaScript gerencie o comportamento

    // Dados de login para administrador
    const adminCredentials = {
        username: "adgramado1", // Usuário do administrador
        password: "adgramado1"      // Senha do administrador
    };

    // Dados de login para usuário padrão
    const userCredentials = {
        username: "admin", // Usuário padrão
        password: "adgramado2"      // Senha do usuário padrão
    };

    // Obtém os valores do formulário
    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;

    // Valida o login para administrador
    if (inputUsername === adminCredentials.username && inputPassword === adminCredentials.password) {
        // Redireciona para a página do administrador
        window.location.href = 'admin-dashboard.html'; // Página com permissões de edição/adicionar
    } 
    // Valida o login para usuário padrão
    else if (inputUsername === userCredentials.username && inputPassword === userCredentials.password) {
        // Redireciona para a página do usuário
        window.location.href = 'user-dashboard.html'; // Página apenas para visualização
    } 
    // Caso os dados sejam inválidos
    else {
        // Exibe uma mensagem de erro
        document.getElementById('error-message').textContent = "Usuário ou senha incorretos!";
    }
});
