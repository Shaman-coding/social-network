import React from 'react'
import P from './News.module.css';

const News = (props) => {

   
    let NewsBD = [
        {id: 1, news: 'Hou learn English at 6 month ?',  photo: 'data:image/png;base64,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' },
        {id: 2, news: "Today i'm understood how i need work for my dream", photo: 'https://socialconnext.sgp1.digitaloceanspaces.com/yot/wp-content/uploads/2020/07/22115221/GettyImages-459146393-1024x717-1.jpg' },
        {id: 3, news: "what is live for me ?", photo: 'https://www.lovethispic.com/uploaded_images/36378-What-Is-Life.jpg' },
        {id: 4, news: "I bought a car 'lamborghini aventador and i'm so happy", photo: 'https://i.ytimg.com/vi/At2yC8dc8o4/maxresdefault.jpg'},
        {id: 5, news: 'live in USA', photo: 'https://www.mooxye.com/blog/wp-content/uploads/2018/04/qwer-1-750x374.png' }
    ]



    const NewsPost = (props) => {
        return (
            <div className={P.NewsPost}>
               <div className={P.news}>{props.news}</div> 
               <div className={P.photo}><img src={props.photo} alt='So cool photo'/></div> 
            </div>
        )
    }

    let PostEltment = NewsBD.map(p => <NewsPost news={p.news} photo={p.photo} id={p.id}/>)



    return (
         <div className='News'>
             <h2 className={P.title}>About live Style </h2>
             
            <div className='Posts'>
                {PostEltment}  
            </div>

         </div>   
    )


    
}

export default News;