// Make sure to wait to attach handlers until the DOM is fully loaded.
$(function () {

  $(".changeDevour").on("click", function (event) {


      let id = $(this).data("id");

      let newDevourState = {

          devoured: true
      };

      //Send the PUT request

      $.ajax("/api/burgers/" + id, {

          type: "PUT",
          data: newDevourState
      }).then(
          function () {

              console.log("changed devoured to", true);
              //Reload the page to get the updated list
              location.reload();
          }

      );
  });


  $(".create-form").on("submit", function (event) {

      event.preventDefault();

      let newBurger = {

          burger_name: $("#burgerInput").val().trim(),
          devoured: false
      };

      //Send the POST request.
      $.ajax("/api/burgers", {

          type: "POST",
          data: newBurger

      })
          .then(
              function () {

                  console.log("created new burger");
                  // Reload the page to get the updated list
                  location.reload();
              }



          )


  })
});