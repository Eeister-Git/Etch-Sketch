window.onload =  function(){
    //first elem in body
    var body = document.getElementsByTagName("body")[0];

    //create table
    var table = document.createElement("TABLE");

    //create table body
    var tblB = document.createElement("TBODY");

    //append table body to table
    table.appendChild(tblB);

    for(var i=0; i<16; i++){
        //creates a row
        var tr = document.createElement("TR");

        //append row to child
        tblB.appendChild(tr);

        for(var j=0; j < 16; j++){

            //creates cell
            var td = document.createElement("TD");
            //appends to rows
            td.classList.add("cell")
            tr.appendChild(td);
        }
    }

    body.appendChild(table);

}

 function newboxes(){
     var numbers = document.getElementById("numb").value;
     numbers = parseInt(numbers); //coverts inout to int
    //prevents non numbers from being accepted
     if(isNaN(numbers)){
         return;
     }
     var tblB = document.getElementsByTagName("TBODY")[0];  //retrieves table body 

     $("TBODY").empty(); //empties table body of all cells
 

     //uses number input
     for(var i=0; i<numbers; i++){
         //creates a row
         var tr = document.createElement("TR");
 
         //append row to child
         tblB.appendChild(tr);
 
         for(var j=0; j < numbers; j++){
 
             //creates cell
             var td = document.createElement("TD");
             //appends to rows
             td.classList.add("cell")
             tr.appendChild(td);
         }
     }
 
 }


