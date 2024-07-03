const myDemo = (function () {
    const init = function () {
      createObserver();
    };
  
    const createObserver = function () {
      let options = {
        root: null,
        rootMargin: "100px",
        threshold: 0.5
      };
  
      let observer = new IntersectionObserver(
        function (entries, observer) {
            handleIntersect(entries, observer); 
          }, 
        options);
      
      let targetElements = document.querySelectorAll(".anime");
  
      targetElements.forEach((targetElement) => {
        observer.observe(targetElement);
      });
    };
  
    const handleIntersect = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.children[0].classList.add("bounce-me");
          observer.unobserve(entry.target);
        }
      });
    };
  
    return {
      init: init
    };
  })();
  
  myDemo.init();
  


  document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("myForm").addEventListener("submit", function(e) {
        e.preventDefault() // Cancel the default action
        sendContactForm();
    });
});


