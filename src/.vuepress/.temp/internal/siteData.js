export const siteData = {
  "base": "/BPM/",
  "lang": "en-US",
  "title": "BPM",
  "description": "Buenas Practicas de Manufactura",
  "head": [
    [
      "meta",
      {
        "name": "theme-color",
        "content": "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-capable",
        "content": "yes"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-status-bar-style",
        "content": "black"
      }
    ],
    [
      "link",
      {
        "rel": "icon",
        "href": "https://alejandroparada.github.io/BPM/favicon.ico?v=2",
        "sizes": "16x16"
      }
    ],
    [
      "link",
      {
        "rel": "apple-touch-icon",
        "href": "/apple-touch-icon-152x152.png",
        "sizes": "152x152"
      }
    ],
    [
      "link",
      {
        "rel": "apple-touch-icon",
        "href": "/apple-touch-icon-120x120.png",
        "sizes": "120x120"
      }
    ],
    [
      "link",
      {
        "rel": "apple-touch-icon",
        "href": "/apple-touch-icon-76x76.png",
        "sizes": "76x76"
      }
    ],
    [
      "link",
      {
        "rel": "apple-touch-icon",
        "href": "/apple-touch-icon-60x60.png",
        "sizes": "60x60"
      }
    ]
  ],
  "locales": {
    "/": {
      "lang": "es-ES",
      "title": "BPM"
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
