<template>
  <nn-scroll-area color="royal-purple">
    <nn-container size="900">
      <nn-row>
        <nn-column size="1/2">
          <btn
            mode="ghost"
            :active="pmanager === 'yarn'"
            text="Yarn"
            color="denim"
            @click="togglePackageManager('yarn')"
          />
        </nn-column>
        <nn-column size="1/2">
          <btn
            mode="ghost"
            :active="pmanager === 'npm'"
            text="NPM"
            color="persian-red"
            @click="togglePackageManager('npm')"
          />
        </nn-column>
      </nn-row>

      <div class="nano-box">
        <template v-if="pmanager === 'yarn'">
          <p>Adding Nano Grid with <strong>Yarn</strong></p>
          <spirit lang="shell" text="yarn add nano-grid" />
        </template>

        <template v-if="pmanager === 'npm'">
          <p>Adding Nano Grid with <strong>Npm</strong></p>
          <spirit lang="shell" text="npm install nano-grid" />
        </template>
      </div>

      <br />

      <nn-row>
        <nn-column size="1/5">
          <btn
            mode="ghost"
            :active="spirit.current === 'vue2'"
            text="Vue 2"
            color="shamrock"
            @click="changeCode('vue2')"
          />
        </nn-column>
        <nn-column size="1/5">
          <btn
            mode="ghost"
            :active="spirit.current === 'vue3'"
            text="Vue 3"
            color="elf-green"
            @click="changeCode('vue3')"
          />
        </nn-column>
        <nn-column size="1/5">
          <btn
            mode="ghost"
            :active="spirit.current === 'svelte3'"
            text="Svelte 3"
            color="burn-orange"
            @click="changeCode('svelte3')"
          />
        </nn-column>
        <nn-column size="1/5">
          <btn
            mode="ghost"
            :active="spirit.current === 'webComponent'"
            text="Web Component"
            color="denim"
            @click="changeCode('webComponent')"
          />
        </nn-column>
        <nn-column size="1/5">
          <btn
            mode="ghost"
            :active="spirit.current === 'react17'"
            text="React 17"
            color="cobalt-blue"
            @click="changeCode('react17')"
          />
        </nn-column>
      </nn-row>

      <div class="nano-box">
        <h2>-- Column Component</h2>

        <template v-if="spirit.current === 'vue2'">
          <p>JS Code</p>

          <spirit lang="js" :text="spirit.vue2.js" />

          <p>HTML Code</p>

          <spirit lang="vue" :text="spirit.vue2.html" />

          <h2>-- Registering components</h2>

          <p>[ app | index | main ].[ js | ts ]</p>

          <spirit lang="js" :text="spirit.vue2.install" />
        </template>

        <template v-if="spirit.current === 'vue3'">
          <p>JS Code</p>

          <spirit lang="js" :text="spirit.vue3.js" />

          <p>HTML Code</p>

          <spirit lang="vue" :text="spirit.vue3.html" />

          <h2>-- Registering components</h2>

          <p>[ app | index | main ].[ js | ts ]</p>

          <spirit lang="js" :text="spirit.vue3.install" />
        </template>

        <template v-else-if="spirit.current === 'svelte3'">
          <p>JS Code</p>

          <spirit lang="js" :text="spirit.svelte3.js" />

          <p>HTML Code</p>

          <spirit lang="svelte" :text="spirit.svelte3.html" />

          <h2>-- Row Component</h2>

          <p>JS Code</p>

          <spirit lang="js" :text="spirit.svelte3.rowJs" />

          <p>HTML Code</p>

          <spirit lang="svelte" :text="spirit.svelte3.rowHtml" />

          <h2>-- Registering components</h2>

          <spirit lang="js" :text="spirit.svelte3.install" />
        </template>

        <template v-else-if="spirit.current === 'webComponent'">
          <p>JS Code</p>

          <spirit lang="js" :text="spirit.webComponent.js" />

          <h2>-- Row Component</h2>

          <p>JS Code</p>

          <spirit lang="js" :text="spirit.webComponent.rowJs" />

          <h2>-- Registering components</h2>

          <p>[ app | index | main ].[ js | ts ]</p>

          <spirit lang="js" :text="spirit.webComponent.install" />
        </template>

        <template v-else-if="spirit.current === 'react17'">
          <p>JS Code</p>

          <spirit lang="react" :text="spirit.react17.js" />

          <h2>-- Row Component</h2>

          <p>JS Code</p>

          <spirit lang="react" :text="spirit.react17.rowJs" />

          <h2>-- Registering components</h2>

          <spirit lang="js" :text="spirit.react17.install" />
        </template>
      </div>
    </nn-container>
  </nn-scroll-area>
</template>

<script>
import Spirit from "../components/spirit.vue";

