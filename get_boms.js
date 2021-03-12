//const fetch = require("node-fetch");
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
    

function display_boms(data){
    const div = document.getElementById("bomList"); 
    const ul = document.createElement("ul");
    div.appendChild(ul);
    var boms = data;
    //document.write('<ul>');
    for (let i in boms) {
        let id = boms[i].id;
        listItem = document.createElement("li");
        listItem.innerHTML = id;
        ul.appendChild(listItem);
    }
    
}


