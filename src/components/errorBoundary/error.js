import React from 'react';
import {Redirect} from 'react-router-dom'

class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    };
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
    render() {
      if (this.state.hasError) {
        return (
            <Redirect to="/"/>
        )
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;