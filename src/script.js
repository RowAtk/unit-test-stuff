function displayDetails(obj){
    console.log("Hello");
}

function viewOne(id){
    console.log("VIEW ME");
    var client = fetchData(id);
    displayDetails(client);
}

function fetchData(id){
    console.log("fetch");
}