/*const lista1 = [];


function separaProdutos(data) {
    for (let i in data) {
        const itens = data[i]
        lista1.push(itens)
    };
}
separaProdutos(data)*/

const ul = document.querySelector('.cards-container');

function criaProdutos(data) {

    let produtos;


    for (let i in data) {
        produtos = data[i]

        const imagem = produtos.img
        const nome = produtos.nameItem
        const descricao = produtos.description
        const preco = produtos.value
        const botao = produtos.add

        const tagLi = document.createElement('li')
        const tagImg = document.createElement('img')
        const tagH2 = document.createElement('h2')
        const tagP = document.createElement('p')
        const tagP2 = document.createElement('p')
        const tagButton = document.createElement('button')

        tagLi.classList.add('card');
        tagImg.src = imagem;
        tagH2.innerText = nome;
        tagP.innerText = descricao;
        tagP2.innerText = `R$ ${preco},00`;
        tagButton.innerText = botao;

        tagLi.append(tagImg, tagH2, tagP, tagP2, tagButton);
        ul.appendChild(tagLi)
    }
    
}
criaProdutos(data)

