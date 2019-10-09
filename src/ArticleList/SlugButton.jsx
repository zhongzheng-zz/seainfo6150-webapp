import React from 'react';
import styles from "./SlugButton.module.css"

class SlugButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
    render() {
    return (
        <button className={styles.button} onClick={()=>alert(this.props.slug)}>{this.props.buttonText}</button>
    );
  }

}

export default SlugButton;