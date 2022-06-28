export default {
  js: `import { cleanNano } from "nano-grid/modules/helpers";
import { getVals } from "nano-grid/modules/columns-manager";

export default class Column extends HTMLElement {
  constructor() {
    super();
  }

  updateSize() {
    const size = this.getAttribute('size');
    const computedClasses = size ? getVals(size).class : '';
    const classes = cleanNano([
      this.className,
    ], computedClasses);
    const styles = size ? getVals(size).style : '';

    this.className = classes;
    this.style = this.initialStyles + styles;
  }

  connectedCallback() {
    this.initialStyles = this.getAttribute('style');

    const role = this.hasAttribute('table-element') && this.getAttribute('table-element') !== 'false' ? 'cell' : undefined;

    if (role) {
      this.setAttribute('role', role);
    }

    this.updateSize();
  }

  static get observedAttributes() {
    return ['size'];
  }

  attributeChangedCallback(prop, oldVal, newVal) {
    if (prop === 'size') {
      this.updateSize();
    }
  }
}`,
  rowJs: `import { prepairClasses, validateProp, nano, checkAttr } from "nano-grid/modules/helpers";
import { validateSpacing } from "nano-grid/modules/columns-manager";
import { breakpointsType } from "nano-grid/modules/types";

export default class Row extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const group = checkAttr('group', this);
    const vertical = checkAttr('vertical', this);
    const grid = checkAttr('grid', this);
    let role;
    if (this.getAttribute('table-element')) {
      role = 'row';
      if (group) {
        role = 'group';
      }
    }

    let breakpoint = validateProp('nn-row', 'breakpoint', this.getAttribute('breakpoint'), breakpointsType, '');
    if (breakpoint === 'nn-') {
      breakpoint = undefined;
    }

    const spacing = this.hasAttribute('spacing') ? validateSpacing(this.getAttribute('spacing')) : '';

    const classes = prepairClasses([
      group,
      breakpoint,
      spacing,
      vertical,
      grid,
      this.className || '',
    ]);
    this.className = classes;

    if (role) {
      this.setAttribute('role', role);
    }
  }
}`,
  install: `import Column from "./column";
import Row from "./row";

window.customElements.define('nn-column', Column);
window.customElements.define('nn-row', Row);
`,
  example: `<nn-row>
  <nn-column size="3/4">
    75%
  </nn-column>
  <nn-column size="1/4">
    25%
  </nn-column>
</nn-row>`,
}