/* =====================================================
   CONFIGURAÇÕES
===================================================== */

const CONFIG = {

    nomeLoja:"Minha Loja",

    whatsapp:"5500000000000"

};


/* =====================================================
   CARROSSEL
===================================================== */

const heroSlides =
    document.getElementById(
        "heroSlides"
    );

const slides =
    document.querySelectorAll(
        ".hero-slide"
    );

const indicadores =
    document.querySelectorAll(
        ".hero-indicator"
    );

const botaoAnterior =
    document.getElementById(
        "heroAnterior"
    );

const botaoProximo =
    document.getElementById(
        "heroProximo"
    );

const hero =
    document.getElementById(
        "hero"
    );


/*
    Slide atualmente exibido.
*/

let slideAtual = 0;


/*
    Tempo entre cada troca automática.

    5 segundos.
*/

const TEMPO_SLIDE = 5000;


/*
    Variável responsável pelo intervalo.
*/

let intervaloCarrossel;


/* =====================================================
   MOSTRAR SLIDE
===================================================== */

function mostrarSlide(numero){

    /*
        Se passar do último,
        volta para o primeiro.
    */

    if(numero >= slides.length){

        numero = 0;

    }


    /*
        Se voltar antes do primeiro,
        vai para o último.
    */

    if(numero < 0){

        numero =
            slides.length - 1;

    }


    slideAtual = numero;


    /*
        AQUI ESTÁ A PRINCIPAL MUDANÇA.

        Em vez de trocar opacity,
        movimentamos o conjunto de imagens
        horizontalmente.

        Exemplo:

        Slide 1:
        translateX(0%)

        Slide 2:
        translateX(-100%)

        Slide 3:
        translateX(-200%)

        Slide 4:
        translateX(-300%)
    */

    heroSlides.style.transform =
        `translateX(-${slideAtual * 100}%)`;


    /*
        Atualiza os indicadores.
    */

    indicadores.forEach(
        (indicador,index) => {

            indicador.classList.toggle(
                "ativo",
                index === slideAtual
            );

        }
    );

}


/* =====================================================
   PRÓXIMO SLIDE
===================================================== */

function proximoSlide(){

    mostrarSlide(
        slideAtual + 1
    );

}


/* =====================================================
   SLIDE ANTERIOR
===================================================== */

function slideAnterior(){

    mostrarSlide(
        slideAtual - 1
    );

}


/* =====================================================
   INICIAR CARROSSEL AUTOMÁTICO
===================================================== */

function iniciarCarrossel(){

    pararCarrossel();


    intervaloCarrossel =
        setInterval(
            proximoSlide,
            TEMPO_SLIDE
        );

}


/* =====================================================
   PARAR CARROSSEL
===================================================== */

function pararCarrossel(){

    clearInterval(
        intervaloCarrossel
    );

}


/* =====================================================
   BOTÃO PRÓXIMO
===================================================== */

botaoProximo.addEventListener(
    "click",
    function(){

        proximoSlide();

        iniciarCarrossel();

    }
);


/* =====================================================
   BOTÃO ANTERIOR
===================================================== */

botaoAnterior.addEventListener(
    "click",
    function(){

        slideAnterior();

        iniciarCarrossel();

    }
);


/* =====================================================
   INDICADORES
===================================================== */

indicadores.forEach(
    indicador => {

        indicador.addEventListener(
            "click",
            function(){

                const numero =
                    Number(
                        this.dataset.slide
                    );


                mostrarSlide(
                    numero
                );


                iniciarCarrossel();

            }
        );

    }
);


/* =====================================================
   PAUSAR AO PASSAR O MOUSE
===================================================== */

hero.addEventListener(
    "mouseenter",
    function(){

        pararCarrossel();

    }
);


hero.addEventListener(
    "mouseleave",
    function(){

        iniciarCarrossel();

    }
);


/* =====================================================
   INICIAR
===================================================== */

