<template>
  <nn-column size="50" class="main-panel">
    <nn-scroll-area color="royal-purple" :horizontal="false">
      <nn-container>
        <nn-row vertical>
          <nn-column>
            <template v-for="nav in navigation">
              <template v-if="!nav.route.includes($route.name)">
                <btn
                  :to="{ name: nav.route[0] }"
                  :key="nav.route[0]"
                  mode="transparent"
                  color="shamrock"
                  size="md"
                  :title="`${nav.route[0]} button`"
                  v-nano-tooltip.right="nav.tooltip"
                  :glyph="nav.icon"
                />
              </template>
              <template v-else>
                <btn
                  :key="nav.route[0]"
                  mode="transparent"
                  color="shamrock"
                  size="md"
                  :title="`${nav.route[0]} button`"
                  v-nano-tooltip.right="nav.tooltip"
                  @click="toggleValue('panel'), playSound()"
                  :glyph="nav.icon"
                  active
                />
              </template>
            </template>
      
            <hr />
            <hr />
            <btn
              color="gold-tips"
              size="md"
              mode="transparent"
              title="Toggle theme button"
              v-nano-tooltip.right="$t('toggleTheme')"
              glyph="brightness"
              @click="toggleValue('theme'), playSound()"
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
import { linkGithub, linkLinkedin } from "../db/user";
import { playSound } from "../modules/helpers";

export default {
  components: {},
  data: () => ({
    navigation: [
      {
        tooltip: "Home",
        icon: "monster",
        route: ["home"],
      },
    ],
    playSound,
    linkGithub,
    linkLinkedin,
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