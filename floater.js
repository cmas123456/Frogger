let water = {};
let waterCreate = (() => {
    water = {
        origin: [0, window.innerHeight * (1/12)],
        dimensions: [window.innerWidth, window.innerHeight * (5/12)],
        color: 'blue',
        image: null,
        safe: false,
        Draw() {
            context.fillStyle = this.color;
            context.fillRect(this.origin[0],this.origin[1],this.dimensions[0],this.dimensions[1]);
        },
    }
})();
class wood {
    constructor(startX = 0, startY = 1/12, length = .10, speed = 2, reverse = false){
        this.origin = [window.innerWidth * startX, window.innerHeight * startY + (window.innerHeight*1/96)],
        this.dimensions = [window.innerWidth * length, window.innerHeight * .06],
        this.speed = speed,
        this.color = 'peru',
        this.leftSideOfObject = this.origin[0],
        this.rightSideOfObject = this.origin[0] + this.dimensions[0],
        this.topOfObject = this.origin[1],
        this.bottomOfObject = this.origin[1] + this.dimensions[1],
        this.image = img_log,
        this.direction = reverse
    }
    Draw() {
        // context.drawImage(this.image,this.origin[0],this.origin[1],this.dimensions[0],this.dimensions[1])
        context.fillStyle = this.color;
        context.fillRect(this.origin[0],this.origin[1],this.dimensions[0],this.dimensions[1]);
    }
    Animate(){
        this.origin[0] += this.speed;
        this.Draw();
        if (this.origin[0] > window.innerWidth && !this.direction){
            this.origin[0] = -window.innerWidth * .5; // this must set every log back to the - length of the longest log or you get overlap
        } else if (this.origin[0] < 0 - window.innerWidth * .5 && this.direction){
            this.origin[0] = window.innerWidth;
        }
    }
};
let logRow1 = []; row1 = 1/12; row1Speed = -3;
let logRow2 = []; row2 = 2/12; row2Speed = 1;
let logRow3 = []; row3 = 4/12; row3Speed = 2;
let logCollection = [];
logRow1.push(new wood(0,row1,.15,row1Speed,true),new wood(.25,row1 ,.3,row1Speed,true),new wood(.75, row1, .25,row1Speed,true));
logRow2.push(new wood(0,row2,.50,row2Speed),new wood(.75,row2 ,.1,row2Speed));
logRow3.push(new wood(0,row3, .15,row3Speed),new wood(.25,row3 ,.20,row3Speed),new wood(.65, row3, .20,row3Speed),new wood(.90, row3, .10,row3Speed));
logCollection.push(logRow1, logRow2, logRow3);
class turtle{
    constructor(startX = 0, startY = 1/12, turtPop = 2, speed = 2, diverTurt = false){
        this.origin = [window.innerWidth * startX, window.innerHeight * startY + (window.innerHeight*1/24)],
        this.radius = window.innerHeight * .04,
        this.speed = speed,
        this.color = 'olive',
        this.turtPop = turtPop, 
        this.image = null,
        this.safe = true,
        this.counter = 0,
        this.diveSpeed = 2,
        this.diverTurt = diverTurt
    }
    Draw() {
        let offset = 0;
        this.Circle(offset);
        if(this.turtPop > 1){
            offset = 2*(this.radius);
            this.Circle(offset);
        }
        if(this.turtPop > 2){
            offset = 4*(this.radius);
            this.Circle(offset);
        }
    }
    Animate(){
        this.origin[0] -= this.speed;
        this.counter += this.diveSpeed;
        if(this.diverTurt){
            if( this.counter < 200){
                this.color = 'olive';
                if(this.counter < 0){this.diveSpeed = 2;} // don't forget this if you change default dive speed.
            } else if(this.counter === 200){
                this.color = 'rgba(128,128,0, .75)'; 
            } else if(this.counter === 300){
                this.color = 'rgba(128,128,0, .50)';
            } else if(this.counter === 400){
                this.color = 'rgba(128,128,0, .25)';
                this.safe = true;
            } else if(this.counter === 500){
                this.color = 'rgba(128,128,0, 0)';
                this.safe = false;
            }else if(this.counter === 550){
                this.diveSpeed =-2;
            }
        }
        this.Draw();
        if (this.origin[0] < 0 - (2 * this.radius * 3)){
            this.origin[0] = window.innerWidth + this.radius;
        }
    }
    Circle(offset){
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.origin[0] + offset, this.origin[1],this.radius, 0, 2 * Math.PI, false);
        context.fill();
    }
};
let turtleNest = [];
let turtleRow1 = []; row1 = 3/12; row1Speed = 2;
let turtleRow2 = []; row2 = 5/12;
turtleRow1.push(new turtle(0,row1,2,3),new turtle(.20,row1,3,3),new turtle(.70, row1,3,3,true));
turtleRow2.push(new turtle(0,row2,3,2,true),new turtle(.5,row2,2,2),new turtle(.80,row2,3,2));
turtleNest.push(turtleRow1, turtleRow2);