import styles from './BreadCrumbs.module.scss';

import React from 'react'

const BreadCrumbs = ({ title }: { title: string }) => {
    return (
        <div className={styles.bread_crumbs} >
            <h2>{title}  /</h2>
        </div>
    )
}

export default BreadCrumbs
