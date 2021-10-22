let posts = [
  {
    imagen:
      "https://239f21.medialib.edu.glogster.com/uaSZuXSGVaZ0uqZ1gUsR/media/9a/9a199f53294ddce1b5c520a201aec33b33404299/titicaca2.jpg",
    titulo: "Y tú qué planes? Turismo, ofertas de viaje y tours por el Perú",
    descripcion:
      "Conoce el Perú! Te invitamos a que viajes y descubras los destinos, actividades y planes en el Perú que aún no conoces.",
  },
  {
    imagen:
      "https://thumbs.dreamstime.com/b/islas-flotantes-de-uros-en-el-lago-titicaca-puno-per%C3%BA-104079106.jpg",
    titulo: "Islas de Uros",
    descripcion:
      "Conoce el Perú! Te invitamos a que viajes y descubras los destinos, actividades y planes en el Perú que aún no conoces.",
  },
  {
    imagen:
      "https://www.monoviajero.com/wp-content/uploads/2019/04/mancora-mejores-playas-que-ver-hacer-8.jpg",
    titulo: "Conoce Máncora",
    descripcion:
      "Conoce el Perú! Te invitamos a que viajes y descubras los destinos, actividades y planes en el Perú que aún no conoces.",
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

posts.forEach((item) => {
  item.id = idInicial;
  idInicial += 1;

  // Asignar slug
  item.slug = string_to_slug(item.titulo);
});

export default posts;
