var tabs = {
    // Simple config
    config: {
        allTabs: document.querySelectorAll('.tab-link'),
        allContent: document.querySelectorAll('.tab-content')
    },

    init: function() {
        var buttons = this.config.allTabs;
        for(var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', this.changeClass, false);
            buttons[i].addEventListener('click', this.getReference, false);
        }
    },

    // Change the class for tab buttons
    changeClass: function(event) {
        event.preventDefault();
        var father = this.parentNode.parentNode;
        father.querySelector('.active').classList.remove('active');
        this.classList.add('active');
    },

    // Simple function for get reference for tab
    getReference: function() {
        var whichTab = this.getAttribute('href'),
        contentTab = document.querySelector(whichTab),
        father = contentTab.parentNode;

        father.querySelector('.active').classList.remove('active');

        contentTab.classList.add('active');
    }
};

tabs.init();