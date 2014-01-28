$ = jQuery

class WillowTree
  @init: =>
    $context = $(@)

    $context.off 'click.toggle.willow-tree'
    $context.on 'click.toggle.willow-tree', '.js-willow-tree-toggle', @toggle

  @toggle: (e) ->
    e.preventDefault()
    new WillowLeaf().toggle(e)


class WillowLeaf
  toggle: (event) =>
    target = event.target
    $target = $(target)

    $parentListElement = $target.parent('li')
    $subList = $parentListElement.children('ul')

    $subList.toggle()
    $target.toggleClass("toggled")

$.fn.willowTree = WillowTree.init

