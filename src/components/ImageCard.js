import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {span: 0}
        this.imageRef= React.createRef;
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const span = Math.ceil(height / 150);
        this.setState({span})
    }
    render(){
        return (
            <div >
                <img 
                    alt={this.props.image.alt_description}
                    src={this.props.image.urls.regular}
                    ref={this.imageRef}
                    />
            </div>
        );
    }
}

export default ImageCard;