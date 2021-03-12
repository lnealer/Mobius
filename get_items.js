function get_id(){
    //var radioButtons = document.getElementsByName("id");
    //let value = -1;
    const rbs = document.querySelectorAll('input[name="id"]');
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
        selectedValue = rb.value;
        break;
        }
    }
    //alert(selectedValue);
    get_items(selectedValue);
}


function get_items(id){
    //id = "1004"
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
        make_table(data);
        console.log(data);
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}

function make_table(data) {
    const head = ["ID", "BomID","Model", "UUID", "Created at", "Updated at", "Quantity", "Item unit cost", "Specific part"]
    var table = document.createElement("table"), row;
    table.id = "bom_t";
    row = document.createElement("tr");

    for (var j=0 ; j<head.length; j++){
        td = document.createElement("th");
        td.innerHTML = head[j];
        table.appendChild(row);
        row.appendChild(td);
    }

       for (var i=0 ; i<data.length ; i++){
            dict = data[i];
            
            // (C) GENERATE TABLE
            // (C1) CREATE EMPTY TABLE
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

                // (C4) ATTACH ROW & CELLS
                row.appendChild(cell);
         }
            table.appendChild(row);
    }
}
