(function ($) {
    $(document).ready(function () {
        var $navdrawerToggles = $('.navdrawer-toggle');
        var $navdrawers = $('.navdrawer');
        var $overlay = $('.navdrawer-overlay');

        $navdrawerToggles.on('click', function (e) {
            e.preventDefault();
            console.log($(this));
            var $self = $(this);
            var $target = $($self.data('target'));

            $target.toggleClass('is-active');
            $overlay.addClass('is-active');
        });

        $overlay.on('click', function () {
            $(this).removeClass('is-active');
            $navdrawers.removeClass('is-active');
        });
    });
})(jQuery);
