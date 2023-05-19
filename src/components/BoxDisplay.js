import React from 'react';
import styles from './BoxDisplay.module.css';

const BoxDisplay = (props) => {
    const { boxList } = props ;
    return (
        <div className={styles.boxContainer}>
        {
            boxList.map( (box, index) =>
                <div key={ index} style={{
                    display: "inline-block",
                    backgroundColor: box.color,
                    height: box.height,
                    width: box.width}}>
                </div>
            )
        }
        </div>
    );
}

export default BoxDisplay;
