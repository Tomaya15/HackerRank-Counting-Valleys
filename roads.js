const countingValleys = (steps, path) => {
   position = 0;
   valleysCounted = 0;
   latitudes = [];
   
   const posibleSteps = {
       D : -1,
       U : 1,
   };
   
   for ( let i = 0; i < steps; i++){
    const step = (posibleSteps[path[i]]);
    position += step;
    
    latitudes.push(position);
   }
  
   sumValleys(latitudes,steps);

   console.log("Valles atrevesados:", valleysCounted);

}

const sumValleys = (latitudes,steps) => {
   let numbersOfSeaLevel = countOccurrences(latitudes, steps, 0);  
    while(numbersOfSeaLevel > 0){
       handlePath(latitudes);
       numbersOfSeaLevel -= 1 ;
    }     
}

const handlePath = (latitudes) => {
    const indexOfSeaLevel = latitudes.indexOf(0);
    if(latitudes[indexOfSeaLevel -1] < 0){
        valleysCounted += 1; 
    }
    latitudes.splice(0,indexOfSeaLevel +1);
}

function countOccurrences(arr,n,x)
    /* Una funcion la cual me brinda la cantidad de ocurrencias que se encuentran dentro de un array dado
    los parametros arr de tipo array, n de tipo number define el largo del array, y x que es el numero a encontrar. */
    {
        let res = 0;
        for (let i=0; i<n; i++)
        {
            if (x == arr[i])
                res++;
        }
        return res;
}

const road = ["U","D","D","D","U","D","U","U","D","U"]


 countingValleys(10, road);
    
