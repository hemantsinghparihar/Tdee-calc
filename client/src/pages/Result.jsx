import React, {useState} from 'react'
import '../css/about.css'
import '../css/res.css'
import { Link,useLocation,NavLink } from 'react-router-dom'
import MacronutrientsComponent from '../component/MacronutrientsComponent';
import { useSelector } from 'react-redux';

function Result() {
    const location = useLocation();

    const [activeTab, setActiveTab] = useState(1);
    const stats=useSelector((state)=>state.calc.statsData)

    const calc = ['Maintenance', 'Cutting','Bulking'];

    // const stats = location.state?.stats;
console.log('✌️stats --->', stats);
  return (
    <div className='container'>
      <div className="results">
        <div className="res-headline">
            <h1>Your Stats</h1>
            <div className="queston-para questions">
                <em>Questions or comments? Email me at rob@tdeecalculator.net</em>
            </div>

        </div>

        <div className="alert alert-info mt-3">
            You left the body fat percentage field blank. A more accurate formula is used to estimate your TDEE when you know it. To learn your body fat percentage with calipers from Amazon,<Link className='submit-btn'>click here</Link>
        </div>

        <div className="stats">
            <div className="left-stat">
                <p className='text-center font-bold'>Your Maintenance Calories</p>
                <div id="calories">
                    <div className='pt-[25px]'>
                        <span className='h2'>{stats?.tdee}</span>
                        <br />
                        <span className='cals'>calories per day</span>

                    </div>
                    <hr />
                    <div>
                        <span className='h2'>{stats?.tdee*7}</span>
                        <br />
                        <span className='cals'>calories per week</span>
                    </div>

                </div>

            </div>
            <div className="right-stat">
                <p>
                    Based on your stats, the best estimate for your maintenance calories is 
                    &nbsp;
                 <strong>{stats?.tdee}</strong>  calories per day based on the Katch-McArdle Formula, which is widely known to be the most accurate when body fat is provided. The table below shows the difference if you were to have selected a different activity level.
                </p>
                <div className='stats-table'>
                    <div className="single-stat">
                        <div>Basal Metabolic Rate</div>
                        <div>{stats?.bmr} calories per day</div>
                    </div>
                    <div className="single-stat">
                        <div>Sedentary</div>
                        <div>{Math.round(stats?.bmr*1.2)} calories per day</div>
                    </div>

                    <div className="single-stat">
                        <div>Light Exercise</div>
                        <div>{Math.round(stats?.bmr*1.375)} calories per day</div>
                    </div>

                    <div className="single-stat">
                        <div>Moderate Exercise</div>
                        <div>{Math.round(stats?.bmr*1.55)} calories per day</div>
                    </div>

                    <div className="single-stat">
                        <div>Heavy Exercise</div>
                        <div>{Math.round(stats?.bmr*1.725)} calories per day</div>
                    </div>

                    <div className="single-stat">
                        <div>Athlete</div>
                        <div>{Math.round(stats?.bmr*1.99)} calories per day</div>
                    </div>
                </div>

            </div>

        </div>

        <div className="ideal-stats">
            <div className="ideal-weight">
                <h2>Ideal Weight: {stats?.hamelIdealWeight}-{stats?.millerIdealWeight} kg</h2>
                <p>Your ideal body weight is estimated to be between 89-111 kg based on the various formulas listed below. These formulas are based on your height and represent averages so don't take them too seriously, especially if you lift weights.</p>
                <div className="stats-table">
                    <div className="single-stat">
                        <div>
                            G.J. Hamwi Formula (1964)
                        </div>
                        <div className='text-center'>{stats?.hamelIdealWeight} kg</div>
                    </div>

                    <div className="single-stat">
                        <div>
                         B.J. Devine Formula (1974)
                        </div>
                        <div className='text-center'>{stats?.devineIdealWeight} kg</div>
                    </div>

                    <div className="single-stat">
                        <div>
                        J.D. Robinson Formula (1983)
                        </div>
                       <div className='text-center'>{stats?.robinsonIdealWeight} kg</div>
                    </div>

                    <div className="single-stat">
                        <div>
                             D.R. Miller Formula (1983)
                        </div>
                       <div className='text-center'>{stats?.millerIdealWeight} kg</div>
                    </div>

                    
                </div>

            </div>
            <div className="ideal-bmi-score">
                <h2>BMI Score: {stats?.bmi}</h2>
                <p>Your BMI is {stats?.bmi}, which means you are classified as Underweight…</p>
                <p>🔥 People who use this simple tool from Amazon are usually in significantly better shape versus people who don't.</p>
                
                <div className="stats-table">
                    <div className="single-stat">
                        <div>
                        18.5 or less
                        </div>
                        <div className='text-center'>Underweight</div>
                    </div>

                    <div className="single-stat">
                        <div>
                        18.5 – 24.99
                        </div>
                        <div className='text-center'>Normal Weight</div>
                    </div>

                    <div className="single-stat">
                        <div>
                        18.5 – 24.99
                        </div>
                        <div className='text-center'>Normal Weight</div>
                    </div>

                    <div className="single-stat">
                        <div>
                        18.5 – 24.99
                        </div>
                        <div className='text-center'>Normal Weight</div>
                    </div>

                    
                </div>

            </div>
        </div>

        <h2>Maximum Muscular Potential</h2>

        <div className="lock-my-div">
            <p className='mt-2'>
            How ripped could you get? According to Martin Berkhan's formula, your maximum muscular potential is 63 kg at 5% body fat. Most people have no desire to be 5% body fat though, so you'd be 66 kg at 10% body fat & 69 kg at 15% body fat. These numbers are good goals to aim for if you are bulking up!
            </p>
        </div>

        <h2>Macronutrients</h2>
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

        <MacronutrientsComponent tab={calc[activeTab]} normalCal={stats?.tdee}/>
        <p className='mt-4 text-center'>
            <small>There are 4 calories per gram of both protein and carbohydrates, and 9 calories per gram of fats.</small>
        </p>

        <p className='mt-4'><strong>Not sure what to eat?</strong> G-Plans will automatically generate perfect meal plans for you 💪</p>

        <h2>Calorie Tracking Tools</h2>
        <p>There are only 3 tools required for tracking your calories effectively…</p>

        <div className="tracking-device mx-0 mt-5 flex gap-5">
            <div className="left-track ">
                <a href="">
                    <img src="https://tdeecalculator.net/assets/images/food-scale.jpg" alt="" />
                </a>

            </div>
            <div className="right-track">
                <p className='h4'>Bathroom Scale</p>
                <p>You'll need a bathroom scale to periodically weigh yourself so you can track your results.
                </p>
                <p>Check out this <a href="">bathroom scale</a></p>
            </div>
        </div>

        <div className="tracking-device mx-0 mt-5 flex gap-5">
            <div className="left-track ">
                <a href="">
                    <img src="https://tdeecalculator.net/assets/images/bathroom-scale.jpg" alt="" />
                </a>

            </div>
            <div className="right-track">
                <p className='h4'>MyFitnessPal App</p>
                <p>You'll need to enter everything you eat into a calorie tracker app like MyFitnessPal</p>
                <p><a href="">MyFitnessPal</a> is what most people use and works on iOS/Android.</p>
            </div>
        </div>

        <div className="tracking-device mx-0 mt-5 flex gap-5">
            <div className="left-track ">
                <a href="">
                    <img src="https://tdeecalculator.net/assets/images/myfitnesspal.jpg" alt="" />
                </a>

            </div>
            <div className="right-track">
                <p className='h4'>Food Scale</p>
                <p>You'll need a food scale to accurately measure the calories of the food you're eating (most people underestimate big time!)</p>
                <p>Check out this <a href="">Food scale</a></p>
            </div>
        </div>

        <h4 className='mt-10'>2 Supplements Every Man Should Take</h4>

        <div className="tracking-device mx-0 mt-5 flex gap-5">
            <div className="left-track ">
                <a href="">
                    <img src="https://tdeecalculator.net/assets/images/fish-oil.jpg" alt="" />
                </a>

            </div>
            <div className="right-track2">
                <p className='h4'>Omega-3 Fish Oil</p>
                <p>Scientists keep screaming it. Keep your Omega 3 – Omega 6 ratios balanced, as an imbalance is proven to cause inflammation, and inflammation is proven to lead to disease. The typical western diet gets tons of Omega 6 already (I've heard as high as 16:1!), so it's generally recommended that most people take a fish oil supplement. Check out this high quality Omega-3. Note: Fish oil pills do go rotten, so if you have some at home, cut one open and smell it. If it smells bad, then it's spoiled and do not eat it. Only take fresh fish oil pills. Fish oil supplements are fat soluble.</p>
            </div>
        </div>

        <div className="tracking-device mx-0 mt-5 flex gap-5">
            <div className="left-track ">
                <a href="">
                    <img src="https://tdeecalculator.net/assets/images/naturewise-vitamin-d3.jpg" alt="" />
                </a>

            </div>
            <div className="right-track2">
                <p className='h4'>Vitamin-D</p>
                <p>Vitamin-D is the most important vitamin that the majority of people are deficient in. It's present in very few foods and most people aren't in the sun enough to satisfy the amount of Vitamin-D they need, especially in the winter. Check out this 5,000 IU Vitamin-D supplement. Note: Vitamin-D is a fat soluble vitamin so eat some healthy fats with it (I like olive oil, which is very high in Omega 6 so you'll need that fish oil supplement).</p>
            </div>
        </div>

        <hr />

        <div className='mx-0 mt-8'>
            <div>
                <small>TDEECalculator.net is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</small>
            </div>
        </div>

        






      </div>


    </div>
  )
}

export default Result
