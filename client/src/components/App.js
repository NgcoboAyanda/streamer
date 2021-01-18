import React,{Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';


class App extends Component{
    render(){
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={StreamList}/>
                        <Route path="/streams/new" exact component={StreamCreate}/>
                        <Route path="/streams/edit" exact component={StreamEdit}/>
                        <Route path="/streams/show" exact component={StreamShow}/>
                        <Route path="/streams/delete" exact component={StreamDelete}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
};

export default App;