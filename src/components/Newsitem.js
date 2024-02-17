import React, { useState,useEffect } from 'react'
// import { WhatsappShareButton,WhatsappIcon } from 'react-share';
import { RWebShare } from "react-web-share";
const  Newsitem =(props)=> {
    const imgarr = [
        'https://t4.ftcdn.net/jpg/05/54/44/47/240_F_554444785_rVTuHXkRnAEH2GIhcpKlzgx7Qlfi0Mdd.jpg',
        'https://t4.ftcdn.net/jpg/00/96/48/45/240_F_96484587_7lWZQz2UQKWLfiT0CMOyCnQ7OcwSmDzj.jpg'
    ]
    const initialCount = parseInt(localStorage.getItem(props.newsUrl)) || 0;
    let [toggle,toggleFunc] = useState(0);
    let [count,countFunc] = useState(initialCount);
    let [click,clickFunc] = useState({
        click:imgarr[0]
    });

    useEffect(() => {
        // Update localStorage whenever count changes
        localStorage.setItem(props.newsUrl, count);
      }, [count, props.newsUrl]);

    const displayCount =()=>{
        return localStorage.getItem(props.newsUrl) || '0';
    }

   
    const likeFunc = ()=>{
        if(toggle===0)
        {
            toggleFunc(1)
            clickFunc({
                click:imgarr[1]
            })
            countFunc(count+=1)
            localStorage.setItem(props.newsUrl,count)
        }
        else
        {
            toggleFunc(0)
            clickFunc({
                click:imgarr[0]
            })
            countFunc(count-=1)
            localStorage.setItem(props.newsUrl,count)

        }
    }
    let {title,desc,imgurl,newsUrl,author,published} = props;
    return (
    <>
    <div className="card">
        <img src={imgurl} className="card-img-top" alt="img"/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{desc}...</p>
                <a href={newsUrl} className="btn btn-primary" target="_blank" rel="noreferrer">Read More</a>
                <p className="card-text"><small className="text-body-secondary">Written By <i><strong>{author?author:'Unknown'} on {new Date(published).toUTCString()}</strong></i></small></p>
            </div>
            <div className='container m-3'>
            <figure>
            <img src={click.click} className='img-fluid' alt='like' style={{width:'30px',height:'30px'}} onDoubleClick ={likeFunc}/>
            <figcaption>
                <div>
                    <p style={{marginLeft:'10px'}}>{displayCount()}</p>
                    <RWebShare
                        data={{
                            text: "NewsApp-Share-Like",
                            url: newsUrl,
                            title: "NewsApp",
                        }}
                        onClick={() =>
                            console.log("shared successfully!")
                        }
                    >
                        <img src='https://cdn-icons-png.flaticon.com/128/1358/1358023.png' alt='share icon' width={'30px'} height={'30px'} style={{marginTop:'-140px',marginLeft:'50px'}}></img>
                        
                    </RWebShare>
                </div>
            </figcaption>
            </figure>
            </div>
    </div>
    </>
    )
}
export default Newsitem
/*<div className='container'>
        <div id="carouselExample" className="carousel slide border border-1" style={{width:'50rem'}} >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <center>
                    <div className='container'>
                        <div className="card" style={{width:'30rem'}}>
                            <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/" className="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                    </center>
                </div>
                <center>
                <div className="carousel-item">
                    <div className='container my-3'>
                        <div className="card" style={{width:'30rem'}}>
                            <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="/" className="btn btn-primary">Go somewhere</a>
                                </div>
                         </div>
                    </div>
                </div>
                </center>
                <center>
                    <div className="carousel-item">
                        <div className='container my-3'>
                            <div className="card" style={{width:'30rem'}}>
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="/" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
            <button className="carousel-control-prev border border-1" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden"></span>
            </button>
            <button className="carousel-control-next border border-1" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden"></span>
            </button>
        </div>
    </div>*/
