window.onload = () => {
    const jobs = document.querySelectorAll('.card');
    let height = 0;

    jobs.forEach(job => {
        if(job.offsetHeight > height){
            height = job.offsetHeight;
        }
    });

    jobs.forEach(job => {
        job.style.height = (height + 60) + 'px';
    });

    const mobileNavigation = document.querySelector('.nav__item--mobile');
    let navigationIsShown = false;

    mobileNavigation.addEventListener("click", () => {

        let list = document.querySelectorAll('.nav__item--desktop');

        [].forEach.call(list, (item) => {
            item.style.display = navigationIsShown ? 'none' : 'block';
        });

        navigationIsShown = !navigationIsShown;
    });
}


