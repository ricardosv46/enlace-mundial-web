import Styles from "./styles.module.scss";

export const LayoutCards = ({ children }) => (
  <section className={Styles.wrapperLayout}>{children}</section>
);
