import styles from "./styles.module.scss"

export const CardBlogSmall = ({ item }) => {
    return (
        <div className={styles.cardBlogSmall}>
            <div
                style={{
                    backgroundImage: "url(" + item.imagenPrincipalBlog?.url + ")",
                }}

                className={styles.cardBlogSmall_img} />
        </div>
    )
}
