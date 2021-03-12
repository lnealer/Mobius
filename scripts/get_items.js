function get_id(){
    // find the id of the button the user chose
    const rbs = document.querySelectorAll('input[name="id"]');
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
        selectedValue = rb.value;
        break;
        }
    }
    // pass off to retrieve api
    get_items(selectedValue);
}


function get_items(id){
    // retrive api data for bomID
    url = "https://5f996efe50d84900163b8a42.mockapi.io/api/v1/bom/" + id + "/bomitem";
    fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {
        // pass off to create table
        make_table(data);
        console.log(data);
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}

function make_table(data) {
    // header data
    const head = ["ID", "BomID","Model", "UUID", "Created at", "Updated at", "Quantity", "Item unit cost", "Specific part"]

    // make the table
    var table = document.createElement("table"), row;
    table.id = "bom_t";
    row = document.createElement("tr");

    for (var j=0 ; j<head.length; j++){
        // adding headers
        td = document.createElement("th");
        td.innerHTML = head[j];
        table.appendChild(row);
        row.appendChild(td);
    }

    for (var i=0 ; i<data.length ; i++){
        // add the datapoints 
        dict = data[i];
            
        row = document.createElement("tr");
        const div = document.getElementById("bomTable");
        old = document.getElementById("bom_t")
        div.removeChild(old);
        div.appendChild(table);

        for (let key in dict) {
            if (key == "fields"){
                continue;
            }
            const cell = document.createElement("td");
            cell.innerHTML = dict[key];

            row.appendChild(cell);
         }
        table.appendChild(row);
    }
}
