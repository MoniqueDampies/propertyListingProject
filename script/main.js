console.log(JSON.parse(window.localStorage.getItem('records')));

let properties = JSON.parse(window.localStorage.getItem('records'));

let container = document.getElementById("card")


// OWL CAROUSEL DISPLAYING OBJECT
for(var i = 0; i < properties.length; i++){
  container.innerHTML += `
  <div class="p-3">
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

