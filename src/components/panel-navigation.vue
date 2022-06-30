<template>
  <nn-column size="50" class="main-panel">
    <nn-scroll-area color="royal-purple" :horizontal="false">
      <nn-container>
        <nn-row vertical>
          <nn-column>
            <template v-for="nav in navigation" :key="nav.route[0]">
              <btn
                :to="{ name: nav.route[0] }"
                mode="nav"
                color="shamrock"
                size="md"
                :title="nav.tooltip"
                :glyph="nav.icon"
                :active="nav.route.includes($route.name)"
              />
            </template>
            <hr />
            <btn
              color="gold-tips"
              size="md"
              mode="nav"
              title="Toggle theme button"
              :glyph="theme ? 'sun' : 'moon'"
              @click.passive="toggleValue('theme')"
              :active="theme"
            />
          </nn-column>
        </nn-row>
      </nn-container>
    </nn-scroll-area>
  </nn-column>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {},
  data: () => ({
    navigation: [
      {
        tooltip: "Builder",
        icon: "paint-brush",
        route: ["builder"],
      },
      {
        tooltip: "Installation",
        icon: "download",
        route: ["installation"],
      },
      {
        tooltip: "Sizes",
        icon: "expand",
        route: ["sizes"],
      },
      {
        tooltip: "Documentation",
        icon: "book",
        route: ["documentation"],
      },
      {
        tooltip: "Tests",
        icon: "flask",
        route: ["tests"],
      },
    ],
  }),
  computed: {
    ...mapGetters({
      theme: "getTheme",
    }),
  },
  methods: {
    ...mapMutations(["toggleValue"]),
  },
};
</script>