$(document).ready(
  function () {
    $('#btn').click(
      function (event) {
        event.preventDefault()
        var toAdd = $('inp').val();
        $('ul').append('<li>' + toAdd + '</li>');
      });

    $("todolist").keyup(function (event) {
      if (event.keyCode == 13) {
        $("#btn").click();
      }
    });

    $(document).on('dblclick', 'li', function () {
      $(this).toggleClass('strike').fadeOut('slow');
    });

    $('input').focus(function () {
      $(this).val('');
    });

    $('ul').sortable();

  }


);

