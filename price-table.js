let priceMale, priceFemale
let gender, unitSumPrice, sumPrice, startYear, endYear, amount
priceMale = [
  3.9,
  3.9,
  3.9,
  3.4,
  3.0,
  2.6,
  2.1,
  1.7,
  1.8,
  1.9,
  2.1,
  2.2,
  2.3,
  2.5,
  2.8,
  3.1,
  3.3,
  3.6,
  3.8,
  4.0,
  4.2,
  4.4,
  4.6,
  5.0,
  5.4,
  5.7,
  6.1,
  6.5,
  7.8,
  9.1,
  10.3,
  11.6,
  12.8,
  15.2,
  17.5,
  19.8,
  22.1,
  24.4,
  28.6,
  32.8,
  36.9,
  41.1,
  45.3,
  50.5,
  55.7,
  60.9,
  66.2,
  71.4,
  78.3,
  85.3,
  92.3,
  99.3,
  106.2,
  114.1,
  121.9,
  129.7,
  137.5,
  145.3,
  157.0,
  168.7,
  180.6,
  192.2,
  203.9,
  217.5,
  231.1,
  245.5,
  259.1,
  272.6,
  290.5,
  308.4,
  326.8,
  352.1,
  370.8,
  387.5,
  404.2,
  421.6,
  438.4,
  455.1,
  462.8,
  470.5,
  478.0,
  485.7,
  493.4,
  498.7,
  503.9,
  507.8
]
priceFemale = [
  3.6,
  3.6,
  3.6,
  3.2,
  2.8,
  2.4,
  2.0,
  1.6,
  1.7,
  1.8,
  1.9,
  2.0,
  2.1,
  2.3,
  2.5,
  2.7,
  2.9,
  3.1,
  3.5,
  4.0,
  4.5,
  4.9,
  5.4,
  6.4,
  7.4,
  8.3,
  9.3,
  10.3,
  12.0,
  13.8,
  15.5,
  17.3,
  19.0,
  21.9,
  24.8,
  27.6,
  30.5,
  33.4,
  37.7,
  42.0,
  46.3,
  50.6,
  54.8,
  60.3,
  65.9,
  70.9,
  76.3,
  81.8,
  85.4,
  89.0,
  92.5,
  96.1,
  99.7,
  103.6,
  107.5,
  111.0,
  114.9,
  118.8,
  124.1,
  129.4,
  134.4,
  139.7,
  145.0,
  152.0,
  158.9,
  165.4,
  172.3,
  179.2,
  186.0,
  192.8,
  198.9,
  209.4,
  216.5,
  225.1,
  233.7,
  241.8,
  250.4,
  259.0,
  265.5,
  272.1,
  278.3,
  284.8,
  291.4,
  298.4,
  305.5,
  312.9
]

unitSumPrice = 0
let selectGender = document.getElementById('gender')
let btnCal = document.getElementById('calculate')

function cal(e) {
  switch (selectGender.value) {
    case '女':
      gender = priceFemale
      break;
    case '男':
      gender = priceMale
      break;
    default:
      break;
  }

  for (let index = startYear; index < endYear + 1; index++) {
    const element = gender[index]
    unitSumPrice += element
  }
  sumPrice = Math.floor(amount * unitSumPrice)

  console.log(selectGender.value, unitSumPrice, startYear, endYear, amount)
  document.getElementById('sumPrice').textContent = sumPrice
  e.preventDefault();
}

btnCal.addEventListener('click', function (e) {

  startYear = parseInt(document.getElementById('startYear').value)
  endYear = parseInt(document.getElementById('endYear').value)
  amount = parseInt(document.getElementById('amount').value)
  cal(e)
  // 算完後清空
  unitSumPrice = 0
})