mostrarSlide(0);

iniciarCarrossel();


/* =====================================================
   PRODUTOS
===================================================== */

const produtos = [

{
    id:1,
    nome:"Lâmpada LED 12W",
    categoria:"lampadas",
    categoriaNome:"Lâmpadas",
    codigo:"LED-0012",
    preco:12.90,
    imagem:"https://via.placeholder.com/600x500?text=Lampada+LED",
    descricao:"Lâmpada LED de alta eficiência, indicada para ambientes residenciais e comerciais."
},

{
    id:2,
    nome:"Lâmpada LED 9W",
    categoria:"lampadas",
    categoriaNome:"Lâmpadas",
    codigo:"LED-0009",
    preco:null,
    imagem:"https://via.placeholder.com/600x500?text=Lampada+9W",
    descricao:"Lâmpada LED econômica para iluminação residencial."
},

{
    id:3,
    nome:"Spot LED Direcionável",
    categoria:"spots",
    categoriaNome:"Spots",
    codigo:"SPOT-001",
    preco:null,
    imagem:"https://via.placeholder.com/600x500?text=Spot+LED",
    descricao:"Spot LED direcionável para iluminação de destaque e decoração."
},

{
    id:4,
    nome:"Plafon LED 24W",
    categoria:"plafons",
    categoriaNome:"Plafons",
    codigo:"PLAFON-0024",
    preco:null,
    imagem:"https://via.placeholder.com/600x500?text=Plafon+LED",
    descricao:"Plafon LED com iluminação uniforme para ambientes residenciais e comerciais."
},

{
    id:5,
    nome:"Fita LED 5 Metros",
    categoria:"led",
    categoriaNome:"Fitas e LED",
    codigo:"FITA-LED-005",
    preco:null,
    imagem:"https://via.placeholder.com/600x500?text=Fita+LED",
    descricao:"Fita LED para iluminação decorativa de ambientes."
},

{
    id:6,
    nome:"Interruptor Simples",
    categoria:"eletrica",
    categoriaNome:"Materiais elétricos",
    codigo:"INT-001",
    preco:null,
    imagem:"https://via.placeholder.com/600x500?text=Interruptor",
    descricao:"Interruptor simples para instalações elétricas residenciais."
}

];


/* =====================================================
   FORMATAR PREÇO
===================================================== */

function formatarPreco(preco){

    if(
        preco === null ||
        preco === undefined
    ){

        return "Consulte";

    }

    return preco.toLocaleString(
        "pt-BR",
        {
            style:"currency",
            currency:"BRL"
        }
    );

}


/* =====================================================
   WHATSAPP
===================================================== */

function linkWhatsApp(produto=null){

    let mensagem;


    if(produto){

        mensagem =
            `Olá! Gostaria de saber o preço e ` +
            `a disponibilidade do produto "${produto.nome}" ` +
            `(código ${produto.codigo}).`;

    }else{

        mensagem =
            "Olá! Gostaria de saber mais informações sobre os produtos da loja.";

    }


    return(
        "https://wa.me/" +
        CONFIG.whatsapp +
        "?text=" +
        encodeURIComponent(
            mensagem
        )
    );

}


/* =====================================================
   CARD DO PRODUTO
===================================================== */

function criarCard(produto){

    return `

    <article class="product-card">

        <div class="product-image">

            <img
                src="${produto.imagem}"
                alt="${produto.nome}"
                loading="lazy"
            >

        </div>


        <div class="product-info">

            <span class="product-category">
                ${produto.categoriaNome}
            </span>


            <h3>
                ${produto.nome}
            </h3>


            <p>
                ${produto.descricao}
            </p>


            <strong class="product-price">

                ${
                    produto.preco !== null
                    ? formatarPreco(produto.preco)
                    : "Consulte"
                }

            </strong>


            <button
                type="button"
                class="btn btn-primary product-button add-cart-button"
                data-add-cart="${produto.id}"
            >
                Adicionar ao carrinho
            </button>

        </div>

    </article>

    `;

}


