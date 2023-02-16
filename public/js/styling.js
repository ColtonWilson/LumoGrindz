const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
    })
    },
    {
        threshold: 0,
    }
)

const hiddenJobCards = document.querySelectorAll('.hidden');

hiddenJobCards.forEach((card) => observer.observe(card));