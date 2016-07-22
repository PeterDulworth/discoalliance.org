(function () {
    var app = {
        init: function () {
            this.cacheDom();
            this.render();
            this.bindEvents();
        },
        cacheDom: function () {
            this.$downArrowWrapper = $("#down-arrow-wrapper");
            this.$downArrow = $("#down-arrow");
            this.$discoTexas = $('#disco-texas');
            this.$discoCanada = $('#disco-canada');
            this.$discoCalifornia = $('#disco-california');
            this.$discoGalveston = $('#disco-galveston');
        },
        bindEvents: function () {
            this.$downArrowWrapper.on('click', {scrollTop: $( window ).height() + 1, duration: 500}, this.scrollToVal.bind(this));
            this.$discoTexas.on('click', {page: 'texas.html'}, this.redirect.bind(this));
            this.$discoCanada.on('click', {page: 'canada.html'}, this.redirect.bind(this));
            this.$discoCalifornia.on('click', {page: 'california.html'}, this.redirect.bind(this));
            this.$discoGalveston.on('click', {page: 'galveston.html'}, this.redirect.bind(this));
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
    }

    app.init();

})();