
import Image from "next/image";

const Platforms = () => {
    return (
       <div className="platforms container">
           <div className="row heading">
               <p>Platforms</p>
           </div>
           <div className="row justify-content-center">
               <div className="col-sm" id="shopify">
               <Image
                    className="img"
                    src="/shopify-commerce-logo.png"
                    alt="House with beautifull Vinyl floor"
                    width={200}
                    height={150}
                    quality={100}
                />
               </div>
               <div className="col-sm" id="wp">
               <Image
                    className="img"
                    src="/wp-logo.png"
                    alt="House with beautifull Vinyl floor"
                    width={450}
                    height={350}
                    quality={100}
                />
               </div>
               <div className="col-sm" id="big-commerce">
               <Image
                    className="img"
                    src="/big-logo.png"
                    alt="House with beautifull Vinyl floor"
                    width={400}
                    height={400}
                    quality={100} 
                />
               </div>
               <div className="col-sm" id="wix">
                   <Image
                    className="img"
                    src="/wix-logo.png"
                    alt="House with beautifull Vinyl floor"
                    width={626}
                    height={168}
                    quality={100}/>
                </div>
           </div>
       </div>
    );
};
  
export default Platforms;