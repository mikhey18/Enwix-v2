const $leftBlocks = document.querySelectorAll('.find-dealer__item--left a'),
    $mapLinks = document.querySelectorAll('.find-dealer__map-desktop a');


$leftBlocks.forEach(el => {
    el.addEventListener('mousenter', (e) => {
        let self = e.currentTarget;
        let selfClass = self.getAttribute('href');
        let color = self.dataset.color;
        let currentElement = document.querySelector(`.find-dealer__map-desktop a[href="${selfClass}"]`);
        let currentPath = document.querySelectorAll('path');
        if (currentPath) currentPath.forEach(el => style.cssText = `fill: ${color}; stroke-width: 2px;`);
        self.classList.add('active');
    });

    el.addEventListener('mouseleave', (e) => {
        let self = e.currentTarget;
        let selfClass = self.getAttribute('href');
        let currentElement = document.querySelector(`.find-dealer__map-desktop a[href="${selfClass}"]`);
        let currentPath = document.querySelectorAll('path');
        if (currentPath) currentPath.forEach(el => style.cssText = ``);
        self.classList.remove('active');
    });

});


  /* Modal
    =====================================*/
    $(function() {
    $('[data-modal]').on('click', function(event) {
        event.preventDefault();
        let modal = $(this).data('modal');

        $('body').addClass('lock');
        $(modal).addClass('show');

        setTimeout(function() {
            $(modal).find('.modal__content').css({
                transform: 'scale(1)',
                opacity: '1'
            });
        });
    });


    $('[data-modal-close]').on('click', function(event) {
        event.preventDefault();
        let modal = $(this).parents('.modal');
        modalClose(modal);
    });


    $('.modal').on('click', function() {
        let modal = $(this);
        modalClose(modal);
    });


    $('.modal__content').on('click', function(event) {
        event.stopPropagation();
    });


    function modalClose(modal) {
        modal.find('.modal__content').css({
            transform: 'scale(0.5)',
            opacity: '0'
        });

        setTimeout(function() {
            $('body').removeClass('lock');
            modal.removeClass('show');
        }, 200);
    }




    });

    