import React from 'react';

class Life extends React.Component {
    constructor(props) {
      super(props);
      this.state = {topic: "Life Cycle"};
    }
    render() {
      return (
        <div>
          <h1>Component Life Cycle</h1>
        </div>
      );
    }
  }
  