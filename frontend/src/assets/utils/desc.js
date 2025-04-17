document.addEventListener("DOMContentLoaded", () => {
    fetchProdutos();
});

function fetchProduto() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    if (!id) {
        console.error("ID do produto não encontrado na URL.")
        return;
    }

    fetch(`http://localhost:8000/api/produtos/${id}`)
        .then(res => res.json())
        .then(produto => renderProdutos(produto))
        .catch(err => console.error("Erro ao buscar o produto", err));
}