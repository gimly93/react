import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Search from './components/search';
import VideoList from './components/video-list';

const API_KEY = 'AIzaSyCJe4SNf96KT8rqMOxVSpj2VN0W_Ge2dyU';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };
        YTSearch({key: API_KEY, term: 'surfboards'},
             (videos) => {
               this.setState({ videos })
            });
    }

    render() {
        return (
            <div>
                <Search />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    };
}
;

ReactDOM.render(
    <App />
    , document.querySelector('.container'));
