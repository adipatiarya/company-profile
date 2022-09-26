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
		                <h2 className="desc">Fullstack Developer</h2>   
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
                  <h2 className="heading">Tentang Saya</h2>
                  <div className="content">
                    <p>
                      {`Halo,Saya Adipati`}
                    </p>
                    <p>{`Saya adalah seorang Software Engineer dengan 10 tahun pengalaman. Berpengalaman dalam berbagai macam teknologi, diantaranya HTML, CSS, Javascript, React JS, Vue JS, PHP, Laravel, MySQL, Microsoft SQL Server, dan GIT. Terampil dalam pemecahan masalah dan melaksanakan tugas-tugas dari awal sampai akhir. Cinta dan semangat untuk belajar teknologi baru dan bekerja untuk dunia yang lebih baik.`}</p>     
                  </div>
                </div>
              </section>
              <section className="latest section">
                <div className="section-inner shadow-sm rounded">
                  <h2 className="heading">Proyek Sekarang</h2>
                  <div className="content">
                    <div className="item featured text-center">
                      <div className="featured-image has-ribbon">
                        <a href="#">
                          <img className="img-fluid project-image rounded shadow-sm" src="assets/images/projects/project-featured.jpg" alt="project name" />
                        </a>
                        <div className="ribbon">
                            <div className="text">New</div>
                        </div>
                      </div>
                      <h3 className="title mb-3"><a href="#">Eccommerce - Laravel web Ecomerce</a></h3>
                      <div className="desc text-start">
                        <p>{`Saat ini saya sedang mengembangkan proyek open source mengguanakn framework laravel. yaitu pembuatan website toko online seperti web toko online yg terkenal seperti shoopee, bukalapak dll. `}</p>
                      </div>
                      <a className="btn btn-cta-secondary" href="#"><i className="fas fa-thumbs-up"></i> Kembali ke proyek saya</a> 
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
                  <h2 className="heading">Proyek yang lain</h2>
                  <div className="content">
                  {
                      projects.map(function(object, i){
                        return (
                          <Project key={i} data={object} />
                        )
                      })
                    }

                    <a className="btn btn-cta-secondary" href="#">Lainnya di Github <i className="fas fa-chevron-right pt-1"></i></a>  
                  </div>
                </div>
              </section>
              <section className="experience section">
                <div className="section-inner shadow-sm rounded">
                  <h2 className="heading">Pengalaman Kerja</h2>
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
                  <h2 className="heading">GitHub Saya</h2>
                  
                  
                  <div id="github-graph" className="github-graph"></div>
                  
                  <div id="feed" className="ghfeed"></div>
                </div>
              </section>
            </div>
            <div className="secondary col-lg-4 col-12">
              <aside className="info aside section">
                <div className="section-inner shadow-sm rounded">
                    <h2 className="heading sr-only">Informasi Dasar</h2>
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
                  <h2 className="heading">Kemampuan</h2>
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
                        <h2 className="heading">Pendidikan</h2>
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
                        <h2 className="heading">Bahasa</h2>
                        <div className="content">
                            <ul className="list-unstyled">
                                <li className="item">
                                    <span className="title"><strong>English:</strong></span>
                                    <span className="level">Native Speaker <br className="visible-xs"/><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> </span>
                                </li>
                                <li className="item">
                                    <span className="title"><strong>Indonesia:</strong></span>
                                    <span className="level">Lancar berbahasa dan menulis dengan bahasa ini <br className="visible-sm visible-xs"/><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star-half"></i></span>
                                </li>
                            </ul>
                        </div>
                    </div>
              </aside>
             
              <aside className="list music aside section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Kodingan yang disukai</h2>
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
                        <h2 className="heading">Konverensi</h2>
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
                             <p>If you’d like to <strong>use this template without the attribution link</strong>{`, you can `}<a href="#">buy the commercial license</a>.</p>
                             
                             <a className="btn btn-cta-primary btn-download" href="#"><i className="fas fa-download"></i> Saya ingin download</a>
                            <hr/>
                            <h5 className="subheading pt-3">Want more free Bootstrap themes and templates?</h5>
                            <p>Check out our <a href="#">collection of free themes and templates.</a></p>
                            <p>Ikuti <a href="#">Adipatiarya</a>{` on twitter untuk berkenalan lebih lanjut!`}</p> 
                            
                            <a className="btn btn-cta-secondary btn-follow" href="#"><i className="fab fa-twitter"></i> Ikuti di twitter</a>
                            
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
