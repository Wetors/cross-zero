'use strict'
$(function re(){
    let coinAi = 0;
    let coinPlayer = 0;
    let chosen = [];
    let $cell = $('.cell');
    let selectedPlayer;
    let selectedAi;
    console.log($cell.length)
    $('.but').on('click', function(){  
       if($(this).hasClass('kristik')){
           selectedPlayer = '✖';
           selectedAi = '◯';
       }else if($(this).hasClass('nolik')){
           selectedPlayer = '◯';
           selectedAi = '✖';
       };
       $('.buttons').delay(200).fadeOut(500);
       $('.table').delay(700).fadeIn(500);
    });
    
    let num;
    let $elem;
    let exist;
    function ai(){
       num = Math.floor(Math.random() * 9) + 1;
       $elem = $('.cell-' + num);
       exist = check($elem.attr('class'));
       if(exist){
          chosen.push($($elem).attr('class'));
          $elem.text(selectedAi);
          checkingWinAi();
       };
       if(!exist){
           ai();
       };  
    };

    $('.cell').on('click', clickCell)
    function clickCell(){
       if(check($(this).attr('class'))){
           $(this).text(selectedPlayer);
           chosen.push($(this).attr('class'));
           if(chosen.length < $cell.length){
              ai();
           };
           checkingWin();
       };
    };

    function check(elem){
        for(let i = 0; i < chosen.length; i++){
           if(elem === chosen[i] || chosen.length <= 0){
              return false;
          };
       };
       return true;
    };
   
   function checkingWin(){
       if($cell[0].textContent === selectedPlayer && $cell[1].textContent === selectedPlayer && $cell[2].textContent === selectedPlayer ||
       $cell[3].textContent === selectedPlayer && $cell[4].textContent === selectedPlayer && $cell[5].textContent === selectedPlayer ||
       $cell[6].textContent === selectedPlayer && $cell[7].textContent === selectedPlayer && $cell[8].textContent === selectedPlayer ||
       $cell[0].textContent === selectedPlayer && $cell[3].textContent === selectedPlayer && $cell[6].textContent === selectedPlayer ||
       $cell[1].textContent === selectedPlayer && $cell[4].textContent === selectedPlayer && $cell[7].textContent === selectedPlayer ||
       $cell[2].textContent === selectedPlayer && $cell[5].textContent === selectedPlayer && $cell[8].textContent === selectedPlayer ||
       $cell[0].textContent === selectedPlayer && $cell[4].textContent === selectedPlayer && $cell[8].textContent === selectedPlayer ||
       $cell[2].textContent === selectedPlayer && $cell[4].textContent === selectedPlayer && $cell[6].textContent === selectedPlayer){
           coinPlayer++;
           console.log('Winner: ' + coinPlayer);  
           $('h1').text('Winner');
           $('h1').css({
              color: 'yellow',
           });
           $cell.off();
           announcementsResults();
       }else if(chosen.length >= $cell.length){
           $('h1').text('draw');
            announcementsResults();
            $cell.off();
       };
    }; 
    
    function checkingWinAi(){
       if($cell[0].textContent === selectedAi && $cell[1].textContent === selectedAi && $cell[2].textContent === selectedAi ||
       $cell[3].textContent === selectedAi && $cell[4].textContent === selectedAi && $cell[5].textContent === selectedAi ||
       $cell[6].textContent === selectedAi && $cell[7].textContent === selectedAi && $cell[8].textContent === selectedAi ||
       $cell[0].textContent === selectedAi && $cell[3].textContent === selectedAi && $cell[6].textContent === selectedAi ||
       $cell[1].textContent === selectedAi && $cell[4].textContent === selectedAi && $cell[7].textContent === selectedAi ||
       $cell[2].textContent === selectedAi && $cell[5].textContent === selectedAi && $cell[8].textContent === selectedAi ||
       $cell[0].textContent === selectedAi && $cell[4].textContent === selectedAi && $cell[8].textContent === selectedAi ||
       $cell[2].textContent === selectedAi && $cell[4].textContent === selectedAi && $cell[6].textContent === selectedAi){
          coinAi++;
          console.log('Lose: ' + coinAi);
          $('h1').text('Lose');
          $('h1').css({
              color: 'red',
              
          });
           $cell.off();
           announcementsResults();
       }else if(chosen.length >= $cell.length){
           $('h1').text('Draw');
            announcementsResults();
            $cell.off();
       };
    };
    
    function announcementsResults(){
       $('h1').delay(500).fadeIn(500);
       $('.but-3').delay(500).fadeIn(500);
       $('.player').text('Player: ' + coinPlayer);
       $('.ai').text('Ai: ' + coinAi);
    };
     
    $('.but-3').on('click', function(){
       $cell.text('');
       $('h1').fadeOut(200);
       $('.but-3').fadeOut(200);
       chosen = [];
       $('.table').fadeOut(200);
       $('.buttons').delay(300).fadeIn(500);
       $('.cell').on('click', clickCell);
    });
});

