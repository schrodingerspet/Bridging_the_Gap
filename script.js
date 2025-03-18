document.addEventListener('DOMContentLoaded', function() {
  const exploreButtons = document.querySelectorAll('.card-content .btn');

  exploreButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault(); 
      
      let scheme = this.getAttribute('data-scheme');
      
      if (!scheme) {
        let title = this.parentElement.querySelector('h2').textContent;
        scheme = title.toLowerCase().replace('schemes', '').trim();
      }
      
      let url = `schemes/${scheme}.html`;
      
      window.open(url, '_blank');
    });
  });
});
