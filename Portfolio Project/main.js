// scroll section
window.onscroll = () =>{
    // sticky header
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY >100)
}



// Function to toggle active class in the navigation links based on scroll position
function setActiveNavLink() {
    const sections = document.querySelectorAll('section'); // Get all sections
    const navLinks = document.querySelectorAll('.navbar a'); // Get all navigation links

    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect(); // Get the bounding rectangle of the element
        return (
            rect.top >= 0 && // Check if the top of the element is in the viewport
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) // Check if the bottom of the element is in the viewport
        );
    }

    // Remove active class from all navigation links
    function removeActiveClass() {
        navLinks.forEach(link => {
            link.classList.remove('active'); // Remove the "active" class from each navigation link
        });
    }

    // Check each section's position and add active class to the corresponding navigation link
    sections.forEach((section, index) => {
        if (isInViewport(section)) {
            removeActiveClass(); // Remove active class from all navigation links
            navLinks[index].classList.add('active'); // Add active class to corresponding navigation link
        }
    });
}

// Add event listener for scroll event to call the setActiveNavLink function
document.addEventListener('scroll', setActiveNavLink);

// Call setActiveNavLink function initially to set the active class for the initial view
setActiveNavLink();
