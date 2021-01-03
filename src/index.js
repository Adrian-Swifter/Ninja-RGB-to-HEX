//form fields
const form = document.querySelector('.form-data');
const rgb = document.querySelector('.rgb');

// results
const results = document.querySelector('.result-container');

function RGBToHex(r,g,b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
}

function handleSubmit(e) {
    e.preventDefault();
    results.innerHTML = "<img src='images/cat-loading.gif'>";
    setTimeout(() => {
        let args = rgb.value.split(",");
        results.innerText = RGBToHex(Number(args[0]), Number(args[1]), Number(args[2]));
    }, 2000);
}

function handleInput(e) {
    e.preventDefault();
    let args = rgb.value.split(",");
    form.style.background = RGBToHex(Number(args[0]), Number(args[1]), Number(args[2]));
}

form.addEventListener('submit', (e) => handleSubmit(e));
form.addEventListener('input', (e) => handleInput(e));