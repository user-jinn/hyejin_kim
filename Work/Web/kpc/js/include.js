fetch("./include/header.html")
  .then(res => res.text())
  .then(data => {
    document.querySelector("#header").innerHTML = data;
  });

fetch("./include/footer.html")
  .then(res => res.text())
  .then(data => {
    document.querySelector("#footer").innerHTML = data;
  });