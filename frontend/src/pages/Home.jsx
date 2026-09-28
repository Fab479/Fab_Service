import {Link} from 'react-router-dom';
function Home() {
  return (
    <main>
      <section className="hero">
        <h1 className='aim'>WELCOME</h1> 

        <h3>
          Digital solutions for individuals and businesses.
        </h3>

        <p>
          We provide modern web development and digital services
          designed to help your ideas grow.
        </p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <div className="profile">
            <div className="logo">
            <img src="src/images/logo.jpg" alt="logo" width={350}/>
            </div>
            <fieldset>
              <legend>Profile</legend>
              <p>PROFESSIONAL PROFILE
Motivated and adaptable professional with a strong developing background in Web 
Development, Information Technology, Education, Research, and Information 
Management. Experienced in learning and applying web technologies including HTML, CSS, and JavaScript, with growing knowledge of modern web development concepts such as Node.js, React, UI/UX design, web storage, cookies, JavaScript programming, debugging, and front-end development.
Possesses strong academic research, analytical, communication, documentation, and problem-solving abilities developed through extensive work in education, library and information science, biology education, and technology-related projects. Demonstrates a strong willingness to learn new technologies, solve practical problems, work collaboratively, and adapt to changing professional environments.
Currently seeking an opportunity to build a professional career in Web Development, IT, Technology Support, Digital Services, or a related field, while continuing to develop practical technical expertise and contribute positively to an organisation.
</p>
            </fieldset>
          </div><br/>
        <button>Explore Services</button><br/><br/><br/><br/><br/><br/>
  
      </section>
    </main>
  );
}

export default Home;