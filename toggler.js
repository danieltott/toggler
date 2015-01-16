$.fn.disableEl = function(){
    return $(this).each( function(){ $(this).addClass("disabled").attr("disabled","disabled"); });
};
$.fn.enableEl = function(){
    return $(this).each( function(){ $(this).removeClass("disabled").removeAttr("disabled"); });
};

var handleTogglerChange = function(toggler) {

    var togglerType = toggler.data('toggler'),
        togglerActivate = function(el) {

            el.each(function() {
                var testEl = $(this);
                testEl.removeClass('hidden disabled');
                if(testEl.parent().closest(".disabled").length === 0) {
                    testEl.find(':input').enableEl();
                }
            });
        },
        togglerDeactivate = function(el) {

            el.each(function() {
                $(this).addClass('hidden disabled').find(':input').disableEl();
            });
        };

    if(togglerType === 'onoff') {
        var checkOn = $(toggler.data('toggle-on')),
            checkOff = $(toggler.data('toggle-off'));

        if(toggler.is(':checked')) {
            togglerActivate(checkOn);
            togglerDeactivate(checkOff);
            loadUninitializedTogglers(checkOn);
        }
        else {
            togglerDeactivate(checkOn);
            togglerActivate(checkOff);
            loadUninitializedTogglers(checkOff);
        }
    }
    else if(togglerType == 'option') {
        var activateGroup = $('[data-toggle-id=' + toggler.find('option:selected').data('toggle-on') + ']');
        togglerDeactivate($('[data-toggle-group=' + toggler.data('toggle-off-group') + ']'));
        togglerActivate(activateGroup);
        loadUninitializedTogglers(activateGroup);
    }

};

$(document).on('change', '[data-toggler]', function() {

    handleTogglerChange($(this));

});

var loadUninitializedTogglers = function($searchEl) {
    var $el = $searchEl || $('body');

    $el.find('[data-toggler]').trigger('change');

};

$(function() {

    loadUninitializedTogglers($('body'));

});