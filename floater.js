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
class wood{
    constructor(startX = 0, startY = 1/12, length = .10, speed = 2){
        this.origin = [window.innerWidth * startX, window.innerHeight * startY + (window.innerHeight*1/96)],
        this.dimensions = [window.innerWidth * length, window.innerHeight * .06],
        this.speed = speed,
        this.color = 'peru',
        this.image = null,
        this.safe = true
    }
    Draw() {
        context.fillStyle = this.color;
        context.fillRect(this.origin[0],this.origin[1],this.dimensions[0],this.dimensions[1]);
    }
    Animate(){
        this.origin[0] += this.speed;
        this.Draw();
        if (this.origin[0] > window.innerWidth){
            this.origin[0] = -this.dimensions[0];
        }
    }

};
let logRow1 = []; row1 = 1/12; row1Speed = 4;
let logRow2 = []; row2 = 2/12;
let logRow3 = []; row3 = 4/12; row3Speed = 3;
logRow1.push(new wood(0,row1,.1,4),new wood(.25,row1 ,.3,4),new wood(.75, row1, .15,4));
logRow2.push(new wood(0,row2,.50),new wood(.75,row2 ,.1));//,new wood(.75, row2, .15));
logRow3.push(new wood(0,row3, .15,row3Speed),new wood(.25,row3 ,.20,row3Speed),new wood(.65, row3, .20,row3Speed),new wood(.90, row3, .10,row3Speed));
 //turtles
class turtle{
    constructor(startX = 0, startY = 1/12, turtPop = 2, speed = 2){
        this.origin = [window.innerWidth * startX, window.innerHeight * startY + (window.innerHeight*1/24)],
        this.radius = window.innerHeight * .04,
        this.speed = speed,
        this.color = 'olive',
        this.turtPop = turtPop, 
        this.image = null,
        this.safe = true
    }
    Draw() {
        let offset = 0;
        context.fillStyle = this.color;
        context.fill();
        context.beginPath();
        context.arc(this.origin[0] + offset, this.origin[1],this.radius, 0, 2 * Math.PI, false);
        if(this.turtPop > 1){
            offset = 2*(this.radius);
            context.fillStyle = this.color;
            context.fill();
            context.beginPath();
            context.arc(this.origin[0] + offset, this.origin[1],this.radius, 0, 2 * Math.PI, false);
            if(this.turtPop > 2){
                offset = 4*(this.radius);
                context.fillStyle = this.color;
                context.fill();
                context.beginPath();
                context.arc(this.origin[0] + offset, this.origin[1],this.radius, 0, 2 * Math.PI, false);
            }
        }
    }
    Animate(){
        this.origin[0] -= this.speed;
        this.Draw();
        if (this.origin[0] < 0 - this.radius){
            this.origin[0] = window.innerWidth + this.radius;
        }
    }
};
let turtleRow1 = []; row1 = 3/12; row1Speed = 2;
let turtleRow2 = []; row2 = 5/12;
turtleRow1.push(new turtle(0,row1,2,3),new turtle(.20,row1,3,3),new turtle(.75, row1,2,3));
turtleRow2.push(new turtle(0,row2,3),new turtle(.5,row2),new turtle(.80,row2,3));