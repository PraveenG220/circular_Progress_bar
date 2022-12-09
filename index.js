let circularProgress = document.querySelector(".circular-progress"),
      pogressValue = document.querySelector(".progress-value");

    let pogressStartValue = 0,
       pogressEndValue = 90,
       speed =100;

       let progress = setInterval(()=>{

        pogressStartValue++;

        pogressValue.textContent =`${pogressStartValue}%`

        circularProgress.style.background =`conic-gradient(#7d2ae8  ${pogressStartValue*3.6}deg, #ededed 0deg)`

        if(pogressStartValue == pogressEndValue){
            clearInterval(progress);
        }  
       }, speed);
