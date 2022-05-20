/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "EVMcrispr Docs",
  "tagline": "Mutate a DAO's DNA",
  "url": "https://docs.evmcrispr.blossom.software",
  "baseUrl": "/",
  "onBrokenLinks": "warn",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "BlossomLabs",
  "projectName": "evmcrispr-doc",
  "presets": [
    [
      "classic",
      {
        "theme": {
          "customCss": "/home/sem/Projects/evmcrispr-doc/src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "colorMode": {
      "defaultMode": "dark",
      "disableSwitch": true,
      "respectPrefersColorScheme": false
    },
    "navbar": {
      "logo": {
        "alt": "evmcrispr logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "to": "getStarted/",
          "activeBasePath": "getStarted",
          "label": "Get Started",
          "position": "left"
        },
        {
          "to": "aragonOS/",
          "activeBasePath": "aragonOS",
          "label": "AragonOS Apps",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Community",
          "items": [
            {
              "label": "Forum",
              "href": "https://forum.1hive.org"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/blossom_labs"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/1hive/evmcrispr"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2022 Blossom Labs. Built with Docusaurus."
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadata": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false,
    "autoCollapseSidebarCategories": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "plugins": [
    [
      "@docusaurus/plugin-content-docs",
      {
        "id": "getStarted",
        "path": "getStarted",
        "routeBasePath": "getStarted"
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        "id": "aragonOS",
        "path": "aragonOS",
        "routeBasePath": "aragonOS",
        "sidebarPath": "/home/sem/Projects/evmcrispr-doc/sidebarAragonOS.js"
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "themes": [],
  "scripts": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false
};
