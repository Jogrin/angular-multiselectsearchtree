angular.module('multiselect-searchtree').run(['$templateCache', function($templateCache) {$templateCache.put('src/multiselect-searchtree.html','<div layout="column" class="tree-control" ng-cloak>\n    <div class="helper-container">\n        <div class="line">\n            <md-input-container ng-if="filterType !== \'hidden\'" class="md-icon-float md-block">\n                <label>Cerca</label>\n                <md-icon>search</md-icon>\n                <input ng-disabled="filterType === \'disable\'" type="text" ng-model="filter.filterKeyword" ng-click="onFilterClicked($event)">\n            </md-input-container>\n            <md-button ng-if="extraButtons" ng-click="onSelectAll(inputModel,$event)">\n                Select All\n            </md-button>\n            <md-button ng-if="extraButtons" ng-click="onClearAll(inputModel,$event)">\n                Clear All\n            </md-button>\n        </div>\n    </div>\n    <div class="tree-view">\n        <ul class="tree-container">\n            <tree-item class="top-level" ng-repeat="item in inputModel" item="item" ng-show="!item.isFiltered " use-callback="useCallback"\n                can-select-item="canSelectItem " multi-select="multiSelect" item-selected="itemSelected(item) " on-active-item="onActiveItem(item)"\n                select-only-leafs="selectOnlyLeafs" select-not-propagate="selectNotPropagate" expand-callback="expandCallback"\n                expand-property="expandProperty">\n            </tree-item>\n        </ul>\n    </div>\n</div>');
$templateCache.put('src/tree-item.html','<li>\n    <div class="item-container" ng-class="{active: item.isActive, selected: item.selected, withCheckbox: showCheckbox()}" ng-click="clickSelectItem(item, $event)"\n        ng-mouseover="onMouseOver(item, $event)">\n        <div class="item-icon" ng-if="item.children.length > 0 || item[expandProperty].length > 0">\n            <md-icon ng-if="!item.isExpanded" ng-click="onExpandClicked(item, $event)">keyboard_arrow_right</md-icon>\n            <md-icon ng-if="item.isExpanded" ng-click="onExpandClicked(item, $event)">keyboard_arrow_down</md-icon>\n        </div>\n        <div class="item-details">\n            <md-checkbox aria-label="node" ng-if="showCheckbox()" ng-checked="item.selected">\n                {{item.name}}\n            </md-checkbox>\n            <p ng-if="!showCheckbox()">{{item.name}}</p>\n        </div>\n    </div>\n    <ul ng-repeat="child in item.children" ng-if="item.isExpanded">\n        <tree-item item="child" item-selected="subItemSelected(item)" ng-if="!child.isFiltered" use-callback="useCallback" can-select-item="canSelectItem"\n            multi-select="multiSelect " on-active-item="activeSubItem(item, $event) " expand-callback="expandCallback" expand-property="expandProperty">\n        </tree-item>\n    </ul>\n</li>');}]);