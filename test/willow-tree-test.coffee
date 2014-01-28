(($) ->

  setup = ->
    $fixture = $('#qunit-fixture', document)
    $tree = $('.js-willow-tree', $fixture)
#    $subList2 = $('.js-test-list-2', $tree)
#    $toggle2 = $('.js-test-toggle-2', $tree)

    [$fixture, $tree]


  subListAndToggle = (number) ->
    [_, $tree] = setup()
    $subList = $(".js-test-list-#{number}", $tree)
    $toggle = $(".js-test-toggle-#{number}", $tree)

    [$subList, $toggle]

  module "WillowTree Initialization"

  test "Jquery objects should provide an apropriate binding to initialize the willow tree", ->
    [$fixture, _] = setup()
    ok(typeof $fixture.willowTree == "function", "WillowTree Initializer has been exported")

  test "With loaded CSS styles, inner lists are hidden by default", ->
    [$subList1, _] = subListAndToggle(1)
    [$subList2, _] = subListAndToggle(2)

    ok($subList1.is(':hidden'), "SubList 1 is hidden")
    ok($subList2.is(':hidden'), "SubList 2 is hidden")


  module "WillowTree Usage"

  test "Toggling a hidden list, by clicking on its prepended toggle button", ->
    [$fixture, _] = setup()
    [$subList1, $toggle1] = subListAndToggle(1)

    $fixture.willowTree()

    ok($subList1.is(':hidden'), "SubList 1 is hidden")
    $toggle1.click()
    ok(!$subList1.is(':hidden'), "SubList 1 is visible")

  test "Toggling a hidden list, should only make the direct child list visible", ->
    [$fixture, _] = setup()
    $fixture.willowTree()

    [$subList1, $toggle1] = subListAndToggle(1)
    [$subList3, $toggle3] = subListAndToggle(3) # child list to list 1

    ok($subList3.is(':hidden'), "SubList 3 is hidden")
    $toggle1.click()
    ok(!$subList1.is(':hidden'), "SubList 1 is visible")
    ok($subList3.is(':hidden'), "SubList 3 is hidden")


  test "Toggling a hidden list, should mark the toggled button", ->
    [$fixture, _] = setup()
    $fixture.willowTree()

    [_, $toggle1] = subListAndToggle(1)

    ok(!$toggle1.hasClass('toggled'), "Toggle button is not toggled yet")
    $toggle1.click()
    ok($toggle1.hasClass('toggled'), "Toggle button is toggled yet")





)(jQuery)