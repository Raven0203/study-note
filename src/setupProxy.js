const { createProxyMiddleware } =require("http-proxy-middleware") ;
module.exports = app =>{
    app.use(
        createProxyMiddleware("/maps/api/place/details/json",{
        target:"https://maps.googleapis.com",
        changeOrigin:true

    }))
    app.use(
        createProxyMiddleware("/maps/api/distancematrix/json",{

        target:"https://maps.googleapis.com",
        changeOrigin:true

    }))
}