let productNames = document.querySelectorAll('.pr-name');
let productPrices = document.querySelectorAll('.pr-price');
let btnAdd = document.querySelectorAll('.add-btn')
let cartList = document.getElementById('cart-list')
//console.log(cartList)


for(let i = 0; i<btnAdd.length; i++){
    let button = btnAdd[i];
    button.addEventListener('click', function addToCart(e){
        let prPrice = e.target.parentElement.previousElementSibling.textContent;
        let prName = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        let prID = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        
        let list = document.createElement('tr');
        let listData = document.createElement('td');
        listData.appendChild(document.createTextNode(prID))
        let listData2 = document.createElement('td');
        listData2.appendChild(document.createTextNode(prName));
        let listData3 = document.createElement('td');
        listData3.appendChild(document.createTextNode(prPrice));
        let listData4 = document.createElement('td');
        let btnRmv = document.createElement('button')
        btnRmv.textContent = "Remove"
        listData4.appendChild(btnRmv);
        list.appendChild(listData)
        list.appendChild(listData2)
        list.appendChild(listData3)
        list.appendChild(listData4)
        cartList.appendChild(list);

        btnRmv.addEventListener('click', function removeProduct(e) {
            
            e.target.parentElement.parentElement.remove();          
            
            // console.log("Product Removed")
        })
                
    })
}


