<template>
  <nn-scroll-area color="royal-purple">
    <nn-container>
      <div class="nano-box">
        <h1>Tests</h1>
        <hr />

        <template v-for="(row, rowIndex) in cases" :key="'rowIndex' + rowIndex">
          <h2>{{ row.case }}</h2>
          <article class="nano-shade-box">
            <nn-row>
              <nn-column size="200">test:</nn-column>
              <nn-column size="2/3-200">{{ row.test }}</nn-column>

              <nn-column size="100%">
                <hr />
              </nn-column>

              <nn-column size="200">width:</nn-column>
              <nn-column size="1/2-160">{{ row.expect.width }}</nn-column>
              <nn-column size="1/2-160">{{ getVals(row.test).width }}</nn-column>
              <nn-column size="120">
                {{ isPassing(row.expect.width, getVals(row.test).width) }}
              </nn-column>

              <nn-column size="100%">
                <hr />
              </nn-column>

              <nn-column size="200">width style:</nn-column>
              <nn-column size="1/2-160">{{ row.expect.widthStyle }}</nn-column>
              <nn-column size="1/2-160">{{
                getVals(row.test).widthStyle
              }}</nn-column>
              <nn-column size="120">
                {{
                  isPassing(row.expect.widthStyle, getVals(row.test).widthStyle)
                }}
              </nn-column>

              <nn-column size="100%">
                <hr />
              </nn-column>

              <nn-column size="200">height style:</nn-column>
              <nn-column size="1/2-160">{{ row.expect.heightStyle }}</nn-column>
              <nn-column size="1/2-160">{{
                getVals(row.test).heightStyle
              }}</nn-column>
              <nn-column size="120">
                {{
                  isPassing(
                    row.expect.heightStyle,
                    getVals(row.test).heightStyle
                  )
                }}
              </nn-column>

              <nn-column size="100%">
                <hr />
              </nn-column>

              <nn-column size="200">has css width class:</nn-column>
              <nn-column size="1/2-160">{{
                row.expect.hasCSSWidthClass
              }}</nn-column>
              <nn-column size="1/2-160">{{
                getVals(row.test).hasCSSWidthClass
              }}</nn-column>
              <nn-column size="120">
                {{
                  isPassing(
                    row.expect.hasCSSWidthClass,
                    getVals(row.test).hasCSSWidthClass
                  )
                }}
              </nn-column>
            </nn-row>
          </article>
          <br />
        </template>
      </div>
    </nn-container>
  </nn-scroll-area>
</template>

<script>
import { getVals } from "nano-grid/modules/columns-manager";

export default {
  components: {},
  data: () => ({
    getVals,
    cases: [
      {
        test: "50 + 25 - 10, 0",
        case: "testing zero as initial value (on height)",
        expect: {
          width: "nn-w-p65",
          widthStyle: undefined,
          heightStyle: "height: 0px",
          hasCSSWidthClass: true,
        },
      },
      {
        test: "0, 50 + 25 - 10",
        case: "testing zero as initial value (on width)",
        expect: {
          width: "nn-w-m0",
          widthStyle: undefined,
          heightStyle: "height: 65px",
          hasCSSWidthClass: true,
        },
      },
      {
        test: "11, 15",
        case: "testing a combination of valid css sizes and out of range values (styles)",
        expect: {
          width: undefined,
          widthStyle: "flex-basis: 11px; max-width: 11px",
          heightStyle: "height: 15px",
          hasCSSWidthClass: false,
        },
      },
      {
        test: "-250",
        case: "testing negative absolute values",
        expect: {
          width: undefined,
          widthStyle: undefined,
          heightStyle: undefined,
          hasCSSWidthClass: false,
        },
      },
      {
        test: "25%-250",
        case: "testing formula with negative absolute value",
        expect: {
          width: "nn-w-n1d4-m250",
          widthStyle: undefined,
          heightStyle: undefined,
          hasCSSWidthClass: true,
        },
      },
      {
        test: "-10%",
        case: "testing negative relative values",
        expect: {
          width: undefined,
          widthStyle: undefined,
          heightStyle: undefined,
          hasCSSWidthClass: false,
        },
      },
      {
        test: "25% - 25% + 1/4 + 100/400",
        case: "testing relative sizes operations",
        expect: {
          width: "nn-w-n1d2",
          widthStyle: undefined,
          heightStyle: undefined,
          hasCSSWidthClass: true,
        },
      },
      {
        test: "500",
        case: "testing out of range width values",
        expect: {
          width: undefined,
          widthStyle: "flex-basis: 500px; max-width: 500px",
          heightStyle: undefined,
          hasCSSWidthClass: false,
        },
      },
      {
        test: ",500",
        case: "testing out of range height values",
        expect: {
          width: undefined,
          widthStyle: undefined,
          heightStyle: "height: 500px",
          hasCSSWidthClass: false,
        },
      },
      {
        test: "40% - 20% + 50 - 25, 50 - 25",
        case: "testing susbtraction on width and height",
        expect: {
          width: undefined,
          widthStyle:
            "flex-basis: calc(20% + 25px); max-width: calc(20% + 25px)",
          heightStyle: "height: 25px",
          hasCSSWidthClass: false,
        },
      },
      {
        test: "40% - 22%",
        case: "testing relative sizes out of range",
        expect: {
          width: undefined,
          widthStyle: "flex-basis: 18%; max-width: 18%",
          heightStyle: undefined,
          hasCSSWidthClass: false,
        },
      },
      {
        test: ", 15% + 25 * 2 - 10 + 100",
        case: "testing multiplication on height",
        expect: {
          width: undefined,
          widthStyle: undefined,
          heightStyle: "height: calc(15% + 140px)",
          hasCSSWidthClass: false,
        },
      },
      {
        test: ", 15% - 25 * 2 - 10",
        case: "testing negative multiplications on height",
        expect: {
          width: undefined,
          widthStyle: undefined,
          heightStyle: "height: calc(15% - 60px)",
          hasCSSWidthClass: false,
        },
      },
      {
        test: ", 13%",
        case: "testing height relative values out of range with no calculation",
        expect: {
          width: undefined,
          widthStyle: undefined,
          heightStyle: "height: 13%",
          hasCSSWidthClass: false,
        },
      },
      {
        test: "15vw + 25 * 2",
        case: "testing vw width",
        expect: {
          width: undefined,
          widthStyle:
            "flex-basis: calc(15vw + 50px); max-width: calc(15vw + 50px)",
          heightStyle: undefined,
          hasCSSWidthClass: false,
        },
      },
      {
        test: ", 15vh + 25 * 2",
        case: "testing vh height",
        expect: {
          width: undefined,
          widthStyle: undefined,
          heightStyle: "height: calc(15vh + 50px)",
          hasCSSWidthClass: false,
        },
      },
    ],
  }),
  computed: {},
  created() {},
  methods: {
    getResult(formula) {
      const fx = getVals(formula);
      return `width: ${fx.width}, widthStyle: ${fx.widthStyle}, heightStyle: ${fx.heightStyle}`;
    },
    isPassing(a, b) {
      return a === b ? "passing ⭐" : "not passing 🔥";
    },
  },
};
</script>