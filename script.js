window.addEventListener("scroll", () =>{
    let a = document.getElementById("p1");
    let b = document.getElementById("p2");
    let c = document.getElementById("p3");
    let vala = window.scrollY;

    a.style.top = vala* -1 + "px";
    b.style.top = vala* -2 + "px";
    c.style.top = vala* -1 + "px";
})