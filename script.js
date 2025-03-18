const click1 = async()=>{
    let res = await fetch("https://json-placeholder.mock.beeceptor.com/posts");
    
    
        const response = await res.json();  // Await the JSON parsing
        console.log(response);
        console.log(response[0].title)
   
        let card=document.querySelector(".card")
        let output=""
        response.forEach(element => {
        output +=`<div class="card1"><h1>${element.title}</h1>
        <p>${element.body}</p></div>`
    })
    card.innerHTML=output;
}