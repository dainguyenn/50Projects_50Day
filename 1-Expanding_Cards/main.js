let imgs = document.querySelectorAll('.img');

imgs.forEach((element,index) => {
    element.addEventListener('click', () =>{
        imgs.forEach((e,i) =>{
            if(e.classList.contains('active')) 
                e.classList.remove('active'); 
             
                e.style.width = "75px";
            
        })

        element.classList.add('active');
        element.style.width ="755px";
    })
});

