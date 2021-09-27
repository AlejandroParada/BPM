import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-1485d4da","/area.html","Alguna de las áreas que abarca:",["/area","/area.md"]],
  ["v-b5c3b8de","/contacto.html","",["/contacto","/contacto.md"]],
  ["v-ef78e156","/disenio.html","Diseño App/Web plus",["/disenio","/disenio.md"]],
  ["v-c64e2094","/empresas.html","Empresas que utilizan BPM",["/empresas","/empresas.md"]],
  ["v-33b2d5a0","/ganarganar.html","Ganar Ganar",["/ganarganar","/ganarganar.md"]],
  ["v-8daa1a0e","/","",["/index.html","/index.md"]],
  ["v-a2e316e2","/mision.html","Misión",["/mision","/mision.md"]],
  ["v-1d61cba1","/nosotros.html","Nuestros valores",["/nosotros","/nosotros.md"]],
  ["v-67494ae7","/preferir.html","Porque preferir BPM",["/preferir","/preferir.md"]],
  ["v-19ae925d","/preguntasyrespuestas.html","Preguntas Frecuentes",["/preguntasyrespuestas","/preguntasyrespuestas.md"]],
  ["v-3915da7a","/QueEs.html","¿Que es BPM?",["/QueEs","/QueEs.md"]],
  ["v-73ee815f","/responsabilidadsocial.html","Responsabilidad Social Empresarial",["/responsabilidadsocial","/responsabilidadsocial.md"]],
  ["v-103f1478","/trabajaconnosotros.html","Trabaja con nosotros",["/trabajaconnosotros","/trabajaconnosotros.md"]],
  ["v-2ace8550","/vision.html","Visión",["/vision","/vision.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
