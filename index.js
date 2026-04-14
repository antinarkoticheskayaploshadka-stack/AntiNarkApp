        let td = window.Telegram.WebApp;
        let get = document.getElementById("get");
        let alco = document.getElementById("alco");

        get.addEventListener("click", () => {
            document.getElementById("main").style.display = "none";
            document.getElementById("menu").style.display = "block";
        });

        alco.addEventListener("click", () => {
            document.getElementById("menu").style.display = "none";
            document.getElementById("order").style.display = "block";
        })