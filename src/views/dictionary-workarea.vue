<template>
  <nn-scroll-area color="royal-purple">
    <nn-container>
      <div class="nn-box">
        <h1>Documentation</h1>
        <hr />
        <div class="table" role="table">
          <div class="table-head" role="rowgroup">
            <nn-row breakpoint="lg">
              <nn-column size="1/2">Keyword</nn-column>
              <nn-column size="1/2">Description</nn-column>
            </nn-row>
          </div>
          <div class="table-body" role="rowgroup">
            <template
              v-for="(item, itemIndex) in dictionary"
              :key="'itemIndex' + itemIndex"
            >
              <nn-row breakpoint="lg">
                <nn-column size="1/2">
                  {{ item.key }}
                </nn-column>
                <nn-column size="1/2">
                  {{ item.description }}
                </nn-column>
              </nn-row>
            </template>
          </div>
        </div>
      </div>
    </nn-container>
  </nn-scroll-area>
</template>

<script>
export default {
  components: {},
  data: () => ({
    dictionary: [
      {key: "nn-icon", description: "Icon component."},

      {key: "nn-scroll-area", description: "ScrollArea component."},
      {key: "nn-no-vertical", description: "ScrollArea prop that hide the vertical scroll bar."},
      {key: "nn-no-horizontal", description: "ScrollArea prop that hide the horizontal scroll bar."},
      
      {key: "nn-container", description: "Container component."},
      {key: "nn-sz[400, 500, 600, 900, 1450]", description: "Container prop that change the max-size of the container."},

      {key: "nn-row", description: "Row component."},
      {key: "nn-vertical", description: "Row prop that change the horizontal direction of the flow to vertical."},
      {key: "nn-break-sm", description: "Row prop that break on 576px."},
      {key: "nn-break-md", description: "Row prop that break on 768px."},
      {key: "nn-break-lg", description: "Row prop that break on 992px."},
      {key: "nn-break-xl", description: "Row prop that break on 1200px."},
      {key: "nn-break-xxl", description: "Row prop that break on 1400px."},
      {key: "nn-sp[25..400]", description: "Row prop that add padding-inline to the columns from 0.25rem to 4rem"},
      {key: "nn-grid", description: "Row prop that convert that organize the columns as tiles."},

      {key: "nn-column", description: "Column component."},
      {key: "nn-label", description: "Label component."},
      {key: "nn-[w|h]-nd+bd+-[m|p][0..300]", description: "Column prop that change the size of the column."},

      {key: "nn-btn", description: "Button component."},
      {key: "nn-flat", description: "Button prop that change the visual to a 3D flat style."},
      {key: "nn-round", description: "Button prop that change the visual to a rounded style."},
      {key: "nn-ghost", description: "Button prop that change the visual to a ghost style."},
      {key: "nn-outline", description: "Button prop that change the visual to a outline style."},
      {key: "nn-nav", description: "Button prop that change the visual to a ghost style with a left line which mark navigation."},

      {key: "nn-range", description: "Range component."},
      {key: "nn-input", description: "Input component."},

      {key: "nn-silver", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-royal-purple", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-persian-red", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-denim", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-gold-tips", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-shamrock", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-cod-grey", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-gravel", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-emerald", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-burn-orange", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-razzmatazz", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-desert", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-charcoal", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-golden-brown", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-sepia", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-alizarin", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-rust", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-blush", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-fire-brick", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-sunglow", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-milk-punch", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-yukon-gold", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-green-pea", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-laurel", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-elf-green", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-lake", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-cobalt-blue", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-mariner", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-fuchsia", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-blue-violet", description: "Color attribute for Btn and ScrollArea."},
      {key: "nn-purple-heart", description: "Color attribute for Btn and ScrollArea."},
    ],
  }),
  computed: {},
  created() {},
  methods: {},
};
</script>