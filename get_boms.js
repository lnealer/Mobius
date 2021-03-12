//import get_id from "./get_items.js";

 function load_data(){
    fetch("https://5f996efe50d84900163b8a42.mockapi.io/api/v1/bom/")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then(data => {
            display_boms(data);
            console.log(data);
        })
        .catch((error) => console.error("FETCH ERROR:", error));
 }
    

function display_boms(data){
    const div = document.getElementById("bomList"); 
    const bomform = document.createElement("form");
    div.appendChild(bomform);

    var boms = data;
    for (let i in boms) {
        let id = boms[i].id;
        input = document.createElement("input");
        input.type = "radio";
        input.value = id;
        input.name = "id";
        input.id = id;
        input.innerHTML = id;
        //input.onlick = "get_id()";

        var label = document.createElement("label");
        label.htmlFor= input.id;
        var description = document.createTextNode(id);
        label.appendChild(description);

        var newline = document.createElement('br');

        bomform.appendChild(input);
        bomform.appendChild(label);
        bomform.appendChild(newline);
    }
    
}



