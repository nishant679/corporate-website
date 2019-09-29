import React from 'react';
import styles from './BlogPage.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RelatedArticleCard from "./RelatedArticleCard";

function RelatedArticles({relatedArticles}) {
    return (
        <div className={styles.relatedContainer}>
            <div className={classNames(styles.row, styles.relatedArticlesTitle)}>
                Related Articles
            </div>
            <div className="row">
                {
                    relatedArticles.map(article => (
                        <div className="col-md-4">
                            <RelatedArticleCard
                                key={article._id}
                                article={article}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

RelatedArticles.propTypes = {
    relatedArticles: PropTypes.array
};

RelatedArticles.defaultProps = {
    relatedArticles: []
}

export default RelatedArticles;