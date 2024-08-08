import React, { useState,useEffect } from 'react'
// import { WhatsappShareButton,WhatsappIcon } from 'react-share';
import { RWebShare } from "react-web-share";
import './styles.css';
const  Newsitem =(props)=> {
    const imgarr = [
        'https://cdn-icons-png.flaticon.com/128/9784/9784121.png',
        'https://cdn-icons-png.flaticon.com/128/7576/7576474.png'
    ]
    const initialCount = parseInt(localStorage.getItem(props.newsUrl)) || 0;
    let [toggle,toggleFunc] = useState(0);
    let [count,countFunc] = useState(initialCount);
    let [click,clickFunc] = useState({
        click:imgarr[0]
    });

    
  const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        // Update localStorage whenever count changes
        localStorage.setItem(props.newsUrl, count);
      }, [count, props.newsUrl]);

    useEffect(()=>{
        if(count>=1)
        {
            clickFunc({
                click:imgarr[1]
            })
        }
    },[count])

    
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
                
                if(count!==1)
                {
                    countFunc(count+=1)
                    localStorage.setItem(props.newsUrl,count)
                }
                
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
    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
      };
    
      const closeFullScreen = () => {
        setSelectedImage(null);
      };
    let {title,desc,imgurl,newsUrl,author,published} = props;
    return (
    <>
    <div className="card" style={{backgroundColor:props.theme==='dark'?'rgb(13 26 32)':'white',color:props.theme==='dark'?'rgb(230 230 230)':'rgb(3 39 55)'}}>
        <img src={imgurl} className="card-img-top" alt="img" style={{cursor: 'pointer',padding:'10px'}}
              onClick={() => handleImageClick(imgurl)}/>
            {selectedImage && (
        <div className="full-screen-overlay" onClick={closeFullScreen}>
          <div className="full-screen-image">
            <img src={selectedImage} alt="full-screen" />
          </div>
        </div>
      )}
            <div className="card-body" >
                <h5 className="card-title" >{title}...</h5>
                <p className="card-text">{desc}...</p>
                <a href={newsUrl} className="btn btn-primary" target="_blank" rel="noreferrer">Read More</a>
                <p className="card-text"><small>Written By <i><strong>{author?author:'Unknown'} on {new Date(published).toUTCString()}</strong></i></small></p>
            </div>
            <div className='container m-3'>
            <figure>
            <img src={click.click} className='img-fluid' alt='like' style={{width:'30px',height:'30px',cursor:'pointer'}} onDoubleClick ={likeFunc}/>
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
                        <img src={props.theme==='light'?'https://cdn-icons-png.flaticon.com/128/2550/2550303.png':'https://cdn-icons-png.flaticon.com/128/5685/5685190.png'} alt='share icon' width={'30px'} height={'30px'} style={{marginTop:'-140px',marginLeft:'50px',cursor:'pointer'}}></img>
                        
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
