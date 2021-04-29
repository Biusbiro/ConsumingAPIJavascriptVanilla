function main(){
    console.log(getCategories("https://localhost:5001/v1/products"))
}

function getCategories(url){
    let request = new XMLHttpRequest()
    request.open("get", url, false)
    request.send()
    return request.response
}

function formatCategories(){
    data = getCategories("https://localhost:5001/v1/products")
    products = JSON.parse(data);
    console.log(products)
}

main()