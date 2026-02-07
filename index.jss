setInterval(() => {
    document.querySelector(".heart").style.transform += " scale(1.05)";
    setTimeout(() => {
        document.querySelector(".heart").style.transform =
            document.querySelector(".heart").style.transform.replace(" scale(1.05)", "");
    }, 200);
}, 1200);
