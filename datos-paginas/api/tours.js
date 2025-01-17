let tours = [
  {
    titulo: "Ica y paracas",
    descripcion:
      "Disfruta de 3 días recorriendo la laguna de Huacachina, Nazca y las islas Ballestas desde Ica. Con este tour conocerás algunos de los paisajes más bonitos del oeste de Perú.",
    imagenPrincipal: "/imagenes/tours/ica.jpg",
    imagenSecundaria: "/imagenes/tours/secundaria.jpg",
    precio: 99,
  },
  {
    titulo: "Marcapomacocha",
    descripcion:
      "Disfruta de 3 días recorriendo la laguna de Huacachina, Nazca y las islas Ballestas desde Ica. Con este tour conocerás algunos de los paisajes más bonitos del oeste de Perú.",
    imagenPrincipal: "/imagenes/tours/marcapomacocha.jpg",
    imagenSecundaria: "/imagenes/tours/secundaria.jpg",
    precio: 99,
  },
  {
    titulo: "Cordillera la viuda",
    descripcion:
      "Disfruta de 3 días recorriendo la laguna de Huacachina, Nazca y las islas Ballestas desde Ica. Con este tour conocerás algunos de los paisajes más bonitos del oeste de Perú.",
    imagenPrincipal: "/imagenes/tours/cordillera.jpg",
    imagenSecundaria: "/imagenes/tours/secundaria.jpg",
    precio: 79,
  },
  {
    titulo: "Antioquía",
    descripcion:
      "Disfruta de 3 días recorriendo la laguna de Huacachina, Nazca y las islas Ballestas desde Ica. Con este tour conocerás algunos de los paisajes más bonitos del oeste de Perú.",
    imagenPrincipal: "/imagenes/tours/antioquia.jpg",
    imagenSecundaria: "/imagenes/tours/secundaria.jpg",
    precio: 50,
  },
  {
    titulo: "Ica y paracas",
    descripcion:
      "Disfruta de 3 días recorriendo la laguna de Huacachina, Nazca y las islas Ballestas desde Ica. Con este tour conocerás algunos de los paisajes más bonitos del oeste de Perú.",
    imagenPrincipal: "/imagenes/tours/ica.jpg",
    imagenSecundaria: "/imagenes/tours/secundaria.jpg",
    precio: 99,
  },
  {
    titulo: "Marcapomacocha",
    descripcion:
      "Disfruta de 3 días recorriendo la laguna de Huacachina, Nazca y las islas Ballestas desde Ica. Con este tour conocerás algunos de los paisajes más bonitos del oeste de Perú.",
    imagenPrincipal: "/imagenes/tours/marcapomacocha.jpg",
    imagenSecundaria: "/imagenes/tours/secundaria.jpg",
    precio: 99,
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

tours.forEach((item) => {
  item.id = idInicial;
  idInicial += 1;

  // Asignar slug
  item.slug = string_to_slug(item.titulo);
});

export default tours;
