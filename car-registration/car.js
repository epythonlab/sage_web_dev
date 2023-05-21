// global variable
// to store car information in an array object
const carData = Array();
let i = 1;

function addCar() {

    // get car name from input field
    let car_name = document.getElementById("name").value;
    // get car mode value from input field
    let car_model = document.getElementById("model").value;
    // get car price value from input field 
    let car_price = document.getElementById("price").value;

    // dynamically add the car information in array object
    // use push method to add at the end of the array element
    // initial iterator 

    carData.push({ id: i, name: car_name, model: car_model, price: car_price });

    // clear form values after the data added to the array
    document.getElementById("name").value = ''
    document.getElementById("model").value = ''
    document.getElementById("price").value = ''

    i++; // increment iterator
    //get the html element by id and clear the the table data
    var Table = document.getElementById("table-data");
    Table.innerHTML = ''

    // call the function and display table data
    getCarData(carData) // function call and pass the global array object

}

// function to get the car data and display on the table
function getCarData(data) {

    // create table element
    const table = document.getElementById("table-data");

    // get keys from array object
    const keys = Object.keys(data[0]);
    for (const obj of data) {
        // dom method to create new row element
        const row = document.createElement("tr")
            // inner loop to iterate over each data in the data object
        for (let key of keys) {
            // add the data in td 
            const cellData = document.createElement("td")
                // add a single value in a td
            cellData.textContent = obj[key]
                // append the td as child node to tr
            row.appendChild(cellData)

        }

        // append the table row in table body as a child node
        table.appendChild(row)
    }

    // return the data which is appended in tablebody
    return table
}