        let td = window.Telegram.WebApp;
        let get = document.getElementById("get");
        let alco = document.getElementById("alco");
        let narco = document.getElementById("narco");
        let vape = document.getElementById("vape");
        let energy = document.getElementById("energy");

        get.addEventListener("click", () => {
            document.getElementById("main").style.display = "none";
            document.getElementById("menu").style.display = "block";
        });

        alco.addEventListener("click", () => {
            document.getElementById("menu").style.display = "none";
            document.getElementById("order1").style.display = "block";
        });

        narco.addEventListener("click", () => {
            document.getElementById("menu").style.display = "none";
            document.getElementById("order2").style.display = "block";
        });

        vape.addEventListener("click", () => {
            document.getElementById("menu").style.display = "none";
            document.getElementById("order3").style.display = "block";
        });

        energy.addEventListener("click", () => {
            document.getElementById("menu").style.display = "none";
            document.getElementById("order4").style.display = "block";
        });