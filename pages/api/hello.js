// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function loopPages(url, callback) {
    // ...
        $.getJSON("...", function (data) {
            // ...
            callback(myList);
        });
}

function callback(myList) {
    // fill your data grid
}

loopPages('https://api.themoviedb.org/3/movie/550?api_key=03d313e2f922689871a2ffb72bd6be0d',function(myList){
  console.log(mylist)
})