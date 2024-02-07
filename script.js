document.getElementById("login-form").addEventListener("submit", function(event){
    event.preventDefault();
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    
    // Aqui você pode adicionar a lógica de validação do usuário e senha
    
    // Exemplo simples apenas para ilustração
    if(usuario === "marlon" && senha === "12345") {
        alert("Login bem-sucedido!");
        // Redirecionamento ou qualquer outra ação após o login ser bem-sucedido
    } else {
        alert("Nome de usuário ou senha inválidos. Por favor, tente novamente.");
    }
});