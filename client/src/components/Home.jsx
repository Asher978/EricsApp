import React from 'react';
import imageA from '../assets/imageA.jpg'
import imageB from '../assets/imageB.jpg'
import imageC from '../assets/imageC.jpg'

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
            <h1>Example headline.</h1>
            <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
            <p><a className="btn btn-lg btn-primary" href="" role="button">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div className="item">
        <img className="second-slide" src={imageB} alt="Second slide" />
        <div className="container">
          <div className="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            <p><a className="btn btn-lg btn-primary" href="" role="button">Learn more</a></p>
          </div>
        </div>
      </div>
      <div className="item">
        <img className="third-slide" src={imageC} alt="Third slide" />
        <div className="container">
          <div className="carousel-caption">
            <h1>One more for good measure.</h1>
            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            <p><a className="btn btn-lg btn-primary" href="" role="button">Browse gallery</a></p>
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
        <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder" width="140" height="140" />
        <h2>Bithdays</h2>
        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
        <p><a className="btn btn-default" href="" role="button">View details &raquo;</a></p>
      </div>
      <div className="col-lg-4">
        <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder" width="140" height="140" />
        <h2>Weddings</h2>
        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
        <p><a className="btn btn-default" href="" role="button">View details &raquo;</a></p>
      </div>
      <div className="col-lg-4">
        <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder" width="140" height="140" />
        <h2>Private Events</h2>
        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <p><a className="btn btn-default" href="" role="button">View details &raquo;</a></p>
      </div>
    </div>


    <hr className="featurette-divider" />

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">I Love it all. <span className="text-muted">the beautiful, the memorable, the downright weird</span></h2>
        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div className="col-md-5">
        <img className="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="Generic placeholder" />
      </div>
    </div>

    <hr className="featurette-divider" />

    <div className="row featurette">
      <div className="col-md-7 col-md-push-5">
        <h2 className="featurette-heading">Because you're awesome even on days you're not getting married. <span className="text-muted">(And probably calmer.)</span></h2>
        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div className="col-md-5 col-md-pull-7">
        <img className="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="Generic placeholder" />
      </div>
    </div>

    <hr className="featurette-divider" />

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">You look great! <span className="text-muted">Let's also show your future grandkids how much fun you had.</span></h2>
        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div className="col-md-5">
        <img className="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" alt="Generic placeholder" />
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