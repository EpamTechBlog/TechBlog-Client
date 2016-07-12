import React from 'react';
import NavigationComponent from '../../core/components/navigation.component.jsx';
import SingleArticlePageComponent from '../components/singleArticlePage.component.jsx';
import SidebarComponent from '../../core/components/sidebar.component.jsx';
import * as articleActions from '../actions/article.action.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

require('../../../styles/article.style.css');

class SelectedArticleComponent extends React.Component{

  constructor() {
    super();
    this.state = { article : {}};
  }
  componentDidMount(){
    axios.get('http://localhost:8000/articles/' + this.props.params.id ).then((data) => {

      this.setState({ article :  data.data});

    }).catch((err) => console.log(err));
  }

  render() {

    return (
      <div>
        <div className='frame'>
          <NavigationComponent />
          <SidebarComponent {...this.props}/>
        </div>

        <div className='articleContent'>
          <SingleArticlePageComponent {...this.props} article = {this.state.article}/>
        </div>
      </div>
      )
  }
}


const mapStateToProps = (store) => {
  return {
    topic: store.topic,
    articles: store.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(articleActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedArticleComponent)


