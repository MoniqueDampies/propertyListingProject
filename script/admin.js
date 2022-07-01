localStorage.removeItem('records');

let properties= JSON.parse(localStorage.getItem('records')) ?
JSON.parse(localStorage.getItem('records')) : [
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
// localStorage.setItem('records', JSON.stringify(properties));
console.log(('records', JSON.stringify(properties)));
function readData() {
    let container = document.getElementById("items");
    container.innerHTML = '';
    properties.forEach( (item, index)=> {
        container.innerHTML += `
    //     <tr class="text-start" scope="row">
    //     <td>${item.id}</td>
    //     <td class="col-1"><img src="${item.image}" style="width: 100%" defer></td>
    //     <td>${item.title}</td>
    //     <td class="col-2">${item.address}</td>
    //     <td>${item.type}</td>
    //     <td>$${item.price}</td>
    //     <td>${item.area} sq ft</td>
    //     <td>${item.name}</td>
    //     <td><br><a class="px-2" onClick="onEdit(this)"><i class="fa-solid fa-pen-to-square"></i></a>
    //     <a onClick="onDelete(${index})"><i class="fa-solid fa-trash-can"></i></a></td>
    //   </tr>
    //   <tr>
        <th scope="row">${properties[i].id}</th>
        <td class="col-1"><img src="${properties[i].url}" alt="${properties[i].title} img" style="width: 100%; padding: 10px;"></td>
        <td class="text-centre">${properties[i].title}</td>
        <td>${properties[i].type}</td>
        <td>${properties[i].price}</td>
        <td>${properties[i].area} Sq Ft</td>
        <td>${properties[i].author}</td>
        <td><a onClick="onEdit(this)"><i class="fa-solid fa-pen-to-square px-3"></i></a><a onClick="onDelete(this)"><i class="fa-solid fa-trash-can"></i></a></td>
      </tr>
        `
    } );
    // console.log(properties[0]);
}
readData();
  var selectedRow = null
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
function readFormData() {
    var formData={};
    formData["id"] = document.getElementById("id").value;
    formData["image"] = document.getElementById("image").value;
    formData["title"] = document.getElementById("title").value;
    formData["location"] = document.getElementById("location").value;
    formData["category"] = document.getElementById("category").value;
    formData["price"] = document.getElementById("price").value;
    formData["size"] = document.getElementById("size").value;
    formData["author"] = document.getElementById("author").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    properties.push(
    cell0 = newRow.insertCell(0),
    cell0.innerHTML = data.id,
    cell1 = newRow.insertCell(1),
    cell1.innerHTML = `<img src="${data.image}" style="width: 100%" defer>`,
    cell2 = newRow.insertCell(2),
    cell2.innerHTML = data.title,
    cell3 = newRow.insertCell(3),
    cell3.innerHTML = data.location,
    cell4 = newRow.insertCell(4),
    cell4.innerHTML = data.category,
    cell5 = newRow.insertCell(5),
    cell5.innerHTML =`$`+data.price,
    cell6 = newRow.insertCell(6),
    cell6.innerHTML = data.size,
    cell7 = newRow.insertCell(7),
    cell7.innerHTML = data.author,
    cell8 = newRow.insertCell(8),
    cell8.innerHTML = `<br><a class="px-2" onClick="onEdit(this)"><i class="fa-solid fa-pen-to-square"></i></a>
                       <a onClick="onDelete(this)"><i class="fa-solid fa-trash-can"></i></a>`);
                       //  saving on local storage
    // console.log(properties);
localStorage.setItem('records', JSON.stringify(properties));
readData();
}
function resetForm() {
    document.getElementById("id").value = "";
    document.getElementById("image").value = "";
    document.getElementById("title").value = "";
    document.getElementById("location").value = "";
    document.getElementById("category").value = "";
    document.getElementById("price").value = "";
    document.getElementById("size").value = "";
    document.getElementById("author").value = "";
    selectedRow = null;
}
function onDelete(id) {
    if(id > -1) {
        properties.splice(id, 1);
    }
    localStorage.setItem('records', JSON.stringify(properties));
    readData();
}
function onEdit(id) {
    if (alert('Click on the "Add/Edit Properties" button to edit')) {
        row = id.parentElement.parentElement;
        document.getElementById("employeeList").updateRecord();
    }
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("image").value = selectedRow.cells[1].innerHTML;
    document.getElementById("title").value = selectedRow.cells[2].innerHTML;
    document.getElementById("location").value = selectedRow.cells[3].innerHTML;
    document.getElementById("category").value = selectedRow.cells[4].innerHTML;
    document.getElementById("price").value = selectedRow.cells[5].innerHTML;
    document.getElementById("size").value = selectedRow.cells[6].innerHTML;
    document.getElementById("author").value = selectedRow.cells[7].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.image;
    selectedRow.cells[2].innerHTML = formData.title;
    selectedRow.cells[3].innerHTML = formData.location;
    selectedRow.cells[4].innerHTML = formData.category;
    selectedRow.cells[5].innerHTML = formData.price;
    selectedRow.cells[6].innerHTML = formData.size;
    selectedRow.cells[7].innerHTML = formData.author;
}
function validate() {
    isValid = true;
    if (document.getElementById("id").value == "") {
        isValid = false;
        document.getElementById("idValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("idValidationError").classList.contains("hide"))
            document.getElementById("idValidationError").classList.add("hide");
    }
    return isValid;
}















