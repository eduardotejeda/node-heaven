const http = require('http');

const server = http.createServer((req, res) => {
if(req.url === '/'){
    res.end('Home Page')
}
if(req.url === '/about'){
    res.end('About Page'    )
    //This code make the server crash because is not async
    // for(let i; i < 1000; i++) {
    //     for(let j; j < 1000; j++){
    //         console.log(`${i} ${j}`)
    //     }
    // }
}else
res.end('Error Page')

})

server.listen(5000, ()=> {
    console.log("Server runnig in port 5000")
}) 