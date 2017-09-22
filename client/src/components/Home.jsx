import React from 'react';
import imageA from '../assets/imageA.jpg'
import imageC from '../assets/imageC.jpg'
import wedding from '../assets/wedding.jpg'
import days from '../assets/days.jpg'
import kids from '../assets/kids.jpg'
import camera from '../assets/camera.jpg'
import birthday from '../assets/birthday.jpg'
import rings from '../assets/rings.png'
import privateA from '../assets/privateA.jpg'


const Home = () => {
  return (
    <div>
    <div id="myCarousel" className="carousel slide" data-ride="carousel">

    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner" role="listbox">
      <div className="item active">
        <img className="first-slide" src={imageA} alt="First slide" />
        <div className="container">
          <div className="carousel-caption">
            <h1>-----I HEART NEW YORK-----</h1>
            <h2>STYLISH PHOTO SHOOTS FEATURING YOU IN THE GREATEST CITY IN THE WORLD</h2>
            <p><a className="btn btn-lg btn-primary" href="/register" role="button">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div className="item">
        <img className="second-slide" src={camera} alt="Second slide" />
        <div className="container">
          <div className="carousel-caption">
          <h1>-----I HEART NEW YORK-----</h1>
            <h2>STYLISH PHOTO SHOOTS FEATURING YOU IN THE GREATEST CITY IN THE WORLD</h2>
            <p><a className="btn btn-lg btn-primary" href="/bio" role="button">View My Gallery</a></p>
          </div>
        </div>
      </div>
      <div className="item">
        <img className="third-slide" src={imageC} alt="Third slide" />
        <div className="container">
          <div className="carousel-caption">
          <h1>-----I HEART NEW YORK-----</h1>
            <h2>STYLISH PHOTO SHOOTS FEATURING YOU IN THE GREATEST CITY IN THE WORLD</h2>
            <p><a className="btn btn-lg btn-primary" href="/calendar" role="button">View My Calendar</a></p>
          </div>
        </div>
      </div>
    </div>
    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>

  <div className="container marketing">
    <div className="row">
      <div className="col-lg-4">
        <img className="img-circle" src={birthday} alt="Generic placeholder" width="140" height="140" />
        <h2>Bithdays</h2>
        <p>Birthday party packages begin at $550 for ninety minutes of coverage and include full resolution images on a custom USB drive. Please click on the “Register” tab above and schedule your event! Please note, I am now booking parties for October 2017 and later.</p>
      </div>
      <div className="col-lg-4">
        <img className="img-circle" src={rings} alt="Generic placeholder" width="140" height="140" />
        <h2>Weddings</h2>
        <p>I have been given an amazing gift: I know what beautiful looks like... And I know how to capture it for you. To give you your most precious memories...</p>
      </div>
      <div className="col-lg-4">
        <img className="img-circle" src={privateA} alt="Generic placeholder" width="140" height="140" />
        <h2>Private Events</h2>
        <p>If you are looking for a photographer for Private or Corporate events, you've come to the right place! Book a phone consultation by registering on this site. I look forward to speaking with you.</p>
      </div>
    </div>


    <hr className="featurette-divider" />

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">I Love it all. <span className="text-muted">the beautiful, the memorable, the downright weird</span></h2>
        
      </div>
      <div className="col-md-5">
        <img className="featurette-image img-responsive center-block" src={wedding} alt="Generic placeholder" />
      </div>
    </div>

    <hr className="featurette-divider" />

    <div className="row featurette">
      <div className="col-md-7 col-md-push-5">
        <h2 className="featurette-heading">Because you're awesome even on days you're not getting married. <span className="text-muted">(And probably calmer.)</span></h2>
        
      </div>
      <div className="col-md-5 col-md-pull-7">
        <img className="featurette-image img-responsive center-block" src={days} alt="Generic placeholder" />
      </div>
    </div>

    <hr className="featurette-divider" />

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">You look great! <span className="text-muted">Let's also show your future grandkids how much fun you had.</span></h2>
       
      </div>
      <div className="col-md-5">
        <img className="featurette-image img-responsive center-block" src={kids} alt='' />
      </div>
    </div>

    <hr className="featurette-divider" />

    <footer>
      <p className="pull-right"><a href="">Back to top</a></p>
      <p>&copy; Wiley Media & Inc. &middot; <a href="">Privacy</a></p>
    </footer>

  </div>
  </div>
  )
}

export default Home;