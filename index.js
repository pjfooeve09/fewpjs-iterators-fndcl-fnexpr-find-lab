
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ] 

function superbowlWin(arrOfObjects) {
    //debugger;
    //Use find() to test each Object to see if the result is "W" — a win!
    //return the year when the win occurred (if it occurred at all!). If no win is found, it should return, sadly, undefined
    let win = arrOfObjects.find(obj => {
      return obj.result === "W";
    });
  
    return win ? win.year : undefined;
  }