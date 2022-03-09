/*********GET METHOD*******/
fetch("https://reqres.in/api/users")
.then (res=>{
    if (res.ok)
        console.log("ok")
    else
        console.log("not ok")
    return res.json()
})
.then(data=>console.log(data))
.catch(Error=>console.log('error'))

/**********POST METHOD********/

// fetch("https://reqres.in/api/users",{
// method : 'POST',
// headers : {
//     'Content-type': 'application/json'
// },
// body : JSON.stringify({
//     name:'User 1'
// })
// }).then(res=> {
//        return res.json()
// })
// .then(data=>console.log(data))
// .catch(Error => console.log('error'))