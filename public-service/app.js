// requirejs.config({
//     baseUrl: 'lib',
//     paths: {
//         app: '../app'
//     }
// });

// // Start loading the main app file. Put all of
// // your application logic in there.
// requirejs(['main'],function(main){
//     console.log(main.getHello());
// });
(function(){
    $(document).ready(function() {
        $('#sso-login').on("click", function(e){
            e.preventDefault();
            console.log('clcicked');
            window.location.href = "http://localhost:3010/";
        })
    })
})();