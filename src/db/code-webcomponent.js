export default {

  install: `import "nano-grid/components";`,
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
    35px
  </nn-column>
</nn-row>`,
}