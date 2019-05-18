var rect=require ("./rectangle.js");

function solveRect(l,b) {
   
    rect(l,b,(err,rectangle)=>{

            if (err){
                console.log("New Error: "+ err);
            }
            else{
                console.log("The area of the rectangle is " + rectangle.area());
                console.log("The perimeter of the rectangle is " + rectangle.perimeter());
            }



    });
  
      console.log("after the call of rect ");

}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);
