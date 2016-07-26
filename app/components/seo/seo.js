'use strict';

// Extend
function extend (layout, datas) {
  // Get scope of layout
  var scope = layout.controller();
  // Merging scope (layout key are overrided by caller)
  for (var o in datas) {
    scope[o] = datas[o];
  }
  // Return view of layout with combined scope
  return layout.view(scope);
}


function updateTitle(title) {
  document.getElementsByTagName('title')[0].innerHTML = title;
}

function updateDesciption(description) {
  document.getElementsByTagName('title')[0].innerHTML = title;
}

module.exports = {
  extend: extend,
  updateTitle: updateTitle,
  updateDesciption: updateDesciption,
};
