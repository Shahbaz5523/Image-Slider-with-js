let left = document.getElementById("left");
let right = document.getElementById("right");

right.onclick =()=>{
    let img = right.previousElementSibling.previousElementSibling;
    if(img.name == '1'){
        img.className = "slide";
        setTimeout(() => {
            img.src = "img/2.jpg";
            img.name = "2";
            img.className="";
        }, 1200);
    }else if(img.name == '2'){
        img.className = "slide";
        setTimeout(() => {
            img.src = "img/3.jpg";
            img.name = "3";
            img.className="";
        }, 1200);
    }else if(img.name == '3'){
        img.className = "slide";
        setTimeout(() => {
            img.src = "img/1.jpg";
            img.name = "1";
            img.className="";
        }, 1200);
    }
}

left.onclick =()=>{
    let img = left.previousElementSibling;
    if(img.name == '1'){
        img.className = "slide";
        setTimeout(() => {
            img.src = "img/3.jpg";
            img.name = "3";
            img.className="";
        }, 1200);
    }else if(img.name == '2'){
        img.className = "slide";
        setTimeout(() => {
            img.src = "img/1.jpg";
            img.name = "1";
            img.className="";
        }, 1200);
    }else if(img.name == '3'){
        img.className = "slide";
        setTimeout(() => {
            img.src = "img/2.jpg";
            img.name = "2";
            img.className="";
        }, 1200);
    }
}