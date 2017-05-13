/**
 * Created by Celui Qui Baille on 13/05/2017.
 */

jQuery(function ($) {

    $(document).ready(function () {

        var minion = $('.minion#minion_1');
        var posX, posY;

        var minion_1 = {posX : 4, posY: 1};
        var minion_2 = {posX : 4, posY: 3};
        var minion_3 = {posX : 2, posY: 1};
        var minion_4 = {posX : 2, posY: 5};

        var minions = [minion_1, minion_2,minion_3,minion_4];

        function moveRight(){

            posX = parseInt(minion.css('grid-column-start')) + 1;
            posY = parseInt(minion.css('grid-row-start'));

            var moveOK = true;
            $.each(minions, function(key, value){
                if (value.posX === posX && value.posY === posY ){
                    moveOK = false;
                }
            });

            if(moveOK){

                minion.css('grid-column-start', posX.toString());
                minions[0].posX = posX;
                minions[0].posY = posY;
            }
        }

        function moveLeft() {
            posX = parseInt(minion.css('grid-column-start')) - 1;
            posY = parseInt(minion.css('grid-row-start'));

            var moveOK = true;
            $.each(minions, function(key, value){
                if (value.posX === posX && value.posY === posY ){
                    moveOK = false;
                }
            });

            if(moveOK){

                minion.css('grid-column-start', posX.toString());
                minions[0].posX = posX;
                minions[0].posY = posY;
            }
        }

        function moveUp()   {
            posX = parseInt(minion.css('grid-column-start'));
            posY = parseInt(minion.css('grid-row-start')) - 1;

            var moveOK = true;
            $.each(minions, function(key, value){
                if (value.posX === posX && value.posY === posY ){
                    moveOK = false;
                }
            });

            if(moveOK){
                minion.css('grid-row-start', posY.toString());
                minions[0].posX = posX;
                minions[0].posY = posY;
            }
        }

        function moveDown() {
            posX = parseInt(minion.css('grid-column-start'));
            posY = parseInt(minion.css('grid-row-start')) + 1;

            var moveOK = true;
            $.each(minions, function(key, value){
                if (value.posX === posX && value.posY === posY ){
                    moveOK = false;
                }
            });

            if(moveOK){
                minion.css('grid-row-start', posY.toString());
                minions[0].posX = posX;
                minions[0].posY = posY;
            }
        }

        $(document).keypress(function (event) {
            if (event.keyCode === 100) {
                moveRight()
            }
            if (event.keyCode === 113) {

                moveLeft()
            }
            if (event.keyCode === 115) {

                moveDown()
            }
            if (event.keyCode === 122) {

                moveUp()
            }

        });
    });

});