/* =====================================================
   MOSTRAR PRODUTOS
===================================================== */

function mostrarProdutos(lista){

    const container =
        document.getElementById(
            "listaProdutos"
        );

    const nenhum =
        document.getElementById(
            "nenhumProduto"
        );


    if(!lista.length){

        container.innerHTML = "";

        nenhum.style.display =
            "block";

        return;

    }


    nenhum.style.display =
        "none";


    container.innerHTML =
        lista
        .map(criarCard)
        .join("");

}


/* =====================================================
   FILTRO DE PRODUTOS
===================================================== */

function filtrarProdutos(){

    const busca =
        document
        .getElementById("busca")
        .value
        .toLowerCase()
        .trim();


    const categoria =
        document
        .getElementById(
            "filtroCategoria"
        )
        .value;


    const resultado =
        produtos.filter(
            produto => {

                const correspondeBusca =

                    !busca ||

                    produto.nome
                    .toLowerCase()
                    .includes(busca) ||

                    produto.descricao
                    .toLowerCase()
                    .includes(busca) ||

                    produto.codigo
                    .toLowerCase()
                    .includes(busca);


                const correspondeCategoria =

                    !categoria ||

                    produto.categoria ===
                    categoria;


                return(
                    correspondeBusca &&
                    correspondeCategoria
                );

            }
        );


    mostrarProdutos(
        resultado
    );

}


/* =====================================================
   BUSCA
===================================================== */

document
.getElementById("busca")
.addEventListener(
    "input",
    filtrarProdutos
);


document
.querySelectorAll(".catalog-category")
.forEach(
    categoria => {

        categoria.addEventListener(
            "click",
            function(){

                document
                .querySelectorAll(".catalog-category")
                .forEach(item => {
                    item.classList.remove("ativo");
                });

                this.classList.add("ativo");

                document
                .getElementById("filtroCategoria")
                .value =
                    this.dataset.category;

                filtrarProdutos();

            }
        );

    }
);


/* =====================================================
   CATEGORIAS
===================================================== */

document
.querySelectorAll(".category-card")
.forEach(
    categoria => {

        categoria.addEventListener(
            "click",
            function(){

                const valor =
                    this.dataset.category;


                document
                .getElementById(
                    "filtroCategoria"
                )
                .value =
                    valor;


                filtrarProdutos();

            }
        );

    }
);


/* =====================================================
   MENU MOBILE
===================================================== */

const menuButton =
    document.getElementById(
        "menuMobile"
    );

const menu =
    document.getElementById(
        "menu"
    );


menuButton.addEventListener(
    "click",
    function(){

        const aberto =
            menu.classList.toggle(
                "aberto"
            );


        this.setAttribute(
            "aria-expanded",
            aberto
        );


        this.innerHTML =
            aberto
            ? "✕"
            : "☰";

    }
);


