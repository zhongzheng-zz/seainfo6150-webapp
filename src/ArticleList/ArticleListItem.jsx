import React from 'react';
import SlugButton from "./SlugButton";
import styles from "./ArticleListItem.module.css";


class ArticleListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <section className={styles.box}>
        <h2 className={styles.header}>{this.props.article.title}</h2>
        <p>{this.props.article.shortText}</p>
        <time className={styles.dateTime} dateTime={this.props.article.pubYear}>{this.props.article.pubDate}</time>
        <SlugButton slug={this.props.article.slug} buttonText={this.props.article.author}>
        </SlugButton>
        </section>
      </div>
    );
  };
}

export default ArticleListItem;