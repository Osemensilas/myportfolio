const Packages = () => {
    return ( 
        <>
        <div className="h-max w-full flex flex-wrap items-start justify-between gap-5">
            <div className="card border w-full mb-10 sm:mb-0 rounded border-grey py-8 px-2 sm:w-[48%] h-max sm:h-[max] relative">
              <h2 className="text-2xl font-semibold text-accent mb-4">Starter</h2>
              <p className="text-accent text-sm mb-4">Small businesses, consultants, professional services</p>
              <h2 className="text-3xl text-accent text-semibold mb-4">₦{(120000).toLocaleString()}<span className="text-base"></span></h2>
              <div className="w-full h-max border-t border-grey pt-4">
                <p className="text-accent text-sm mb-1"><i className="fa fa-home text-accent mr-2"></i>5-page professional website</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-paint-brush text-accent mr-2"></i>Custom design</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-mobile text-accent mr-2"></i>Mobile responsive</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-address-book text-accent mr-2"></i>Contact form & social media integration</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-globe text-accent mr-2"></i>Domain registration</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-server text-accent mr-2"></i>1 year hosting</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-envelope text-accent mr-2"></i>Professional Email(3 acounts)</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-lock text-accent mr-2"></i>FREE SSL</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-search text-accent mr-2"></i>Best SEO setup</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-undo text-accent mr-2"></i>2 rounds of revision</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-life-ring text-accent mr-2"></i>30 days post-launch support</p>
              </div>
            </div>
            <div className="card w-full mb-10 sm:mb-0 border rounded border-primary py-8 px-3 sm:w-[48%] h-max sm:h-max relative">
              <div className="absolute -top-5 left-0 h-max w-full flex items-center justify-center">
                <span className="bg-primary text-accent rounded text-sm sm:text-base font-semibold py-2 px-4">Most Popular</span>
              </div>
              <h2 className="text-2xl font-semibold text-accent mb-4">Business PRO</h2>
              <p className="text-accent text-sm mb-4">Growing businesses, agencies, organisation</p>
              <h2 className="text-3xl text-accent text-semibold mb-4">₦{Number(180000).toLocaleString()}<span className="text-base"></span></h2>
              <div className="w-full h-max border-t border-grey pt-4">
                <p className="text-accent text-sm mb-1"><i className="fa fa-home text-accent mr-2"></i>10-page professional Website</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-paint-brush text-accent mr-2"></i>Custom design & advanced features</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-calendar text-accent mr-2"></i>Booking/contact systems</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-bullhorn text-accent mr-2"></i>Blog/news section</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-credit-card text-accent mr-2"></i>Payment Integration(Optional)</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-globe text-accent mr-2"></i>Domain Registration</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-server text-accent mr-2"></i>1 year premium hosting</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-envelope text-accent mr-2"></i>Professional Email(5 account)</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-lock text-accent mr-2"></i>SSL Certificate</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-search text-accent mr-2"></i>Advanced SEO & analytics</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-undo text-accent mr-2"></i>3 rounds revisions</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-life-ring text-accent mr-2"></i>60 days post-launch support</p>
              </div>
            </div>
            <div className="card w-full mb-5 sm:mb-0 border rounded border-grey py-8 px-3 sm:w-[48%] h-max sm:h-max relative">
              <h2 className="text-2xl font-semibold text-accent mb-4">E-commerce Standard</h2>
              <p className="text-accent text-sm mb-4">Online stores, retailer, product businesses</p>
              <h2 className="text-3xl text-accent text-semibold mb-4">₦{Number(250000).toLocaleString()}<span className="text-base"></span></h2>
              <div className="w-full h-max border-t border-grey pt-4">
                <p className="text-accent text-sm mb-1"><i className="fa fa-shopping-bag text-accent mr-2"></i>Full e-commerce website</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-shopping-cart text-accent mr-2"></i>Shopping cart & secure checkout</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-credit-card text-accent mr-2"></i>Payment gateway integration (Paystack/Flutterwave)</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-th-large text-accent mr-2"></i>Product catalog (up to 100 products)</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-tags text-accent mr-2"></i>Inventory management</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-columns text-accent mr-2"></i>Order management dashboard</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-users text-accent mr-2"></i>Custom accounts</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-truck text-accent mr-2"></i>Shipping options</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-globe text-accent mr-2"></i>Domain registration</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-server text-accent mr-2"></i>1 year e-commerce hosting</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-envelope text-accent mr-2"></i>Professional email (5 account)</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-lock text-accent mr-2"></i>SSL Certificate</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-cubes text-accent mr-2"></i>Product upload (first 20 products)</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-life-ring text-accent mr-2"></i>90 days post-launch support</p>
              </div>
            </div>
            <div className="card w-full mb-5 sm:mb-0 border rounded border-grey py-8 px-3 sm:w-[48%] h-max sm:h-max relative">
              <h2 className="text-2xl font-semibold text-accent mb-4">E-commerce Premium</h2>
              <p className="text-accent text-sm mb-4">Serious retailers, Scaling businesses</p>
              <h2 className="text-3xl text-accent text-semibold mb-4">₦{Number(450000).toLocaleString()}<span className="text-base"></span></h2>
              <div className="w-full h-max border-t border-grey pt-4">
                <p className="text-accent text-sm mb-1"><i className="fa fa-globe text-accent mr-2"></i>FREE Domain Name for 1 Year</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-gift text-accent mr-2"></i>Everything in e-commerce standard</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-th-large text-accent mr-2"></i>Unlimited product</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-cogs text-accent mr-2"></i>Advanced features (multi-vendor marketplace option)</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-mobile text-accent mr-2"></i>Mobile app (PWA)</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-bullhorn text-accent mr-2"></i>Marketing automation</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-table text-accent mr-2"></i>Advanced analytics & reports</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-star text-accent mr-2"></i>Custom reviews & ratings</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-gift text-accent mr-2"></i>Loyalty program</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-shopping-cart text-accent mr-2"></i>Advanced cart recovery</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-camera text-accent mr-2"></i>Product photography assistance</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-life-ring text-accent mr-2"></i>6 months post-launch support</p>
                <p className="text-accent text-sm mb-1"><i className="fa fa-phone text-accent mr-2"></i>monthly strategy calls</p>
              </div>
            </div>
        </div>
        </>
     );
}
 
export default Packages;