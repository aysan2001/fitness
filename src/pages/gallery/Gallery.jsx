import Header from '../../components/Header';
import HeaderImage from '../../img/header_bg_3.jpg'
import './galery.css';




const Gallery = () => {

  const galleryLength = 15;
  const images = []

  for(let i=1; i <= galleryLength; i++) {
    images.push(require(`../../img/gallery${i}.jpg`))
  }

  


  return (
   <>
   <Header title="Our Gallery" image={HeaderImage}>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, tenetur nemo assumenda? Delectus consequuntur cumque fugiat totam?

   </Header>

   <section className='gallery'>
    <div className="container gallery__container">
      {
        images.map((image,index) =>{
          return <article key={index}>
            <img src={image} alt={`Gallery Image ${index + 1}`} />
           </article>
        })

      }
    </div>
   </section>
   
   
   </>
  )
}

export default Gallery