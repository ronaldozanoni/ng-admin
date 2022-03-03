/**
 * Help tooltip for a form field.
 *
 * @example <ma-help-tooltip field="field"></ma-help-tooltip>
 *
 * @param field.helpTooltip()  If a string, it will be displayed as text to the user.
 *                            If its an object, you can set `content`, `placement` and `cssClass` values.
 */
 export default function maHelpTooltip() {
  return {
      scope: true,
      restrict: 'E',
      link: function(scope, element) {
          var field = scope.field;
          var cssClass = ["ma-help-tooltip"];

          scope.placement = 'top';

          var helpTooltip = field && field.helpTooltip();

          if (helpTooltip && typeof helpTooltip === 'string') {
            scope.tooltipContent = helpTooltip;
          } else if (helpTooltip && typeof helpTooltip === 'object') {
            scope.tooltipContent = helpTooltip.content;
            scope.placement = helpTooltip.placement || scope.placement;

            if (helpTooltip.cssClass) {
              cssClass.push(helpTooltip.cssClass);
            }
          }

          scope.cssClass = cssClass.join(' ');
      },
      template: '<i ng-if="tooltipContent" class="glyphicon glyphicon-info-sign ma-help-tooltip-icon" tooltip-placement="{{ placement }}" tooltip-class="{{ cssClass }}" uib-tooltip-html="tooltipContent"></i>'
  };
}

maHelpTooltip.$inject = ['$compile'];