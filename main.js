var canvas= new fabric.Canvas("MyCanvas");

player_x=10;
player_y=10;

block_width=30;
block_height=30;

player_image="";
block_image="";

function player(){
    fabric.Image.fromURL("player.png", function(Img){
        player_image=Img;

        player_image.scaleToWidth(150);
        player_image.scaleToHeight(140);
        player_image.set({
         top: player_y;
         left: player_x;
        });
        canvas.add(player_image);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image=Img;

        block_image.scaleToWidth(block_width);
        block_image.scaleToHeight(block_height);
        block_image.set({
            top: player_y;
            left: player_x;
        });
        canvas.add(block_image);
    });
}