document.addEventListener('DOMContentLoaded', function() {
  const exploreButtons = document.querySelectorAll('.card-content .btn');

  exploreButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior
      
      // Use the data-scheme attribute to determine the target page
      let scheme = this.getAttribute('data-scheme');
      
      // Fallback: extract the scheme from the card title if not provided
      if (!scheme) {
        let title = this.parentElement.querySelector('h2').textContent;
        scheme = title.toLowerCase().replace('schemes', '').trim();
      }
      
      // Construct the URL – assumes a "schemes" folder with individual HTML files (e.g., health.html)
      let url = `schemes/${scheme}.html`;
      window.location.href = url;
    });
  });
});
