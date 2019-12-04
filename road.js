// road.forEach(lane => {
//   lane.forEach(car => {
         
  const canvas = document.getElementById('sandbox')
  canvas.width = window.screen.width
  canvas.height = window.screen.height
  const ctx = canvas.getContext('2d');
  
  function Car(x, y, w, h, color, speed){
    this.x = x
    this.y = y
    this.h = h
    this.w = w
    this.color = color
    this.speed = speed
    
    this.renderCar = function(){
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.h, this.w)
    }
    
  }
  ////Lane1 Cars
  let car1 = new Car(70, 0, 20, 30, 'red', -1)
  let car2 = new Car(750, 0, 20, 30, 'red', -1)
  let car3 = new Car(800,0, 20, 30, 'red', -1)
  ///lane2 Cars
  let car4 = new Car(0, 50, 20, 30, 'blue', 2)
  let car5 = new Car(-60, 50, 20, 30, 'blue', 2)
  let car6 = new Car(-150, 50, 20, 30, 'blue', 2)
  ///lane3 cars
  let car7 = new Car(50, 100, 20, 30, 'green', -2)
  let car8 = new Car(100, 100, 20, 30, 'green', -2)
  let car9 = new Car(200,100, 20, 30, 'green', -2)
  let abc779 = new Car(550,100, 20, 30, 'green', -2)
   ///lane4 cars
  let car10 = new Car(-9, 150, 20, 30, 'yellow',3)
  let car11 = new Car(-150, 150, 20, 30, 'yellow', 3)
  let car12 = new Car(-100,150, 20, 30, 'yellow', 3)
   ///hov cars
  let car13 = new Car(50, 200, 20, 50, 'orange', -5)
  let car14 = new Car(200, 200, 20, 50, 'orange', -5)
  let car15 = new Car(300, 200, 20, 80, 'orange', -5)
  
  let lane1 = [car1, car2, car3]
  let lane2 = [car4, car5, car6]
  let lane3 = [car7, car8, car9, abc779]
  let lane4 = [car10, car11, car12]
  let hov = [car13, car14, car15]
  let road = [lane1, lane2, lane3, lane4, hov]
 
  
  function goZoom () {
    road.forEach(lane =>   lane.forEach(car => {
      
      if(car.speed < 1){
          if(car.x > -25)//800 is the end point
         {car.x += car.speed}//1 is the speed
      else{
        
        car.x = 900//-50 is respawn point
      }
         }
      else{
         if(car.x < 800)//800 is the end point
         {car.x += car.speed}//1 is the speed
         else{
        
        car.x = -50//-50 is respawn point
      }
         }
      
      
      
      
      
    }))
  
  }
  
      function doStuff(){
          
           ctx.clearRect(0,0,canvas.width,canvas.height) 
           road.forEach(lane => lane.forEach(element => element.renderCar()) )

           goZoom()
           
           window.requestAnimationFrame(doStuff)
          }
     doStuff()
       