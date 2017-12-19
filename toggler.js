$.fn.disableEl = function(){
  return $(this).each( function(){ $(this).addClass("disabled").attr("disabled","disabled"); });
}

$.fn.enableEl = function(){
  return $(this).each( function(){ $(this).removeClass("disabled").removeAttr("disabled"); });
}

var togglerActivate = function(el, onlyEnable) {
  el.each(function() {
    var testEl = $(this);
    testEl.removeClass("disabled");
    if (!onlyEnable) {
      testEl.removeClass("hidden");
    }
    if (testEl.parent().closest(".disabled").length === 0) {
      testEl.find(":input").enableEl();
    }
  });
};
var togglerDeactivate = function(el, onlyDisable) {
  el.each(function() {
    var el = $(this);
    el.addClass("disabled");
    if (!onlyDisable) {
      el.addClass("hidden");
    }
    el.find(":input").disableEl();
  });
};

var handleTogglerChange = function(toggler) {
  var togglerType = toggler.data("toggler");

  switch(togglerType) {
    case "onoff":
      var checkOn = $(toggler.data("toggle-on")),
        checkOff = $(toggler.data("toggle-off"));

      if (toggler.is(":radio")) {
        togglerDeactivate(
          $(
            "[data-toggle-group=" +
              toggler.data("toggle-off-group") +
              "]"
          )
        );

        if (toggler.is(":checked")) {
          togglerActivate(checkOn);
          loadUninitializedTogglers(checkOn);
        }
      } else {
        if (toggler.is(":checked")) {
          togglerActivate(checkOn);
          togglerDeactivate(checkOff);
          loadUninitializedTogglers(checkOn);
        } else {
          togglerDeactivate(checkOn);
          togglerActivate(checkOff);
          loadUninitializedTogglers(checkOff);
        }
      }
      break;

    case "enable":
      var checkOn = $(toggler.data("toggle-enable")),
        checkOff = $(toggler.data("toggle-disable"));

      if (toggler.is(":radio")) {
        togglerDeactivate(
          $(
            "[data-toggle-group=" +
              toggler.data("toggle-disable-group") +
              "]"
          ),
          true
        );

        if (toggler.is(":checked")) {
          togglerActivate(checkOn, true);
          loadUninitializedTogglers(checkOn);
        }
      } else {
        if (toggler.is(":checked")) {
          togglerActivate(checkOn, true);
          togglerDeactivate(checkOff, true);
          loadUninitializedTogglers(checkOn);
        } else {
          togglerDeactivate(checkOn, true);
          togglerActivate(checkOff, true);
          loadUninitializedTogglers(checkOff);
        }
      }
      break;

    case "button":
      var checkOn = $(toggler.data("toggle-on")),
        checkOff = $(toggler.data("toggle-off"));

      togglerActivate(checkOn);
      togglerDeactivate(checkOff);
      loadUninitializedTogglers(checkOn);

      break;

    case "option":
      var option = toggler.find("option:selected"),
        toggleOn = $(option.data("toggle-on"));

      if (option.data("toggle-link")) {
        window.location = option.data("toggle-link");
      } else {
        togglerDeactivate(
          $(
            "[data-toggle-group=" +
              toggler.data("toggle-off-group") +
              "]"
          )
        );
        togglerActivate(toggleOn);
        loadUninitializedTogglers(toggleOn);
      }
      break;
  }
};

$(document)
  .on("change", ":input[data-toggler]:not(button)", function() {
    handleTogglerChange($(this));
  })
  .on("click", "button[data-toggler], a[data-toggler]", function() {
    handleTogglerChange($(this));
  });

var loadUninitializedTogglers = function($searchEl) {
  var $el = $searchEl || $("body");

  $el.find("[data-toggler]").trigger("change");
};

$(function() {
  loadUninitializedTogglers($("body"));
  $("[data-toggle-off-group-once]").each(function() {
    togglerDeactivate(
      $(
        '[data-toggle-group="' +
          $(this).attr("data-toggle-off-group-once") +
          '"]'
      )
    );
  });
});
