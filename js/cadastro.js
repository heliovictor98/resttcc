function cadastrarPessoa(){
    let email = document.getElementById("email").value
    let nome = document.getElementById("nome").value
    let senha = document.getElementById("password").value
    let repeteSenha = document.getElementById("repeteSenha").value

    if(nome == ""){
        document.getElementById('erro-nome').innerHTML = "Informe o nome!"
        document.getElementById('nome').focus();
        return false
    }else{
        document.getElementById('erro-nome').innerHTML = ""
    }
    if(email == ""){
        document.getElementById('erro-email').innerHTML = "Informe o Email!"
        document.getElementById('email').focus();
        return false
    }else{
        document.getElementById('erro-email').innerHTML = ""
    }

    
    if(senha == "" && senha.lenght <= 5){
        alert('A senha deve conter minimo 6 caracteres')
        document.getElementById('password').focus();
        return false
    }
    if(repeteSenha == "" && repeteSenha.lenght <= 5){
        alert('A senha deve conter minimo 6 caracteres')
        document.getElementById('repeteSenha').focus();
        return false
    }
    if(senha != repeteSenha){
        alert("Senha Diferente")
        document.getElementById('senha').focus();
        document.getElementById('repeteSenha').focus();
        return false
    }else{
        alert("Cadastrado com sucesso")
    }
}