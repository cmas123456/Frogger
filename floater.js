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
        this.safe = true,
        this.leftSideOfObject = this.origin[0];
        this.rightSideOfObject = this.origin[0] + this.dimensions[0];
        this.topOfObject = this.origin[1];
        this.bottomOfObject = this.origin[1] + this.dimensions[1];
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
let logs = [];
logRow1.push(new wood(0,row1,.1,4),new wood(.25,row1 ,.3,4),new wood(.75, row1, .15,4));
logRow2.push(new wood(0,row2,.50),new wood(.75,row2 ,.1));//,new wood(.75, row2, .15));
logRow3.push(new wood(0,row3, .15,row3Speed),new wood(.25,row3 ,.20,row3Speed),new wood(.65, row3, .20,row3Speed),new wood(.90, row3, .10,row3Speed));
logs.push(logRow1.logRow2,logRow3);
 //turtles