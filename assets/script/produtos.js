const galeria = document.querySelector(".galeria__produtos");
const novoProdutoString = localStorage.getItem("produto");
const novoProduto = JSON.parse(novoProdutoString)
console.log(novoProduto)

criaElemento(novoProduto)

function criaElemento(produto){
    console.log("teste");
    const novoItem = document.createElement('div');
    novoItem.classList.add("galeria__produtos__item");
    
    const imgItem = document.createElement('img');
    imgItem.classList.add("galeria__produtos__item--foto");
    imgItem.src = produto.img;
    
    const nomeItem = document.createElement('h3');
    nomeItem.classList.add("galeria__produtos__item--titulo");
    nomeItem.innerHTML = produto.nome;
    
    const precoItem = document.createElement('p');
    precoItem.classList.add("galeria__produtos__item--preco");
    precoItem.innerHTML = produto.preco;

    const linkItem = document.createElement('a');
    linkItem.classList.add("galeria__produtos__item--link")
    linkItem.innerHTML = "Ver produto";

    console.log(imgItem)
    novoItem.appendChild(imgItem);
    novoItem.appendChild(nomeItem);
    novoItem.appendChild(precoItem);
    novoItem.appendChild(linkItem);
    galeria.appendChild(novoItem);
}
