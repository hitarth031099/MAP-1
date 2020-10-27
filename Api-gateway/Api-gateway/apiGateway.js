const gateway = require('fast-gateway');

const server = gateway({
    routes:[{
        prefix:'/products',
        target: 'http://localhost:4000'
    },{
        prefix:'/orders',
        target: 'http://localhost:5000'
    }]
})
server.start(3000);
console.log("Server running on port 3000");
