import React from 'react';
import logo from './logo.svg';

import './asset/css/animate.css';
import './asset/css/bootstrap.min.css';
import './asset/css/templatemo-style.css';
import './asset/css/font-awesome.min.css';
import './App.css';
import Home from '../src/asset/images/home-img.jpg'

import { Link, animateScroll as scroll } from "react-scroll";
// import { Line, Circle } from 'rc-progress';
class App extends React.Component {
   state = {showShade: false,
          showMenu:false          
     }

     handleScroll = e => {

          if (window.scrollY>70)
               this.setState({showShade:true})
          else
               this.setState({showShade:false})

        }
     
     menuHandle = (e)=>{
          this.setState({showMenu:!this.state.showMenu});

     }


        componentDidMount() {
          window.addEventListener('scroll', this.handleScroll, true);
        }
      
        componentWillUnmount() {
          window.removeEventListener('scroll', this.handleScroll);
        }
       
   
     render() {

        let classMenu = this.state.showShade ? "navbar navbar-fixed-top top-nav-collapse custom-navbar " : "navbar navbar-fixed-top custom-navbar"
          let showMenu = this.state.showMenu ? this.state.showShade ? "pop navbar-collapse": "collapse navbar-collapse" :"collapse navbar-collapse"
  return (
    <div className="App"   >
     {/* top-nav-collapse */}
         
     <div className={classMenu} role="navigation">
     <div class="container">

       
          <div class="navbar-header" >
               <button class="navbar-toggle" onClick={this.menuHandle} data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon icon-bar"></span>
                    <span class="icon icon-bar"></span>
                    <span class="icon icon-bar"></span>
               </button>
               <a href="#" class="navbar-brand">RP</a>
          </div>

          <div className={showMenu}>
               <ul class="nav navbar-nav navbar-right">
                    <li>
                    <Link activeClass="active"
    to="home"
    spy={true}
    smooth={true}
    offset={-50}
    duration={1500} onClick={this.menuHandle}
>Home</Link>
                    
                    </li>
                    <li>
                    <Link
    activeClass="active"
    to="about"
    spy={true}
    smooth={true}
    offset={-50}
    duration={700} onClick={this.menuHandle}
>About Me</Link>
                    </li>
                    <li>
                    <Link activeClass="active"
    to="experience"
    spy={true}
    smooth={true}
    offset={-50}
    duration={1500} onClick={this.menuHandle}
>Experiences</Link>
                    </li>
                    <li>
                    <Link activeClass="active"
    to="service"
    spy={true}
    smooth={true}
    offset={-50}
    duration={1500} onClick={this.menuHandle}
>My Work</Link>
                     </li>
                     <li>
                    <Link activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-60}
    duration={1500} onClick={this.menuHandle}
>Say hello</Link>
                     </li>
                    
               </ul>
          </div>

     </div>
</div>

     
<section id="home" className="parallax-section" >
     <div class="container">
          <div class="row">

               <div class="col-md-6 col-sm-6">
                    {/* <img src={Home}  /> */}
                    <div class="home-img"></div>
               </div>

               <div class="col-md-6 col-sm-6">
                    <div class="home-thumb">
                         <div class="section-title">
                              {/* <h4 class="wow fadeInUp" data-wow-delay="0.3s">welcome to my website</h4> */}
                              <h1 class="wow fadeInUp" data-wow-delay="0.6s">Hello, I am <strong>RP</strong>.</h1>
                              <p class="wow fadeInUp" data-wow-delay="0.9s" style={{fontSize:"23px"}}>An Avid-Venturer, Programming Guru, #naturelover and Foodie.</p>
                            <br/>
                              <p class="wow fadeInUp" data-wow-delay="0.9s" style={{fontStyle:"italic",float:"right"}}> If you think adventures are dangerous, Try routine: it’s lethal. <br/><span style={{float:"right"}}>- Paulo Coelho</span></p>
                              
                              {/* <a href="#about" class="wow fadeInUp smoothScroll section-btn btn btn-success" data-wow-delay="1.4s">Get Started</a>
                               */}
                               <br/><br/><br/>
                              <Link 
    to="about"
    spy={true}
    smooth={true}
    offset={-50}
    duration={1500}
    className="section-btn btn btn-success"
>Know More</Link>


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
                              <h2>About Me</h2>
                             
                         </div>
                         <div class="wow fadeInUp" data-wow-delay="0.8s">
                              <p>Since the beginning of my journey as a programmer nearly 7 years ago, 
I've done many remote works for different agencies, and have collaborated with talented people to create products for 
both businesses and consumer's use.</p><hr/>
                              <p>I'm a tech enthusiast as well a MotoGP game fanatic.
When I am not at my computer, my love for animals, exploring untouched serenic beauties and tasting different flavours keep me going.</p>
                         </div>
                    </div>
               </div>

               {/* <div class="col-md-3 col-sm-6">
                    <div class="background-image about-img"></div>
               </div> */}

               <div class="bg-dark col-md-6 col-sm-6">
                    <div class="skill-thumb">
                         <div class="wow fadeInUp section-title color-white" data-wow-delay="1.2s">
                              <h1>My Skills</h1>
                              <p class="color-white">Photoshop . HTML CSS JS . Web Design</p>
                         </div>

                         <div class=" wow fadeInUp skills-thumb" data-wow-delay="1.6s">
                         <strong class="color-white">Web App</strong>
                              <span class="color-white pull-right">91%</span>


                                   <div class="progress " >
                                        <div class="progress-bar" style={{width:"91%",backgroundColor:"#86c232"}}></div>
                                   </div>

                         <strong class="color-white">Mobile App</strong>
                              <span class="color-white pull-right">83%</span>
                              <div class="progress" >
                                        <div  class="progress-bar" style={{width:"83%",backgroundColor:"#3aafa9"}}></div>
                                   </div>
                      {/* <Line percent="90" strokeWidth="1" strokeColor="green" /> */}
                         <strong class="color-white">CMS</strong>
                              <span class="color-white pull-right">74%</span>
                              <div class="progress" >
                                        <div  class="progress-bar" style={{width:"74%",backgroundColor:"#fdce4b"}}></div>
                                   </div>

                                   <strong class="color-white">Photoshop</strong>
                              <span class="color-white pull-right">54%</span>
                              <div class="progress" >
                                        <div  class="progress-bar" style={{width:"54%",backgroundColor:"#f76c6c"}}></div>
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
                    <div class="color-white experience-thumb">
                         <div class="wow fadeInUp section-title" data-wow-delay="0.8s">
                              <h1>My Experiences</h1>
                             
                         </div>

                         <div class="wow fadeInUp color-white media" data-wow-delay="1.2s">
                              <div class="media-object media-left">
                                   <i class="fa fa-laptop"></i>
                              </div>
                              <div class="media-body">
                                   <h3 class="media-heading">Programmer <small>From 2013</small></h3>
                                   <p class="color-white">Society for Promotion of Vocational &amp; Technical Education (SOVTECH) </p>
                              </div>
                         </div>

                         <div class="wow fadeInUp color-white media" data-wow-delay="1.6s">
                              <div class="media-object media-left">
                                   <i class="fa fa-institution"></i>
                              </div>
                              <div class="media-body">
                                   <h3 class="media-heading">Part Time Instructor (Computer) <small>2009 - 2012</small></h3>
                                   <p class="color-white">Dr. BR Ambedkar Institute of Technology</p>
                              </div>
                         </div>

                         <div class="wow fadeInUp color-white media" data-wow-delay="1.6s">
                              <div class="media-object media-left">
                                   <i class="fa fa-html5"></i>
                              </div>
                              <div class="media-body">
                                   <h3 class="media-heading">Software Developer <small>2009</small></h3>
                                   <p class="color-white">Directorate Of Shipping Services</p>
                              </div>
                         </div>

                    </div>
               </div>
               <div class="col-md-6 col-sm-6">
                    <div class="background-image experience-img"></div>
               </div>
          </div>
     </div>
</section>



<section id="education" class="parallax-section">
     <div class="container">
          <div class="row">
  <div class="col-md-6 col-sm-6">
                    <div class="background-image education-img"></div>
               </div>
               <div class="col-md-6 col-sm-6">
                    <div class="color-white education-thumb">
                         <div class="wow fadeInUp section-title" data-wow-delay="0.8s">
                              <h1>My Education</h1>
                         
                         </div>

                         <div class="wow fadeInUp color-white media" data-wow-delay="1.2s">
                              <div class="media-object media-left">
                                   <i class="fa fa-graduation-cap"></i>
                              </div>
                              <div class="media-body">
                                   <h3 class="media-heading">Master in Computer Applications <small>2015 - 2017</small></h3>
                                   <p class="color-white">Annamalai University </p>
                              </div>
                         </div>

                         <div class="wow fadeInUp color-white media" data-wow-delay="1.6s">
                              <div class="media-object media-left">
                                   <i class="fa fa-file-text"></i>
                              </div>
                              <div class="media-body">
                                   <h3 class="media-heading">Diploma in Computer Engineering <small>2006-2009</small></h3>
                                   <p class="color-white">Dr. BR Ambedkar Institute of Technology</p>
                              </div>
                         </div>
                         <br/>
                         <br/>

                    </div>
               </div>

             

          </div>
     </div>
</section>




<section id="service" class="parallax-section bg-dark" style={{backgroundColor:"#293745"}}>
     <div class="container">
          <div class="row">

              

               <div class="col-md-12 col-sm-6" style={{padding:"10px 40px"}}>
               <div class="color-white wow fadeInUp section-title" data-wow-delay="0.8s">
                              <h1>My Work </h1>
                         
                         </div>

               <div class="row pad">
               <div class="bg-cyan col-md-3 col-sm-6">
     <div class=" color-white wow fadeInUp service-thumb animated" data-wow-delay="1.2s" >
          <i class="fa fa-laptop"></i>
               <h3>Portal for Reporting of Prime Ministers Scheme</h3>
             
     </div>
</div>
<div class="bg-white col-md-3 col-sm-6">
     <div class="wow fadeInUp service-thumb animated" data-wow-delay="1.2s" >
          <i class="fa fa-html5"></i>
               <h3>Daily Telegram <br/>web portal </h3>
              
     </div>
</div>
<div class="bg-orange col-md-3 col-sm-6">
     <div class="color-white wow fadeInUp service-thumb animated" data-wow-delay="1.2s" >
          <i class="fa fa-android"></i>
               <h3>Andaman &amp; Nicobar Weather app</h3>
              
     </div>
</div>

<div class="bg-white col-md-3 col-sm-6">
     <div class=" wow fadeInUp service-thumb animated" data-wow-delay="1.2s" >
          <i class="fa fa-android"></i>
               <h3>mChallan <br/> for A &amp; N Police</h3>
             
     </div>
</div>
</div>
             

             
<div class="row pad">
               <div class="bg-white col-md-3 col-sm-6">
     <div class="wow fadeInUp service-thumb animated" data-wow-delay="1.2s" >
          <i class="fa fa-html5"></i>
               <h3>Website for Department of Education </h3>
             
     </div>
</div>
<div class="bg-yellow col-md-3 col-sm-6">
     <div class="color-white wow fadeInUp service-thumb animated" data-wow-delay="1.2s" >
          <i class="fa fa-laptop"></i>
               <h3>FactCheck for Directorate of Information Publicity</h3>
     </div>
</div>
<div class="bg-white col-md-3 col-sm-6">
     <div class="wow fadeInUp service-thumb animated" data-wow-delay="1.2s" >
          <i class="fa fa-laptop"></i>
               <h3>Transfer and Posting for Directorate of Education</h3>
            
     </div>
</div>

<div class="bg-blue col-md-3 col-sm-6">
     <div class="color-white wow fadeInUp service-thumb animated" data-wow-delay="1.2s" >
          <i class="fa fa-laptop"></i>
               <h3>UrjaPay (Upcoming..) for Department of Electricity</h3>
             
     </div>
</div>
</div>
             
                </div>
               
          </div>
     </div>
</section>



<section id="contact" class="parallax-section" style={{backgroundColor:"#116466"}}>
     <div class="container">
          <div class="row">

               <div class="col-md-6 col-sm-12">
                    <div class="contact-form">
                         <div class="wow fadeInUp section-title" data-wow-delay="0.2s">
                              <h1 class="color-white">Say hello..</h1>
                              <p class="color-white">Feel free to get in touch with me.</p>
                             <p style={{color:"white"}}> 
                                   {/*<a href="#"><i class="fa fa-facebook"> </i></a> |  */}
                              &nbsp;<a href="https://twitter.com/Rakesh65622735" target="_blank"><i class="fa fa-twitter"> </i></a> |  &nbsp;
                              <a href="#"><i class="fa fa-instagram"> </i></a> |  &nbsp;
                              <a href="mailto:rakeshreturnz@gmail.com"><i class="fa fa-envelope"></i></a>

                             </p>
                         </div>

                         {/* <div id="contact-form">
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
                         </div> */}

                    </div>
               </div>

               {/* <div class="col-md-3 col-sm-6">
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
   */}
          </div>
     </div>
</section>


    </div>
  );
}
}

export default App;
