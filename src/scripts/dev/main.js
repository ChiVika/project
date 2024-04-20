(function (){
    "use strict";
    const root = document.documentElement;
    const navToggle = document.querySelector("#js-navToggle");
    navToggle.addEventListener("click", function () {
    root.classList.toggle("show-nav");
    });

    //открытие и закрытие popup
    const eventPP = document.querySelector("#js-eventPP"); //ищем
    const eventOpen = document.querySelector("#js-eventOpenBtn")
    if(eventPP && eventOpen){
        const closeEventPP = function(event){
            function close(){
                document.removeEventListener("keyup", closeEventPP);
                document.removeEventListener("click", closeEventPP);

                root.classList.remove("show-event-popup");
            }

            switch (event.type){
                case "keyup":
                    if (event.key === "Escape" || event.keyCode == 27) close();
                    break;
                case "click":
                    if (event.target === this || event.target.classList.contains("js-ppCloseBtn")) close();
                    break;
            }

        };

        eventOpen.addEventListener("click", function () {
            root.classList.add("show-event-popup");
            document.addEventListener("keyup", closeEventPP);
            eventPP.addEventListener("click", closeEventPP);
        });


        // eventOpen.addEventListener("click", function(){
        //     root.classList.add("show-event-popup");
        // });

        // eventPP.addEventListener("click", function(event){
        //     if (event.target === this || event.target.classList.contains("js-ppCloseBtn")){
        //         root.classList.remove("show-event-popup");
        //     }
        // });

        // document.addEventListener("keyup", function(event){
        //     if (event.key === "Escape" || event.keyCode == 27){
        //         root.classList.remove("show-event-popup");
        //     }
        // });
    }

})();

