const btnEnviar = document.querySelector("#btnEnviar");

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault()
    
    let email = document.querySelector("#login-email").value;
    let senha = document.querySelector("#login-senha").value;
    
    if (email === "meuemail@email.com" && senha == "1") {
        window.location.href = './produtos.html';
    } else {
        console.log("Email ou senha incorretos");
        let erro = document.querySelector("#dado-incorreto");
        erro.innerHTML = "Email ou senha incorretos."
    }
})