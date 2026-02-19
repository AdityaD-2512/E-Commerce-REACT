import './Footer.css';

export default function Footer(){
    return(
        <div>
            <div className='subs'>
                <div>
                    <h2 className="footerH2">Get the latest news!</h2>
                    <p style={{color:"grey", marginLeft:"8vw"}}>stay updated with our latest news :</p>
                </div>
                <div className='inputEle' style={{border:"2px solid black", borderRadius:"10px",padding:"10px",width:"25vw"}}>

                    <label htmlFor='userMail'></label>
                    <input type='email' id='userMail' placeholder='abc@hotmail.com' required style={{width:"100%", borderRadius:"1rem", border:"none"}}/>
                    <button type='submit' style={{borderRadius:"1rem", backgroundColor:"rgb(240,0,0)", border:"none", color:"white", fontWeight:"600", width:"40%", height:"80%", display:"flex", justifyContent:"center", textAlign:"center",alignItems:"center", alignSelf:"center", marginLeft:"0.5rem"}}>Subscribe</button>
                </div>
            </div>

            <div className='Support'>
                <div className='company footerH2' style={{marginTop:"5rem"}}>
                    <h3 style={{textDecoration:"underLine"}}>Company</h3>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Carrers</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms And Service</a></li>
                    </ul>
                </div>

                <div className='support footerH2' style={{marginTop:"5rem"}}>
                    <h3 style={{textDecoration:"underLine"}}>Support</h3>
                    <ul>
                        <li><a href="#userMail">Contact Us</a></li>
                        <li><a href="#userMail">Help Center</a></li>
                        <li><a href="#userMail">Email Us</a></li>
                        <li><a href="#userMail">FAQs</a></li>
                    </ul>
                </div>

                <div className='social footerH2' style={{marginTop:"5rem"}}>
                    <h3 style={{textDecoration:"underLine"}}>Social</h3>
                    <ul>
                        <li><a href="https://www.youtube.com/">Youtube</a></li>
                        <li><a href="https://www.instagram.com/">Instagram</a></li>
                        <li><a href="https://www.facebook.com/">FaceBook</a></li>
                        <li><a href="https://x.com/">Twitter</a></li>
                    </ul>
                </div>

                <div className='follow footerH2' style={{marginTop:"5rem"}}>
                    <h3 style={{textDecoration:"underLine"}}>Follow Us</h3>
                    <ul>
                        <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
                        <li><a href="https://www.youtube.com/">YouTube</a></li>
                        <li><a href="https://github.com/">GitHub</a></li>
                        <li><a href="https://x.com/">X</a></li>
                    </ul>
                </div>
            </div>
            <br></br><br></br><br></br>
            <hr></hr>
            <br></br>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", color:"grey"}}>
                &copy; 2024 Your Company. All rights reserved.
            </div>
            <br></br>
        </div>
    )
}