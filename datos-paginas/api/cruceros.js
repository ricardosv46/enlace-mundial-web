let cruceros = [
  {
    nombre: "Crucero",
    imagenPrincipal:
      "https://www.solocruceros.com/blog/wp-content/uploads/2015/08/fotobanner3-2013.jpg",
  },
  {
    nombre: "Crucero 2",
    imagenPrincipal:
      "https://volawaytravel.pe/blog/wp-content/uploads/2019/11/Diversi%C3%B3n-asegurada-en-un-crucero.jpg",
  },
  {
    nombre: "Crucero 3",
    imagenPrincipal:
      "https://www.euroresidentes.com/viajes/viajar/wp-content/uploads/sites/3/2009/02/crucero-princess-cruises.jpg",
  },
  {
    nombre: "Crucero 4",
    imagenPrincipal:
      "https://www.cvu.com.co/documents/36512/36521/El-placer-de-viajar-por-primera-vez-en-un-crucero.jpg/4c819ee9-8ff2-31e2-ecb8-ef2c0bfea148?version=1.0&t=1564785560551",
  },
  {
    nombre: "Crucero 5",
    imagenPrincipal:
      "https://cdn.colombia.com/sdi/2019/02/19/que-no-te-duela-el-bolsillo-si-vas-a-viajar-en-crucero-711772.jpg",
  },
  {
    nombre: "Crucero 6",
    imagenPrincipal:
      "https://noticiaslogisticaytransporte.com/wp-content/uploads/2013/12/121.jpg",
  },
];

function string_to_slug(str) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
}

// Asignar Id
let idInicial = 1;

cruceros.forEach((item) => {
  item.id = idInicial;
  idInicial += 1;

  // Asignar slug
  item.slug = string_to_slug(item.nombre);
});

export default cruceros;
