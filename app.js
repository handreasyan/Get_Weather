const input = document.querySelector(".input");
const result = document.querySelector(".result");

let id;
input.addEventListener("input", (ev) => {
  let val = ev.target.value;
  if (id) clearTimeout(id);
  id = setTimeout(() => {
    input.setAttribute("disabled", "true");
    fetch(`https://goweather.herokuapp.com/weather/${val}`)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        input.removeAttribute("disabled");
        if (res.temperature !== "") {
          result.innerHTML = `In ${val} the temperature is ${res.temperature}`;
        } else {
          result.innerHTML = `Please enter the correct region name`;
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, 1000);
});
