// Code your solution here
function findMatching(drivers,name) {
  return drivers.filter(driver => {
   return driver.toLowerCase() === name.toLowerCase()
  })
}




function fuzzyMatch(drivers,letter) {
function checkdrivers(driver){
   if(driver.slice(0,letter.length) == letter) {
      return driver
   }
}
return drivers.filter(checkdrivers)
}
function matchName (drivers,driver){
   function checkdrivers(obj){
      for(let name in obj){
         if (obj[name] === driver) {
 return obj           
         }
      }
   }
   return drivers.filter(checkdrivers)
}

