const form=document.getElementById("form");

const btn=document.getElementById("btn");


form.addEventListener("submit",e=>{
    e.preventDefault();

    const name=document.getElementById("name").value;
const lname=document.getElementById("lname").value;
// const id=document.getElementById("id").value;

    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        body:JSON.stringify({
            name:name,
           lname:lname,
            // id:id,
        }),
        headers:{
            "Content-Type": "application/json;charset=UTF-8"
        }
    
    }).then(response=>response.json())
    .then(data=>console.log(data))
    const results=document.getElementById("results")
    console.log(results);
    results.innerHTML+=`
    <p></p>The name is ${name}</p>
    <p>Last name is ${lname}</p>
    `

})