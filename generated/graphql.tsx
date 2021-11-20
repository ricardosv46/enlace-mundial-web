import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: any;
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: any;
  /** A datetime and timezone string in ISO 8601 format `Y-m-dTH:i:sO`, e.g. `2020-04-20T13:53:12+02:00`. */
  DateTimeTz: any;
  /** Can be used as an argument to upload files using https://github.com/jaydenseric/graphql-multipart-request-spec */
  Upload: any;
};

export type Blog = {
  __typename?: 'Blog';
  CategoriaBlog?: Maybe<CategoriaBlog>;
  blogId?: Maybe<Scalars['Int']>;
  categoriaBlogId?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcionCortaBlog?: Maybe<Scalars['String']>;
  descripcionLargaBlog?: Maybe<Scalars['String']>;
  destacadoBlog?: Maybe<Scalars['String']>;
  estadoBlog?: Maybe<Scalars['String']>;
  galeriaBlog?: Maybe<Array<Maybe<Imagenes>>>;
  imagenPrincipalBlog?: Maybe<Imagenes>;
  imagenSecundariaBlog?: Maybe<Imagenes>;
  keywordsBlog?: Maybe<Scalars['String']>;
  slugCategoriaBlog?: Maybe<Scalars['String']>;
  tituloBlog?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type BlogInput = {
  blogId?: InputMaybe<Scalars['Int']>;
  descripcionCortaBlog?: InputMaybe<Scalars['String']>;
  descripcionLargaBlog?: InputMaybe<Scalars['String']>;
  destacadoBlog?: InputMaybe<Scalars['String']>;
  estadoBlog?: InputMaybe<Scalars['String']>;
  galeriaBlog?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  imagenPrincipalBlog?: InputMaybe<Scalars['Int']>;
  imagenSecundariaBlog?: InputMaybe<Scalars['Int']>;
  keywordsBlog?: InputMaybe<Scalars['String']>;
  slugCategoriaBlog?: InputMaybe<Scalars['String']>;
  tituloBlog?: InputMaybe<Scalars['String']>;
};

export type CambiarContrasenaInput = {
  passwordAntiguo?: InputMaybe<Scalars['String']>;
  passwordNuevo?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type Categoria = {
  __typename?: 'Categoria';
  categoriaId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcion?: Maybe<Scalars['String']>;
  estadoCategoria?: Maybe<Scalars['String']>;
  imagenPrincipalCategoria?: Maybe<Imagenes>;
  imagenSecundariaCategoria?: Maybe<Imagenes>;
  keywordsCategoria?: Maybe<Scalars['String']>;
  slugCategoria?: Maybe<Scalars['String']>;
  tituloCategoria?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type CategoriaBlog = {
  __typename?: 'CategoriaBlog';
  categoriaBlogId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcionCategoriaBlog?: Maybe<Scalars['String']>;
  estadoCategoriaBlog?: Maybe<Scalars['String']>;
  imagenPrincipalCategoriaBlog?: Maybe<Imagenes>;
  imagenSecundariaCategoriaBlog?: Maybe<Imagenes>;
  keywordsCategoriaBlog?: Maybe<Scalars['String']>;
  slugCategoriaBlog?: Maybe<Scalars['String']>;
  tituloCategoriaBlog?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type CategoriaBlogInput = {
  categoriaBlogId?: InputMaybe<Scalars['Int']>;
  descripcionCategoriaBlog?: InputMaybe<Scalars['String']>;
  estadoCategoriaBlog?: InputMaybe<Scalars['String']>;
  imagenPrincipalCategoriaBlog?: InputMaybe<Scalars['Int']>;
  imagenSecundariaCategoriaBlog?: InputMaybe<Scalars['Int']>;
  keywordsCategoriaBlog?: InputMaybe<Scalars['String']>;
  slugCategoriaBlog?: InputMaybe<Scalars['String']>;
  tituloCategoriaBlog?: InputMaybe<Scalars['String']>;
};

export type CategoriaInput = {
  categoriaId?: InputMaybe<Scalars['Int']>;
  descripcion?: InputMaybe<Scalars['String']>;
  estadoCategoria?: InputMaybe<Scalars['String']>;
  imagenPrincipalCategoria?: InputMaybe<Scalars['Int']>;
  imagenSecundariaCategoria?: InputMaybe<Scalars['Int']>;
  keywordsCategoria?: InputMaybe<Scalars['String']>;
  slugCategoria?: InputMaybe<Scalars['String']>;
  tituloCategoria?: InputMaybe<Scalars['String']>;
};

export type Crucero = {
  __typename?: 'Crucero';
  Categoria?: Maybe<Categoria>;
  actividadesCrucero?: Maybe<Scalars['String']>;
  categoriaId?: Maybe<Scalars['String']>;
  ciudadCrucero?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  cruceroId?: Maybe<Scalars['Int']>;
  descripcionCortaCrucero?: Maybe<Scalars['String']>;
  descripcionLargaCrucero?: Maybe<Scalars['String']>;
  destacadoCrucero?: Maybe<Scalars['String']>;
  estadoCrucero?: Maybe<Scalars['String']>;
  galeriaCrucero?: Maybe<Array<Maybe<Imagenes>>>;
  imagenPrincipalCrucero?: Maybe<Imagenes>;
  imagenSecundariaCrucero?: Maybe<Imagenes>;
  incluyeCrucero?: Maybe<Scalars['String']>;
  itinerarioCrucero?: Maybe<Scalars['String']>;
  keywordsCrucero?: Maybe<Scalars['String']>;
  noIncluyeCrucero?: Maybe<Scalars['String']>;
  notasCrucero?: Maybe<Scalars['String']>;
  politicasCrucero?: Maybe<Scalars['String']>;
  puntoPartidaCrucero?: Maybe<Scalars['String']>;
  regionCrucero?: Maybe<Scalars['String']>;
  slugCategoria?: Maybe<Scalars['String']>;
  slugCrucero?: Maybe<Scalars['String']>;
  tituloCrucero?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  videoPresentacionCrucero?: Maybe<Scalars['String']>;
};

export type CruceroInput = {
  actividadesCrucero?: InputMaybe<Scalars['String']>;
  ciudadCrucero?: InputMaybe<Scalars['String']>;
  cruceroId?: InputMaybe<Scalars['Int']>;
  descripcionCortaCrucero?: InputMaybe<Scalars['String']>;
  descripcionLargaCrucero?: InputMaybe<Scalars['String']>;
  destacadoCrucero?: InputMaybe<Scalars['String']>;
  estadoCrucero?: InputMaybe<Scalars['String']>;
  galeriaCrucero?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  imagenPrincipalCrucero?: InputMaybe<Scalars['Int']>;
  imagenSecundariaCrucero?: InputMaybe<Scalars['Int']>;
  incluyeCrucero?: InputMaybe<Scalars['String']>;
  itinerarioCrucero?: InputMaybe<Scalars['String']>;
  keywordsCrucero?: InputMaybe<Scalars['String']>;
  noIncluyeCrucero?: InputMaybe<Scalars['String']>;
  notasCrucero?: InputMaybe<Scalars['String']>;
  politicasCrucero?: InputMaybe<Scalars['String']>;
  puntoPartidaCrucero?: InputMaybe<Scalars['String']>;
  regionCrucero?: InputMaybe<Scalars['String']>;
  slugCategoria?: InputMaybe<Scalars['String']>;
  slugCrucero?: InputMaybe<Scalars['String']>;
  tituloCrucero?: InputMaybe<Scalars['String']>;
  videoPresentacionCrucero?: InputMaybe<Scalars['String']>;
};

export type GetAllBlog = {
  __typename?: 'GetAllBlog';
  data?: Maybe<Array<Blog>>;
  nroTotalItems?: Maybe<Scalars['Int']>;
};

export type GetAllCrucero = {
  __typename?: 'GetAllCrucero';
  data?: Maybe<Array<Crucero>>;
  nroTotalItems?: Maybe<Scalars['Int']>;
};

export type GetAllLunaMiel = {
  __typename?: 'GetAllLunaMiel';
  data?: Maybe<Array<LunaMiel>>;
  nroTotalItems?: Maybe<Scalars['Int']>;
};

export type GetAllSuscripciones = {
  __typename?: 'GetAllSuscripciones';
  data?: Maybe<Array<Suscripcion>>;
  nroTotalItems?: Maybe<Scalars['Int']>;
};

export type GetAllTour = {
  __typename?: 'GetAllTour';
  data?: Maybe<Array<Tour>>;
  nroTotalItems?: Maybe<Scalars['Int']>;
};

export type GetAllUsers = {
  __typename?: 'GetAllUsers';
  data?: Maybe<Array<User>>;
  nroTotalItems?: Maybe<Scalars['Int']>;
};

export type HorarioTour = {
  __typename?: 'HorarioTour';
  created_at?: Maybe<Scalars['DateTime']>;
  cupos?: Maybe<Scalars['Int']>;
  estado?: Maybe<Scalars['String']>;
  fecha?: Maybe<Scalars['String']>;
  hora?: Maybe<Scalars['String']>;
  horarioTourId?: Maybe<Scalars['Int']>;
  precio?: Maybe<Scalars['Float']>;
  tourId?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type HorarioTourInput = {
  cupos?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
  fecha?: InputMaybe<Scalars['String']>;
  hora?: InputMaybe<Scalars['String']>;
  horarioTourId?: InputMaybe<Scalars['Int']>;
  precio?: InputMaybe<Scalars['Float']>;
  tourId?: InputMaybe<Scalars['Int']>;
};

export type Imagenes = {
  __typename?: 'Imagenes';
  descripcion?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
};

export type ImagenesInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  descripcion?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  url?: InputMaybe<Scalars['String']>;
};

export type LunaMiel = {
  __typename?: 'LunaMiel';
  Categoria?: Maybe<Categoria>;
  actividadesLuna?: Maybe<Scalars['String']>;
  categoriaId?: Maybe<Scalars['String']>;
  ciudadLuna?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcionCortaLuna?: Maybe<Scalars['String']>;
  descripcionLargaLuna?: Maybe<Scalars['String']>;
  destacadoLuna?: Maybe<Scalars['String']>;
  estadoLuna?: Maybe<Scalars['String']>;
  galeriaLuna?: Maybe<Array<Maybe<Imagenes>>>;
  imagenPrincipalLuna?: Maybe<Imagenes>;
  imagenSecundariaLuna?: Maybe<Imagenes>;
  incluyeLuna?: Maybe<Scalars['String']>;
  itinerarioLuna?: Maybe<Scalars['String']>;
  keywordsLuna?: Maybe<Scalars['String']>;
  lunaMielId?: Maybe<Scalars['Int']>;
  noIncluyeLuna?: Maybe<Scalars['String']>;
  notasLuna?: Maybe<Scalars['String']>;
  politicasLuna?: Maybe<Scalars['String']>;
  puntoPartidaLuna?: Maybe<Scalars['String']>;
  regionLuna?: Maybe<Scalars['String']>;
  slugCategoria?: Maybe<Scalars['String']>;
  slugLuna?: Maybe<Scalars['String']>;
  tituloLuna?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  videoPresentacionLuna?: Maybe<Scalars['String']>;
};

export type LunaMielInput = {
  actividadesLuna?: InputMaybe<Scalars['String']>;
  ciudadLuna?: InputMaybe<Scalars['String']>;
  descripcionCortaLuna?: InputMaybe<Scalars['String']>;
  descripcionLargaLuna?: InputMaybe<Scalars['String']>;
  destacadoLuna?: InputMaybe<Scalars['String']>;
  estadoLuna?: InputMaybe<Scalars['String']>;
  galeriaLuna?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  imagenPrincipalLuna?: InputMaybe<Scalars['Int']>;
  imagenSecundariaLuna?: InputMaybe<Scalars['Int']>;
  incluyeLuna?: InputMaybe<Scalars['String']>;
  itinerarioLuna?: InputMaybe<Scalars['String']>;
  keywordsLuna?: InputMaybe<Scalars['String']>;
  lunaMielId?: InputMaybe<Scalars['Int']>;
  noIncluyeLuna?: InputMaybe<Scalars['String']>;
  notasLuna?: InputMaybe<Scalars['String']>;
  politicasLuna?: InputMaybe<Scalars['String']>;
  puntoPartidaLuna?: InputMaybe<Scalars['String']>;
  regionLuna?: InputMaybe<Scalars['String']>;
  slugCategoria?: InputMaybe<Scalars['String']>;
  slugLuna?: InputMaybe<Scalars['String']>;
  tituloLuna?: InputMaybe<Scalars['String']>;
  videoPresentacionLuna?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CambiarContrasenaUsuario?: Maybe<User>;
  CrearSuscripcion?: Maybe<Suscripcion>;
  CrearUsuario?: Maybe<User>;
  CreateBlog?: Maybe<Blog>;
  CreateCategoria?: Maybe<Categoria>;
  CreateCategoriaBlog?: Maybe<CategoriaBlog>;
  CreateCrucero?: Maybe<Crucero>;
  CreateHorarioTour?: Maybe<HorarioTour>;
  CreateImage?: Maybe<Imagenes>;
  CreateLunaMiel?: Maybe<LunaMiel>;
  CreateTour?: Maybe<Tour>;
  DeleteBlog?: Maybe<Scalars['String']>;
  DeleteCategoria?: Maybe<Scalars['String']>;
  DeleteCategoriaBlog?: Maybe<Scalars['String']>;
  DeleteCrucero?: Maybe<Scalars['String']>;
  DeleteHorarioTour?: Maybe<Scalars['String']>;
  DeleteImage?: Maybe<Scalars['String']>;
  DeleteLunaMiel?: Maybe<Scalars['String']>;
  DeleteSuscripcion?: Maybe<Scalars['String']>;
  DeleteTour?: Maybe<Scalars['String']>;
  DeleteUsuario?: Maybe<Scalars['String']>;
  RecuperarContraUsuario?: Maybe<Scalars['String']>;
  UpdateBlog?: Maybe<Blog>;
  UpdateCategoria?: Maybe<Categoria>;
  UpdateCategoriaBlog?: Maybe<CategoriaBlog>;
  UpdateCrucero?: Maybe<Crucero>;
  UpdateHorarioTour?: Maybe<HorarioTour>;
  UpdateImage?: Maybe<Imagenes>;
  UpdateLunaMiel?: Maybe<LunaMiel>;
  UpdateTour?: Maybe<Tour>;
  UpdateUsuario?: Maybe<User>;
  login?: Maybe<User>;
};


export type MutationCambiarContrasenaUsuarioArgs = {
  input: CambiarContrasenaInput;
};


export type MutationCrearSuscripcionArgs = {
  input: SuscripcionInput;
};


export type MutationCrearUsuarioArgs = {
  input: UserInput;
};


export type MutationCreateBlogArgs = {
  input?: InputMaybe<BlogInput>;
};


export type MutationCreateCategoriaArgs = {
  input?: InputMaybe<CategoriaInput>;
};


export type MutationCreateCategoriaBlogArgs = {
  input?: InputMaybe<CategoriaBlogInput>;
};


export type MutationCreateCruceroArgs = {
  input?: InputMaybe<CruceroInput>;
};


export type MutationCreateHorarioTourArgs = {
  input?: InputMaybe<HorarioTourInput>;
};


export type MutationCreateImageArgs = {
  imagen: Scalars['Upload'];
  input?: InputMaybe<ImagenesInput>;
};


export type MutationCreateLunaMielArgs = {
  input?: InputMaybe<LunaMielInput>;
};


export type MutationCreateTourArgs = {
  input?: InputMaybe<TourInput>;
};


export type MutationDeleteBlogArgs = {
  input?: InputMaybe<BlogInput>;
};


export type MutationDeleteCategoriaArgs = {
  input?: InputMaybe<CategoriaInput>;
};


export type MutationDeleteCategoriaBlogArgs = {
  input?: InputMaybe<CategoriaBlogInput>;
};


export type MutationDeleteCruceroArgs = {
  input?: InputMaybe<CruceroInput>;
};


export type MutationDeleteHorarioTourArgs = {
  input?: InputMaybe<HorarioTourInput>;
};


export type MutationDeleteImageArgs = {
  input: ImagenesInput;
};


export type MutationDeleteLunaMielArgs = {
  input?: InputMaybe<LunaMielInput>;
};


export type MutationDeleteSuscripcionArgs = {
  input: SuscripcionInput;
};


export type MutationDeleteTourArgs = {
  input?: InputMaybe<TourInput>;
};


export type MutationDeleteUsuarioArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationRecuperarContraUsuarioArgs = {
  input: UserInput;
};


export type MutationUpdateBlogArgs = {
  input?: InputMaybe<BlogInput>;
};


export type MutationUpdateCategoriaArgs = {
  input?: InputMaybe<CategoriaInput>;
};


export type MutationUpdateCategoriaBlogArgs = {
  input?: InputMaybe<CategoriaBlogInput>;
};


export type MutationUpdateCruceroArgs = {
  input?: InputMaybe<CruceroInput>;
};


export type MutationUpdateHorarioTourArgs = {
  input?: InputMaybe<HorarioTourInput>;
};


export type MutationUpdateImageArgs = {
  input?: InputMaybe<ImagenesInput>;
};


export type MutationUpdateLunaMielArgs = {
  input?: InputMaybe<LunaMielInput>;
};


export type MutationUpdateTourArgs = {
  input?: InputMaybe<TourInput>;
};


export type MutationUpdateUsuarioArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationLoginArgs = {
  input: LoginInput;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  field: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Pagination information about the corresponding list of items. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Count of nodes in current request. */
  count?: Maybe<Scalars['Int']>;
  /** Current page of request. */
  currentPage?: Maybe<Scalars['Int']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Last page in connection. */
  lastPage?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of node in connection. */
  total?: Maybe<Scalars['Int']>;
};

/** Pagination information about the corresponding list of items. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Total count of available items in the page. */
  count: Scalars['Int'];
  /** Current pagination page. */
  currentPage: Scalars['Int'];
  /** Index of first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** If collection has more pages. */
  hasMorePages: Scalars['Boolean'];
  /** Index of last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Last page number of the collection. */
  lastPage: Scalars['Int'];
  /** Number of items per page in the collection. */
  perPage: Scalars['Int'];
  /** Total items available in the collection. */
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  GetAllBlog?: Maybe<GetAllBlog>;
  GetAllBlogCategoria?: Maybe<GetAllBlog>;
  GetAllCategoriaBlog?: Maybe<Array<Maybe<CategoriaBlog>>>;
  GetAllCrucero?: Maybe<GetAllCrucero>;
  GetAllLunaMiel?: Maybe<GetAllLunaMiel>;
  GetAllSuscripciones?: Maybe<GetAllSuscripciones>;
  GetAllTour?: Maybe<GetAllTour>;
  GetAllUsers?: Maybe<GetAllUsers>;
  GetCategoria?: Maybe<Array<Maybe<Categoria>>>;
  GetCategoriaCrucero?: Maybe<GetAllCrucero>;
  GetCategoriaLunaMiel?: Maybe<GetAllLunaMiel>;
  GetCategoriaTour?: Maybe<GetAllTour>;
  GetHorariosTour?: Maybe<Array<Maybe<HorarioTour>>>;
  GetImagenes?: Maybe<Array<Imagenes>>;
  GetSlugCategoria?: Maybe<Categoria>;
  GetSlugCategoriaBlog?: Maybe<CategoriaBlog>;
  GetSlugCrucero?: Maybe<Crucero>;
  GetSlugLunaMiel?: Maybe<LunaMiel>;
  GetSlugTour?: Maybe<Tour>;
};


export type QueryGetAllBlogArgs = {
  estadoBlog?: InputMaybe<Scalars['String']>;
  numberPaginate?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllBlogCategoriaArgs = {
  estadoBlog?: InputMaybe<Scalars['String']>;
  numberPaginate?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  slugCategoriaBlog?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllCategoriaBlogArgs = {
  estadoCategoriaBlog?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllCruceroArgs = {
  estadoCrucero?: InputMaybe<Scalars['String']>;
  numberPaginate?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllLunaMielArgs = {
  estadoLuna?: InputMaybe<Scalars['String']>;
  numberPaginate?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllSuscripcionesArgs = {
  numberPaginate?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllTourArgs = {
  estadoTour?: InputMaybe<Scalars['String']>;
  numberPaginate?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllUsersArgs = {
  estado?: InputMaybe<Scalars['String']>;
  numberPaginate?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  tipoUsuario?: InputMaybe<Scalars['String']>;
};


export type QueryGetCategoriaArgs = {
  estadoCategoria?: InputMaybe<Scalars['String']>;
};


export type QueryGetCategoriaCruceroArgs = {
  estadoCrucero?: InputMaybe<Scalars['String']>;
  numberPaginate?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  slugCategoria?: InputMaybe<Scalars['String']>;
};


export type QueryGetCategoriaLunaMielArgs = {
  estadoLuna?: InputMaybe<Scalars['String']>;
  numberPaginate?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  slugCategoria?: InputMaybe<Scalars['String']>;
};


export type QueryGetCategoriaTourArgs = {
  estadoTour?: InputMaybe<Scalars['String']>;
  numberPaginate?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  slugCategoria?: InputMaybe<Scalars['String']>;
};


export type QueryGetHorariosTourArgs = {
  anio?: InputMaybe<Scalars['String']>;
  mes?: InputMaybe<Scalars['String']>;
  tourId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetSlugCategoriaArgs = {
  slugCategoria?: InputMaybe<Scalars['String']>;
};


export type QueryGetSlugCategoriaBlogArgs = {
  slugCategoriaBlog?: InputMaybe<Scalars['String']>;
};


export type QueryGetSlugCruceroArgs = {
  slugCrucero?: InputMaybe<Scalars['String']>;
};


export type QueryGetSlugLunaMielArgs = {
  slugLuna?: InputMaybe<Scalars['String']>;
};


export type QueryGetSlugTourArgs = {
  slugTour?: InputMaybe<Scalars['String']>;
};

/** The available directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type Tour = {
  __typename?: 'Tour';
  Categoria?: Maybe<Categoria>;
  actividadesTour?: Maybe<Scalars['String']>;
  categoriaId?: Maybe<Scalars['String']>;
  ciudadTour?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcionCortaTour?: Maybe<Scalars['String']>;
  descripcionLargaTour?: Maybe<Scalars['String']>;
  destacadoTour?: Maybe<Scalars['String']>;
  estadoTour?: Maybe<Scalars['String']>;
  galeriaTour?: Maybe<Array<Maybe<Imagenes>>>;
  imagenPrincipalTour?: Maybe<Imagenes>;
  imagenSecundariaTour?: Maybe<Imagenes>;
  incluyeTour?: Maybe<Scalars['String']>;
  itinerarioTour?: Maybe<Scalars['String']>;
  keywordsTour?: Maybe<Scalars['String']>;
  noIncluyeTour?: Maybe<Scalars['String']>;
  notasTour?: Maybe<Scalars['String']>;
  politicasTour?: Maybe<Scalars['String']>;
  puntoPartidaTour?: Maybe<Scalars['String']>;
  regionTour?: Maybe<Scalars['String']>;
  slugCategoria?: Maybe<Scalars['String']>;
  slugTour?: Maybe<Scalars['String']>;
  tituloTour?: Maybe<Scalars['String']>;
  tourId?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  videoPresentacionTour?: Maybe<Scalars['String']>;
};

export type TourInput = {
  actividadesTour?: InputMaybe<Scalars['String']>;
  ciudadTour?: InputMaybe<Scalars['String']>;
  descripcionCortaTour?: InputMaybe<Scalars['String']>;
  descripcionLargaTour?: InputMaybe<Scalars['String']>;
  destacadoTour?: InputMaybe<Scalars['String']>;
  estadoTour?: InputMaybe<Scalars['String']>;
  galeriaTour?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  imagenPrincipalTour?: InputMaybe<Scalars['Int']>;
  imagenSecundariaTour?: InputMaybe<Scalars['Int']>;
  incluyeTour?: InputMaybe<Scalars['String']>;
  itinerarioTour?: InputMaybe<Scalars['String']>;
  keywordsTour?: InputMaybe<Scalars['String']>;
  noIncluyeTour?: InputMaybe<Scalars['String']>;
  notasTour?: InputMaybe<Scalars['String']>;
  politicasTour?: InputMaybe<Scalars['String']>;
  puntoPartidaTour?: InputMaybe<Scalars['String']>;
  regionTour?: InputMaybe<Scalars['String']>;
  slugCategoria?: InputMaybe<Scalars['String']>;
  slugTour?: InputMaybe<Scalars['String']>;
  tituloTour?: InputMaybe<Scalars['String']>;
  tourId?: InputMaybe<Scalars['Int']>;
  videoPresentacionTour?: InputMaybe<Scalars['String']>;
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type User = {
  __typename?: 'User';
  apellidos?: Maybe<Scalars['String']>;
  apiToken?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  nombre?: Maybe<Scalars['String']>;
  tipoUsuario?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type UserInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  apiToken?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  nombre?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  tipoUsuario?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Suscripcion = {
  __typename?: 'suscripcion';
  created_at?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  suscripcionId?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type SuscripcionInput = {
  email?: InputMaybe<Scalars['String']>;
  suscripcionId?: InputMaybe<Scalars['Int']>;
};

export type GetImagenesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetImagenesQuery = { __typename?: 'Query', GetImagenes?: Array<{ __typename?: 'Imagenes', id?: string | null | undefined, url?: string | null | undefined, descripcion?: string | null | undefined }> | null | undefined };


export const GetImagenesDocument = gql`
    query GetImagenes {
  GetImagenes {
    id
    url
    descripcion
  }
}
    `;

/**
 * __useGetImagenesQuery__
 *
 * To run a query within a React component, call `useGetImagenesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetImagenesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetImagenesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetImagenesQuery(baseOptions?: Apollo.QueryHookOptions<GetImagenesQuery, GetImagenesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetImagenesQuery, GetImagenesQueryVariables>(GetImagenesDocument, options);
      }
export function useGetImagenesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetImagenesQuery, GetImagenesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetImagenesQuery, GetImagenesQueryVariables>(GetImagenesDocument, options);
        }
export type GetImagenesQueryHookResult = ReturnType<typeof useGetImagenesQuery>;
export type GetImagenesLazyQueryHookResult = ReturnType<typeof useGetImagenesLazyQuery>;
export type GetImagenesQueryResult = Apollo.QueryResult<GetImagenesQuery, GetImagenesQueryVariables>;