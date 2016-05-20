fray
====

A framework for creating web applications

### Featuring

  * Modular
  * Virtual-DOM components
  * Immutable data structures
  * Unidirectional data flow
  * HTML-like templates

Status
------

Draft

### Roadmap

  * `fray.emitter`
  * `fray.delegator`
  * `fray.h`
      * nested components, scope inheritance
      * directives (`<do repeat="users" as="user">`)
      * event binding
  * `fray.model`
      * arrays handling
      * computed properties
  * `fray`
      * component directory to node module compiler
      * component controller
      * component styles (`CSS modules`, `postCSS`)

### Backlog

  * `fray.request`
  * `fray.router`
  * `fray.worker`

Test
----

    npm run build
    cat test/test.html | bin/parse
    cat test/test.html | bin/compile

References
----------

### Framework architecture

  * <https://github.com/cyclejs/core/issues/49>
  * <https://github.com/Raynos/mercury/tree/master/docs>

### Virtual DOM

  * <https://github.com/Matt-Esch/virtual-dom/blob/master/README.md>
  * <https://github.com/Matt-Esch/virtual-dom/wiki>
  * <https://github.com/Matt-Esch/virtual-dom/tree/master/docs>

### Unidirectional data flow

  * <http://redux.js.org/docs/basics/DataFlow.html>

### UI Events

  * <https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html>
  * <https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers>

### Similar projects

  * <https://github.com/Raynos/mercury>
  * <http://cycle.js.org/>
  * <https://baconjs.github.io/>
  * <https://github.com/santoshrajan/frpjs>
