$('header button').click(function(){
    $('form').slideDown();
})

$('#botao-cancelar').click(function(){
    $('form').slideUp();
})

$('form').on("submit", function(e){
    e.preventDefault();
    const enderecoimgnova = $('#endereco-img').val();
    const novoitem = $('<li style="display:none"></li>');
    $(`<img src="${enderecoimgnova}"/>`).appendTo(novoitem);
    $(`
    <div class="overlay-imagem-link"/>
        <a href="${enderecoimgnova}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
    </div>`
    ).appendTo(novoitem);

    $(novoitem).appendTo('ul');
    $(novoitem).fadeIn(1000);

    $('#endereco-img').val('');


})