let frog = {};
let frogCreate = (() => {
    frog = {
        origin: [window.innerWidth / 2, window.innerHeight / 2],
        dimensions: [30,40],
        lives: 5,
        image: null,
        movementSpeed: 10,
        horizontalSpeed: 0,
        verticalSpeed: 0,
        canHop: true,
        hopCounter: 0
    }
})();