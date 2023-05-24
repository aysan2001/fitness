import Header from '../../components/Header'
import HeaderImage from '../../img/header_bg_1.jpg'
import StoryImage from '../../img/about1.jpg'
import VisionImage from '../../img/about2.jpg'
import MissionImage from '../../img/about3.jpg'
import './about.css'

const About = () => {
  return (
   <>
   
   <Header title="About Us"  image={HeaderImage} >

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quisquam nobis harum non animi quis possimus labore minima. Provident, maxime?
   </Header>

   <section className='about__story'>
     <div className="container about__story-container">
      <div className="about__section-image">
        <img src={StoryImage} alt="" />
      </div>

      <div className="about__section-content">
        <h1>Our Story</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe eligendi aliquid cumque dolor, iusto adipisci, sequi accusantium laboriosam voluptate blanditiis nobis nemo consequuntur deleniti dolorum in maiores hic animi nesciunt numquam corporis! Repellendus sit odio optio minus non, inventore numquam!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam illum quaerat suscipit necessitatibus eius molestias accusantium. Voluptatum atque quam quia veniam enim. Enim, laboriosam animi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit itaque fugit at corrupti qui unde quidem?
        </p>
      </div>
     </div>
   </section>








   <section className='about__vision'>
     <div className="container about__vision-container">

      <div className="about__section-content">
        <h1>Our Vision</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe eligendi aliquid cumque dolor, iusto adipisci, sequi accusantium laboriosam voluptate blanditiis nobis nemo consequuntur deleniti dolorum in maiores hic animi nesciunt numquam corporis! Repellendus sit odio optio minus non, inventore numquam!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam illum quaerat suscipit necessitatibus eius molestias accusantium. Voluptatum atque quam quia veniam enim. Enim, laboriosam animi.
        </p>
      
      </div>

      <div className="about__section-image">
        <img src={VisionImage} alt="" />
      </div>

     </div>
   </section>






   <section className='about__mission'>
     <div className="container about__mission-container">
      <div className="about__section-image">
        <img src={MissionImage} alt="" />
      </div>

      <div className="about__section-content">
        <h1>Our Mission</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe eligendi aliquid cumque dolor, iusto adipisci, sequi accusantium laboriosam voluptate blanditiis nobis nemo consequuntur deleniti dolorum in maiores hic animi nesciunt numquam corporis! Repellendus sit odio optio minus non, inventore numquam!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam illum quaerat suscipit necessitatibus eius molestias accusantium. Voluptatum atque quam quia veniam enim. Enim, laboriosam animi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit itaque fugit at corrupti qui unde quidem?
        </p>
      </div>
     </div>
   </section>
   
   
   </>
  )
}

export default About