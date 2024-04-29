$(document).ready(function() {
    $('#lista-tarefa').submit(function(e) {
        e.preventDefault();
        var novaTarefa = $('#nova-tarefa').val();
        if (novaTarefa) {
            $('li').append('' + novaTarefa + '');
            $('#nova-tarefa').val('');
        }
        $('ul').on('click', 'li', function() {
            $(this).css('text-decoration', 'line-through');
        });
    });
})

