console.log("I work");

const observer = new IntersectionObserver((jobsPosted) => {
    jobsPosted.forEach((jobPosted) => {
        console.log(jobPosted)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenJobPosting = document.querySelectorAll('.hidden');
hiddenJobPosting.forEach((card) => observer.observe(card));