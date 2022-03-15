$(document).ready(function(){
$(".parra1").css({ "color": "red",
                   "font-size":"25px"});
});

$("body").prepend('<button id="btn3">Animacion3</button>');
$("body").prepend('<button id="btn2">Animacion2</button>');
$("body").prepend('<button id="btn1">Animacion1</button>');
$("body").prepend(`<div id="div1" style="height: 120px">
                    <img class="gato1" src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_960/public/Que_debes_saber_antes_de_adoptar_un_gatito.jpg?itok=FAGJdK4f"></img>
                    </div>`);
$("#btn1").click(function(){
$(".gato1").slideUp("fast");
});

$("#btn2").click(function(){
    $(".parra2").fadeOut();
    });

$("#btn3").click(function(){
    $(".parra2").fadeIn();
    });
    

