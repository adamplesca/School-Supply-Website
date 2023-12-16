function filterProducts() {
    const searchBar = document.getElementById("searchBar");
    const product = document.getElementsByTagName("Product"); 
    
    for(x = 0; x < product.length; x++) {
        const code = product[x].querySelector("Code").textContent;
        const name = product[x].querySelector("Name").textContent.toLocaleLowerCase();
        const searchCode = searchBar.value.toLocaleLowerCase();

        if (code.includes(searchCode)) {
            product[x].style.display = "block";
        }
        else if(name.includes(searchCode)){
            product[x].style.display = "block";
        }
        else {
            product[x].style.display = "none";
        }
    }
}