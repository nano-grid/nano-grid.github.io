<template>
  <div class="map">
    <div ref="mapContainer">
      <v-stage :config="mapPos" @dragmove="dragging" ref="stage" @wheel="zoom">
        <v-layer>
          <v-image :config="map" />
        </v-layer>
      </v-stage>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

const getZapp = (path) => {
  return `https://miguel-rivas.github.io/zapp/${path}`;
};

export default {
  components: {},
  data: () => ({
    img: [],
    map: {
      image: null,
    },
    stage: undefined,
    configKonva: {
      width: 0,
      height: 0,
    },
  }),
  computed: {
    ...mapGetters({
      theme: "getTheme",
    }),
    mapPos() {
      if (this.map.image) {
        return {
          x: Math.max(
            Math.min(
              this.selection.mapCenter.x -
                this.averageBuildingImageWidth +
                this.configKonva.width / 2,
              0
            ),
            -this.map.image.width
          ),
          y: Math.max(
            Math.min(
              this.selection.mapCenter.y -
                this.averageBuildingImageWidth +
                this.configKonva.height / 2,
              0
            ),
            -this.map.image.height
          ),
          draggable: true,
          width: this.configKonva.width,
          height: this.configKonva.height,
        };
      } else {
        return {
          x: 0,
          y: 0,
          draggable: true,
          width: this.configKonva.width,
          height: this.configKonva.height,
        };
      }
    },
  },
  created() {
    this.createImgs();
  },
  mounted() {
    this.stage = this.$refs.stage.getStage();
    this.stage.position({ x: -900, y: -800 });
    this.$refs.mapContainer.style.cursor = "grab";
    this.updateCanvas();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateCanvas);
  },
  watch: {
    panel: function () {
      this.updateCanvas();
    },
    viewSide: function () {
      this.createImgs();
    },
  },
  methods: {
    createImgs() {
      this.currentTheme = this.theme ? "light" : "dark";
      this.map.temp = new window.Image();
      this.map.temp.src = getZapp(`img/3d-map/${this.currentTheme}/map.webp`);
      this.map.temp.onload = () => {
        this.map.image = this.map.temp;
      };

      this.img.forEach((item) => {
        item.temp = new window.Image();
        item.temp.src = getZapp(
          `img/3d-map/${this.currentTheme}/${item.name}.webp`
        );
        item.temp.onload = () => {
          item.image = item.temp;
        };
      });
    },
    updateCanvas: function () {
      let margin = this.panel ? this.panelSize : 0;
      this.configKonva.width = window.innerWidth - (margin - 50);
      this.configKonva.height = window.innerHeight;
      this.dragging();
    },
    hoverImg(event) {
      event.target.opacity(1);
      this.$refs.mapContainer.style.cursor = "pointer";
    },
    mouseOutImg(event) {
      event.target.opacity(0);
      this.$refs.mapContainer.style.cursor = "grab";
    },
    dragging() {
      if (this.mapR.image || this.mapL.image) {
        let nx = this.stage.position().x;
        let ny = this.stage.position().y;

        this.stage.position({ x: nx, y: ny });
      }
    },
    zoom(event) {
      const scale = 0.99;
      const maxZoom = 120 / 100;
      const minZoom = 30 / 100;

      event.evt.preventDefault();
      let oldScale = this.stage.scaleX();

      let mousePointTo = {
        x:
          this.stage.getPointerPosition().x / oldScale -
          this.stage.x() / oldScale,
        y:
          this.stage.getPointerPosition().y / oldScale -
          this.stage.y() / oldScale,
      };

      let newScale = event.evt.deltaY > 0 ? oldScale * scale : oldScale / scale;

      newScale = newScale > maxZoom ? maxZoom : newScale;
      newScale = newScale < minZoom ? minZoom : newScale;

      this.stage.scale({ x: newScale, y: newScale });

      let newPos = {
        x:
          -(mousePointTo.x - this.stage.getPointerPosition().x / newScale) *
          newScale,
        y:
          -(mousePointTo.y - this.stage.getPointerPosition().y / newScale) *
          newScale,
      };
      this.stage.position(newPos);
      this.updateCanvas();
    },
  },
};
</script>