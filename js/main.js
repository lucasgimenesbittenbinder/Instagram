
$(document).ready(function(){
    var sugestao_seguidores= 0;
    var follow = 0;
    var seguidores =  document.getElementById('seguidores').innerHTML;
    $("#follow").click(function(){            
        if(follow === 0){
            document.getElementById('follow').innerHTML = "Following";          
            seguidores++;
            document.getElementById('seguidores').innerHTML = seguidores;
            document.getElementById('numero-seguidores').innerHTML = seguidores;
            follow = 1;
        } 
        else if (follow === 1){
            $('#exampleModal').modal('show');
            $('#cancelar').click(function(){
                document.getElementById("follow").innerHTML = "Follow"; 
                seguidores--;
                document.getElementById('seguidores').innerHTML = seguidores;
                document.getElementById('numero-seguidores').innerHTML = seguidores;
                follow = 0;
                $('#exampleModal').clear();
            })
        }
    });
    $('#botao-opcoes').click(function(){
        $('#exampleModal1').modal('show');
    })
    $('#div-cancelar').click(function(){
        $('#exampleModal1').modal('hide');
    });

    $("#marcados").click(function(){
        $(this).toggleClass('teste link-selecionado');
        $('#publicacoes').toggleClass('link-selecionado teste');
        $('#photos-publicacoes').toggleClass('photos-ativo photos-bloqueado');
        $('#photos-marcados').toggleClass('photos-bloqueado photos-ativo');
    });
    $("#publicacoes").click(function(){
        $(this).toggleClass('teste link-selecionado');
        $('#marcados').toggleClass('link-selecionado teste');
        $('#photos-marcados').toggleClass('photos-ativo photos-bloqueado');
        $('#photos-publicacoes').toggleClass('photos-bloqueado photos-ativo');
    });

    $('#teste-botao').click(function(){
        if(sugestao_seguidores === 1){
            $('#sugestao-seguidores').addClass('bloqueio-botao');
            sugestao_seguidores = 0;
        }
        else if(sugestao_seguidores === 0){
            $('#sugestao-seguidores').removeClass('bloqueio-botao');
            sugestao_seguidores = 1;
        }
        
    });

    });