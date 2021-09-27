export const themeData = {
  "locales": {
    "/": {
      "selectLanguageName": "Español",
      "lastUpdated": "Ultima actualizacion",
      "nav": true,
      "navbar": [
        {
          "text": "¿Que es?",
          "link": "QueEs"
        },
        {
          "text": "Su opinion nos importa",
          "link": "https://forms.gle/axEpEzTruRkBewMu9"
        }
      ],
      "sidebar": [
        {
          "text": "Areas",
          "link": "/area"
        },
        {
          "text": "Preguntas Frecuentes",
          "link": "/preguntasyrespuestas"
        },
        {
          "text": "Quienes usan BPM",
          "link": "/empresas"
        },
        {
          "text": "Ganar Ganar",
          "link": "/ganarganar"
        },
        {
          "text": "Mision",
          "link": "/mision"
        },
        {
          "text": "Vision",
          "link": "/vision"
        },
        {
          "text": "Nosotros",
          "link": "/nosotros"
        },
        {
          "text": "Preferir BPM",
          "link": "/preferir"
        },
        {
          "text": "Diseño App/Web",
          "link": "/disenio"
        },
        {
          "text": "Contacto",
          "link": "/contacto"
        }
      ]
    },
    "/en/": {
      "selectLanguageName": "English",
      "lastUpdated": true,
      "navbar": [
        {
          "text": "What is BPM?",
          "link": "QueEs"
        }
      ],
      "sidebar": [
        {
          "link": "/en/area",
          "text": "Subjects"
        },
        {
          "link": "/en/preguntasyrespuestas",
          "text": "FAQ"
        },
        {
          "link": "/en/empresas",
          "text": "Who use BPM?"
        },
        {
          "link": "/en/ganarganar",
          "text": "Win Win"
        },
        {
          "link": "/en/mision",
          "text": "Mision"
        },
        {
          "link": "/en/vision",
          "text": "Vision"
        },
        {
          "link": "/en/responsabilidadsocial",
          "text": "Social Responsability"
        },
        {
          "link": "/en/nosotros",
          "text": "About us"
        },
        {
          "link": "/en/preferir",
          "text": "Prefer BPM"
        },
        {
          "link": "/en/disenio",
          "text": "Design App/Web"
        }
      ]
    },
    "/pt/": {
      "selectLanguageName": "Portugues",
      "lastUpdated": true,
      "navbar": [
        {
          "text": "What is BPM?",
          "link": "QueEs"
        }
      ],
      "sidebar": [
        {
          "link": "/pt/area",
          "text": "Subjects"
        },
        {
          "link": "/pt/preguntasyrespuestas",
          "text": "FAQ"
        },
        {
          "link": "/pt/empresas",
          "text": "Who use BPM?"
        },
        {
          "link": "/pt/ganarganar",
          "text": "Win Win"
        },
        {
          "link": "/pt/mision",
          "text": "Mision"
        },
        {
          "link": "/pt/vision",
          "text": "Vision"
        },
        {
          "link": "/pt/responsabilidadsocial",
          "text": "Social Responsability"
        },
        {
          "link": "/pt/nosotros",
          "text": "About us"
        },
        {
          "link": "/pt/preferir",
          "text": "Prefer BPM"
        },
        {
          "link": "/pt/disenio",
          "text": "Design App/Web"
        },
        {
          "link": "/pt/trabajaconnosotros",
          "text": "Work with us"
        },
        {
          "link": "/pt/contacto",
          "text": "Contact"
        }
      ]
    }
  },
  "navbar": [],
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
