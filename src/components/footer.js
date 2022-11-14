import './footer.css'

const Footer=()=>{
  return(
    <>
    <div class="container-fluid" style={{backgroundImage:"url('./images/waves1.jpg')"}}>
    <div class="container" id="footer-section">
      <div class="row">
        <div class="col text-white" >
          <img src="./images/logo2-1.png" height="60px"></img>
          <p>Allseas Global Logistics is more than a logistics & expedited service provider</p><br/>
          <p><i class="bi bi-envelope-fill"></i>info@allseasglobal.net</p>
        </div>
        <div class="col" >
            <h3 style={{color:"rgb(255,140,0)"}}>Quick Links</h3>
            <hr/>
            <p class="text-white">Home</p>
            <p class="text-white">About Us</p>
            <p class="text-white">Services</p>
            <p class="text-white">Achievements</p>
            <p class="text-white">Contacts</p>
        </div>
        <div class="col">
        <h3 style={{color:"rgb(255,140,0)"}}>Useful Links</h3>
            <hr/>
            <p class="text-white">Air Freight</p>
            <p class="text-white">Land Freight</p>
            <p class="text-white">Ocean Freight</p>
            <p class="text-white">Warehousing</p>
            <p class="text-white">Courier Services</p>
        </div>
        <div class="col">
        <h3 style={{color:"rgb(255,140,0)"}}>Work Hours</h3>
            <hr/>
            <p class="text-white"><i class="bi bi-clock"></i>9 AM - 6 PM , Monday - Saturday</p>
            <p class="text-white">110 Mahant Chambers, Rd number 34, Wagle Estate, Jai Bhavani Nagar, MIDC Industrial Area, Thane West – 400604.</p>
            <br/>
            <button type="button" class="btn text-white" id="footer-button"><i class="bi bi-telephone-fill"></i>+91 8108186810</button>
        </div>
      </div>
      <br/>
      <hr/>
      <p class="text-white fw-bold">© 2019 Allseas Global Logistics Pvt Ltd. All rights reserved</p>
    </div>
    </div>
    </>
  )
}

export default Footer;