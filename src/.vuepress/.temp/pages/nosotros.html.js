export const data = {
  "key": "v-1d61cba1",
  "path": "/nosotros.html",
  "title": "Nuestros valores",
  "lang": "es-ES",
  "frontmatter": {
    "prev": "vision",
    "next": "preferir"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "nosotros.md",
  "git": {
    "updatedTime": null,
    "contributors": []
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
