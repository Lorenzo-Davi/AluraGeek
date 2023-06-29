//https://img.lojasrenner.com.br/item/599415826/large/3.jpg
//Uma bela camisa

const form = document.querySelector(".adicionar");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const img = e.target.elements['add-img'];
    const categoria = e.target.elements['add-categoria'];
    const nome = e.target.elements['add-nome'];
    const preco = e.target.elements['add-preco'];
    const descricao = e.target.elements['add-desc'];

    const novoProduto = {
        "img": img.value,
        "categoria": categoria.value,
        "nome": nome.value,
        "preco": preco.value,
        "descricao": descricao.value
    }

    localStorage.setItem("produto", JSON.stringify(novoProduto));
    window.location.href = "./produtos.html";
})