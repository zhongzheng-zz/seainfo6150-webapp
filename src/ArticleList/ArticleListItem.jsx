import React from 'react';
import SlugButton from "./SlugButton";
import styles from "./ArticleListItem.module.css";
import ArticleImage from "./ArticleImage";


class ArticleListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <section className={styles.box}>
        <ArticleImage url={this.props.article.image._url} title={this.props.article.title}>
        </ArticleImage>
        <p className={styles.text}>{this.props.article.shortText}</p>
        <time className={styles.dateTime} dateTime={this.props.article.pubYear}>{this.props.article.pubDate}</time>
        <SlugButton slug={this.props.article.slug} buttonText={this.props.article.author}>
        </SlugButton>
        </section>  
    );
  };
}

export default ArticleListItem;