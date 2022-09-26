import Latest from '../components/latest/Item';
import latest from '../components/latest/item.json';
import Project from '../components/projects/Item';
import projects from '../components/projects/item.json';
import Experience from '../components/experience/Item';
import experiences from  '../components/experience/item.json';

import Skil from '../components/skils/Item';



export default function Home() {
  
  
  return (
      <>
        <header className="header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col">
                <img className="profile-image img-fluid float-start rounded-circle" src="assets/images/profile.jpeg" alt="profile image" />
                <div className="profile-content">
		                <h1 className="name">Adipati Arya</h1>
		                <h2 className="desc">Backend Developer</h2>   
		                <ul className="social list-inline">
		                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
		                    <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
		                    <li className="list-inline-item"><a href="#"><i className="fab fa-github-alt"></i></a></li>    
		                    <li className="list-inline-item"><a href="#"><i className="fab fa-stack-overflow"></i></a></li>   
		                    <li className="list-inline-item last-item"><a href="#"><i className="fab fa-codepen"></i></a></li>                
		                </ul> 
		            </div>
              </div>
              <div className="col-12 col-md-auto">
		            <a className="btn btn-cta-primary" href="https://wa.link/uoo7d2"><i className="fas fa-paper-plane"></i> Kontak Saya</a>        
              </div>
            </div>
          </div>
        </header>
        <div className="container sections-wrapper py-5">
          <div className="row">
            <div className="primary col-lg-8 col-12">
              <section className="about section">
                <div className="section-inner shadow-sm rounded">
                  <h2 className="heading">About Me</h2>
                  <div className="content">
                    <p>Write a brief intro about yourself. It's a good idea to include your personal interests and hobbies as well. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec. Commodo ligula eget dolor. Aenean massa.</p>     
                  </div>
                </div>
              </section>
              <section className="latest section">
                <div className="section-inner shadow-sm rounded">
                  <h2 className="heading">Latest Project</h2>
                  <div className="content">
                    <div className="item featured text-center">
                      <div className="featured-image has-ribbon">
                        <a href="#">
                          <Image className="img-fluid project-image rounded shadow-sm" src="assets/images/projects/project-featured.jpg" alt="project name" />
                        </a>
                        <div className="ribbon">
                            <div className="text">New</div>
                        </div>
                      </div>
                      <h3 className="title mb-3"><a href="#">Launch - The perfect Bootstrap template for SaaS products</a></h3>
                      <div className="desc text-start">
                        <p>You can promote your main project here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                      </div>
                      <a className="btn btn-cta-secondary" href="#"><i className="fas fa-thumbs-up"></i> Back my project</a> 
                    </div>
                    <hr className="divider" />
                    {
                      latest.map(function(object, i){
                        return (
                          <Latest key={i} data={object} />
                        )
                      })
                    }
                  </div>
                </div>
              </section>
              <section className="projects section">
                <div className="section-inner shadow-sm rounded">
                  <h2 className="heading">Other Projects</h2>
                  <div className="content">
                  {
                      projects.map(function(object, i){
                        return (
                          <Project key={i} data={object} />
                        )
                      })
                    }

                    <a className="btn btn-cta-secondary" href="#">More on GitHub <i className="fas fa-chevron-right pt-1"></i></a>  
                  </div>
                </div>
              </section>
              <section className="experience section">
                <div className="section-inner shadow-sm rounded">
                  <h2 className="heading">Work Experience</h2>
                  <div className="content">
                    {
                       experiences.map(function(object, i){
                        return (
                          <Experience key={i} data={object} />
                        )
                      })
                    }

                  </div>
                  
                </div>
              </section>
              <section className="github section">
                <div className="section-inner shadow-sm rounded">
                  <h2 className="heading">My GitHub</h2>
                  <p>You can embed your GitHub contribution graph calendar using IonicaBizau's <a href="#">GitHub Calendar</a> widget. </p>
                  
                  <div id="github-graph" className="github-graph"></div>
                  <p>You can also embed your GitHub activities using Casey Scarborough's <a href="https://github.com/caseyscarborough/github-activity">GitHub Activity Stream</a> widget.</p>
                  <div id="feed" className="ghfeed"></div>
                </div>
              </section>
            </div>
            <div className="secondary col-lg-4 col-12">
              <aside className="info aside section">
                <div className="section-inner shadow-sm rounded">
                    <h2 className="heading sr-only">Basic Information</h2>
                    <div className="content">
                        <ul className="list-unstyled">
                            <li><i className="fas fa-map-marker-alt"></i><span className="sr-only">Location:</span>Kab Cilacap, ID</li>
                            <li><i className="fas fa-envelope"></i><span className="sr-only">Email:</span><a href="#">aryaadipati2@gmail.com</a></li>
                            <li><i className="fas fa-link"></i><span className="sr-only">Website:</span><a href="#">https://adipatiarya.site</a></li>
                        </ul>
                    </div>
                </div>             
              </aside>
              <aside className="skills aside section">
                <div className="section-inner shadow-sm rounded">
                  <h2 className="heading">Skills</h2>
                  <div className="content">
                    <p className="intro">Intro about your skills goes here. Keep the list lean and only show your primary skillset. You can always provide a link to your Linkedin or Github profile so people can get more info there.</p>
                    <div className="skillset">
                      <Skil title="Python &amp; Django" level="Beginner" percent="60"/>
                      <Skil title="Laravel" level="Pro" percent="90"/>
                      <Skil title="Golang" level="Expert" percent="80"/>
                      <p><a className="more-link" href="#"><i className="fas fa-external-link-alt"></i>More on GitHub</a></p> 
                    </div>
                  </div>
                </div>
              </aside>
              <aside className="testimonials aside section">
                <div className="section-inner shadow-sm rounded">
                    <h2 className="heading">Testimonials</h2>
                    <div className="content">
                        <div className="item">
                            <blockquote className="quote">                                  
                                <p><i className="fas fa-quote-left"></i>James is an excellent software engineer and he is passionate about what he does. You can totally count on him to deliver your projects!</p>
                            </blockquote>                
                            <p className="source"><span className="name">Tim Adams</span><br /><span className="title">Curabitur commodo</span></p>                                                             
                        </div>
                        
                        <p><a className="more-link" href="#"><i className="fas fa-external-link-alt"></i>More on Linkedin</a></p> 
                        
                    </div>
                </div>
              </aside>
              <aside className="education aside section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Education</h2>
                        <div className="content">
                            <div className="item">                      
                                <h3 className="title"><i className="fas fa-graduation-cap"></i> MSc Computer Science</h3>
                                <h4 className="university">University College London <span className="year">(2017-2018)</span></h4>
                            </div>
                            <div className="item">
                                <h3 className="title"><i className="fas fa-graduation-cap"></i> BSc Computer Science</h3>
                                <h4 className="university">University of Bristol <span className="year">(2013-2017)</span></h4>
                            </div>
                        </div>
                    </div>
                </aside>
                <aside className="languages aside section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Languages</h2>
                        <div className="content">
                            <ul className="list-unstyled">
                                <li className="item">
                                    <span className="title"><strong>English:</strong></span>
                                    <span className="level">Native Speaker <br className="visible-xs"/><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> </span>
                                </li>
                                <li className="item">
                                    <span className="title"><strong>Indonesia:</strong></span>
                                    <span className="level">Professional Proficiency <br className="visible-sm visible-xs"/><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star-half"></i></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
                <aside className="blog aside section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Latest Blog Posts</h2>
                        <p>You can use Sascha Depold's <a href="https://github.com/sdepold/jquery-rss">Vanilla RSS plugin</a> to pull in your blog post feeds.</p>
                        <div id="rss-feeds" className="content">

                        </div>
                    </div>
                </aside>
                <aside className="list music aside section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Favourite coding music</h2>
                        <div className="content">
                            <ul className="list-unstyled">
                                <li><i className="fas fa-headphones"></i> <a href="#">Etiam hendrerit urna nunc</a></li>
                                <li><i className="fas fa-headphones"></i> <a href="#">Ut sollicitudin in mauris non auctor</a></li>
                                <li><i className="fas fa-headphones"></i> <a href="#">Etiam hendrerit urna nunc</a></li>
                                <li><i className="fas fa-headphones"></i> <a href="#">Duis et felis bibendum</a></li>
                            </ul>
                        </div>
                    </div>
                </aside>
                <aside className="list conferences aside section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Conferences</h2>
                        <div className="content">
                            <ul className="list-unstyled">
                                <li><i className="far fa-calendar-alt"></i> <a href="#">WWDC 2030</a> (San Francisco)</li>
                                <li><i className="far fa-calendar-alt"></i> <a href="#">Hive</a> (Seattle)</li>
                            </ul>
                        </div>
                    </div>
                </aside>
                <aside className="credits aside section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Credits</h2>
                        <div className="content">
                            <ul className="list-unstyled pb-2">
                                <li><a href="#"><i className="fas fa-external-link-alt"></i>Bootstrap</a></li>
                                <li><a href="#"><i className="fas fa-external-link-alt"></i>FontAwesome</a></li>
                                <li><a href="#"><i className="fas fa-external-link-alt"></i>GitHub Calendar Plugin</a></li>
                                
                                <li><a href="#"><i className="fas fa-external-link-alt"></i>GitHub Activity Stream</a></li>
                                
                                <li><a href="#"><i className="fas fa-external-link-alt"></i>Vanilla RSS</a></li>
                                <li><a href="#"><i className="fas fa-external-link-alt"></i>Dark Mode Switch</a></li>
                                
                            </ul>
                            
                            <hr/>
                            
                             <p className="pt-2">This Boootstrap portfolio template is handcrafted by UX designer <a href="https://twitter.com/3rdwave_themes">Xiaoying Riley</a> at <a href="#">3rd Wave Media</a> for developers and is <strong>FREE</strong> as long as you keep the footer attribution link.</p>
                             <p>If you’d like to <strong>use this template without the attribution link</strong>, you can <a href="#">buy the commercial license</a>.</p>
                             
                             <a className="btn btn-cta-primary btn-download" href="#"><i className="fas fa-download"></i> I want to download</a>
                            <hr/>
                            <h5 className="subheading pt-3">Want more free Bootstrap themes and templates?</h5>
                            <p>Check out our <a href="#">collection of free themes and templates.</a></p>
                            <p>Follow <a href="#">Xiaoying</a> on twitter so you don't miss any future freebies!</p> 
                            
                            <a className="btn btn-cta-secondary btn-follow" href="#"><i className="fab fa-twitter"></i> Follow on twitter</a>
                            
                        </div>
                    </div>
                </aside>
            </div>
          </div> 
        </div>
        <footer className="footer">
          <div className="container text-center">
            <small className="copyright">Copyright 2022</small>
          </div>
      </footer>
      </>
  
  )
}
