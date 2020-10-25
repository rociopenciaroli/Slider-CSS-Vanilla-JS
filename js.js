document.body.onload = initSlider;

function initSlider() {
    const sliderContainer = document.getElementById('slider');
    const paginationContainer = document.createElement('div');

    //create the pagination container
    paginationContainer.className = 'pagination';
    sliderContainer.prepend(paginationContainer);

    //count the slides
    const slideCount = document.querySelectorAll('.slide').length;

    for(let i = slideCount; i > 0; i--) {
        // generate radio button
        let radioBtn = document.createElement('input');

        radioBtn.type = 'radio';
        radioBtn.name = 'slide-radios';
        radioBtn.className = 'slide-radio';
        radioBtn.id = 'slide-radio-${i}';
        
        if (i == 1) radioBtn.checked = true;
        
        //prepend radio button to slider container
        sliderContainer.prepend(radioBtn);

        //generate the labels
        let label = document.createElement('label');

        label.setAttribute('for' , 'slide-radio-${i}');
        label.innerHTML = i;

        //prepend label to pagination container
        paginationContainer.prepend(label);
    }

    //automate the slider change
    let autoRun = setInterval(changeSlide, 5000);
}

function changeSlide() {
    //get the radio button
    const radioButtons = [...document.querySelectorAll('.slide-radio')];

    //get the current index
    const currentIndex = radioButtons.findIndex(rb => rb.checked);

    //check the next radio button
    radioButtons[(currentIndex = 1) % radioButtons.length].checked = true;
}