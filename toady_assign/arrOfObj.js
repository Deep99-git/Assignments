
var arr = [
    {
        name: 'James',
        age: 21,
        country: 'United States',
        num: 9875494034
    },
    {
        name: 'Sameer',
        age: 20,
        country: 'Spain',
        num: 7848562340
    },
    {
        name: 'Rony',
        age: 31,
        country: 'United Kingdom',
        num: 3005980213
    },
    {
        name: 'Peter',
        age: 58,
        country: 'Canada',
        num: 3598750021
    },
    {
        name: 'Ajay',
        age: 20,
        country: 'Spain',
        num: 5674839024
    },
    {
        name: 'Deep',
        age: 21,
        country: 'India',
        num: 9811239083
    },
    {
        name: 'Sahil',
        age: 21,
        country: 'India',
        num: 8845056145
    }
]

var t = document.getElementById("tbody")

function populate(){
    var add=""
    for(let i in arr){
        add += "<tr><td>"+ arr[i].name 
        +"</td><td>"+arr[i].age
        +"</td><td>"+arr[i].country
        +"</td><td>"+arr[i].num
        +'</td><td><button class="btn btn-primary btn-sm" onclick="edit(this)">Edit</button><button class="btn btn-danger btn-sm" onclick="del(this)">Delete</button><button class="btn btn-success btn-sm" onclick="save(this)">Save</button>'
        +"</td></tr>"
    }
    t.innerHTML = add
}

function validation()
{
    var isEmpty = false
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    var con = document.getElementById("con").value
    var num = document.getElementById("num").value
    
    if(name === ""){
        alert("Name can't be empty")
        isEmpty = true;
    }
    else if(age === ""){
        alert("Age can't be empty")
        isEmpty = true;
    }
    else if(con === ""){
        alert("County can't be empty")
        isEmpty = true;
    }
    else if(num === ""){
        alert("Mobile no. can't be empty")
        isEmpty = true;
    }
    return isEmpty
}

function addRow(){
    if(!validation()){
        var name = document.getElementById("name").value
        var age = document.getElementById("age").value
        var con = document.getElementById("con").value
        var num = document.getElementById("num").value

        var newRow = t.insertRow(t.length)
        var cell1 = newRow.insertCell(0)
        var cell2 = newRow.insertCell(1)
        var cell3 = newRow.insertCell(2)
        var cell4 = newRow.insertCell(3)
        var cell5 = newRow.insertCell(4)

        cell1.innerHTML = name
        cell2.innerHTML = age
        cell3.innerHTML = con
        cell4.innerHTML = num
        cell5.innerHTML = '<button class="btn btn-primary btn-sm" onclick="edit(this)">Edit</button><button class="btn btn-danger btn-sm" onclick="del(this)">Delete</button><button class="btn btn-success btn-sm" onclick="save(this)">Save</button>'
    }
    
}

function del(btn){
    var row = btn.parentNode.parentNode
    console.log(row.parentNode.removeChild(row))
    console.log(row)
}


function edit(data){
    var rowData = data.parentNode.parentNode
    var name = document.getElementById("name")
    var age = document.getElementById("age")
    var con = document.getElementById("con")
    var num = document.getElementById("num")

    name.value = rowData.cells[0].innerHTML
    age.value = rowData.cells[1].innerHTML
    con.value = rowData.cells[2].innerHTML
    num.value = rowData.cells[3].innerHTML
   
}

function save(data){
    if(!validation()){
        var rowData = data.parentNode.parentNode
        var name = document.getElementById("name").value
        var age = document.getElementById("age").value
        var con = document.getElementById("con").value
        var num = document.getElementById("num").value

        rowData.cells[0].innerHTML = name
        rowData.cells[1].innerHTML = age
        rowData.cells[2].innerHTML = con
        rowData.cells[3].innerHTML = num

        name = ""
        age = ""
        con = ""
        num = ""
    }
}