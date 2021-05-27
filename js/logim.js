function logar(){
    let email = document.getElementById("email")
    let senha = document.getElementById("password")
    
    if(email.value == "admin@admin.com" && senha.value == "admin"){
        localStorage.setItem("acesso",true)
        alert('Logado com sucesso')
        window.location.href = "index.html"
    }else{
        alert("Usuario ou senha invalidos!")
    }
}