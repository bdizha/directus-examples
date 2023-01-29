const client_manifest = {
  "node_modules/nuxt/dist/app/entry.mjs": {
    "resourceType": "script",
    "module": true,
    "file": "entry.3faa0a88.js",
    "src": "node_modules/nuxt/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "virtual:nuxt:/var/www/directus-examples/nuxt3/nuxt3-directus-blog/.nuxt/error-component.mjs"
    ],
    "css": [
      "entry.ac898747.css"
    ]
  },
  "entry.ac898747.css": {
    "file": "entry.ac898747.css",
    "resourceType": "style"
  },
  "virtual:nuxt:/var/www/directus-examples/nuxt3/nuxt3-directus-blog/.nuxt/error-component.mjs": {
    "resourceType": "script",
    "module": true,
    "file": "error-component.4d907f0d.js",
    "src": "virtual:nuxt:/var/www/directus-examples/nuxt3/nuxt3-directus-blog/.nuxt/error-component.mjs",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs"
    ],
    "dynamicImports": [
      "node_modules/@nuxt/ui-templates/dist/templates/error-404.vue",
      "node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"
    ]
  },
  "pages/articles/[...id].vue": {
    "resourceType": "script",
    "module": true,
    "file": "_...id_.d843d189.js",
    "src": "pages/articles/[...id].vue",
    "isDynamicEntry": true,
    "imports": [
      "_useDirectusItems.11736f6e.js",
      "node_modules/nuxt/dist/app/entry.mjs"
    ]
  },
  "_useDirectusItems.11736f6e.js": {
    "resourceType": "script",
    "module": true,
    "file": "useDirectusItems.11736f6e.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs"
    ]
  },
  "pages/index.vue": {
    "resourceType": "script",
    "module": true,
    "file": "index.4e7eaad2.js",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs",
      "_useDirectusItems.11736f6e.js"
    ]
  },
  "node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": {
    "resourceType": "script",
    "module": true,
    "file": "error-404.7b1e2bc9.js",
    "src": "node_modules/@nuxt/ui-templates/dist/templates/error-404.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs",
      "_composables.d3810d6e.js"
    ],
    "css": []
  },
  "error-404.23f2309d.css": {
    "file": "error-404.23f2309d.css",
    "resourceType": "style"
  },
  "_composables.d3810d6e.js": {
    "resourceType": "script",
    "module": true,
    "file": "composables.d3810d6e.js",
    "imports": [
      "node_modules/nuxt/dist/app/entry.mjs"
    ]
  },
  "node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": {
    "resourceType": "script",
    "module": true,
    "file": "error-500.75b50dbe.js",
    "src": "node_modules/@nuxt/ui-templates/dist/templates/error-500.vue",
    "isDynamicEntry": true,
    "imports": [
      "_composables.d3810d6e.js",
      "node_modules/nuxt/dist/app/entry.mjs"
    ],
    "css": []
  },
  "error-500.aa16ed4d.css": {
    "file": "error-500.aa16ed4d.css",
    "resourceType": "style"
  },
  "node_modules/@nuxt/ui-templates/dist/templates/error-500.css": {
    "resourceType": "style",
    "file": "error-500.aa16ed4d.css",
    "src": "node_modules/@nuxt/ui-templates/dist/templates/error-500.css"
  },
  "node_modules/@nuxt/ui-templates/dist/templates/error-404.css": {
    "resourceType": "style",
    "file": "error-404.23f2309d.css",
    "src": "node_modules/@nuxt/ui-templates/dist/templates/error-404.css"
  },
  "node_modules/nuxt/dist/app/entry.css": {
    "resourceType": "style",
    "file": "entry.ac898747.css",
    "src": "node_modules/nuxt/dist/app/entry.css"
  }
};

export { client_manifest as default };
//# sourceMappingURL=client.manifest.mjs.map
