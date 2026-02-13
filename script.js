function order(product, price) {
  document.getElementById("orderForm").scrollIntoView();
  document.getElementById("product").value = product;
  document.getElementById("price").value = price + "৳";
}

function submitOrder(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let product = document.getElementById("product").value;
  let price = document.getElementById("price").value;

  let message = `New Order%0AName: ${name}%0APhone: ${phone}%0AProduct: ${product}%0APrice: ${price}`;

  window.open(`https://wa.me/8801302133194?text=${message}`, '_blank');
}
@media (max-width: 768px) {
  .products {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 90%;
  }

  input {
    width: 90%;
  }
}
