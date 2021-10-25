let lunaDeMiel = [
  {
    nombre: "Drake Bay",
    imagenPrincipal:
      "https://conceptodefinicion.de/wp-content/uploads/2018/03/Luna_de_Miel.jpg",
  },
  {
    nombre: "Montego Bay",
    imagenPrincipal:
      "https://media-cdn.tripadvisor.com/media/photo-s/1b/36/58/43/jewel-grande-montego.jpg",
  },
  {
    nombre: "Boipeba",
    imagenPrincipal: "https://playascalas.com/wp-content/2013/11/Boipeba1.jpg",
  },
  {
    nombre: "Crucero 4",
    imagenPrincipal:
      "https://www.cvu.com.co/documents/36512/36521/El-placer-de-viajar-por-primera-vez-en-un-crucero.jpg/4c819ee9-8ff2-31e2-ecb8-ef2c0bfea148?version=1.0&t=1564785560551",
  },
  {
    nombre: "Koh Samui",
    imagenPrincipal:
      "https://www.asiatica-viajes.com/ckfinder/userfiles/images/Koh-Samui/koh-samui-9.jpg",
  },
  {
    nombre: "Sicilia",
    imagenPrincipal:
      "https://viajes.nationalgeographic.com.es/medio/2020/05/05/cefalu-sicilia_d18d1188_800x800.jpg",
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

lunaDeMiel.forEach((item) => {
  item.id = idInicial;
  idInicial += 1;

  // Asignar slug
  item.slug = string_to_slug(item.nombre);
});

export default lunaDeMiel;
