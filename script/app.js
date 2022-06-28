document.getElementById("card1").innerHTML = `
<img src="./assets/008-592x444.jpg" width="100%">
<h5>$11,000/mo</h5>
<div class="text-start px-3 pt-2">
<h5>New Apartment Nice View</h5>
<p>6701 South Dixie Highway, Miami, FL, USA</p>


<p>
<i class="fa-solid fa-bed"></i> : 3

<i class="fa-solid fa-shower"></i> : 1

<i class="fa-solid fa-car"></i> : 1

e08d : 1200 Sq Ft
</p>

<p><b>Apartment</b></p>
</div>
<hr>
<div class="container">
<div class="row">
<div class="col-6">
<p class="text-start"><i class="fa-solid fa-user"></i>Shane Stevens</p>
</div>
<div class="col-6">
<p><i class="fa-solid fa-link text-end"></i>2 years ago</p>
</div>
</div>
</div>
`;

const properties = [
  {
    title: "New Apartment",
    price: "$125,000",
    address: "6701 South Dixie Highway, Miami, FL, USA",
    beds: 2,
    baths: 2,
    parking: 2,
    area: 1987,
    type: "Apartment",
  },
  {
    title: "Apartment For Sale",
    price: "$876,000",
    address: "6701 South Dixie Highway, Miami, FL, USA",
    beds: 3,
    baths: 2,
    parking: 2,
    area: 2541,
    type: "Apartment",
  },
  {
    title: "Renovated Apartment",
    price: "$485,000",
    address: "6701 South Dixie Highway, Miami, FL, USA",
    beds: 4,
    baths: 2,
    parking: 2,
    area: 3650,
    type: "Apartment",
  },
  {
    title: "Apartment In Complex Building",
    price: "$567,000",
    address: "7900 Northwest 27th Avenue, Miami, FL, USA",
    beds: 2,
    baths: 2,
    parking: 2,
    area: 2345,
    type: "Apartment",
  },
];


const myJSON = JSON.stringify(properties);
let container = document.getElementById("cards");

console.log(properties[0]);

for (var i = 0; i < properties.length; i++) {
  container.innerHTML += `<div class="p-3">
        <div id="card" class="bg-dark text-white p-3">${properties[i].title},
     <br>   
        ${properties[i].address} <br>
        
        ${properties[i].beds}
        
        ${properties[i].baths} 
        
        ${properties[i].parking}</div>
      </div>`;
}


