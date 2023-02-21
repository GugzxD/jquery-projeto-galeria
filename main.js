$(document).ready(function() {

$('header button').click(function() {
    $('form').slideDown()
}) 

$('#botao-cancelar').click(function() {
    $('form').slideUp()
})

$('form').on('submit', function(e){
    e.preventDefault()
    const enderecoNovaImg = $('#endereco-imagem').val()
    const novoItem = $('<li style="display: none"></li>')

    $(`<img src="${enderecoNovaImg}"/>`).appendTo(novoItem)

    $(`
    <div class="overlay-image-link">
        <a href="${enderecoNovaImg}" target="_blank" title="Ver imagem em tamanho real">
        Ver imagem em tamanho real
        </a>
    `).appendTo(novoItem)

    $(novoItem).appendTo('ul')
    $(novoItem).fadeIn(1000)
    $('#endereco-imagem').val('')
    
})

})

