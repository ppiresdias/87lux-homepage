
import Image from "next/image";

const Platforms = () => {
    return (
       <div className="container platforms" id="platforms-section">
           <div className="row heading">
               <p>Platforms</p>
           </div>
           <div className="row justify-content-center">
               <div className="col-sm" id="shopify">
               <Image
                    className="img platform-logos"
                    id="shopify-logo"
                    src="/shopify-commerce-logo.png"
                    alt="Shopify logo"
                    width={200}
                    height={150}
                    quality={100}
                />
               </div>
               <div className="col-sm" id="wp">
               <Image
                    className="img platform-logos"
                    src="/wp-logo.png"
                    alt="Wordpress logo"
                    width={450}
                    height={350}
                    quality={100}
                />
               </div>
               <div className="col-sm" id="big-commerce">
               <Image
                    className="img platform-logos"
                    src="/big-logo.png"
                    alt="Big commerce logo"
                    width={400}
                    height={400}
                    quality={100} 
                />
               </div>
               <div className="col-sm" id="wix">
                   <Image
                    className="img platform-logos"
                    src="/wix-logo.png"
                    alt="Wix.com logo"
                    width={626}
                    height={168}
                    quality={100}/>
                </div>
           </div>
       </div>
    );
};
  
export default Platforms;