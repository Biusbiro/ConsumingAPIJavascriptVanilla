const GET_ALL = "https://localhost:5001/v1/products;

function GetAllProducts(){
    var requestProducts = new XMLHttpRequest();
    requestProducts.open('GET', GET_ALL, false)
    requestProducts.setRequestHeader("Content-type", "application/javascript");
    requestProducts.send();

    var requestProducts = requestProducts.response;
    var responseJsonProducts = JSON.parse(requestProducts);
    return responseJsonProducts;
}