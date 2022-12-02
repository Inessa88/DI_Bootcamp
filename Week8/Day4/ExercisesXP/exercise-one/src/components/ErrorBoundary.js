import React from 'react'

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(hasError) {
    console.log(hasError);
    this.setState({hasError:hasError})
  }

  render(){
    console.log(this.state.hasError);
    if(this.state.hasError){
      return (
        <div>
          An error has occured
        </div>
      )
    }
    return this.props.children
  }
}
export default ErrorBoundary
