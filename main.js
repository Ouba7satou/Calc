function clacAge() {
  let amount = document.getElementById("age").value;
  result_1 = amount * 12;
  result_2 = amount * 365.25;
  result_3 = amount * 8766;
  result_4 = amount * 525_960;
  result_5 = amount * 31_557_600;
  Ultraresult = document.getElementById("result");
  if (amount === "") {
    Ultraresult.innerHTML = `<p>The field can be empty.</p>`;
  } else if (isNaN(amount)) {
    Ultraresult.innerHTML = `<p>The field accept only Number.</p>`;
  } else {
    Ultraresult.innerHTML = ` <div>
    <p>Your Age in Mounth ==> ${result_1} </p>
    <p>Your Age in Days ==> ${result_2} </p>
    <p>Your Age in Hours ==> ${result_3} </p>
    <p>Your Age in Minutes ==> ${result_4} </p>
    <p>Your Age in seconds ==> ${result_5} </p>
    </div> `;
  }
}
function clacTall() {
  let feet = document.getElementById("Tall").value;
  result_1 = (feet / 30.48).toFixed(2);
  result_2 = (feet / 2.54).toFixed(2);
  Ultraresult = document.getElementById("feet-inch");
  if (feet === "") {
    Ultraresult.innerHTML = `<p>The field can be empty.</p>`;
  } else if (isNaN(feet)) {
    Ultraresult.innerHTML = `<p>The field accept only Number.</p>`;
  } else {
    Ultraresult.innerHTML = ` <div>
    <p>Your Tall In Feet ==> ${result_1} </p>
    <p>Your Tall In Inches ==> ${result_2} </p>
    </div> `;
  }
}
//

function clacMoney() {
  let money = document.getElementById("money").value;
  result_1 = (money * 13.6).toFixed(3);
  result_2 = (money * 19).toFixed(3);
  Ultraresult = document.getElementById("Usd-dz");
  if (money === "") {
    Ultraresult.innerHTML = `<p>The field can be empty.</p>`;
  } else if (isNaN(money)) {
    Ultraresult.innerHTML = `<p>The field accept only Number.</p>`;
  } else {
    Ultraresult.innerHTML = ` <div>
    <p>DZD in Bank Rate ==> ${result_1} </p>
    <p>DZD in Black Market ==> ${result_2} </p>
    </div> `;
  }
}
