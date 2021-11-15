jQuery(document).ready(function($) {
    $('.scroll_to a').click(function() { // отслеживаем клик по кнопке с классом li-nk
      var scroll_el = $(this).attr('href'); // берем у него содержимое атрибута href, которое начинается на "#section" или ".section"
      if ($(scroll_el).length != 0) { // чтобы избежать ошибки проверяем на существование этого элемента 
        $('html, body').animate({
          scrollTop: $(scroll_el).offset().top - 100 // отступ (пиксели)
        }, 2500); // скорость (миллисекунды)
      }
      return false; // отключаем действие по умолчанию
    });
  });


(function($) {
    $(function() {
      $("ul.tabs-caption").on("click", "li:not(.active)", function() {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
          .closest("div.tabs")
          .find("div.tab-content")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active");
      });
    });
  })(jQuery);


  $(document).ready(function() { 
    var overlay = $('#overlay'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
    var open_modal = $('.open-modal'); // все ссылки, кoтoрые будут oткрывaть oкнa
    var close = $('.modal-close, #overlay'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
    var modal = $('.modal-block'); // все скрытые мoдaльные oкнa
    
    open_modal.click( function(event){ // лoвим клик пo ссылке с клaссoм open_modal
    event.preventDefault(); // вырубaем стaндaртнoе пoведение
    var div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
    overlay.fadeIn(400, //пoкaзывaем oверлэй
    function(){ // пoсле oкoнчaния пoкaзывaния oверлэя
    $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
    .css('display', 'block')
    .animate({opacity: 1, top: '50%'}, 200); // плaвнo пoкaзывaем
    });
    });
    
    close.click( function(){ // лoвим клик пo крестику или oверлэю
    modal // все мoдaльные oкнa
    .animate({opacity: 0, top: '45%'}, 200, // плaвнo прячем
    function(){ // пoсле этoгo
    $(this).css('display', 'none');
    overlay.fadeOut(400); // прячем пoдлoжку
    }
    );
    });
    });


$(function(){
    $('.rev_slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300
    })
})

/*document.querySelectorAll('a.link-item').forEach(link =>{
    link.addEventListener('click', function(e) {
        e.preventDefault()

        const href = this.getAttribute('href').substring(1)
        const scrollTarget = document.getElementById(href)
        const topOffset = 0
        const elementPosition = scrollTarget.getBoundingClientRect().top
        const offsetPosition = elementPosition - topOffset

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth',
        })
    })
})*/