(function () {
    var app = {
        init: function () {
            this.cacheDom();
            this.render();
            this.bindEvents();
        },
        cacheDom: function () {
            this.$downArrowWrapper = $("#down-arrow");
            this.$navTexas = $("#nav-texas");
            this.$navCanada = $("#nav-canada");
            //this.$navCalifornia = $("#nav-california");
            this.$navGalveston = $("#nav-galveston");
            this.$navCrossfire = $("#nav-crossfire");
            this.$downArrow = $("#down-arrow");
            this.$discoTexas = $('#disco-texas');
            this.$discoCanada = $('#disco-canada');
            //this.$discoCalifornia = $('#disco-california');
            this.$discoGalveston = $('#disco-galveston');
            this.$discoCrossfire = $('#disco-crossfire');
            this.$doc = $(document);
        },
        bindEvents: function () {
            this.$downArrowWrapper.on('click', {scrollTop: $( window ).height() + 1, duration: 500}, this.scrollToVal.bind(this));
            this.$navTexas.on('click', {scrollTop: $( window ).height() + 1, duration: 500}, this.scrollToVal.bind(this));
            this.$navCanada.on('click', {scrollTop: $("#disco-canada").offset().top, duration: 500}, this.scrollToVal.bind(this));
            //this.$navCalifornia.on('click', {scrollTop: $("#disco-california").offset().top, duration: 500}, this.scrollToVal.bind(this));
            this.$navGalveston.on('click', {scrollTop: $("#disco-galveston").offset().top, duration: 500}, this.scrollToVal.bind(this));
            this.$navCrossfire.on('click', {scrollTop: $("#disco-crossfire").offset().top, duration: 500}, this.scrollToVal.bind(this));
            this.$discoTexas.on('click', {page: 'texas.html'}, this.redirect.bind(this));
            this.$discoCanada.on('click', {page: 'canada.html'}, this.redirect.bind(this));
            //this.$discoCalifornia.on('click', {page: 'california.html'}, this.redirect.bind(this));
            this.$discoGalveston.on('click', {page: 'galveston.html'}, this.redirect.bind(this));
            this.$discoCrossfire.on('click', {page: 'crossfire.html'}, this.redirect.bind(this));
            this.$doc.on('keydown', this.changePage.bind(this));
        },
        unbindEvents: function () {

        },
        render: function () {

        },
        scrollToVal: function (e) {
            console.log('mainpagemargin scroltoval:' + this.mainPageMargin);
            e.preventDefault();
            $('html, body').animate({
                scrollTop: e.data.scrollTop
            }, e.data.duration);
        },
        redirect: function (e) {
           window.location.href = e.data.page;
        },
        changePage: function (e) {
            switch(e.which) {

                case 37: // left
                console.log('left');
                break;

                case 39: // right
                console.log('right');
                break;

                default: return; // exit this handler for other keys
            }
            e.preventDefault(); // prevent the default action (scroll / move caret)
        }
    }

    app.init();

})();

$('.promocode').on('click', function () {
    window.open('http://neodize.com', '_blank');
});
