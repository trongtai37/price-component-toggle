var priceMonth = ['&dollar;19.99', '&dollar;24.99', '&dollar;39.99'];
var priceAnnual = ['&dollar;199.99', '&dollar;249.99', '&dollar;399.99'];

var priceArr = document.querySelectorAll('.price');


var togglePrice = document.querySelector('.switch input');


togglePrice.addEventListener('change', () => {
  if(togglePrice.checked){
    priceArr.forEach((price, index) => {
    priceArr[index].innerHTML = priceAnnual[index];
    })

  }
  else {
    priceArr.forEach((price, index) => {
    priceArr[index].innerHTML = priceMonth[index];
    })

  }
})