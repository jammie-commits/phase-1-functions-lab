// Code your solution in this file!
const pickupBlock = 50;
const startBlock = 34;
const endBlock = 58;

const distanceFromHQBlocks = distanceFromHqInBlocks(pickupBlock);
const distanceFromHQFeet = distanceFromHqInFeet(pickupBlock);
const travelDistance = distanceTravelledInFeet(startBlock, endBlock);
const fare = calculatesFarePrice(startBlock, endBlock);

function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
  }
  
  //  calculate distance from HQ 
  function distanceFromHqInFeet(pickupLocation) {
    const blocksAway = distanceFromHqInBlocks(pickupLocation);
    return blocksAway * 264; 
  }
  
//   calculate distance travelled between two blocks
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blockDifference = Math.abs(endBlock - startBlock);
    return blockDifference * 264;
  }
  
  // calculate the fare price 
  function calculatesFarePrice(startBlock, endBlock) {
    const distanceFeet = distanceTravelledInFeet(startBlock, endBlock);
    if (distanceFeet > 2500) {
      return "cannot travel that far";
    } else if (distanceFeet <= 400) {
      return 0; 
    } else if (distanceFeet <= 2000) {
      const fare = (distanceFeet - 400) * 0.02; 
      return parseFloat(fare.toFixed(2)); 
    } else {
      return 25; 
    }
  }
  

console.log("Distance from HQ in blocks:", distanceFromHQBlocks);
console.log("Distance from HQ in feet:", distanceFromHQFeet);
console.log("Distance travelled:", travelDistance);
console.log("Fare price:", fare);