const svelte3 = {
  js: `import { getVals } from "nano-grid/modules/columns-manager";

export let size = undefined;

$: computedClass = size ? getVals(size).class : undefined;
$: computedStyle = size ? getVals(size).style : undefined;`,
  html: `<template>
  <div class={'nn-column ' + computedClass} style={computedStyle}>
    <slot />
  </div>
</template>`,
  rowJs: `import { validateSpacing } from "nano-grid/modules/columns-manager";

export let breakpoint = undefined,
  group = false,
  spacing = undefined,
  integrated = false,
  vertical = false,
  tableElement = false,
  grid = false,
  className = "";
$: computedSpacing = spacing ? validateSpacing(spacing) : "";
$: computedTable = tableElement ? "row" : undefined;
$: computedGroup = group ? "nano-group" : "";
$: computedIntegrated = integrated ? "integrated" : "";
$: computedVertical = vertical ? "vertical" : "";
$: computedGrid = grid ? "grid" : "";
$: computedBreakpoint = breakpoint ? "nn-" + breakpoint : "";
$: computedClasses = [
  "nn-row",
  computedBreakpoint,
  computedGroup,
  computedIntegrated,
  computedVertical,
  computedGrid,
  computedSpacing,
  className,
]
  .join(" ")
  .replace(/\s+/g, " ")
  .trim();
`,
  rowHtml: `<template>
  <div class={computedClasses} role={computedTable}>
    <slot />
  </div>
</template>`,
  install: `import Column from "../components/Column.svelte";
import Row from "../components/Row.svelte";`,
};

const vue3 = {
  js: `import { getVals } from "nano-grid/modules/columns-manager";

export default {
  props: {
    tag: {
      type: String,
      default: "div",
    },
    size: {
      type: String,
      default: "",
    },
    tableElement: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedClass() {
      return this.size ? getVals(this.size).class : "";
    },
    computedStyle() {
      return this.size ? getVals(this.size).style : "";
    },
    role() {
      if (this.tableElement) {
        return "cell";
      } else {
        return "";
      }
    },
  },
}`,
  html: `<template>
  <component :is="tag" :class="computedClass" :role="role" :style="computedStyle">
    <template>
      <slot />
    </template>
  </component>
</template>`,
  install: `import Column from '../components/column.vue';
import Row from '../components/row.vue';

app.component("nn-column", Column);
app.component("nn-row", Row);`,
};

const vue2 = {
  js: `import Vue from "vue";
import { getVals } from "nano-grid/modules/columns-manager";

export default Vue.extend({
  props: {
    tag: {
      type: String,
      default: "div",
    },
    size: {
      type: String,
      default: "",
    },
    tableElement: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedClass() {
      return this.size ? getVals(this.size).class : "";
    },
    computedStyle() {
      return this.size ? getVals(this.size).style : "";
    },
    role() {
      if (this.tableElement) {
        return "cell";
      } else {
        return "";
      }
    },
  },
});`,
  html: `<template>
  <component :is="tag" :class="computedClass" :role="role" :style="computedStyle">
    <template>
      <slot />
    </template>
  </component>
</template>`,
  install: `import Column from '../components/column.vue';
import Row from '../components/row.vue';

app.component("nn-column", Column);
app.component("nn-row", Row);`,
};

const webComponent = {
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
};

const react17 = {
  js: `import { getVals } from "nano-grid/modules/columns-manager";

function Column({ children, size, addClass, tableElement }) {
  const computedClass = ["nn-column", addClass, getVals(size).class].join(" ");
  const computedStyle = getVals(size).style;
  const computedRole = tableElement ? "cell" : "";
  
  return (
    <div className={computedClass} role={computedRole} style={computedStyle}>
      {children}
    </div>
  );
}

Column.defaultProps = {
  tableElement: false,
  size: ""
}

export default Column;`,
  rowJs: `import { validateSpacing } from "nano-grid/modules/columns-manager";

function Row({ children, addClass, tableElement, group, spacing, breakpoint, vertical }) {
  const cVertical = vertical ? 'vertical' : '';
  const cGroup ? 'nn-group' : '';

  const computedClass = [
    "nn-row",
    addClass,
    breakpoint,
    validateSpacing(spacing),
    cVertical,
    group,
    ].join(" ");

  let computedRole;
  if ( tableElement ){
    computedRole = "row";
  } else if ( cGroup ) {
    computedRole = "group";
  }
  
  return (
    <div
      className={computedClass}
      role={computedRole}>
      {children}
    </div>
  );
}

Row.defaultProps = {
  tableElement: false,
  vertical: false,
  group: false,
  spacing: 0,
}

export default Row;`,
  install: `import Column from '../components/column';
import Row from '../components/row';`,
};

export default {
  components: { Spirit },
  data: () => ({
    pmanager: "yarn",
    spirit: {
      current: "vue2",
      vue2,
      vue3,
      svelte3,
      webComponent,
      react17,
    },
  }),
  computed: {},
  created() {},
  methods: {
    changeCode(code) {
      this.spirit.current = code;
    },
    togglePackageManager(value) {
      this.pmanager = value;
    },
  },
};
</script>