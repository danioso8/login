document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    let currentIndex = 0;
  
    function goToItem(index) {
      if (index < 0 || index >= totalItems) return;
  
      carouselItems.forEach(item => {
        item.style.transform = `translateX(-${index * 100}%)`;
      });
  
      currentIndex = index;
    }
  
    document.querySelector('.carousel-control.prev').addEventListener('click', function() {
      goToItem(currentIndex - 1);
    });
  
    document.querySelector('.carousel-control.next').addEventListener('click', function() {
      goToItem(currentIndex + 1);
    });
  });