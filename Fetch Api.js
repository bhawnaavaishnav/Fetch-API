    // $(document).ready(function () {
    //     $('button').click(function () {
    //         let name = $('#nameid').val();
    //         alert(name)
    //     })
    // })

    window.onload = ready;

    function ready() {
        let btn = document.getElementsByTagName("button");
        btn[0].addEventListener("click", function (e) {
            let name = document.getElementById("nameid").value;
            alert(name);
            let sName = document.querySelector(".imgchange").src = `https://joeschmoe.io/api/v1/${name}`;
            let b = document.querySelector(".imgchange");
            console.log(b)
        })
    }