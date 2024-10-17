const toggleInput = document.getElementById('toggle');
        const domainSelect = document.getElementById('domain-select');

        const jobDomains = ['Software Developer', 'Data Science Engineer', 'Web Developer','Chartered Accountant','MERN Stack Developer'];
        const internshipDomains = ['Research Assistant', 'Software Intern', 'Marketing Intern','Account Manager Intern','DevOps Intern','AI Intern'];

        function updateDropdown() {
            const selectedDomains = toggleInput.checked ? internshipDomains : jobDomains;
            domainSelect.innerHTML = '<option value="">Select Domain</option>'; 
            selectedDomains.forEach(domain => {
                const option = document.createElement('option');
                option.value = domain;
                option.textContent = domain;
                domainSelect.appendChild(option);
            });
        }
        toggleInput.addEventListener('change', updateDropdown);
        updateDropdown(); 

        const carouselItems = document.querySelector('.carousel-items');

function scrollRight() {
    carouselItems.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}

function scrollLeft() {
    carouselItems.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
}
const newCarousel = document.querySelector('.new-carousel');

function scrollRightNew() {
    newCarousel.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}

function scrollLeftNew() {
    newCarousel.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
}
function gotologin() {
    window.location.href = 'interview.html';
}