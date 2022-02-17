export const URL = "https://apienlacemundial.softaki.com/public/graphql"

export const GET_SLUG_TOUR = `
query GetSlugTour($slugTour:String){
  GetSlugTour(slugTour:$slugTour) {
    tourId
    tituloTour
    slugTour
    regionTour
    ciudadTour
    estadoTour
    destacadoTour
    keywordsTour
    descripcionCortaTour
    descripcionLargaTour
    itinerarioTour
    puntoPartidaTour
    incluyeTour
    noIncluyeTour
    actividadesTour
    notasTour
    politicasTour
    videoPresentacionTour
    imagenPrincipalTour {
      id
      descripcion
      url
    }
    imagenSecundariaTour {
      id
      descripcion
      url
    }
    galeriaTour {
      id
      descripcion
      url
    }
    slugCategoria
    categoriaId
    Categoria {
      categoriaId
      slugCategoria
      tituloCategoria
      descripcion
      estadoCategoria
      keywordsCategoria
      imagenPrincipalCategoria {
        id
        descripcion
        url
      }
      imagenSecundariaCategoria {
        id
        descripcion
        url
      }
    }
  }
}
`

export const GET_SLUG_BLOG = `
query Query($slugBlog: String) {
  GetSlugBlog(slugBlog: $slugBlog) {
    blogId
    CategoriaBlog {
      categoriaBlogId
      created_at
      descripcionCategoriaBlog
      estadoCategoriaBlog
      imagenPrincipalCategoriaBlog {
        url
        id
        descripcion
      }
      imagenSecundariaCategoriaBlog {
        url
        id
        descripcion
      }
      keywordsCategoriaBlog
      slugCategoriaBlog
      tituloCategoriaBlog
      updated_at
    }
    categoriaBlogId
    created_at
    descripcionCortaBlog
    descripcionLargaBlog
    destacadoBlog
    estadoBlog
    galeriaBlog {
      url
      id
      descripcion
    }
    imagenPrincipalBlog {
      url
      id
      descripcion
    }
    imagenSecundariaBlog {
      url
      id
      descripcion
    }
    keywordsBlog
    slugBlog
    slugCategoriaBlog
    tituloBlog
    updated_at
  }
}
`
export const GET_ALL_CATEGORIA_BLOG = `
query GetAllCategoriaBlog($estadoCategoriaBlog: String) {
  GetAllCategoriaBlog(estadoCategoriaBlog: $estadoCategoriaBlog) {
    categoriaBlogId
    slugCategoriaBlog
    tituloCategoriaBlog
    estadoCategoriaBlog
    descripcionCategoriaBlog
    keywordsCategoriaBlog
    imagenPrincipalCategoriaBlog {
      id
      descripcion
      url
    }
    imagenSecundariaCategoriaBlog {
      id
      descripcion
      url
    }
  }
}
`
