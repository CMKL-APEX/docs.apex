// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: {
        en: "Documentation",
        th: "คู่มือการใช้งาน",
      },
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        // Thai docs in 'src/content/docs/th'
        th: {
          label: "ไทย",
          lang: "th",
        },
      },
      social: {
        github: "https://github.com/CMKL-APEX/docs.apex",
      },
      customCss: ["./src/styles/global.css"],
      logo: {
        light: "./src/assets/apex_logo_light.svg",
        dark: "./src/assets/apex_logo_dark.svg",
        replacesTitle: true,
      },
      favicon: "./src/assets/apex_icon.png",
    }),
    markdoc(),
  ],
  site: "https://docs.apex.cmkl.ai",
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },
});
