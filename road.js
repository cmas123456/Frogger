  function Car(x, y, h, w, color, speed){
    this.x = (window.innerWidth / 2) * x
    this.y = (window.innerHeight * .935) * y
    this.w = (window.innerWidth / 40) * w
    this.h = (window.innerHeight / 20) * h
    this.color = color
    this.speed = speed
    
    this.renderCar = function(){
      context.fillStyle = this.color
      context.fillRect(this.x, this.y, this.h, this.w)
    } 
  }
  ////Lane1 Cars

  let car1 = new Car(1, 1, 1, 1, 'red', -1)
  let car2 = new Car(1.5, 1, 2, 1, 'red', -1)
  let car3 = new Car(2, 1, 1, 1, 'red', -1)
  ///lane2 Cars
  let car4 = new Car(1, .95, 1, 1, 'blue', 2)
  let car5 = new Car(1.5, .95, 1, 1, 'blue', 2)
  let car6 = new Car(2, .95, 1, 1, 'blue', 2)
  ///lane3 cars
  let car7 = new Car(1, .9, 1, 1, 'green', -2)
  let car8 = new Car(1.5, .9, 2, 1, 'green', -2)
  let car9 = new Car(2, .9, 3, 1, 'green', -2)
  let abc779 = new Car(2.5, .9, 3, 1, 'green', -2)
   ///lane4 cars
  let car10 = new Car(1, .85, 1, 1, 'yellow',3)
  let car11 = new Car(1.5, .85, 3, 1, 'yellow', 3)
  let car12 = new Car(2, .85, 1, 1, 'yellow', 3)
   ///hov cars
  let car13 = new Car(1, .8, 1, 1, 'orange', -5)
  let car14 = new Car(1.5, .8, 1, 1, 'orange', -5)
  let car15 = new Car(3, .8, 5, 1, 'orange', -5)
  
  let lane1 = [car1, car2, car3]
  let lane2 = [car4, car5, car6]
  let lane3 = [car7, car8, car9, abc779]
  let lane4 = [car10, car11, car12]
  let hov = [car13, car14, car15]
  let road = [lane1, lane2, lane3, lane4, hov]
 
  
  function goZoom () {
    road.forEach(lane => 
      lane.forEach(car => {
      if(car.speed < 1){
          if(car.x > -300)//800 is the end point
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
      car.renderCar();
      
      
      
      
    }))
  
  }

       