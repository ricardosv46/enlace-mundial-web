export const URL = "https://api.enlacemundialperu.com/public/graphql"

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
export const GET_SLUG_BLOG = `query Query($slugBlog: String) {
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
export const GET_SLUG_CRUCERO = `
query GetSlugCrucero($slugCrucero: String) {
  GetSlugCrucero(slugCrucero: $slugCrucero) {
    Categoria {
      estadoCategoria
      descripcion
      created_at
      categoriaId
      imagenPrincipalCategoria {
        url
        id
        descripcion
      }
      imagenSecundariaCategoria {
        url
        id
        descripcion
      }
      keywordsCategoria
      slugCategoria
      tituloCategoria
      updated_at
    }
    actividadesCrucero
    categoriaId
    ciudadCrucero
    created_at
    cruceroId
    descripcionCortaCrucero
    descripcionLargaCrucero
    destacadoCrucero
    estadoCrucero
    galeriaCrucero {
      url
      id
      descripcion
    }
    imagenPrincipalCrucero {
      url
      id
      descripcion
    }
    imagenSecundariaCrucero {
      url
      id
      descripcion
    }
    incluyeCrucero
    itinerarioCrucero
    keywordsCrucero
    noIncluyeCrucero
    notasCrucero
    precioBaseCrucero
    politicasCrucero
    regionCrucero
    puntoPartidaCrucero
    slugCategoria
    slugCrucero
    tituloCrucero
    updated_at
    videoPresentacionCrucero
  }
}
`

export const GET_SLUG_LUNA_MIEL = `
query GetSlugLunaMiel($slugLuna: String) {
  GetSlugLunaMiel(slugLuna: $slugLuna) {
    Categoria {
      categoriaId
      created_at
      descripcion
      imagenPrincipalCategoria {
        url
        descripcion
        id
      }
      estadoCategoria
      imagenSecundariaCategoria {
        url
        id
        descripcion
      }
      keywordsCategoria
      slugCategoria
      tituloCategoria
      updated_at
    }
    actividadesLuna
    categoriaId
    ciudadLuna
    created_at
    descripcionCortaLuna
    descripcionLargaLuna
    destacadoLuna
    estadoLuna
    galeriaLuna {
      url
      id
      descripcion
    }
    imagenPrincipalLuna {
      descripcion
      id
      url
    }
    videoPresentacionLuna
    updated_at
    tituloLuna
    slugLuna
    slugCategoria
    regionLuna
    puntoPartidaLuna
    precioBaseLuna
    politicasLuna
    notasLuna
    noIncluyeLuna
    lunaMielId
    keywordsLuna
    itinerarioLuna
    incluyeLuna
    imagenSecundariaLuna {
      descripcion
      id
      url
    }
  }
}`
