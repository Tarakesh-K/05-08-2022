var res = fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
res.then((data)=>data.json()).then((data1)=>foo(data1));

var container = document.getElementById("container");

let row = document.createElement("div");
row.setAttribute("class","row");
container.append(row);

function foo(arr) {
    for(let i=0;i<arr.length;i++) {
        console.log(arr[i]);
        var col = document.createElement("div");
        col.setAttribute("class","col-lg-4 col-sm-12");
        row.append(col);
        col.innerHTML=`<div class="card border-success mb-3" style="max-width: 18rem;">
        <div class="card-header bg-transparent border-success text-center">${arr[i].name}</div>
        <div class="card-body text-success text-center">
          <p>Name: ${arr[i].name}</p>
          <p>Latlng: ${arr[i].latlng}</p>
          <p>Region: ${arr[i].region}</p>
          <p>Capital: ${arr[i].capital}</p>
          <p>Flag: ${arr[i].flag}</p>
          <p>Country Code: ${arr[i].cioc}</p>
        </div>
        </div>`;
    }
}