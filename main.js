const qt = document.getElementById("koji");
const at = document.getElementById("doji");
document.querySelector("button").addEventListener("click",getQuote);

function getQuote(){
    fetch("https://type.fit/api/quotes")
    .then((response) => {
        return response.json();
    }).then((data) => {
        document.querySelector(".head").style.display="block";
        let rad=Math.floor(Math.random()*data.length);
        qt.textContent='"'+data[rad].text+'"';
        at.textContent="- "+data[rad].author;
        rad++;
    });

}