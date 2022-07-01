export default {

  install: `import "nano-grid/components";`,
  installCss: ` // --- All color related variables
@import "nano-grid/scss/css-vars";

// --- Components
@import "nano-grid/scss/box";
@import "nano-grid/scss/btn";
@import "nano-grid/scss/container";
@import "nano-grid/scss/crayon";
@import "nano-grid/scss/grid-system";
@import "nano-grid/scss/icon";
@import "nano-grid/scss/input";
@import "nano-grid/scss/label";
@import "nano-grid/scss/range-slider";
@import "nano-grid/scss/scroll-area";
@import "nano-grid/scss/shade";

// ---- Button Styles
@import "nano-grid/scss/btn-flat";
@import "nano-grid/scss/btn-ghost";
@import "nano-grid/scss/btn-outline";
@import "nano-grid/scss/btn-nav";
`,
  example: `<nn-row>
  <nn-column size="35">
    35px
  </nn-column>
  <nn-column size="50%">
    50%
  </nn-column>
  <nn-column size="1/2 - 50 * 2">
    calc(50% - 100px)
  </nn-column>
  <nn-column size="65">
    65px
  </nn-column>
</nn-row>`,
}