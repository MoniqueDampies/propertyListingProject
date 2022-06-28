const properties= [
    {   
        id: 1,
        url: "../assets/008-592x444.jpg", 
        title: "Design Apartment",
        price: '$125,000',
        address: "1230 Quincy Street, Brooklyn, NY, USA",
        beds: 3,
        baths: 2,
        parking: 1,
        area: 2987,
        type: "Apartment",
        author: "Samuel Palmer",
        posted: "2 years ago"
        
    },
    {       //done
        id: 2,   
        url: "../assets/012-592x444.jpg",
        title: "Apartment For Sale",
        price: '$876,000',
        address: "8100 S Ashland Avenue, Chicago, IL, USA",
        beds: 3,
        baths: 2,
        parking: 2,
        area: 2541,
        type: "Apartment",
        author: "Kevin Palmer",
        posted: "2 years ago"
    },
    {   //done
        id: 3,
        url: "../assets/018-592x444.jpg",
        title: "Light And Modern Apartment",
        price: '$485,000',
        address: "2436 SW 8th Street, Miami, FL, USA",
        beds: 4,
        baths: 2,
        parking: 1,
        area: 3650,
        type: "Apartment",
        author: "Mike Moore",
        posted: "2 years ago"
    },
    {   
        id: 4,
        url: "../assets/020-592x444.jpg",
        title: "New Home For Sale",
        price: '$567,000',
        address: "7900 Northwest Avenue, Miami, FL, USA",
        beds: 4,
        baths: 2,
        parking: 1,
        area: 1345,
        type: "Single family home",
        author: "Vincent Fuller",
        posted: "2 years ago"
    },
    {   //done
        id: 5,
        url: "../assets/026-592x444.jpg",
        title: "Guaranteed Modern Home",
        price: '$590,000',
        address: "9056 Brickell Bay Drive, Miami, FL, USA",
        beds: 3,
        baths: 2,
        parking: 1,
        area: 3345,
        type: "Single family home",
        author: "Michelle Macks",
        posted: "2 years ago"
    },
    {   //done
        id: 6,
        url: "../assets/031-592x444.jpg",
        title: "Single Family Home",
        price: '$867,000',
        address: "7900 Northwest Avenue, Miami, FL, USA",
        beds: 5,
        baths: 3,
        parking: 1,
        area: 3345,
        type: "Single family home",
        author: "Brittany Broski",
        posted: "2 years ago"
    },
    {   //done
        id: 7,
        url: "../assets/032-592x444.jpg",
        title: "Design Place Apartment",
        price: '$567,000',
        address: "7894 Sackett Street, Brooklyn, NY, USA",
        beds: 5,
        baths: 3,
        parking: 1,
        area: 3845,
        type: "Studio",
        author: "Sarah Schauer",
        posted: "2 years ago"
    },
    {   //done
        id: 8,
        url: "../assets/035-592x444.jpg",
        title: "Contemporary Studio",
        price: '$16,000/mo',
        address: "7900 Northwest Avenue, Miami, FL, USA",
        beds: 3,
        baths: 3,
        parking: 1,
        area: 2345,
        type: "Studio",
        author: "Michelle Ramirez",
        posted: "2 years ago"
    },
    {   
        id: 9,
        url: "../assets/036-592x444.jpg",
        title: "Villa Relaxing Green View",
        price: '$1,567,000',
        address: "1500 NW 36th Street, Miami, FL, USA",
        beds: 3,
        baths: 2,
        parking: 1,
        area: 1345,
        type: "Villa",
        author: "Samuel Ramirez",
        posted: "2 years ago"
    },
    {   
        id: 10,
        url: "../assets/205-592x444.jpg",
        title: "Equestrian Villa",
        price: '$1,567,000',
        address: "3385 Pan American Drive, Miami, FL, USA",
        beds: 4,
        baths: 2,
        parking: 1,
        area: 1345,
        type: "Villa",
        author: "Michelle Palmer",
        posted: "2 years ago"
    }
];


const myJSON = JSON. stringify(properties);
let container = document.getElementById("card")

console.log(properties[0])

for(var i = 0; i < properties.length; i++){
  container.innerHTML += `<div class="p-3">
        <div id="card" class="bg-light text-black p-3">

    <img src="${properties[i].url}" alt="${properties[i].title} img">
        
    <h5 class="pt-2">${properties[i].title},</h5>
       
    <div class="text-secondary">${properties[i].address}</div>
    <br>
          
<i class="fa-solid fa-bed"></i>  : ${properties[i].beds}
<i class="fa-solid fa-shower"></i>  : ${properties[i].baths} 
<i class="fa-solid fa-car"></i>  :  ${properties[i].parking}
<i class="bi bi-rulers"></i> ${properties[i].area} Sq Ft
<br><br>
<b style="text-transform: uppercase ;">${properties[i].type}</b>
<hr>
<div class="row">
<div class="col-6 text-start"><p><i class="fa-solid fa-user"></i> ${properties[i].author}</p></div>
<div class="col-6 text-end"><p><i class="fa-solid fa-link"></i> ${properties[i].posted}</p></div>
</div>
</div>
      </div>`
}

