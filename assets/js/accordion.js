var accordion = {
    // Simple config
    config: {
        allAccordions: document.querySelectorAll('.accordion-button'),
        allContent: document.querySelectorAll('.accordion-content')
    },

    init: function() {
        var accordions = this.config.allAccordions;
        for(var i = 0; i < accordions.length; i++) {
            accordions[i].addEventListener('click', this.getReference, false);
            accordions[i].addEventListener('click', this.changeClass, false);
        }
    },

    // Simple function for change class for buttons
    changeClass: function(event) {
        event.preventDefault();
        this.classList.toggle('active');
        this.blur();
    },


    // Simple function for get reference for accordion
    getReference: function() {
        var whichAccordion = this.getAttribute('href'),
        contentAccordion   = document.querySelector(whichAccordion);

        contentAccordion.classList.toggle('active');
    }
};

accordion.init();