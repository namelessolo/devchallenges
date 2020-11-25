const baskets = document.querySelectorAll(".basket__item");

baskets.forEach((basket) => basket.addEventListener("click", addRemoveProduct));

function addRemoveProduct(e) {
  const btn = e.target.closest(".basket__btn");
  if (!btn) return;

  const amount = e.currentTarget.querySelector(".basket__amount");
  let amountVaule = amount.textContent;

  if (btn.matches(".plus")) {
    amountVaule++;
    amount.textContent = amountVaule;
  }

  if (btn.matches(".minus")) {
    if (amountVaule < 2) return;
    amountVaule--;
    amount.textContent = amountVaule;
  }
  countTotalPrice();
}

function countTotalPrice() {
  const totalPrice = document.querySelector(".total-price");
  const prices = document.querySelectorAll(".price");
  const amounts = document.querySelectorAll(".basket__amount");
  const sumOfPrices = [...prices].reduce(
    (total, item, idx) =>
      total + +item.textContent.slice(1) * +amounts[idx].textContent,
    0
  );
  totalPrice.textContent = `$${(sumOfPrices + 19).toFixed(2)}`;
}
