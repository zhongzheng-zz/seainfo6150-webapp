import React from 'react';
import styles from "./ArticleImage.module.css";

class ArticleImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
          <img className={styles.picbox} alt="" src={this.props.url}/>
          <h2 className={styles.header}>{this.props.title}</h2>
      </div>

      
    );
  }

}

export default ArticleImage;