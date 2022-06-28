<template>
  <nn-scroll-area color="royal-purple">
    <nn-container>
      <div class="nn-box">
        <h1>Installation</h1>
        <hr />
        <br />
        <nn-row>
          <nn-column size="1/2">
            <btn
              mode="flat"
              text="Yarn"
              :color="pmanager === 'yarn' ? 'denim' : 'charcoal'"
              @click="togglePackageManager('yarn')"
            />
          </nn-column>
          <nn-column size="1/2">
            <btn
              mode="flat"
              text="NPM"
              :color="pmanager === 'npm' ? 'persian-red' : 'charcoal'"
              @click="togglePackageManager('npm')"
            />
          </nn-column>
        </nn-row>

        <div class="nn-shade">
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
              mode="flat"
              text="Vue 2"
              :color="spirit.current === 'vue2' ? 'shamrock' : 'charcoal'"
              @click="changeCode('vue2')"
            />
          </nn-column>
          <nn-column size="1/5">
            <btn
              mode="flat"
              text="Vue 3"
              :color="spirit.current === 'vue3' ? 'elf-green' : 'charcoal'"
              @click="changeCode('vue3')"
            />
          </nn-column>
          <nn-column size="1/5">
            <btn
              mode="flat"
              text="Svelte 3"
              :color="spirit.current === 'svelte3' ? 'burn-orange' : 'charcoal'"
              @click="changeCode('svelte3')"
            />
          </nn-column>
          <nn-column size="1/5">
            <btn
              mode="flat"
              text="React 17"
              :color="spirit.current === 'react17' ? 'cobalt-blue' : 'charcoal'"
              @click="changeCode('react17')"
            />
          </nn-column>
          <nn-column size="1/5">
            <btn
              mode="flat"
              text="Web Component"
              :color="spirit.current === 'webComponent' ? 'denim' : 'charcoal'"
              @click="changeCode('webComponent')"
            />
          </nn-column>
        </nn-row>

        <div class="nn-shade">
          <h2>-- Column Component</h2>

          <template v-if="spirit.current === 'vue2'">
            <p>JS Code</p>
            <spirit lang="js" :text="spirit.vue2.js" />
            <p>HTML Code</p>
            <spirit lang="vue" :text="spirit.vue2.html" />
            <h2>-- Registering components</h2>
            <p>[ app | index | main ].[ js | ts ]</p>
            <spirit lang="js" :text="spirit.vue2.install" />
            <h2>-- Using the components</h2>
            <spirit lang="html" :text="spirit.vue2.example" />
          </template>

          <template v-if="spirit.current === 'vue3'">
            <p>JS Code</p>
            <spirit lang="js" :text="spirit.vue3.js" />
            <p>HTML Code</p>
            <spirit lang="vue" :text="spirit.vue3.html" />
            <h2>-- Registering components</h2>
            <p>[ app | index | main ].[ js | ts ]</p>
            <spirit lang="js" :text="spirit.vue3.install" />
            <h2>-- Using the components</h2>
            <spirit lang="html" :text="spirit.vue3.example" />
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
            <h2>-- Using the components</h2>
            <spirit lang="html" :text="spirit.svelte3.example" />
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
            <h2>-- Using the components</h2>
            <spirit lang="html" :text="spirit.webComponent.example" />
          </template>

          <template v-else-if="spirit.current === 'react17'">
            <p>JS Code</p>
            <spirit lang="react" :text="spirit.react17.js" />
            <h2>-- Row Component</h2>
            <p>JS Code</p>
            <spirit lang="react" :text="spirit.react17.rowJs" />
            <h2>-- Registering components</h2>
            <spirit lang="js" :text="spirit.react17.install" />
            <h2>-- Using the components</h2>
            <spirit lang="html" :text="spirit.react17.example" />
          </template>

          <h2>-- Preview</h2>
          <nn-row>
            <nn-column size="3/4">
              <btn text="75%" color="denim" />
            </nn-column>
            <nn-column size="1/4">
              <btn text="25%" color="persian-red" />
            </nn-column>
          </nn-row>
        </div>
      </div>
    </nn-container>
  </nn-scroll-area>
</template>

<script>
import Spirit from "../components/spirit.vue";
import svelte3 from "../db/code-svelte3";
import react17 from "../db/code-react17";
import vue3 from "../db/code-vue3";
import vue2 from "../db/code-vue2";
import webComponent from "../db/code-webcomponent";

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