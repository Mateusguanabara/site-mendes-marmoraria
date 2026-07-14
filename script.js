const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger-button'); // Veja se essa classe existe no HTML!
const menu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('ativo');
    const aberto = navMenu.classList.contains('ativo');
    menuToggle.setAttribute('aria-expanded', aberto);
    menuToggle.innerHTML = aberto ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('ativo');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

document.getElementById('form-orcamento').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const cidade = document.getElementById('cidade').value;
    const servico = document.getElementById('servico').value;
    const mensagem = document.getElementById('mensagem').value.trim();

    const texto = `Olá, meu nome é ${nome}. Vim pelo site da Mendes Marmoraria e gostaria de solicitar um orçamento.\n\nTelefone: ${telefone}\nCidade: ${cidade}\nServiço: ${servico}\nDetalhes: ${mensagem || 'Ainda vou enviar mais detalhes.'}`;
    const url = `https://wa.me/5538998814111?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
});