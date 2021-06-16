import React, { Component } from 'react';
import SearchContext from './searchContext';

import SearchBar from './search';
import Lists from './lists';

import { getLists } from '@/services/search';
import Consumer from './consumer';

import LazyLoad from '@/components/LazyLoad';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      lists: []
    };
  }

  handleDispatch = async (action)=>{
    switch(action.type){
      case 'TEXT':
        return this.setState({
          text: action.payload
        });
      case 'LISTS':
        const res = await getLists(action.payload);
        return this.setState({
          lists: res.lists,
        });
      default:
        return;
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <SearchContext.Provider
          value={{
            state: this.state,
            dispatch: this.handleDispatch,
          }}
        >
          <SearchBar />
          {/* <Lists /> */}
          <LazyLoad component={import('./lists')} />
          <Consumer />
        </SearchContext.Provider>
      </div>
    );
  }
}
