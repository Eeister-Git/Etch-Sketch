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


