    // document.querySelector("#about").addEventListener("click", function () {
    //   if (document.querySelector("#content").style.display == "none") {
    //     document.querySelector("#plus-icon").classList.remove("rotate-0");
    //     document.querySelector("#plus-icon").classList.add("rotate-45");
    //     document.querySelector("#content").style.display = "block";
    //   } else {
    //     document.querySelector("#plus-icon").classList.remove("rotate-45");
    // document.querySelector("#plus-icon").classList.add("rotate-0");
    //     document.querySelector("#content").style.display = "none";
    //   }
    // });

    document.querySelectorAll(".question").forEach((question) => {
    question.addEventListener("click",function() {
        question.classList.toggle("active")
        let answer = this.querySelector(".answer")

        
        
        if (question.classList.contains("active")) {
            answer.style.display = "block"
            document.querySelector(".plus-icon").classList.remove("rotate-0");
            document.querySelector(".plus-icon").classList.add("rotate-45");
        } else {
        
            answer.style.display = "none"
            document.querySelector(".plus-icon").classList.remove("rotate-45");
document.querySelector(".plus-icon").classList.add("rotate-0");
            
        };
    })
})


const demo = document.querySelector("#demo");
    const Token = document.querySelector("#Token");

    demo.addEventListener("mouseenter", function () {
      Token.classList.toggle("hidden");
    });
    demo.addEventListener("mouseleave", function () {
      Token.classList.toggle("hidden");
    });

    document.addEventListener("mouseover", function (e) {
      // demo.innerHTML = e.key
    });

    const profile = document.querySelector("#profile");
    const menu = document.querySelector("#menu");

    profile.addEventListener("mouseenter", function () {
      menu.classList.toggle("hidden");
    });
    menu.addEventListener("mouseleave", function () {
      menu.classList.toggle("hidden");
    });

    document.addEventListener("mouseover", function (e) {
      // demo.innerHTML = e.key
    });

    