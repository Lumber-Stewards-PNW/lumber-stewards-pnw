// import { checkToken } from '../../utilities/users-service'
import React from 'react'; // Corrected import statement for React

import TimberLogo from '../../components/assets/TimberLogo.jpg';

export default function HomePage() {
  return (
    <div className="h-screen">
      <div className="bg-themeGreen p-6">
      <h1 className="text-4xl text-themeNavyBlue font-bold">Welcome to Timber Stewards Northwest</h1>
      <h2 className='text-l text-themeWhite'> "Sustainable Timber Practices, Northwest Values"</h2>
      {/* //"Precision Clearing, Innovative Milling, Sustainable Growth" - add to the about section or switch tagline to this vs current h2 */}
      </div>
      <p className="text-themeDarkGreen text-xl mt-4"></p>
      <img className="" src={TimberLogo} alt="Timber Logo" /> 
    </div>
  );
}