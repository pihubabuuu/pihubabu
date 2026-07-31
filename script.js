// =====================================
// Premium Sakura Letter
// Part 1
// =====================================

// Elements
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letterText");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

// Letter Text
const fullMessage = `Idk you'll ever know me or not

Idk if I should tell you or not

Still I care enough to let you know

Even if I couldn't, I'll find a way to show.

Kehna toh chahta par keh na paun saamne aapke.

Dar lagta hai kahin meri nazar se hi nazar na lag jaye aapko.

Shayad mai chahu is kadar aapko

Ki khabar bhi bekhabar reh jaye is baat ko.

I hope you smiled babu 🌸

Yourssss ❤️`;

let typed = false;

// Envelope Open
envelope.addEventListener("click", () => {

    envelope.classList.toggle("open");

    if (typed) return;

    typed = true;

    setTimeout(typeLetter, 700);

});

// Typewriter
function typeLetter() {

    let i = 0;

    function typing() {

        if (i >= fullMessage.length) {

            letter.innerHTML =
                letter.innerHTML.replace(
                    "Yourssss ❤️",
                    "<span class='signature'>Yourssss ❤️</span>"
                );

            return;

        }

        letter.textContent += fullMessage.charAt(i);

        letter.scrollTop = letter.scrollHeight;

        i++;

        setTimeout(typing, 35);

    }

    typing();

}

// Music
musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.textContent = "⏸ Pause Music";

    } else {

        music.pause();

        musicBtn.textContent = "🎵 Play Music";

    }

});
// =====================================
// Premium Sakura Letter
// Part 2 - Petals, Hearts & Sparkles
// =====================================

// ---------- Sakura Petals ----------

function spawnPetal() {

    const petal = document.createElement("div");
    petal.className = "petal";

    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.top = "-40px";

    const size = 16 + Math.random() * 12;
    petal.style.width = size + "px";
    petal.style.height = size + "px";

    document.body.appendChild(petal);

    const duration = 8000 + Math.random() * 5000;
    const drift = (Math.random() - 0.5) * 250;
    const startX = parseFloat(petal.style.left);
    const rotation = 360 + Math.random() * 720;

    const start = performance.now();

    function animate(now){

        const t = (now - start) / duration;

        if(t >= 1){
            petal.remove();
            return;
        }

        petal.style.top = (window.innerHeight + 60) * t + "px";
        petal.style.left = startX + Math.sin(t * 4) * drift + "px";
        petal.style.transform =
            `rotate(${rotation * t}deg)`;

        petal.style.opacity = 1 - t * 0.4;

        requestAnimationFrame(animate);

    }

    requestAnimationFrame(animate);

}

setInterval(spawnPetal,220);


// ---------- Floating Hearts ----------

function spawnHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = Math.random()*window.innerWidth+"px";
    heart.style.bottom = "-30px";

    heart.style.fontSize =
        (16 + Math.random()*10) + "px";

    heart.style.pointerEvents="none";

    document.body.appendChild(heart);

    const start = performance.now();
    const duration = 5000;

    const startX =
        parseFloat(heart.style.left);

    function animate(now){

        const t=(now-start)/duration;

        if(t>=1){

            heart.remove();

            return;

        }

        heart.style.bottom =
            (window.innerHeight*t)+"px";

        heart.style.left =
            startX+Math.sin(t*8)*30+"px";

        heart.style.opacity=1-t;

        requestAnimationFrame(animate);

    }

    requestAnimationFrame(animate);

}

setInterval(spawnHeart,1800);


// ---------- Sparkles ----------

function sparkle(){

    const s=document.createElement("div");

    s.innerHTML="✨";

    s.style.position="fixed";

    s.style.left=
        Math.random()*window.innerWidth+"px";

    s.style.top=
        Math.random()*window.innerHeight+"px";

    s.style.pointerEvents="none";

    document.body.appendChild(s);

    s.animate([

        {
            opacity:0,
            transform:"scale(.5)"
        },

        {
            opacity:1,
            transform:"scale(1)"
        },

        {
            opacity:0,
            transform:"scale(.2)"
        }

    ],{

        duration:1800

    }).onfinish=()=>s.remove();

}

