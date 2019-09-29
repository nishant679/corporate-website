import React from "react";
import styles from './BlogPage.module.scss';
import {withRouter} from "react-router-dom";

function RelatedArticleCard({article, history}) {
    return (
        <div onClick={() => history.push(`/ideas/${article.slug}`)} className={styles.relatedCard}>
            <div className={styles.newsRoomText}>
                <h4>Newsroom</h4>
            </div>
            <div className={styles.relatedCardImage}>
                <img src={article.coverImage} style={{width: '100%'}}/>
            </div>
            <div className={styles.relatedCardTitle}>
                {article.title}
            </div>
        </div>
    )
}

export default withRouter(RelatedArticleCard);