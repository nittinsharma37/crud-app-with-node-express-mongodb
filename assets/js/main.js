$("#add_user").submit(function(event){
    alert("Data inserted successfully!");
});

$("#update_user").submit(function(event) {
    event.preventDefault();
    let unindexedArray = $(this).serializeArray();
    let data = {};

    $.map(unindexedArray, (n,i) => {
        data[n["name"]] = n["value"];
    });
    // console.log(data);

    let request = {
        "url": `http://localhost:2000/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    };

    $.ajax(request).done(function(response){
        alert("Data updated successfull !");
    });
});


if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        let id = $(this).attr("data-id");
        let request = {
            "url": `http://localhost:2000/api/users/${id}`,
            "method": "DELETE"
        };
        if(confirm("Do you really want to delete this record ?")){
            $.ajax(request).done(function(response){
                alert("User deleted Successfully !");
                location.reload();
            });
        }
    });
}