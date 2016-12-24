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
}