const GET_ALL = "https://localhost:5001/v1/categories;

function GetAllCategories(){
    var requestCategories = new XMLHttpRequest();
    requestCategories.open('GET', GET_ALL, false)
    requestCategories.setRequestHeader("Content-type", "application/javascript");
    requestCategories.send();

    var requestCategories = requestCategories.response;
    var responseJsonCategories = JSON.parse(requestCategories);
    return responseJsonCategories;
}

