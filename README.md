# Mobius

## Overview
This is a simple front-end project designed to retrieve data from the Mobius API for bills of material and display that data. This is done mostly with javascript and some HTML. This project was tested and run in Chrome

## Scripts

The javascrip files for this project are in the scripts folder.

* **get_boms.js:** This file retrives the ID's for all of the current bills of material and displays them in radio button format. When the HTML page loads, the script runs load_data(). This function runs the data, and passes the data off display_boms(), which adds the input form to the HTML page.

* **get_items.js:** This file is responsible for getting the API data for a given bill of material ID after the user selects an ID and submits. get_id() runs when the user submits their selection; this function checks the radio buttons to see which one is selected. Once the selected ID is found, get_items() fetches the API data. Finally, make_table() creates a table from the fetched data and displays it on the HTML page.