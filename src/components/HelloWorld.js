
import HogCard from './HogCard'

import React from 'react'



class HelloWorld extends React.Component {

  render() {
    // console.log(this.state.hogs)
    return (
      
      <div>
        <h1>Hello World</h1>
        {this.props.hogs.map((hog, index) => <HogCard key={index} {...hog} />)}
      </div>
    );
  }
}

export default HelloWorld;