document
.querySelectorAll(".menu a")
.forEach(
    link => {

        link.addEventListener(
            "click",
            function(){

                menu.classList.remove(
                    "aberto"
                );


                menuButton.innerHTML =
                    "☰";


                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    }
);


/* =====================================================
   LINKS WHATSAPP
===================================================== */

document
.querySelectorAll(".whatsapp-link")
.forEach(
    link => {

        link.href =
            linkWhatsApp();

        link.target =
            "_blank";

        link.rel =
            "noopener noreferrer";

    }
);


/* =====================================================
   FORMULÁRIO
===================================================== */

document
.getElementById("formContato")
.addEventListener(
    "submit",
    function(event){

        event.preventDefault();


        const nome =
            document
            .getElementById("nome")
            .value
            .trim();


        const telefone =
            document
            .getElementById("telefone")
            .value
            .trim();


        const mensagem =
            document
            .getElementById("mensagem")
            .value
            .trim();


        const texto =

            `Olá! Meu nome é ${nome}. ` +

            (
                telefone
                ? `Meu telefone é ${telefone}. `
                : ""
            ) +

            mensagem;


        const url =

            "https://wa.me/" +
            CONFIG.whatsapp +
            "?text=" +
            encodeURIComponent(
                texto
            );


        window.open(
            url,
            "_blank"
        );

    }
);


/* =====================================================
   CARREGAR PRODUTOS
===================================================== */

mostrarProdutos(
    produtos
);



/* =====================================================
   CARRINHO DE COMPRAS
===================================================== */

let carrinho = [];

const cartOverlay = document.getElementById("cartOverlay");
const abrirCarrinho = document.getElementById("abrirCarrinho");
const fecharCarrinho = document.getElementById("fecharCarrinho");
const itensCarrinho = document.getElementById("itensCarrinho");
const contadorCarrinho = document.getElementById("contadorCarrinho");
const abrirCarrinhoFlutuante = document.getElementById("abrirCarrinhoFlutuante");
const contadorCarrinhoFlutuante = document.getElementById("contadorCarrinhoFlutuante");
const totalCarrinho = document.getElementById("totalCarrinho");
const solicitarOrcamento = document.getElementById("solicitarOrcamento");


function formatarTotalCarrinho(valor){

    if(valor <= 0){
        return "R$ 0,00";
    }

    return valor.toLocaleString(
        "pt-BR",
        {
            style:"currency",
            currency:"BRL"
        }
    );

}


function quantidadeTotalCarrinho(){

    return carrinho.reduce(
        (total,item) => total + item.quantidade,
        0
    );

}


function atualizarCarrinho(){

    const quantidade = quantidadeTotalCarrinho();

    contadorCarrinho.textContent = quantidade;
    contadorCarrinhoFlutuante.textContent = quantidade;

    if(!carrinho.length){

        itensCarrinho.innerHTML = `
            <div class="cart-empty">
                <strong>Seu carrinho está vazio.</strong>
                <p>Adicione os produtos que deseja incluir no orçamento.</p>
            </div>
        `;

        totalCarrinho.textContent = "R$ 0,00";
        return;

    }


    itensCarrinho.innerHTML =
        carrinho.map(item => `

            <div class="cart-item">

                <div class="cart-item-image">
                    <img
                        src="${item.imagem}"
                        alt="${item.nome}"
                    >
                </div>

                <div class="cart-item-info">

                    <h4>${item.nome}</h4>

                    <small>Código: ${item.codigo}</small>

                    <div class="cart-item-price">
                        ${
                            item.preco !== null
                            ? formatarPreco(item.preco)
                            : "Preço sob consulta"
                        }
                    </div>

                    <div class="cart-quantity">

                        <button
                            type="button"
                            data-cart-action="menos"
                            data-cart-id="${item.id}"
                            aria-label="Diminuir quantidade"
                        >
                            −
                        </button>

                        <span>${item.quantidade}</span>

                        <button
                            type="button"
                            data-cart-action="mais"
                            data-cart-id="${item.id}"
                            aria-label="Aumentar quantidade"
                        >
                            +
                        </button>

                    </div>

                </div>

                <button
                    type="button"
                    class="cart-remove"
                    data-cart-action="remover"
                    data-cart-id="${item.id}"
                >
                    Remover
                </button>

            </div>

        `).join("");


    const total =
        carrinho.reduce(
            (soma,item) => {

                if(item.preco === null){
                    return soma;
                }

                return soma + (item.preco * item.quantidade);

            },
            0
        );


    totalCarrinho.textContent =
        formatarTotalCarrinho(total);

}


function adicionarAoCarrinho(id){

    const produto =
        produtos.find(
            item => item.id === id
        );

    if(!produto){
        return;
    }


    const existente =
        carrinho.find(
            item => item.id === id
        );


    if(existente){

        existente.quantidade += 1;

    }else{

        carrinho.push({
            ...produto,
            quantidade:1
        });

    }


    atualizarCarrinho();
    abrirPainelCarrinho();

}


function alterarQuantidade(id, delta){

    const item =
        carrinho.find(
            produto => produto.id === id
        );

    if(!item){
        return;
    }


    item.quantidade += delta;


    if(item.quantidade <= 0){

        carrinho =
            carrinho.filter(
                produto => produto.id !== id
            );

    }


    atualizarCarrinho();

}


function removerDoCarrinho(id){

    carrinho =
        carrinho.filter(
            produto => produto.id !== id
        );

    atualizarCarrinho();

}


function abrirPainelCarrinho(){

    cartOverlay.classList.add("aberto");
    cartOverlay.setAttribute("aria-hidden","false");

}


function fecharPainelCarrinho(){

    cartOverlay.classList.remove("aberto");
    cartOverlay.setAttribute("aria-hidden","true");

}


document.addEventListener(
    "click",
    function(event){

        const botaoAdicionar =
            event.target.closest(
                "[data-add-cart]"
            );


        if(botaoAdicionar){

            adicionarAoCarrinho(
                Number(
                    botaoAdicionar.dataset.addCart
                )
            );

            return;

        }


        const acaoCarrinho =
            event.target.closest(
                "[data-cart-action]"
            );


        if(acaoCarrinho){

            const id =
                Number(
                    acaoCarrinho.dataset.cartId
                );

            const acao =
                acaoCarrinho.dataset.cartAction;


            if(acao === "mais"){
                alterarQuantidade(id,1);
            }

            if(acao === "menos"){
                alterarQuantidade(id,-1);
            }

            if(acao === "remover"){
                removerDoCarrinho(id);
            }

        }

    }
);


abrirCarrinho.addEventListener(
    "click",
    abrirPainelCarrinho
);

abrirCarrinhoFlutuante.addEventListener(
    "click",
    abrirPainelCarrinho
);


fecharCarrinho.addEventListener(
    "click",
    fecharPainelCarrinho
);


cartOverlay.addEventListener(
    "click",
    function(event){

        if(event.target === cartOverlay){
            fecharPainelCarrinho();
        }

    }
);


document.addEventListener(
    "keydown",
    function(event){

        if(
            event.key === "Escape" &&
            cartOverlay.classList.contains("aberto")
        ){
            fecharPainelCarrinho();
        }

    }
);


solicitarOrcamento.addEventListener(
    "click",
    function(){

        if(!carrinho.length){

            alert(
                "Adicione pelo menos um produto ao carrinho antes de solicitar o orçamento."
            );

            return;

        }


        const linhas =
            carrinho.map(
                item => {

                    const preco =
                        item.preco !== null
                        ? formatarPreco(item.preco)
                        : "Preço sob consulta";


                    return(
                        `• ${item.nome} | ` +
                        `Código: ${item.codigo} | ` +
                        `Qtd.: ${item.quantidade} | ` +
                        `Preço: ${preco}`
                    );

                }
            );


        const total =
            carrinho.reduce(
                (soma,item) => {

                    if(item.preco === null){
                        return soma;
                    }

                    return soma +
                        (item.preco * item.quantidade);

                },
                0
            );


        const mensagem =
            "Olá! Gostaria de solicitar um orçamento para os seguintes produtos:\n\n" +
            linhas.join("\n") +
            "\n\n" +
            `Total estimado: ${formatarTotalCarrinho(total)}` +
            "\n\n" +
            "Aguardo informações sobre disponibilidade e condições de pagamento.";


        const url =
            "https://wa.me/" +
            CONFIG.whatsapp +
            "?text=" +
            encodeURIComponent(
                mensagem
            );


        window.open(
            url,
            "_blank"
        );

    }
);


atualizarCarrinho();
