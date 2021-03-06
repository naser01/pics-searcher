import React, { Component } from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends Component {
    state={
        images: []
    }
    
    async onSearchSubmit (term) {
        const response = await unsplash.get('/search/photos', {params: {query: term}});
        this.setState({images: response.data.results})           
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={(term) => this.onSearchSubmit(term)}/>
                Found: {this.state.images.length}images
                <ImageList  images={this.state.images}/>
            </div>
        );
    }
};

export default App;