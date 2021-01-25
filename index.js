$(document).ready(function(){

    $('#staticBackdrop').modal('show');

    $('#button_start_game').click(function(){
        getDataPlayers();
    });
});

function getDataPlayers(){

    let playerOne = $('input[name="input_player_one"]').val();

    let playerTwo = $('input[name="input_player_two"]').val();

    let startGame = true;

    if(playerOne == ""){
        alert("Preencha o campo com o nome do primeiro jogador");
        startGame = false;
    }
    
    if(playerTwo == ""){
        alert("Preencha o campo com o nome do segundo jogador");
        startGame = false;
    }
    
    if(startGame == true){
        $('#staticBackdrop').modal('hide');
        $('#game').show('slow');
    }


}
