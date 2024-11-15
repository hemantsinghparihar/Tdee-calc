import React, { useState } from 'react';
import '../css/home.css';
import { Link, NavLink } from 'react-router-dom';
import MeasureContent from '../component/MeasureContent';

function Home() {
  const [activeTab, setActiveTab] = useState(1);

  const calc = ['Imperial', 'Metric'];

  return (
    <div className='container'>
      <section className='hero'>
        <div className="hero-headline-container">
          <h2 className='nice-headline'>Learn How Many Calories You Burn Every Day</h2>
          <p className='hero-text text-center'>
            <strong>Use the TDEE calculator to learn your 
              <em>Total Daily Energy Expenditure</em></strong>, a measure of how many calories you burn per day. This calorie calculator will also display your&nbsp;  
              <abbr title="Body Mass Index">BMI</abbr>,&nbsp; <abbr title="Body Metabolic Rate">BMR</abbr>,&nbsp; <abbr title="Macronutrients">Macros</abbr> &nbsp;
              <span>& many other useful statistics!</span>
          </p>
        </div>

        {/* nav tab */}
        <ul className='nav-tabs' id='unit-tabs'>
          {calc.map((one, index) => (
            <li key={index}>
              <NavLink
                onClick={() => setActiveTab(index)}
                className={activeTab === index ? 'active-tab' : 'non-active'}
              >
                {one}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* measure part===== */}
        <div className='measure-sec'>
          <MeasureContent unit={calc[activeTab]} />
          <div className="measure-ad">
            <div style={{ minWidth: '336px', minHeight: '180px', marginTop: '20px' }}>
              <div style={{ minWidth: 'inherit', minHeight: 'inherit' }}>
                {/* <div style={{minWidth:'300px',minHeight:'250px'}}>
                  <img src="https://static-cse.canva.com/blob/1101020/create_ad-maker_lead.a2ca464d.jpg" alt="" />
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* line  */}
        <hr />
        <p className='text-center'>
          <small>Questions? Email me at rob@tdeecalculator.net</small>
          <br />
          …and don't forget to check the &nbsp; 
          <span>FAQ</span>
        </p>
      </section>

      <h3 className='nice-font'>How TDEE Is Calculated</h3>
      <div className='chart-content'>
        <div className="chart-left">
          <p>Your Total Daily Energy Expenditure (TDEE) is an estimation of how many calories you burn per day when exercise is taken into account. It is calculated by first figuring out your Basal Metabolic Rate, then multiplying that value by an activity multiplier.</p>
          <p>
            Since your BMR represents how many calories your body burns when at rest, it is necessary to adjust the numbers upwards to account for the calories you burn during the day. This is true even for those with a sedentary lifestyle. Our TDEE calculator uses the best formulas and displays your score in a way that's easy to read and meaningful
          </p>
        </div>
        <div className="chart-right">
          <img src="https://tdeecalculator.net/assets/images/tdee-pie-chart.png" alt="" />
        </div>
      </div>

      {/* <div className="ad-banner">
        <div className="ad-banner-in">
          <img src="https://www.wordstream.com/wp-content/uploads/2021/07/banner-ads-examples-ncino.jpg" alt="" />
        </div>
      </div> */}
    </div>
  );
}

export default Home;







// import React,{useState} from 'react'
// import '../css/home.css'
// import { Link,NavLink } from 'react-router-dom'
// import MeasureContent from '../component/MeasureContent'

// function Home() {
//   const [activeTab, setActiveTab]=useState(1)

//   const calc=['Imperial','Metric']
//   return (
//     <div className='container'>

//       <section className='hero'>
//         <div className="hero-headline-container">
//           <h2 className='nice-headline'>Learn How Many Calories You Burn Every Day</h2>
//           <p className='hero-text text-center'>
//             <strong>Use the TDEE calculator to learn your 
//               <em>Total Daily Energy Expenditure</em></strong>, a measure of how many calories you burn per day. This calorie calculator will also display your&nbsp;  
//               <abbr title="Boday Mass Index">BMI</abbr>,&nbsp; <abbr title="Body Metabolic Rate">BMR</abbr>,&nbsp; <abbr title="Macronutreints">Macros</abbr> &nbsp;
//               <span>& many other useful statistics!</span>
//           </p>
//         </div>

//         {/* nav tab */}
//         <ul className='nav-tabs' id='unit-tabs'>
//           {calc.map((one,index)=>(
//             <li>
//             <NavLink onClick={() => setActiveTab(index)}
//               className={` ${activeTab === index ? 'active-tab' : 'non-active'}`}
//               >
//                 {one}
//             </NavLink>
//           </li>
//           ))}
          
//         </ul>

//         {/* measure part===== */}
//         <div className='measure-sec'>
//           <MeasureContent  />
//           <div className="measure-ad">
//             <div style={{minWidth:'336px',minHeight:'180px',marginTop:'20px'}}>
//               <div style={{minWidth:'inherit',minHeight:'inherit'}}>
//                 {/* <div style={{minWidth:'300px',minHeight:'250px'}}>
//                   <img src="https://static-cse.canva.com/blob/1101020/create_ad-maker_lead.a2ca464d.jpg" alt="" />

//                 </div> */}
//               </div>

//             </div>

//           </div>

//         </div>

//         {/* line  */}
//         <hr />
//           <p className='text-center'>
//             <small>Questions? Email me at rob@tdeecalculator.net</small>
//             <br />
//             …and don't forget to check the &nbsp; 
//             <span >FAQ</span>
//           </p>
      
//       </section>

//       <h3 className='nice-font'>How TDEE Is Calculated</h3>
//       <div className='chart-content  '>
//           <div className="chart-left">
//             <p>Your Total Daily Energy Expenditure (TDEE) is an estimation of how many calories you burn per day when exercise is taken into account. It is calculated by first figuring out your Basal Metabolic Rate, then multiplying that value by an activity multiplier.</p>
//             <p>
//               Since your BMR represents how many calories your body burns when at rest, it is necessary to adjust the numbers upwards to account for the calories you burn during the day. This is true even for those with a sedentary lifestyle. Our TDEE calculator uses the best formulas and displays your score in a way that's easy to read and meaningful
//             </p>
//           </div>
//           <div className="chart-right ">
//             <img src="https://tdeecalculator.net/assets/images/tdee-pie-chart.png" alt="" />
//           </div>
//       </div>

//       {/* <div className="ad-banner">
//         <div className="ad-banner-in">
//           <img src="https://www.wordstream.com/wp-content/uploads/2021/07/banner-ads-examples-ncino.jpg" alt="" />

//         </div>
//       </div> */}

//     </div>
//   )
// }

// export default Home
