function tip_calculator(){
    var t = document.getElementById("total").value
    var p = document.getElementById("NOP").value
    var s = document.getElementById("rate").value
    
    if((t && p) == false){
        alert("Please fill all fields") 
        return 
    }
    if(s == "Select"){
        alert("please select the rating")
        return
    }
    else{
        alert("Total bill: "+t + "\nNumber of people to share bill: "+p +
        "\nRating given: " +s + "\nBill per head is "+(t/p).toFixed(2) + " ₹")
    }

}