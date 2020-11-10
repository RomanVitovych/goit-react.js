import React, { Component } from 'react';
import Spinner from '../Components/Module_5-6/Spinner';
import Notification from '../Components/Module_5-6/Notification';
import ArticleList from '../Components/Module_5-6/ArticleList';
import SearchForm from '../Components/Module_5-6/SearchForm';
import articlesApi from '../services/articlesApi';
// import Modal from '../Components/Module_5-6/Modal';
// import Clock from '../Components/Module_5-6/Clock';
// import Tabs from '../Components/Module_5-6/Tabs';
// import tabs from '../Components/Module_5-6/tabs.json';

class App extends Component {

    state = {
        articles: [],
        loading: false,
        error: null,
        searchQuery: '',
        page: 0,
    }

    componentDidUpdate(prevProps, prevState) {
        const prevQuery = prevState.searchQuery;
        const nextQuery = this.state.searchQuery;
        if (prevQuery !== nextQuery) {
            this.fetchArticles();
        }
    }
    
    fetchArticles = () => {
        const {searchQuery, page} = this.state;
        this.setState({loading: true});
        articlesApi
            .fetchArticlesWithQuery(searchQuery, page)
            .then(articles => this.setState(prevState => ({
                articles: [...prevState.articles, ...articles], 
                page: prevState.page + 1})),)
            .catch(error => this.setState({error}))
            .finally(() => this.setState({loading: false}));
    }

    handleSearchFormSubmit = (query) => {
        this.setState({searchQuery: query, page: 0, articles: []})
    }

    render() {
        const {articles, loading, error} = this.state;
        return(
            <>
                <SearchForm onSubmit = {this.handleSearchFormSubmit} />
                {error && <Notification message = {`Whoops, something went wrong: ${error.message}`} />}
                {articles.length > 0 && <ArticleList articles = {articles} />}
                {loading && <Spinner message = 'Loading...' />}
                {articles.length > 0 && !loading &&  (
                <button type = 'button' onClick = {this.fetchArticles} >Load more...</button>)}
            </>
        )
    }





    // // ========== MODAL ==========
    // state =  {
    //     showModal: false,
    // }
    // toggleModal = () => {
    //     this.setState(state => ({showModal: !state.showModal}))
    // }

    // render() {
    //     // const {showModal} = this.state
    //     return (
    //         <div>

    //             {/* ========== MODAL ========== */}
    //             {/* <div>
    //                 <button 
    //                 type = 'button' 
    //                 onClick = {this.toggleModal} >
    //                 {showModal ? 'Hide' : 'Show'} Modal
    //                 </button>               
    //                 {showModal && (
    //                 <Modal onClose = {this.toggleModal} >
    //                     <h2>Modal title</h2>
    //                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab molestiae adipisci architecto, veniam veritatis minus modi! Impedit porro asperiores ullam quidem quaerat, hic odit quisquam libero perspiciatis, laudantium facilis possimus ratione sit facere at voluptate soluta nulla dicta debitis? Incidunt sequi commodi exercitationem corporis quaerat eligendi molestias. Vero, recusandae officiis.</p>
    //                     <button 
    //                     type = 'button' 
    //                     onClick = {this.toggleModal} >
    //                     Close button
    //                     </button>
    //                 </Modal>
    //                 )} 
    //             </div> */}
                            
    //             {/* ========== CLOCK ========== */}
    //             {/* <div>
    //                 <button 
    //                 type = 'button' 
    //                 onClick = {this.toggleModal} >
    //                 {showModal ? 'Hide' : 'Show'} Clock
    //                 </button>
    //                 {showModal && <Clock />}
    //             </div> */}

    //             {/* ========== TABS ========== */}
    //             {/* <div>
    //                 <Tabs items = {tabs} />
    //             </div> */}
              
    //         </div>
    //     );
    // }
}

export default App;