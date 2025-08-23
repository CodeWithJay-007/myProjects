const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log("ehight: ",document.querySelector('#height').value)
  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if(bmi<18.6)
      results.innerHTML = `<span>you are under weight ${bmi}</span>`;
    else if (bmi>18.6 && bmi<24.9)
      results.innerHTML = `<span>you are normal weight ${bmi}</span>`;
    else
      results.innerHTML = `<span>you are over weight ${bmi}</span>`;

    //show the result
    //results.innerHTML = `<span>yyour height is ${height} and wieght is ${weight} and BMI is ${bmi}</span>`;
  }

  
});

