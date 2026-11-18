
const usuarioCorreto = "AyrtonMagic1988MP44";
const senhaCorreta = "Timão1910Libertadores2012";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        window.location.href = "sucesso.html";
    } else {
        let erro = "";

        if (usuario !== usuarioCorreto && senha !== senhaCorreta) {
            erro = "ambos";
        } else if (usuario !== usuarioCorreto) {
            erro = "usuario";
        } else {
            erro = "senha";
        }

        window.location.href = "falhou.html?erro=" + erro;
    }
});
