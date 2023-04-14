const Footer = () => {
  return (
    <div className="m-auto bg-[#282B3A]">
      <div className="divide-y divide-[#91939F]">
        <div className="flex text-white">
          <div className="p-4 pl-20">
            <h1 className="text-lg py-2 pl-">Account</h1>
            <ul className="text-sm text-[#91939F]">
              <li>Login</li>
              <li>Sign Up</li>
              <li>Redeem a Gift Card</li>
            </ul>
          </div>
          <div className="p-4">
            <h1 className="text-lg py-2">Company</h1>
            <ul className="text-sm text-[#91939F]">
              <li>VIP Lounge Rewards</li>
              <li>Reviews</li>
              <li>Sustainability</li>
              <li>Recycling Scheme</li>
              <li>About Us</li>
              <li>Become an Affiliate</li>
              <li>Careers</li>
              <li>Stockists</li>
            </ul>
          </div>
          <div className="p-4">
            <h1 className="text-lg py-2">Get Help</h1>
            <ul className="text-sm text-[#91939F]">
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Shipping Information</li>
              <li>Return Policy</li>
            </ul>
          </div>
        </div>
        
       
          <div className="flex items-center text-white justify-center p-8 text-sm">
            <h1 className="pr-2">© Function 2023</h1>
            <h1 className="pl-2">Sitemap</h1>
          </div>
        </div>
     
    </div>
  );
};

export default Footer;
