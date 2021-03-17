import React from 'react';

interface ListProps {
  type : string
};

class List extends React.Component<ListProps> {
  render() {
    let title : string = "Favourite " + this.props.type;
    if (this.props.children instanceof Array) {
      title += "s";
    }

    return (
      <div>
        <h1>{title}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}

export default List;