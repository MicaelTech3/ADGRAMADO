// Função para lidar com o envio do formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário para que o JavaScript gerencie o comportamento

    // Dados de login para administrador e usuário padrão
    const adminCredentials = {
        username: "admin",
        password: "adgramado2025"
    };

    const userCredentials = {
        username: "adgramado",
        password: "adgramado1"
    };

    // Obtém os valores do formulário
    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;

    // Verifica as credenciais e redireciona para a página apropriada
    if (validateLogin(inputUsername, inputPassword, adminCredentials)) {
        window.location.href = 'admin-dashboard.html'; // Página com permissões de edição/adicionar
    } else if (validateLogin(inputUsername, inputPassword, userCredentials)) {
        window.location.href = 'user-dashboard.html'; // Página apenas para visualização
    } else {
        showErrorMessage("Usuário ou senha incorretos!");
    }
});

// Função para validar o login
function validateLogin(username, password, credentials) {
    return username === credentials.username && password === credentials.password;
}

// Função para exibir mensagem de erro
function showErrorMessage(message) {
    document.getElementById('error-message').textContent = message;
}

// Função para visualizar a nota fiscal no modal
function viewNotaFiscal(index) {
    const records = JSON.parse(localStorage.getItem('records')) || [];
    const notaFiscal = records[index].notaFiscal;
    
    if (notaFiscal) {
        displayNotaFiscal(notaFiscal);
    } else {
        alert("Nenhuma nota fiscal anexada.");
    }
}

// Função para exibir a nota fiscal no modal
function displayNotaFiscal(notaFiscal) {
    // Verifica se o conteúdo é uma URL de imagem
    if (notaFiscal.match(/\.(jpeg|jpg|gif|png)$/)) {
        // Se for uma imagem, exibe a imagem no modal
        document.getElementById('nota-content').innerHTML = `<img src="${notaFiscal}" alt="Nota Fiscal" style="width:100%;">`;
    } else {
        // Caso contrário, exibe o conteúdo como texto
        document.getElementById('nota-content').textContent = notaFiscal;
    }

    // Exibe o modal
    document.getElementById('notaModal').style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('notaModal').style.display = "none";
}
