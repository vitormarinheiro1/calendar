import styles from "./Card.module.scss";

interface Props {
    children: string
}

const Card = ({ children }: Props) => {
    return(
        <div className={styles.Card}>
            {children}
        </div>
    )
}


export default Card;