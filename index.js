function hide() {
    const gif = document.getElementById("loading-gif");
    const main = document.getElementById("main");
    gif.classList.add("hidden");
    setTimeout(function(){
        gif.style.display = 'none';
        main.classList.remove("none", "hidden");
        main.style.display = 'block';
    }, 500)
  }
setTimeout(hide, 1500);

function yes(){
    const buttons = document.querySelectorAll("button");
    const img = document.getElementById("question-gif");
    const text = document.getElementById("text");
    img.classList.add("hidden");
    buttons.forEach(button => {
        button.style.display = 'none';
    });
    setTimeout(function(){
        img.src = 'shy.gif';
        img.classList.remove("hidden");
        text.classList.remove("none");
    }, 500)
}

function no(){
    const btn = document.getElementById('no');
    const rightRandom = Math.floor(Math.random() * 95) - 44;
    const botRandom = Math.floor(Math.random() * 92) - 23;
    var rightPixels = rightRandom + "vw";
    var botPixels = botRandom + "vh";
    btn.style.position = 'relative';
    btn.style.right = rightPixels;
    btn.style.bottom = botPixels;
}