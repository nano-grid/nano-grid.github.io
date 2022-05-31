import { createStore } from 'vuex';

export default createStore({
  state: {
    panel: false,
    panelSize: ['300', '100%-350'],
    theme: false,
  },
  mutations: {
    setValue(state, payload) {
      state[payload.name] = payload.value;
    },
    centerMap(state, payload) {
      state.selection.locations.mapCenter = payload.position;
    },
    toggleValue(state, payload) {
      state[payload] = !state[payload];
    },
    addColumn(state, payload) {
      state.selection.gridState.columns.push(payload);
    },
    removeColumn(state, index) {
      state.selection.gridState.columns.splice(index, 1);
    },

    setTheme(state, payload) {
      state.selection.timeline[payload.name] = payload.value;
    },
    toggleTheme(state, payload) {
      if(state.selection.timeline[payload.name] !== payload.value){
        state.selection.timeline[payload.name] = payload.value;
      } else {
        state.selection.timeline[payload.name] = payload.alt;
      }
    },
  },
  getters: {
    getGridSize: state => state.selection.pixelState.gridSize,
    getPanelVisibility: state => state.panel,
    getPanelSize: state => state.panelSize,
    getTheme: state => state.theme,
    getGridSelection: state => state.selection.gridState,
    getGearSelection: state => state.selection.gearState,
  }
})
