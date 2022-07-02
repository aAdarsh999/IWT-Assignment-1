let user_data
function store() {
    let name= document.getElementById("name").value
    let user = {
        "name": name,
    }
   if(localStorage.getItem("names")==null)
    {
       // console.log("Entering into if")
        user_data=[]
        user_data.push(user)
        localStorage.setItem("index",JSON.stringify(0))
    }
    else
    {
       // console.log("Entering into else")
        user_data=JSON.parse(localStorage.getItem("names"))
     //   console.log(typeof(user),user_data)
        user_data.push(user)
    }
    new_data=JSON.stringify(user_data)
    // write JSON string to a file
    localStorage.setItem("names",new_data)
    console.log("data written")
}