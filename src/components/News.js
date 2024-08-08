  import React, { useEffect, useState } from 'react'
  import Newsitem from './Newsitem'
  import Spinner from './Spinner';
  import PropTypes from 'prop-types'
  import InfiniteScroll from 'react-infinite-scroll-component';
  const  News =(props)=>{
    
    const [articles,setArticles] = useState([]);
    const [loading,loadFunc] = useState(true);
    const [page,setPage] = useState(1);
    const [totalRes,setTotalRes] = useState(0);

      const updateNews = async ()=>{
          let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d9a9d692132a481093820c226f66de1a&page=1&pageSize=${props.pageSize}`
          loadFunc(true)
          let data = await fetch(url);
          loading&&<Spinner/>
          let parsedData = await data.json()
          setArticles(parsedData.articles)
          setTotalRes(parsedData.totalResults)
          loadFunc(false)
      }

      useEffect(()=>{
        updateNews();

      },[props.category])

      const fetchMoreData = async ()=>{
        setPage(page+1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d9a9d692132a481093820c226f66de1a&page=${!(page+1>Math.ceil(totalRes/5))?page+1:-1}&pageSize=${props.pageSize}`
        console.log(page)
        loadFunc(true)
        let data = await fetch(url)
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalRes(parsedData.articles);
        loadFunc(false)
      };
      
      return (
        <>
        {articles.length>0? <div className='container my-5'>
            <center><h2 className='my-5'>Top Headlines</h2></center>
            <h3>{(props.category).toUpperCase()} NEWS</h3>
            <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalRes}
            loader={loading && <Spinner/>}>
                <div className='row'>
                      {articles.map((ele)=>{
                          return <div className='col-md-4 my-3' key={ele.url} >
                                    <Newsitem title={ele.title?ele.title.slice(0,30):" "} desc={ele.description?ele.description.slice(0,80):" "} imgurl={!ele.urlToImage?"https://srinagar.nic.in/wp-content/themes/district-theme-6/images/news.jpg":ele.urlToImage} theme={props.theme}  newsUrl={ele.url} author={ele.author} published = {ele.publishedAt} likes = {localStorage.getItem(ele.url)}/>
                                </div>
                      })}
                </div>
            </InfiniteScroll>
          
        </div>
        :<div className='container text-center' style={{width:'100%',height:'100%',position:'relative'}}><h3>No stories</h3></div>
        }

        </>
      )
    }
  export default News
  News.defaultProps={
    pageSize:5,
    country:'in',
    category:'general'
  }
  News.propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string

  }