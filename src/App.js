import React from 'react';
import logo from './logo.svg';
import './App.css';
import './asset/css/animate.css';
import './asset/css/bootstrap.min.css';
import './asset/css/templatemo-style.css';
import './asset/css/font-awesome.min.css';
import Home from '../src/asset/images/home-img.jpg'
import { Link, animateScroll as scroll } from "react-scroll";
// import { Line, Circle } from 'rc-progress';
function App() {

   

  return (
    <div className="App">
     {/* top-nav-collapse */}
     <div class="navbar navbar-fixed-top custom-navbar " role="navigation">
     <div class="container">

       
          <div class="navbar-header">
               <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon icon-bar"></span>
                    <span class="icon icon-bar"></span>
                    <span class="icon icon-bar"></span>
               </button>
               <a href="#" class="navbar-brand">RP</a>
          </div>

          <div class="collapse navbar-collapse">
               <ul class="nav navbar-nav navbar-right">
                    <li>
                    <Link activeClass="active"
    to="home"
    spy={true}
    smooth={true}
    offset={-50}
    duration={1500}
>Home</Link>
                    
                    </li>
                    <li>
                    <Link
    activeClass="active"
    to="about"
    spy={true}
    smooth={true}
    offset={-50}
    duration={700}
>About Me</Link>
                    </li>
                    <li>
                    <Link activeClass="active"
    to="experience"
    spy={true}
    smooth={true}
    offset={-50}
    duration={1500}
>Experiences</Link>
                    </li>
                    <li>
                    <Link activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-60}
    duration={1500}
>Contact</Link>
                     </li>
               </ul>
          </div>

     </div>
</div>

     
<section id="home" class="parallax-section">
     <div class="container">
          <div class="row">

               <div class="col-md-6 col-sm-6">
                    <img src={Home}  />
                    {/* <div class="home-img"></div> */}
               </div>

               <div class="col-md-6 col-sm-6">
                    <div class="home-thumb">
                         <div class="section-title">
                              <h4 class="wow fadeInUp" data-wow-delay="0.3s">welcome to my website</h4>
                              <h1 class="wow fadeInUp" data-wow-delay="0.6s">Hello, I am <strong>RP</strong>.</h1>
                              <p class="wow fadeInUp" data-wow-delay="0.9s">A programmer, C# enthusiast</p>
                              
                              <a href="#about" class="wow fadeInUp smoothScroll section-btn btn btn-success" data-wow-delay="1.4s">Get Started</a>
                              
                         </div>
                    </div>
               </div>


          </div>
     </div>
</section>

<section id="about" class="parallax-section">
     <div class="container">
          <div class="row">

               <div class="col-md-6 col-sm-12">
                    <div class="about-thumb">
                         <div class="wow fadeInUp section-title" data-wow-delay="0.4s">
                              <h1>Donec auctor</h1>
                              <p class="color-yellow">Sed vulputate vitae diam quis bibendum</p>
                         </div>
                         <div class="wow fadeInUp" data-wow-delay="0.8s">
                              <p>Phasellus vulputate tellus nec tortor varius elementum. Curabitur at pulvinar ante. Duis dui urna, faucibus eget felis eu, iaculis congue sem. Mauris convallis eros massa.</p>
                              <p>Quisque viverra iaculis aliquam. Etiam volutpat, justo non aliquam bibendum, sem nibh mollis erat, quis porta odio odio at velit.</p>
                         </div>
                    </div>
               </div>

               <div class="col-md-3 col-sm-6">
                    <div class="background-image about-img"></div>
               </div>

               <div class="bg-yellow col-md-3 col-sm-6">
                    <div class="skill-thumb">
                         <div class="wow fadeInUp section-title color-white" data-wow-delay="1.2s">
                              <h1>My Skills</h1>
                              <p class="color-white">Photoshop . HTML CSS JS . Web Design</p>
                         </div>

                         <div class=" wow fadeInUp skills-thumb" data-wow-delay="1.6s">
                         <strong>Frontend Design</strong>
                              <span class="color-white pull-right">90%</span>


                                   <div class="progress" >
                                        <div style={{backgroundColor:"red"}} class="progress-bar" style={{width:"70%"}}></div>
                                   </div>

                         <strong>Backend processing</strong>
                              <span class="color-white pull-right">70%</span>
                              <div class="progress" >
                                        <div  class="progress-bar progress-bar-success" style={{width:"90%",color:"Red"}}></div>
                                   </div>
                      {/* <Line percent="90" strokeWidth="1" strokeColor="green" /> */}
                         <strong>HTML5 {'&'} CSS3</strong>
                              <span class="color-white pull-right">80%</span>
                              <div class="progress" >
                                        <div style={{backgroundColor:"#008ce1"}} class="progress-bar" style={{width:"70%"}}></div>
                                   </div>
                                     {/* <Line percent="80" strokeWidth="1" strokeColor="blue" /> */}
                         </div>

                    </div>
               </div>

          </div>
     </div>
</section>


<section id="experience" class="parallax-section">
     <div class="container">
          <div class="row">

               <div class="col-md-6 col-sm-6">
                    <div class="background-image experience-img"></div>
               </div>

               <div class="col-md-6 col-sm-6">
                    <div class="color-white experience-thumb">
                         <div class="wow fadeInUp section-title" data-wow-delay="0.8s">
                              <h1>My Experiences</h1>
                              <p class="color-white">Previous companies and my tasks</p>
                         </div>

                         <div class="wow fadeInUp color-white media" data-wow-delay="1.2s">
                              <div class="media-object media-left">
                                   <i class="fa fa-laptop"></i>
                              </div>
                              <div class="media-body">
                                   <h3 class="media-heading">Graphic Designer <small>2014 Jul - 2015 Sep</small></h3>
                                   <p class="color-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                              </div>
                         </div>

                         <div class="wow fadeInUp color-white media" data-wow-delay="1.6s">
                              <div class="media-object media-left">
                                   <i class="fa fa-laptop"></i>
                              </div>
                              <div class="media-body">
                                   <h3 class="media-heading">Web Designer <small>2015 Oct - 2017 Jan</small></h3>
                                   <p class="color-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                              </div>
                         </div>

                    </div>
               </div>

          </div>
     </div>
</section>


<section id="education" class="parallax-section">
     <div class="container">
          <div class="row">

               <div class="col-md-6 col-sm-6">
                    <div class="color-white education-thumb">
                         <div class="wow fadeInUp section-title" data-wow-delay="0.8s">
                              <h1>My Education</h1>
                              <p class="color-white">Diploma from Rajkot</p>
                         </div>

                         <div class="wow fadeInUp color-white media" data-wow-delay="1.2s">
                              <div class="media-object media-left">
                                   <i class="fa fa-laptop"></i>
                              </div>
                              <div class="media-body">
                                   <h3 class="media-heading">Master in Design <small>2012 Jan - 2014 May</small></h3>
                                   <p class="color-white">Etiam iaculis elit in mauris ullamcorper auctor. Proin a sapien id orci ullamcorper dignissim eu in neque. </p>
                              </div>
                         </div>

                         <div class="wow fadeInUp color-white media" data-wow-delay="1.6s">
                              <div class="media-object media-left">
                                   <i class="fa fa-laptop"></i>
                              </div>
                              <div class="media-body">
                                   <h3 class="media-heading">Bachelor of Arts <small>2008 May - 2011 Dec</small></h3>
                                   <p class="color-white">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                              </div>
                         </div>

                    </div>
               </div>

               <div class="col-md-6 col-sm-6">
                    <div class="background-image education-img"></div>
               </div>

          </div>
     </div>
</section>


<section id="contact" class="parallax-section">
     <div class="container">
          <div class="row">

               <div class="col-md-6 col-sm-12">
                    <div class="contact-form">
                         <div class="wow fadeInUp section-title" data-wow-delay="0.2s">
                              <h1 class="color-white">Say hello..</h1>
                              <p class="color-white">Integer ut consectetur est. In cursus orci non ipsum gravida dignissim.</p>
                         </div>

                         <div id="contact-form">
                              <form action="#template-mo" method="post">
                                   <div class="wow fadeInUp" data-wow-delay="1s">
                                        <input name="fullname" type="text" class="form-control" id="fullname" placeholder="Your Name" />
                                   </div>
                                   <div class="wow fadeInUp" data-wow-delay="1.2s">
                                        <input name="email" type="email" class="form-control" id="email" placeholder="Your Email" />
                                   </div>
                                   <div class="wow fadeInUp" data-wow-delay="1.4s">
                                        <textarea name="message" rows="5" class="form-control" id="message" placeholder="Write your message..."></textarea>
                                   </div>
                                   <div class="wow fadeInUp col-md-6 col-sm-8" data-wow-delay="1.6s">
                                        <input name="submit" type="submit" class="form-control" id="submit" value="Send" />
                                   </div>
                              </form>
                         </div>

                    </div>
               </div>

               <div class="col-md-3 col-sm-6">
                    <div class="background-image contact-img"></div>
               </div>

               <div class="bg-dark col-md-3 col-sm-6">
                    <div class="contact-thumb">
                         <div class="wow fadeInUp contact-info" data-wow-delay="0.6s">
                              <h3 class="color-white">Visit my office</h3>
                              <p>456 New Street 22000, New York City, USA</p>
                         </div>

                         <div class="wow fadeInUp contact-info" data-wow-delay="0.8s">
                              <h3 class="color-white">Contact.</h3>
                              <p><i class="fa fa-phone"></i> 01-0110-0220</p>
                              <p><i class="fa fa-envelope-o"></i> <a href="mailto:hello@company.co">hello@company.co</a></p>
                              <p><i class="fa fa-globe"></i> <a href="#">company.co</a></p>
                         </div>

                    </div>
               </div>
  
          </div>
     </div>
</section>


    </div>
  );
}

export default App;
