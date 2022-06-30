import codeWebcomponent from "./code-webcomponent"

const cssVars = `.nn-light {
  --nn-color-foreground: hsl(240deg 11% 17%);
  --nn-input-color-background: hsl(0deg 0% 95%);
  --nn-input-color-background-hover: hsl(0deg 0% 90%);
  --nn-input-color-shadow: hsl(0deg 0% 80%);
  --nn-input-color-shadow-hover: hsl(0deg 0% 70%);
  --nn-track-color: hsl(0deg 0% 84%);
  --nn-thumb-color: #c0c0c0;
  --nn-shade-background: hsl(240deg 10% 83% / 27%);
  --nn-border-color: #e2e2e2;
}
.nn-dark {
  --nn-color-foreground: hsl(0deg 0% 95%);
  --nn-input-color-background: hsl(240deg 11% 17%);
  --nn-input-color-background-hover: hsl(240deg 11% 25%);
  --nn-input-color-shadow: hsl(240deg 11% 10%);
  --nn-input-color-shadow-hover: hsl(240deg 11% 20%);
  --nn-track-color: hsl(0deg 0% 14%);
  --nn-thumb-color: #6e6e6e;
  --nn-shade-background: hsl(240deg 12% 10% / 27%);
  --nn-border-color: #444444;
}`;

const sass = `#{wc("row")} {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
  align-items: flex-start;
}`;

const flexbox = `nano-row,
.nano-row {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
  align-items: flex-start;
}`;

export default {
  webComponent: {
    example: codeWebcomponent.example,
    mode: 'html'
  },
  sass: {
    example: sass,
    mode: 'css'
  },
  flexbox: {
    example: flexbox,
    mode: 'css'
  },
  cssVars: {
    example: cssVars,
    mode: 'css'
  }
}