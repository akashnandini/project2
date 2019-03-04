$(function () {
    console.log("test")

    $(".create-form").on("submit", function (event) {
        //console.log("test_create")
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0
        };
        $.post("/api/burgers", newBurger).then(function (data) {
            console.log(data);
            location.reload();
        });
        $("#burger").val("");
    });

    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");
        var newDevouredState = {
            devoured: newDevoured
        };
        //send the PUT request..
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to ", newDevoured);

                //reload the page to get the updated list..
                location.reload();

            }
        );

    });
});