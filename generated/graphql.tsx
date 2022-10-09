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

export type ActividadesTour = {
  __typename?: 'ActividadesTour';
  actividadId?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcion_actividad?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ActividadesTourInput = {
  actividadId?: InputMaybe<Scalars['String']>;
  descripcion_actividad?: InputMaybe<Scalars['String']>;
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
  slugBlog?: Maybe<Scalars['String']>;
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
  slugBlog?: InputMaybe<Scalars['String']>;
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
  precioBaseCrucero?: Maybe<Scalars['Int']>;
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
  precioBaseCrucero?: InputMaybe<Scalars['Int']>;
  puntoPartidaCrucero?: InputMaybe<Scalars['String']>;
  regionCrucero?: InputMaybe<Scalars['String']>;
  slugCategoria?: InputMaybe<Scalars['String']>;
  slugCrucero?: InputMaybe<Scalars['String']>;
  tituloCrucero?: InputMaybe<Scalars['String']>;
  videoPresentacionCrucero?: InputMaybe<Scalars['String']>;
};

export type Departamento = {
  __typename?: 'Departamento';
  DeparCodi?: Maybe<Scalars['String']>;
  DeparNom?: Maybe<Scalars['String']>;
  DestacadoDepartamento?: Maybe<Scalars['Int']>;
  UbiDepCodi?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  imagenPrincipal?: Maybe<Imagenes>;
  imagenSecundaria?: Maybe<Imagenes>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type DepartamentoInput = {
  DeparCodi?: InputMaybe<Scalars['String']>;
  DestacadoDepartamento?: InputMaybe<Scalars['Int']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenSecundaria?: InputMaybe<Scalars['Int']>;
};

export type Distrito = {
  __typename?: 'Distrito';
  DistCodi?: Maybe<Scalars['ID']>;
  DistNom?: Maybe<Scalars['String']>;
  ProvCodi?: Maybe<Scalars['Int']>;
  ProvNom?: Maybe<Scalars['String']>;
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

export type GetAllOrdenTour = {
  __typename?: 'GetAllOrdenTour';
  data?: Maybe<Array<OrdenTour>>;
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

export type IncluyeTour = {
  __typename?: 'IncluyeTour';
  created_at?: Maybe<Scalars['DateTime']>;
  descripcionIncluye?: Maybe<Scalars['String']>;
  incluyeId?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type IncluyeTourInput = {
  descripcionIncluye?: InputMaybe<Scalars['String']>;
  incluyeId?: InputMaybe<Scalars['String']>;
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
  precioBaseLuna?: Maybe<Scalars['Int']>;
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
  precioBaseLuna?: InputMaybe<Scalars['Int']>;
  puntoPartidaLuna?: InputMaybe<Scalars['String']>;
  regionLuna?: InputMaybe<Scalars['String']>;
  slugCategoria?: InputMaybe<Scalars['String']>;
  slugLuna?: InputMaybe<Scalars['String']>;
  tituloLuna?: InputMaybe<Scalars['String']>;
  videoPresentacionLuna?: InputMaybe<Scalars['String']>;
};

export type MercadoPagoInput = {
  installments?: InputMaybe<Scalars['Int']>;
  payment_method_id?: InputMaybe<Scalars['String']>;
  source_id?: InputMaybe<Scalars['String']>;
  tipo_tarjeta?: InputMaybe<Scalars['Int']>;
  type_save?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CambiarContrasenaUsuario?: Maybe<User>;
  CrearSuscripcion?: Maybe<Suscripcion>;
  CrearUsuario?: Maybe<User>;
  CreateActividadesTour?: Maybe<ActividadesTour>;
  CreateBlog?: Maybe<Blog>;
  CreateCategoria?: Maybe<Categoria>;
  CreateCategoriaBlog?: Maybe<CategoriaBlog>;
  CreateCrucero?: Maybe<Crucero>;
  CreateHorarioTour?: Maybe<HorarioTour>;
  CreateImage?: Maybe<Imagenes>;
  CreateIncluyeTour?: Maybe<IncluyeTour>;
  CreateLunaMiel?: Maybe<LunaMiel>;
  CreateOrdenTour?: Maybe<OrdenTour>;
  CreateTour?: Maybe<Tour>;
  DeleteActividadesTour?: Maybe<Scalars['String']>;
  DeleteBlog?: Maybe<Scalars['String']>;
  DeleteCategoria?: Maybe<Scalars['String']>;
  DeleteCategoriaBlog?: Maybe<Scalars['String']>;
  DeleteCrucero?: Maybe<Scalars['String']>;
  DeleteHorarioTour?: Maybe<Scalars['String']>;
  DeleteImage?: Maybe<Scalars['String']>;
  DeleteIncluyeTour?: Maybe<Scalars['String']>;
  DeleteLunaMiel?: Maybe<Scalars['String']>;
  DeleteSuscripcion?: Maybe<Scalars['String']>;
  DeleteTour?: Maybe<Scalars['String']>;
  DeleteUsuario?: Maybe<Scalars['String']>;
  RecuperarContraUsuario?: Maybe<Scalars['String']>;
  UpdateActividadesTour?: Maybe<ActividadesTour>;
  UpdateBlog?: Maybe<Blog>;
  UpdateCategoria?: Maybe<Categoria>;
  UpdateCategoriaBlog?: Maybe<CategoriaBlog>;
  UpdateCrucero?: Maybe<Crucero>;
  UpdateDepartamento?: Maybe<Departamento>;
  UpdateEstadoPasaje?: Maybe<Pasajes>;
  UpdateHorarioTour?: Maybe<HorarioTour>;
  UpdateImage?: Maybe<Imagenes>;
  UpdateIncluyeTour?: Maybe<IncluyeTour>;
  UpdateLunaMiel?: Maybe<LunaMiel>;
  UpdateOrdenTour?: Maybe<OrdenTour>;
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


export type MutationCreateActividadesTourArgs = {
  input?: InputMaybe<ActividadesTourInput>;
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


export type MutationCreateIncluyeTourArgs = {
  input?: InputMaybe<IncluyeTourInput>;
};


export type MutationCreateLunaMielArgs = {
  input?: InputMaybe<LunaMielInput>;
};


export type MutationCreateOrdenTourArgs = {
  input?: InputMaybe<OrdenTourInput>;
  input1?: InputMaybe<MercadoPagoInput>;
};


export type MutationCreateTourArgs = {
  input?: InputMaybe<TourInput>;
};


export type MutationDeleteActividadesTourArgs = {
  input?: InputMaybe<ActividadesTourInput>;
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


export type MutationDeleteIncluyeTourArgs = {
  input?: InputMaybe<IncluyeTourInput>;
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


export type MutationUpdateActividadesTourArgs = {
  input?: InputMaybe<ActividadesTourInput>;
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


export type MutationUpdateDepartamentoArgs = {
  input?: InputMaybe<DepartamentoInput>;
};


export type MutationUpdateEstadoPasajeArgs = {
  input?: InputMaybe<PasajesInput>;
};


export type MutationUpdateHorarioTourArgs = {
  input?: InputMaybe<HorarioTourInput>;
};


export type MutationUpdateImageArgs = {
  input?: InputMaybe<ImagenesInput>;
};


export type MutationUpdateIncluyeTourArgs = {
  input?: InputMaybe<IncluyeTourInput>;
};


export type MutationUpdateLunaMielArgs = {
  input?: InputMaybe<LunaMielInput>;
};


export type MutationUpdateOrdenTourArgs = {
  input?: InputMaybe<OrdenTourInput>;
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

export type OrdenTour = {
  __typename?: 'OrdenTour';
  Pasajes?: Maybe<Array<Maybe<Pasajes>>>;
  User?: Maybe<User>;
  descuento?: Maybe<Scalars['String']>;
  estadoOrdenTour?: Maybe<Scalars['String']>;
  fechaCompra?: Maybe<Scalars['String']>;
  fechaReserva?: Maybe<Scalars['String']>;
  nroOperacion?: Maybe<Scalars['String']>;
  ordenTourId?: Maybe<Scalars['Int']>;
  tipoPago?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Float']>;
};

export type OrdenTourInput = {
  PasajesInput?: InputMaybe<Array<InputMaybe<PasajesInput>>>;
  descuento?: InputMaybe<Scalars['String']>;
  estadoOrdenTour?: InputMaybe<Scalars['String']>;
  horarioTourId?: InputMaybe<Scalars['Int']>;
  nroOperacion?: InputMaybe<Scalars['String']>;
  ordenTourId?: InputMaybe<Scalars['Int']>;
  tipoPago?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
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

export type Pasajes = {
  __typename?: 'Pasajes';
  Tour?: Maybe<Tour>;
  apellidosVisitante?: Maybe<Scalars['String']>;
  edadVisitante?: Maybe<Scalars['String']>;
  estadoPasaje?: Maybe<Scalars['String']>;
  fechaReserva?: Maybe<Scalars['String']>;
  nombresVisitante?: Maybe<Scalars['String']>;
  pasajeId?: Maybe<Scalars['Int']>;
  precioTour?: Maybe<Scalars['Float']>;
  tituloTour?: Maybe<Scalars['String']>;
};

export type PasajesInput = {
  apellidosVisitante?: InputMaybe<Scalars['String']>;
  edadVisitante?: InputMaybe<Scalars['String']>;
  estadoPasaje?: InputMaybe<Scalars['String']>;
  fechaReserva?: InputMaybe<Scalars['String']>;
  nombresVisitante?: InputMaybe<Scalars['String']>;
  pasajeId?: InputMaybe<Scalars['Int']>;
  precioTour?: InputMaybe<Scalars['Float']>;
  tituloTour?: InputMaybe<Scalars['String']>;
  tourId?: InputMaybe<Scalars['Int']>;
};

export type Provincia = {
  __typename?: 'Provincia';
  DeparCodi?: Maybe<Scalars['Int']>;
  DeparNom?: Maybe<Scalars['String']>;
  ProvCodi?: Maybe<Scalars['ID']>;
  ProvNom?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  GetActividadesTour?: Maybe<Array<ActividadesTour>>;
  GetAllBlog?: Maybe<GetAllBlog>;
  GetAllBlogCategoria?: Maybe<GetAllBlog>;
  GetAllCategoriaBlog?: Maybe<Array<Maybe<CategoriaBlog>>>;
  GetAllCrucero?: Maybe<GetAllCrucero>;
  GetAllLunaMiel?: Maybe<GetAllLunaMiel>;
  GetAllOrdenTour?: Maybe<GetAllOrdenTour>;
  GetAllOrdenTourUser?: Maybe<GetAllOrdenTour>;
  GetAllPasajes?: Maybe<Array<Maybe<Pasajes>>>;
  GetAllSuscripciones?: Maybe<GetAllSuscripciones>;
  GetAllTarjetaUsuario?: Maybe<Array<TarjetasUsuarios>>;
  GetAllTour?: Maybe<GetAllTour>;
  GetAllUsers?: Maybe<GetAllUsers>;
  GetBusquedaAvanzadaTour?: Maybe<GetAllTour>;
  GetCategoria?: Maybe<Array<Maybe<Categoria>>>;
  GetCategoriaCrucero?: Maybe<GetAllCrucero>;
  GetCategoriaLunaMiel?: Maybe<GetAllLunaMiel>;
  GetCategoriaTour?: Maybe<GetAllTour>;
  GetDepartamentos?: Maybe<Array<Departamento>>;
  GetDias?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetExcel?: Maybe<Scalars['String']>;
  GetHorariosTour?: Maybe<Array<Maybe<HorarioTour>>>;
  GetHoras?: Maybe<Array<Maybe<Scalars['String']>>>;
  GetIdOrdenTour?: Maybe<OrdenTour>;
  GetImagenes?: Maybe<Array<Imagenes>>;
  GetIncluyeTour?: Maybe<Array<IncluyeTour>>;
  GetPrecios?: Maybe<Array<Maybe<Scalars['Float']>>>;
  GetProvincias?: Maybe<Array<Provincia>>;
  GetSlugBlog?: Maybe<Blog>;
  GetSlugCategoria?: Maybe<Categoria>;
  GetSlugCategoriaBlog?: Maybe<CategoriaBlog>;
  GetSlugCrucero?: Maybe<Crucero>;
  GetSlugLunaMiel?: Maybe<LunaMiel>;
  GetSlugTour?: Maybe<Tour>;
  GetToursRelacionadosLugar?: Maybe<Array<Maybe<Tour>>>;
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


export type QueryGetAllOrdenTourArgs = {
  estadoOrdenTour?: InputMaybe<Scalars['String']>;
  numberPaginate?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllOrdenTourUserArgs = {
  numberPaginate?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllPasajesArgs = {
  ordenTourId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllSuscripcionesArgs = {
  numberPaginate?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllTarjetaUsuarioArgs = {
  customer_id?: InputMaybe<Scalars['String']>;
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


export type QueryGetBusquedaAvanzadaTourArgs = {
  DeparCodi?: InputMaybe<Scalars['String']>;
  actividades?: InputMaybe<Scalars['String']>;
  categoria_slug?: InputMaybe<Scalars['String']>;
  dias?: InputMaybe<Scalars['String']>;
  fecha_fina?: InputMaybe<Scalars['String']>;
  fecha_ini?: InputMaybe<Scalars['String']>;
  horas?: InputMaybe<Scalars['String']>;
  incluye?: InputMaybe<Scalars['String']>;
  numberPaginate?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  precio_base?: InputMaybe<Scalars['String']>;
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


export type QueryGetDepartamentosArgs = {
  destacado?: InputMaybe<Scalars['String']>;
};


export type QueryGetHorariosTourArgs = {
  anio?: InputMaybe<Scalars['String']>;
  mes?: InputMaybe<Scalars['String']>;
  tourId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetIdOrdenTourArgs = {
  ordenTourId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetProvinciasArgs = {
  DepCode?: InputMaybe<Scalars['String']>;
};


export type QueryGetSlugBlogArgs = {
  slugBlog?: InputMaybe<Scalars['String']>;
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


export type QueryGetToursRelacionadosLugarArgs = {
  DeparCodi?: InputMaybe<Scalars['String']>;
  ProvCodi?: InputMaybe<Scalars['String']>;
};

/** The available directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type TarjetasUsuarios = {
  __typename?: 'TarjetasUsuarios';
  customer_id?: Maybe<Scalars['String']>;
  expiration_month?: Maybe<Scalars['Int']>;
  expiration_year?: Maybe<Scalars['Int']>;
  first_six_digits?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_four_digits?: Maybe<Scalars['String']>;
};

export type Tour = {
  __typename?: 'Tour';
  ActividadesTour?: Maybe<Array<Maybe<ActividadesTour>>>;
  Categoria?: Maybe<Categoria>;
  Departamento?: Maybe<Departamento>;
  IncluyeTour?: Maybe<Array<Maybe<IncluyeTour>>>;
  Provincia?: Maybe<Provincia>;
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
  itinerarioTour?: Maybe<Scalars['String']>;
  keywordsTour?: Maybe<Scalars['String']>;
  noIncluyeTour?: Maybe<Scalars['String']>;
  notasTour?: Maybe<Scalars['String']>;
  nroDias?: Maybe<Scalars['String']>;
  nroHoras?: Maybe<Scalars['String']>;
  politicasTour?: Maybe<Scalars['String']>;
  precioBaseTour?: Maybe<Scalars['Float']>;
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
  ActividadesTour?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  DeparCodi?: InputMaybe<Scalars['String']>;
  IncluyeTour?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ProvCodi?: InputMaybe<Scalars['String']>;
  ciudadTour?: InputMaybe<Scalars['String']>;
  descripcionCortaTour?: InputMaybe<Scalars['String']>;
  descripcionLargaTour?: InputMaybe<Scalars['String']>;
  destacadoTour?: InputMaybe<Scalars['String']>;
  estadoTour?: InputMaybe<Scalars['String']>;
  galeriaTour?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  imagenPrincipalTour?: InputMaybe<Scalars['Int']>;
  imagenSecundariaTour?: InputMaybe<Scalars['Int']>;
  itinerarioTour?: InputMaybe<Scalars['String']>;
  keywordsTour?: InputMaybe<Scalars['String']>;
  noIncluyeTour?: InputMaybe<Scalars['String']>;
  notasTour?: InputMaybe<Scalars['String']>;
  nroDias?: InputMaybe<Scalars['String']>;
  nroHoras?: InputMaybe<Scalars['String']>;
  politicasTour?: InputMaybe<Scalars['String']>;
  precioBaseTour?: InputMaybe<Scalars['Float']>;
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
  celular?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  nombre?: Maybe<Scalars['String']>;
  numDocumento?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
  tipoUsuario?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type UserInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  apiToken?: InputMaybe<Scalars['String']>;
  celular?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  nombre?: InputMaybe<Scalars['String']>;
  numDocumento?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
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

export type GetHorariosTourQueryVariables = Exact<{
  anio?: InputMaybe<Scalars['String']>;
  mes?: InputMaybe<Scalars['String']>;
  tourId?: InputMaybe<Scalars['Int']>;
}>;


export type GetHorariosTourQuery = { __typename?: 'Query', GetHorariosTour?: Array<{ __typename?: 'HorarioTour', horarioTourId?: number | null | undefined, hora?: string | null | undefined, fecha?: string | null | undefined, cupos?: number | null | undefined, precio?: number | null | undefined, estado?: string | null | undefined, tourId?: number | null | undefined } | null | undefined> | null | undefined };


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
export const GetHorariosTourDocument = gql`
    query GetHorariosTour($anio: String, $mes: String, $tourId: Int) {
  GetHorariosTour(anio: $anio, mes: $mes, tourId: $tourId) {
    horarioTourId
    hora
    fecha
    cupos
    precio
    estado
    tourId
  }
}
    `;

/**
 * __useGetHorariosTourQuery__
 *
 * To run a query within a React component, call `useGetHorariosTourQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHorariosTourQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHorariosTourQuery({
 *   variables: {
 *      anio: // value for 'anio'
 *      mes: // value for 'mes'
 *      tourId: // value for 'tourId'
 *   },
 * });
 */
export function useGetHorariosTourQuery(baseOptions?: Apollo.QueryHookOptions<GetHorariosTourQuery, GetHorariosTourQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHorariosTourQuery, GetHorariosTourQueryVariables>(GetHorariosTourDocument, options);
      }
export function useGetHorariosTourLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHorariosTourQuery, GetHorariosTourQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHorariosTourQuery, GetHorariosTourQueryVariables>(GetHorariosTourDocument, options);
        }
export type GetHorariosTourQueryHookResult = ReturnType<typeof useGetHorariosTourQuery>;
export type GetHorariosTourLazyQueryHookResult = ReturnType<typeof useGetHorariosTourLazyQuery>;
export type GetHorariosTourQueryResult = Apollo.QueryResult<GetHorariosTourQuery, GetHorariosTourQueryVariables>;