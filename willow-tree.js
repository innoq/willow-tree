(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  (function($) {
    var WillowLeaf, WillowTree;
    WillowTree = (function() {
      function WillowTree() {}

      WillowTree.init = function() {
        var $context;
        $context = $(WillowTree);
        $context.off('click.toggle.willow-tree');
        return $context.on('click.toggle.willow-tree', '.js-willow-tree-toggle', WillowTree.toggle);
      };

      WillowTree.toggle = function(e) {
        e.preventDefault();
        return new WillowLeaf().toggle(e);
      };

      return WillowTree;

    }).call(this);
    WillowLeaf = (function() {
      function WillowLeaf() {
        this.toggle = __bind(this.toggle, this);
      }

      WillowLeaf.prototype.toggle = function(event) {
        var $parentListElement, $subList, $target, target;
        target = event.target;
        $target = $(target);
        $parentListElement = $target.parent('li');
        $subList = $parentListElement.children('ul');
        $subList.toggle();
        return $target.toggleClass("toggled");
      };

      return WillowLeaf;

    })();
    return $.fn.willowTree = WillowTree.init;
  })(jQuery);

}).call(this);
