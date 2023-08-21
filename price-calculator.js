
let totalPrice = 0;

function handleClickCard(target) {
  const selectItemContainer = document.getElementById("selected-item");
  const button = document.getElementById("myButton");
  const itemName = target.childNodes[3].children[1].innerText;
  
  const li = document.createElement("li");
  li.innerText = itemName;
  selectItemContainer.appendChild(li);

  const price = target.childNodes[3].children[2].innerText.split(" ")[0];

  totalPrice = parseFloat(totalPrice) + parseFloat(price);
  document.getElementById("total-price").innerText = totalPrice;
  if (totalPrice > 0) {
    button.removeAttribute("disabled");
  }
  
 return totalPrice;
  
}

function calculateTotal(){
  const inputFieldCoupon = document.getElementById('input-field');
  
  const applyBtn = document.getElementById('btn-apply')
  const inputField = inputFieldCoupon.value;
 
  if(inputField === "SELL200" && totalPrice >= 200) {
    
    const amount = totalPrice;
    const discount = 0.20;

    const discountAmount = amount * discount;
    const discountTotal = discountAmount.toFixed(2)
    document.getElementById('discount').innerText = discountTotal;
     
    const total = totalPrice - discountTotal;
    const totalAmount = total.toFixed(2)
    document.getElementById('total').innerText = totalAmount;
     
  }else{
    alert ("Please Over 200 tk & valid Use Promo Code ");
  }
  inputFieldCoupon.value = "";
}

document.getElementById('page-reload').addEventListener('click', function() {
  location.href = "/";
   
})

