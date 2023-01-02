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
		                <h2 className="desc">Suratman</h2>   
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
                      {`Halo,nama saya Adipati arya(Nama alias di internet)`}
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
                    <p className="intro">Berikut beberapa bahasa pemrograman yang insyaallah dapat saya kuasai dengan baik.</p>
                    <div className="skillset">
                      <Skil title="Python &amp; Django" level="Beginner" percent="60"/>
                      <Skil title="PHP &amp; Laravel" level="Pro" percent="90"/>
                      <Skil title="Golang &amp; Gin" level="Expert" percent="80"/>
                      <Skil title="Java &amp; Spring" level="Expert" percent="80"/>
                      <Skil title="Javascript &amp; Nodejs" level="Expert" percent="80"/>
                      <p><a className="more-link" href="#"><i className="fas fa-external-link-alt"></i>Lainnya di GitHub</a></p> 
                    </div>
                  </div>
                </div>
              </aside>
              <aside className="testimonials aside section">
                <div className="section-inner shadow-sm rounded">
                    <h2 className="heading">Motivasi</h2>
                    <div className="content">
                        <div className="item">
                            <blockquote className="quote">                                  
                                <p><i className="fas fa-quote-left"></i>{`Pertama kita membentuk kebiasaan dan kebiasaan akan membentuk kita. Kalahkan kebiasaan burukmu, atau mereka akan mengalahkan kamu-`} <b>Dr. Rob Gilbert</b></p>
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
                                <h3 className="title"><i className="fas fa-graduation-cap"></i> UDEMY Online Couse</h3>
                                <h4 className="university">Pelatihan Secara mandiri <span className="year">(2013-2017)</span></h4>
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
                        <h2 className="heading">Frameworks</h2>
                        <div className="content"><p>Di bawah ini adalah list framework yang biasa saya gunakan untuk mengerjakan proyek.</p>
                            <ul className="list-unstyled">
                                <li><i className="fas fa-code"></i> <a href="#">Gin - Golang</a></li>
                                <li><i className="fas fa-code"></i> <a href="#">Laravel - PHP</a></li>
                                <li><i className="fas fa-code"></i> <a href="#">Android Studio - Java</a></li>
                                <li><i className="fas fa-code"></i> <a href="#">React - Javascript</a></li>
                        
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
