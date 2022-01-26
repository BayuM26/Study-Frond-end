document.addEventListener("DOMContentLoaded", function() {
    const btnSubmit = document.getElementById("form");

    btnSubmit.addEventListener("submit", function(event) {
        event.preventDefault();
        addTodo();
    });
});