(function() {
  (function($) {
    var setup, subListAndToggle;
    setup = function() {
      var $fixture, $tree;
      $fixture = $('#qunit-fixture', document);
      $tree = $('.js-willow-tree', $fixture);
      return [$fixture, $tree];
    };
    subListAndToggle = function(number) {
      var $subList, $toggle, $tree, _, _ref;
      _ref = setup(), _ = _ref[0], $tree = _ref[1];
      $subList = $(".js-test-list-" + number, $tree);
      $toggle = $(".js-test-toggle-" + number, $tree);
      return [$subList, $toggle];
    };
    module("WillowTree Initialization");
    test("Jquery objects should provide an apropriate binding to initialize the willow tree", function() {
      var $fixture, _, _ref;
      _ref = setup(), $fixture = _ref[0], _ = _ref[1];
      return ok(typeof $fixture.willowTree === "function", "WillowTree Initializer has been exported");
    });
    test("With loaded CSS styles, inner lists are hidden by default", function() {
      var $subList1, $subList2, _, _ref, _ref1;
      _ref = subListAndToggle(1), $subList1 = _ref[0], _ = _ref[1];
      _ref1 = subListAndToggle(2), $subList2 = _ref1[0], _ = _ref1[1];
      ok($subList1.is(':hidden'), "SubList 1 is hidden");
      return ok($subList2.is(':hidden'), "SubList 2 is hidden");
    });
    module("WillowTree Usage");
    test("Toggling a hidden list, by clicking on its prepended toggle button", function() {
      var $fixture, $subList1, $toggle1, _, _ref, _ref1;
      _ref = setup(), $fixture = _ref[0], _ = _ref[1];
      _ref1 = subListAndToggle(1), $subList1 = _ref1[0], $toggle1 = _ref1[1];
      $fixture.willowTree();
      ok($subList1.is(':hidden'), "SubList 1 is hidden");
      $toggle1.click();
      return ok(!$subList1.is(':hidden'), "SubList 1 is visible");
    });
    test("Toggling a hidden list, should only make the direct child list visible", function() {
      var $fixture, $subList1, $subList3, $toggle1, $toggle3, _, _ref, _ref1, _ref2;
      _ref = setup(), $fixture = _ref[0], _ = _ref[1];
      $fixture.willowTree();
      _ref1 = subListAndToggle(1), $subList1 = _ref1[0], $toggle1 = _ref1[1];
      _ref2 = subListAndToggle(3), $subList3 = _ref2[0], $toggle3 = _ref2[1];
      ok($subList3.is(':hidden'), "SubList 3 is hidden");
      $toggle1.click();
      ok(!$subList1.is(':hidden'), "SubList 1 is visible");
      return ok($subList3.is(':hidden'), "SubList 3 is hidden");
    });
    return test("Toggling a hidden list, should mark the toggled button", function() {
      var $fixture, $toggle1, _, _ref, _ref1;
      _ref = setup(), $fixture = _ref[0], _ = _ref[1];
      $fixture.willowTree();
      _ref1 = subListAndToggle(1), _ = _ref1[0], $toggle1 = _ref1[1];
      ok(!$toggle1.hasClass('toggled'), "Toggle button is not toggled yet");
      $toggle1.click();
      return ok($toggle1.hasClass('toggled'), "Toggle button is toggled yet");
    });
  })(jQuery);

}).call(this);
