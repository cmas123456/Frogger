  function Car(x, y, h, w, color, speed){
    this.x = (window.innerWidth / 2) * x
    this.y = (window.innerHeight * .935) - ((window.innerHeight / 12) * y)
    this.w = (window.innerWidth / 40) * w
    this.h = (window.innerHeight / 20) * h
    this.color = color
    this.speed = speed
    
    this.renderCar = function(){
      context.fillStyle = this.color
      context.fillRect(this.x, this.y, this.h, this.w)
    } 
  }

  let lane1 = []
  let lane2 = []
  let lane3 = []
  let lane4 = []
  let hov = []
  ////Lane1 Cars
  lane1.push(new Car(0, 1, 2, 1, 'red', -1.5))
  lane1.push(new Car(.5, 1, 2, 1, 'red', -1.5))
  lane1.push(new Car(1, 1, 2, 1, 'red', -1.5))
  lane1.push(new Car(1.5, 1, 2, 1, 'red', -1.5))
  lane1.push(new Car(2.5, 1, 2, 1, 'red', -1.5))
  lane1.push(new Car(3, 1, 2, 1, 'red', -1.5))
  ///lane2 Cars
  lane2.push(new Car(0, 2, 2, 1, 'blue', 2))
  lane2.push(new Car(1, 2, 2, 1, 'blue', 2))
  lane2.push(new Car(1.5, 2, 2, 1, 'blue', 2))
  lane2.push(new Car(2, 2, 2, 1, 'blue', 2))
  ///lane3 cars
  lane3.push(new Car(.1, 3, 2, 1, 'green', -2))
  lane3.push(new Car(.5, 3, 2, 1, 'green', -2))
  lane3.push(new Car(1, 3, 2, 1, 'green', -2))
  lane3.push(new Car(1.5, 3, 2, 1, 'green', -2))
  lane3.push(new Car(2, 3, 2, 1, 'green', -2))
  lane3.push(new Car(3, 3, 2, 1, 'green', -2))
  
   ///lane4 cars
  lane4.push(new Car(0, 4, 2, 1, 'yellow',3))
  lane4.push(new Car(1, 4, 2, 1, 'yellow',3))
  lane4.push(new Car(1.5, 4, 2, 1, 'yellow', 3))
  lane4.push(new Car(2, 4, 2, 1, 'yellow', 3))
   ///hov cars
  hov.push(new Car(0, 5, 5, 1, 'orange', -4.75))
  hov.push(new Car(1.1, 5, 5, 1, 'orange', -4.75))
  hov.push(new Car(1.8, 5, 5, 1, 'orange', -4.75))
  hov.push(new Car(2.5, 5, 5, 1, 'orange', -4.75)) 
  hov.push(new Car(3.2, 5, 5, 1, 'orange', -4.75))
  
  
  let road = [lane1, lane2, lane3, lane4, hov]
 
  
  function goZoom () {
    road.forEach(lane => 
      lane.forEach(car => {
        //right to left driving cars
      if(car.speed < 1){
          if(car.x > -300)//800 is the end point
         {car.x += car.speed}//1 is the speed
      else{
        
        car.x = 2000//-50 is respawn point
      }
      ///
         }
         ////right to left cars
      else{
         if(car.x < 2000)//800 is the end point
         {car.x += car.speed}//1 is the speed
         else{
        
        car.x = -50//-50 is respawn point
      }
         }
      car.renderCar();
      
      
      
      
    }))
  
  }

       