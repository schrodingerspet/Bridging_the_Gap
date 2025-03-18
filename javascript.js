// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select all Explore buttons inside card-content sections
    const exploreButtons = document.querySelectorAll('.card-content .btn');
  
    exploreButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        
        // Check if the button has a data-scheme attribute
        let scheme = this.getAttribute('data-scheme');
        
        // If not, extract the scheme name from the card title (h2 element)
        if (!scheme) {
          // Example: "Health Schemes" becomes "health"
          let title = this.parentElement.querySelector('h2').textContent;
          // Remove the word "Schemes" and trim whitespace, then convert to lowercase
          scheme = title.toLowerCase().replace('schemes', '').trim();
        }
        
        // Construct the URL for the new scheme details page
        // Assumes you have a folder named "schemes" with individual HTML files (e.g., health.html)
        let url = `schemes/${scheme}.html`;
        
        // Redirect to the constructed URL
        window.location.href = url;
      });
    });
  });
  