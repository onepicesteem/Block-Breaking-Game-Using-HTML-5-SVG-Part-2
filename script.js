$(function(){

    var speed=2;

    var circleX=550;
    var circleY=500;

    //starting points for arc
    var arcX=500;
    var arcY=700;

    var block1;
    var flag1=1;


    var groundX1=0;
    var groundY1=0;
    var groundX2=1100;
    var groundY2=750;

    var direction=[+1,-1];
    var directionX=direction[Math.floor(Math.random() * 2)];//index 0 or 1
    var directionY=direction[Math.floor(Math.random() * 2)];//index 0 or 1
    console.log(directionX);
    console.log(directionY);



    //console.log(directionX);
    //console.log(directionY);

    var svg = Pablo('#ground').svg({ //create svg with height and width
        width: 1100,
        height: 750
    });

    var ball=svg.circle({
        cx: circleX,
        cy: circleY,
        r: 10,
        fill:  '#060'
    });

    //arc drawing
    var arc=svg.rect({
        x:arcX,
        y:arcY,
        width:240, height:40,
        fill:  '#FF7A4D',
    });

    //part-2
    blockBuilder();
    setInterval(function(){

      ball.attr({cx:circleX,cy:circleY});// draw the ball with cx and cy

      circleX=circleX+directionX;
      circleY=circleY+directionY;



      if(circleX ==groundX1+10||circleX == groundX2-10){//the ball hit the wall x
        directionX=directionX*-1;//change direction
      }
      if(circleY == groundY1+10||circleY == groundY2-10){//the ball hit the wall y
        directionY=directionY*-1;//change direction
      }
      //we move the rectangle according to x coordinates.
      $(document).mousemove(function(e){

            arcX=e.clientX;
            arc.attr({x:arcX});

      });

      //the moment the ball hit the arc
      if(circleY==690&&(circleX>arcX-10&&circleX<arcX+250)){
        directionY=directionY*-1;
      }

      //block boundaries
      if((flag1==1)&&((circleY==285&&(circleX>340&&circleX<445))||(circleY==240&&(circleX>340&&circleX<445)))){
        directionY=directionY*-1;//change direction
        block1.remove();//delete block1
        flag1=0;//set flag

      }
      if((flag1==1)&&((circleX==340&&(circleY>240&&circleY<285))||(circleX==445&&(circleY>240&&circleY<285)))){
        directionX=directionX*-1;//change direction
        block1.remove();//delete block1
        flag1=0;//set flag
      }



    },speed);

    //draw block
    function blockBuilder(){
      block1=svg.rect({
          x:350,
          y:250,
          width:85, height:25,
          fill:  '#FF2626',
      });
      //console.log(block1.attr().x);

    }

});
