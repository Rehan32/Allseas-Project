import './home.css'

const Home=()=>{
  return(
    <>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active bg-dark" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class=" bg-dark" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class=" bg-dark" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="./images/warehouse1.jpeg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Warehouse Cargo</h5>
          <p>Allseas Global Logistics delivers integrated and multimodal logistics
            services, connecting every corner of the world via air, sea and land.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./images/land-transport1.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Land Transport</h5>
          <p>Allseas Global Logistics delivers integrated and multimodal logistics
            services, connecting every corner of the world via air, sea and land.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./images/customs-clearance1.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Custom Clearance</h5>
          <p>Allseas Global Logistics delivers integrated and multimodal logistics
            services, connecting every corner of the world via air, sea and land.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div class="container">
    <div class="row">
      <div class="col">
      <div class="img-move-wrapper">
      <img src="./images/cargo-port-logistics.jpg" class="img-move img-move-1 img-fluid"/>
      <img src="./images/foreman-portrait.jpg" class="img-move img-move-2 img-fluid"/>
      <img src="https://placeimg.com/1000/400/arch" class="img-fluid invisible d-none d-md-block"/>
      <div id="filler"></div>
      </div>
      </div>
      <div class="col" id="offerings-section">
        <h5><i class="bi bi-truck-front-fill"></i>What We Offer</h5>
        <h2>Allseas Global Logistics</h2>
        <p class="text-secondary">is more than a logistics & expedited service provider- we are an extension of your own company Integration, Innovation and the 360-degree intelligence with hands on experience.</p>
        <p class="text-secondary">When you need a reliable and reputable import broker and freight forwarder to ensure safe and prompt cargo delivery, the dedicated specialists at Allseas Global Logistics are ready to wield their extensive knowledge and experience on your behalf; Our dedicated team starts by getting to know your company to better understand your shipping and logistics needs.</p>
        <p class="text-secondary">From there, we suggest solutions that reduce the burden on your labor and resources, freeing you up to tackle other tasks essential for your business to thrive. When you partner Allseas Global Logistics , you never have to worry about when or if your cargo will arrive, or what condition it will be in. We’re the customs broker that will get the job done right the first time, every time.</p>
        <div class="row" id="inner-row">
        <div class="col">
          <p class="text-secondary"><i class="bi bi-check-circle-fill" id="check-color"></i>Land Freight</p>
          <p class="text-secondary"><i class="bi bi-check-circle-fill" id="check-color"></i>Air Freight</p>
          <p class="text-secondary"><i class="bi bi-check-circle-fill" id="check-color"></i>Ocean Freight</p>
        </div>
        <div class="col">
          <p class="text-secondary"><i class="bi bi-check-circle-fill" id="check-color2"></i>Warehousing</p>
          <p class="text-secondary"><i class="bi bi-check-circle-fill" id="check-color2"></i>Courier Service</p>
          <p class="text-secondary"><i class="bi bi-check-circle-fill" id="check-color2"></i>Customs clearance</p>
        </div>
      </div>
      <button type="button" class="btn" id="mid-button">More About Us</button>
      </div>
    </div>
  </div>

  <div class="ship-img-container" style={{backgroundImage:"url('./images/center-ship1.jpg')"}}>
    <h4>Our experienced, knowledgeable experts offer optimal solutions to help you meet your business challenges.</h4>
    <h6>Chemical Goods | Food and Beverage | Fashion and Retails| Energy, Oil and Gas | Automotive Pharmaceuticals |<br></br>Medical equipment’s | Perishable goods | Live stock | Personal baggage/relocation</h6>
  </div>

  <div class="container-fluid" id="last-section">
    <div class="container-fluid" id="last-section-container">
      <div class="row">
        <div class="col-8" id="last-section-a">
          <h4>Why Us</h4>
          <h2>We Provide The Best Logistic Services For Your Needs</h2>
          <p>In a more connected world, our customers will be nimbler and more responsive to the growing demands of delivering great experiences. Our approach allows us to build truly tailored solutions that connect our customers to their omni-channel consumer. Together, we work to build stronger, more efficient, and sustainable supply chains that are as good for business as they are for the environment.</p>
          <p><i class="bi bi-check"></i>Carefully chosen and extensively trained team</p><hr></hr>
          <p><i class="bi bi-check"></i>Ensure safe, efficient, and reliable transportation</p><hr></hr>
          <p><i class="bi bi-check"></i>Professional, friendly, knowledgeable and responsible</p><hr></hr>
          <p><i class="bi bi-check"></i>Ensure each experience is a positive one</p>
        
        <div class="row gy-3">
          <div class="col">
        <div class="card h-100" style={{width: "18rem"}}>
          <img src="./images/bernd-dittrich-P_-S57fiFwE-unsplash-1024x683.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title text-center">Land Freight</h5>
          </div>
        </div>
          </div>
          <div class="col">
        <div class="card h-100" style={{width: "18rem"}}>
          <img src="./images/aldrin-rachman-pradana-FadWO6V8bjw-unsplash-1024x683.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title text-center">Air Freight</h5>
          </div>
        </div>
          </div>
          <div class="col">
        <div class="card h-100" style={{width: "18rem"}}>
          <img src="./images/vidar-nordli-mathisen-2hVc3FdmBso-unsplash-1-1-1024x647.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title text-center">Ocean Freight</h5>
          </div>
        </div>
          </div>
          <div class="col">
        <div class="card h-100" style={{width: "18rem"}}>
          <img src="./images/adrian-sulyok-sczNLg6rrhQ-unsplash-1-1024x683.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title text-center">Warehousing</h5>
          </div>
        </div>
          </div>
          <div class="col">
        <div class="card h-100" style={{width: "18rem"}}>
          <img src="./images/alexander-simonsen-44al1GlFVxo-unsplash-1024x768.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title text-center">Courier Services</h5>
          </div>
        </div>
          </div>
          <div class="col">
        <div class="card h-100" style={{width: "18rem"}}>
          <img src="./images/rinson-chory-2vPGGOU-wLA-unsplash-1024x768.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title text-center">Custom Clearance</h5>
          </div>
        </div>
          </div>
        </div>
        </div>
        <div class="col" id="last-section-b">
        <h2>Lets Connect</h2>
        <p>For better sales and support.</p>
        <div class="row">
        <div class="col">
          <label for="formGroupExampleInput" class="form-label">Name</label>
          <input type="text" class="form-control" placeholder="Name" aria-label="Name"/>
        </div>
        <div class="col">
          <label for="formGroupExampleInput" class="form-label">Contact</label>
          <input type="text" class="form-control" placeholder="Mobile" aria-label="Mobile"/>
        </div>
      </div>
      <div class="col">
          <label for="formGroupExampleInput" class="form-label">Email</label>
          <input type="text" class="form-control" placeholder="Email" aria-label="Email"/>
        </div>
        <div class="col">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="4"></textarea>
        </div>
    
        <button type="button" class="btn">Send Now</button>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Home;