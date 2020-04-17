class Snake {
    constructor(){
        this.x = 0;
        this.y = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.tal = 0;
        this.tail = [];
        this.sound = loadSound("hit sound.mp3");
    }

    death(){
        for (let i = 0; i < this.tail.length; i++) {
            let pos = this.tail[i];
            let d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
              console.log('starting over');
              this.tal = 0;
              this.tail = [];
              this.sound.play();
            }
          }
    }
    go(){
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
          }
          if (this.tal >= 1) {
            this.tail[this.tal - 1] = createVector(this.x, this.y);
          }
      
        this.x = this.x + this.xSpeed * rez;
        this.y = this.y + this.ySpeed * rez;

        this.x = constrain(this.x,0,width-rez)
        this.y = constrain(this.y,0,height-rez)
    }

    eat(pos) {
        let d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
          this.tal++;
          return true;
        } else {
          return false;
        }
      };
    
    dir(x,y){
        snd.play();
        this.xSpeed = x;
        this.ySpeed = y;
    }

    show(){
        fill(20,40,100)
        textSize(80)
        text("score:"+this.tal,30,200);
        fill(255)
        push();
        for (let i = 0; i < this.tail.length; i++) {
            fill(255);
            rect(this.tail[i].x, this.tail[i].y, rez,rez,5);
          }
          pop();
          push();
          
        rect(this.x,this.y,rez,rez,5);
        
        pop();
    }
}