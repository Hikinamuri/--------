/* eslint-disable @typescript-eslint/no-var-requires */
const styles = require('./style.module.css');

interface MassItems {
    ItemName: string;
    ItemDescription: string;
}

interface Props {
    massItems: MassItems;
}

export const InfoItem: React.FC<Props> = ({ massItems }) => {
    return (
        <div className={styles.item_name}>
            <h2>{massItems.ItemName}</h2>
            <span>{massItems.ItemDescription}</span>
        </div>
    )
}