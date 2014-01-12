`showme.js` is used to show a user how a piece of javascript code works.

By including `jquery.showme.js` (and jQuery) any DOM element with the `.showme` class, and any element on which `$(...).showme();` is called, will have a
`.showme-activator` appended next to it. A click on this activator runs the code in the original element.