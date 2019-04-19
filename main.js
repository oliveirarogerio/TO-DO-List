(function () {

    var data = { items: [] }

    localStorage.setItem("todolist", JSON.stringify(data))

    var todo = document.querySelector('#todo');
    var completed = document.querySelector('#completed');
    var item = document.querySelector('#item');
    document.querySelector('#add').addEventListener("click", add_item);
    item.addEventListener("keydown", function (e) {

        if (e.code === "Enter") {

            add_item();
        }

    })
    function add_item() {
        if (!item.value) return
        console.log('entered information ')


    }



})();