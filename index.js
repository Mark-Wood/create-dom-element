var document = require('global/document')

module.exports = createElement

function createElement(tag, attrs, children) {
  var el = document.createElement(tag)

  if (attrs) {
    for (var key in attrs) {
      attrs.hasOwnProperty(key) && el.setAttribute(key, attrs[key])
    }
  }

  if (children) {
    for (var i = 0, length = children.length; i < length; i++) {
      el.appendChild(children[i])
    }
  }

  return el
}
