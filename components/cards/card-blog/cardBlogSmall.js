import styles from "./styles.module.scss"
import Link from "next/link"

export const CardBlogSmall = ({ item }) => {
  return (
    <div className={styles.cardBlogSmall}>
      <div className={styles.cardBlogSmall_wrapperimg}>
        <div
          style={{
            backgroundImage: "url(" + item.imagenPrincipalBlog?.url + ")",
          }}
          className={styles.cardBlogSmall_wrapperimg_img}
        />
      </div>
      <div className={`${styles.cardBlogSmall_content} py-3 px-4`}>
        <div>
          <h3 className='card-title font-weight-bold my-0 pointer'>
            {item?.tituloBlog}
          </h3>
          <div className='text-secondary my-2' dangerouslySetInnerHTML={{ __html: item?.descripcionLargaBlog.substring(0, 200) }}>
            {/*Descripcion Larga*/}
          </div>
        </div>

        <div className='d-flex justify-content-center '>
          <div className='text-muted'>
            <Link href={`/blog/${item.slugBlog}`}>
              <a className='btn btn-primary'>Ver más </a>
            </Link>
          </div>
        </div>

      </div>
    </div >

  )
}
