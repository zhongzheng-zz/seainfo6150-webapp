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
          <div>
            <img className={styles.picbox} alt={this.props.title} src={this.props.url}/>
          </div>
      </div>

      
    );
  }

}

export default ArticleImage;