setInterval(sparkle,450);
// =====================================
// Premium Sakura Letter
// Part 3 - Heart Burst, Cursor Sparkles
// =====================================

// ---------- Heart Burst ----------

function heartBurst(){

    const rect = envelope.getBoundingClientRect();

    for(let i=0;i<28;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";
        heart.style.left=(rect.left+rect.width/2)+"px";
        heart.style.top=(rect.top+rect.height/2)+"px";
        heart.style.pointerEvents="none";
        heart.style.fontSize=(16+Math.random()*12)+"px";

        document.body.appendChild(heart);

        const angle=Math.random()*Math.PI*2;
        const distance=90+Math.random()*170;

        const x=Math.cos(angle)*distance;
        const y=Math.sin(angle)*distance;

        heart.animate([
            {
                transform:"translate(0,0) scale(1)",
                opacity:1
            },
            {
                transform:`translate(${x}px,${y}px) scale(.2)`,
                opacity:0
            }
        ],{
            duration:1700,
            easing:"cubic-bezier(.22,1,.36,1)"
        }).onfinish=()=>heart.remove();

    }

}

envelope.addEventListener("click",heartBurst,{once:true});


// ---------- Cursor Sparkles ----------

document.addEventListener("mousemove",(e)=>{

    const star=document.createElement("div");

    star.innerHTML="✨";

    star.style.position="fixed";
    star.style.left=e.clientX+"px";
    star.style.top=e.clientY+"px";
    star.style.pointerEvents="none";
    star.style.fontSize="14px";

    document.body.appendChild(star);

    star.animate([
        {
            opacity:1,
            transform:"translateY(0)"
        },
        {
            opacity:0,
            transform:"translateY(-30px)"
        }
    ],{
        duration:700
    }).onfinish=()=>star.remove();

});


// ---------- Envelope Glow Pulse ----------

setInterval(()=>{

    envelope.animate([

        {
            boxShadow:"0 0 20px rgba(255,120,170,.3)"
        },

        {
            boxShadow:"0 0 55px rgba(255,120,170,.8)"
        },

        {
            boxShadow:"0 0 20px rgba(255,120,170,.3)"
        }

    ],{

        duration:2400

    });

},2400);
// =====================================
// Premium Sakura Letter
// Part 4 - Final Polish
// =====================================

// ---------- Floating Bokeh ----------

function createBokeh(){

    const b=document.createElement("div");

    b.style.position="fixed";

    const size=20+Math.random()*60;

    b.style.width=size+"px";
    b.style.height=size+"px";

    b.style.borderRadius="50%";

    b.style.background="rgba(255,255,255,.12)";

    b.style.filter="blur(8px)";

    b.style.left=Math.random()*window.innerWidth+"px";

    b.style.top=window.innerHeight+"px";

    b.style.pointerEvents="none";

    document.body.appendChild(b);

    const start=performance.now();

    const duration=10000+Math.random()*5000;

    function animate(now){

        const t=(now-start)/duration;

        if(t>=1){

            b.remove();

            return;

        }

        b.style.top=(window.innerHeight-(window.innerHeight+100)*t)+"px";

        b.style.opacity=1-t;

        requestAnimationFrame(animate);

    }

    requestAnimationFrame(animate);

}

setInterval(createBokeh,900);


// ---------- Envelope Heartbeat ----------

setInterval(()=>{

    envelope.animate([

        {transform:"scale(1)"},

        {transform:"scale(1.02)"},

        {transform:"scale(1)"}

    ],{

        duration:900

    });

},3000);


// ---------- Welcome ----------

console.log("🌸 Premium Sakura Letter Loaded Successfully 🌸");
