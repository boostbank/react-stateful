import React from 'react';

class PartitionProvider extends React.Component{
    render() {
        return (
            <div>
               {this.props.children}
            </div>
        );
    }
}

export default PartitionProvider;