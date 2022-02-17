export const URL = "https://apienlacemundial.softaki.com/public/graphql"

export const GET_SLUG_TOUR = `
query GetSlugTour($slugTour: String) {
  GetSlugTour(slugTour: $slugTour) {
    tourId
    tituloTour
    slugTour
    regionTour
    ciudadTour
    estadoTour
    precioBaseTour
    nroHoras
    nroDias
    destacadoTour
    keywordsTour
    descripcionCortaTour
    descripcionLargaTour
    itinerarioTour
    puntoPartidaTour
    noIncluyeTour
    notasTour
    politicasTour
    videoPresentacionTour
    imagenPrincipalTour {
      id
      url
    }
    imagenSecundariaTour {
      id
      url
    }
    galeriaTour {
      id
      url
    }
    slugCategoria
    categoriaId
    IncluyeTour {
      incluyeId
      descripcionIncluye
    }
    ActividadesTour {
      actividadId
      descripcion_actividad
    }
    Departamento {
      DeparCodi
      DeparNom
    }
    Provincia {
      ProvCodi
      ProvNom
    }
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
export const GET_ALL_BLOG_CATEGORIA = `
query GetAllBlogCategoria($estadoBlog: String, $numberPaginate: Int, $page: Int, $slugCategoriaBlog: String) {
  GetAllBlogCategoria(estadoBlog: $estadoBlog, numberPaginate: $numberPaginate, page: $page, slugCategoriaBlog: $slugCategoriaBlog) {
    data {
      CategoriaBlog {
        categoriaBlogId
        created_at
        descripcionCategoriaBlog
        imagenPrincipalCategoriaBlog {
          url
          id
          descripcion
        }
        estadoCategoriaBlog
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
      blogId
      categoriaBlogId
      created_at
      descripcionLargaBlog
      descripcionCortaBlog
      destacadoBlog
      estadoBlog
      galeriaBlog {
        url
        id
        descripcion
      }
      imagenPrincipalBlog {
        descripcion
        id
        url
      }
      imagenSecundariaBlog {
        descripcion
        id
        url
      }
      keywordsBlog
      slugBlog
      slugCategoriaBlog
      tituloBlog
      updated_at
    }
  }
}
`
