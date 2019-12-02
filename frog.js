let frog = {};
let frogCreate = (() => {
    frog = {
        origin: [window.innerWidth / 2, window.innerHeight * .90],
        dimensions: [30,40],
        lives: 5,
        image: null,
        movementSpeed: 10,
        horizontalSpeed: 0,
        verticalSpeed: 0,
        Move() {
            this.origin[0] += this.horizontalSpeed;
            this.origin[1] += this.verticalSpeed;
        },
        canHop: true,
        hopCounter: 0
    }
})