const nav = document.getElementById("navbar");
document.getElementById("menu").addEventListener("click",()=>{

    const navStyle =  document.getElementById("navbar").style.display;
    if(navStyle == "flex")
    {
        nav.style.display = "none"

    }
    else{
        nav.style.display = "flex"

    }
   
})

