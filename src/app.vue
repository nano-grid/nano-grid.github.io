<template>
  <main class="vue-theme" :class="classes">
    <nn-row class="nano-app">
      <panel-navigation />

      <nn-column class="panel" :size="panel ? panelSize[0] : '0'">
        <router-view name="panel" />
      </nn-column>

      <nn-column size="0" class="panel-bar">
        <btn
          class="panel-ctrl"
          title="Toggle panel button"
          glyph="chevron"
          :direction="panel ? 'left' : 'right'"
          @click="toggleValue('panel'), playSound()"
        />
      </nn-column>

      <nn-column :size="panel ? panelSize[1] : '100%-50'" class="workarea">
        <router-view name="workarea" />
      </nn-column>
    </nn-row>
  </main>
</template>

<script>
import PanelNavigation from "./components/panel-navigation.vue";
import { playSound } from "./modules/helpers";
import { mapGetters, mapMutations } from "vuex";

export default {
  data: () => ({
    playSound,
  }),
  components: {
    PanelNavigation,
  },
  computed: {
    ...mapGetters({
      theme: "getTheme",
      panel: "getPanelVisibility",
      panelSize: "getPanelSize",
    }),
    sectionName() {
      return `section-${this.$route.name}`;
    },
    classes() {
      return [this.sectionName, this.theme ? "nn-light" : "nn-dark"];
    },
  },
  created() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const currentRoute = urlParams.get("route");
    if (currentRoute) {
      this.$router.push(`/${currentRoute}`);
    }
  },
  methods: {
    ...mapMutations(["toggleValue"]),
  },
};
</script>