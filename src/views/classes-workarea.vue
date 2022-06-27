<template>
  <nn-scroll-area color="royal-purple">
    <nn-container>
      <div class="nano-box">
        <h1>Available Relative Sizes ({{ cssWidthClasses.length }})</h1>
        <hr />
        <div class="table" role="table">
          <div class="table-head" role="rowgroup">
            <nn-row breakpoint="lg">
              <nn-column size="1/3">Size</nn-column>
              <nn-column size="1/3">Percent (Aprox)</nn-column>
              <nn-column size="1/3">Preview</nn-column>
            </nn-row>
          </div>
          <div class="table-body" role="rowgroup">
            <template
              v-for="(size, sizeIndex) in cssWidthClasses"
              :key="'sizeIndex' + sizeIndex"
            >
              <nn-row breakpoint="lg">
                <nn-column size="1/3">
                  {{ size }}
                </nn-column>
                <nn-column size="1/3">
                  {{ class2Value(size) }}
                </nn-column>
                <nn-column size="1/3">
                  <nn-row class="demo-row">
                    <nn-column :size="size">
                      <span class="fake-btn" />
                    </nn-column>
                  </nn-row>
                </nn-column>
              </nn-row>
            </template>
          </div>
        </div>
      </div>

      <div class="nano-box">
        <h1>Available Absolute Sizes (61)</h1>
        <hr />
        <p>
          Values between 0 and 300 that return an integer when divided by 5.
        </p>
      </div>

      <div class="nano-box">
        <h1>Available Classes ({{ cssWClass.size }})</h1>
        <hr />
        <div class="table" role="table">
          <div class="table-head" role="rowgroup">
            <nn-row breakpoint="lg">
              <nn-column size="1/4">Class</nn-column>
              <nn-column size="1/4">Formula</nn-column>
              <nn-column size="1/4">Value</nn-column>
              <nn-column size="1/4">Preview</nn-column>
            </nn-row>
          </div>
          <div class="table-body" role="rowgroup">
            <template
              v-for="(klass, klassIndex) in availableClasses"
              :key="'klassIndex' + klassIndex"
            >
              <nn-row breakpoint="lg">
                <nn-column size="1/4">
                  {{ klass }}
                </nn-column>
                <nn-column size="1/4">
                  {{ class2Formula(klass) }}
                  <template
                    v-if="class2Formula(klass) !== class2Formula2(klass)"
                    >&nbsp;||&nbsp; {{ class2Formula2(klass) }}</template
                  >
                </nn-column>
                <nn-column size="1/4">
                  {{ class2Value(klass) }}
                </nn-column>
                <nn-column size="1/4">
                  <nn-row class="demo-row">
                    <nn-column :size="class2Formula(klass)">
                      <span class="fake-btn" />
                    </nn-column>
                  </nn-row>
                </nn-column>
              </nn-row>
            </template>
            <nn-row breakpoint="lg">
              <template v-if="!allRowsVisible">
                <nn-column size="1/3">
                  <btn
                    text="Show 50+ Rows"
                    title="Show More Rows"
                    @click="showMoreRows()"
                    color="shamrock"
                  />
                </nn-column>
                <nn-column size="1/3">
                  <btn
                    text="Show All Rows"
                    @click="showAllRows()"
                    color="gold-tips"
                  />
                </nn-column>
                 <nn-column size="1/3">
                  <btn
                    :text="
                      '( ' +
                      availableClassesLimit +
                      ' of ' +
                      cssWClass.size +
                      ' )'
                    "
                    title="All Rows"
                    
                    disabled
                  />
                </nn-column>
              </template>
              <template v-else>
                <nn-column size="1/1">
                  <btn
                    :text="
                      '( ' +
                      availableClassesLimit +
                      ' of ' +
                      cssWClass.size +
                      ' )'
                    "
                    title="All Rows"
                    disabled
                  />
                </nn-column>
              </template>
            </nn-row>
          </div>
        </div>
      </div>
    </nn-container>
  </nn-scroll-area>
</template>

<script>
import { cssWClass, cssWidthClasses } from "nano-grid/modules/columns-manager";

export default {
  data: () => ({
    cssWClass,
    cssWidthClasses,
    availableClassesLimit: 25,
  }),
  computed: {
    availableClasses() {
      return [...cssWClass].filter(
        (item, index) => index < this.availableClassesLimit
      );
    },
    allRowsVisible() {
      return this.availableClassesLimit === cssWClass.size;
    },
  },
  created() {},
  methods: {
    showMoreRows() {
      this.availableClassesLimit += 50;
      let outOfRange = this.availableClassesLimit > cssWClass.size;
      if (outOfRange) {
        this.availableClassesLimit = cssWClass.size;
      }
    },
    showAllRows() {
      this.availableClassesLimit = cssWClass.size;
    },
    class2Formula(klass) {
      return klass
        .replace("nn-w", "")
        .replace("-n", "")
        .replace("d", "/")
        .replace(/-?m/, "-")
        .replace(/-?p/, "+")
        .replace(/^\+/, "");
    },
    class2Formula2(klass) {
      const pre = this.class2Formula(klass);

      let fraction = /\d+\/\d+/.test(pre)
        ? pre.match(/\d+\/\d+/)[0].split("/")
        : null;
      const numerator = fraction ? +fraction[0] : null;
      const denominator = fraction ? +fraction[1] : null;

      if (fraction) {
        const isPercent = ((numerator / denominator) * 100) % 1 === 0;
        if (isPercent) {
          fraction = `${(numerator / denominator) * 100}%`;
        } else {
          fraction = fraction.join("/");
        }
      }

      return pre.replace(/\d+\/\d+/, fraction);
    },
    class2Value(klass) {
      const pre = this.class2Formula(klass);

      let fraction = /\d+\/\d+/.test(pre)
        ? pre.match(/\d+\/\d+/)[0].split("/")
        : null;
      const numerator = fraction ? +fraction[0] : null;
      const denominator = fraction ? +fraction[1] : null;

      if (fraction) {
        const isPercent = ((numerator / denominator) * 100) % 1 === 0;
        if (isPercent) {
          fraction = `${(numerator / denominator) * 100}%`;
        } else {
          fraction = `${((numerator / denominator) * 100).toFixed(2)}%`;
        }
      }

      let absolute = /[+-]\d+/.test(pre)
        ? pre.match(/[+-]\d+/)[0] + "px"
        : null;
      let absoluteSingle = /^\d+$/.test(pre)
        ? pre.match(/^\d+$/)[0] + "px"
        : null;

      return pre
        .replace(/\d+\/\d+/, fraction)
        .replace(/[+-]\d+/, absolute)
        .replace(/^\d+$/, absoluteSingle);
    },
  },
};
</script>