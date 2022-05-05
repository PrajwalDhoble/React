function addNewItem(){
    var itemCount = document.getElementById("movieList").childElementCount;
 const itemLimit = 10; //total number of items to retrieve
 //retrieve the next list of items from wherever
 var nextTopItems = getNextItemSimulator(itemCount); 
 nextTopItems.forEach(function(item) {
 //add the items to your view
   document.getElementById("movieList").innerHTML += "<p>"+item+"</p>"; 
      document.getElementById("footer").style.display = "block";
 });
 setTimeout(function(){
      //remove footer info message
      document.getElementById("footer").style.display = "none";}, 500);
 }
 
 function getNextItemSimulator(currentItem){ 
    //Just some dummy data to simulate an api response
 const dummyItemCount = 50;
 var dummyItems = []; 
 var nextTopDummyItems = [];
 for(i = 1; i <= dummyItemCount; i++){
 //add to main dummy list
     dummyItems.push("Movie " + i);
 }
 var countTen = 10;
 var nextItem = currentItem + 1;
 for(i = nextItem; i <= dummyItems.length; i++){
     //get next 10 records from dummy list
     nextTopDummyItems.push(dummyItems[i - 1]);
     countTen--;
     if(countTen == 0)break;
 }
    return nextTopDummyItems;
 }