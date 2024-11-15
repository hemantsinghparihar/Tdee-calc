import React,{useState,useEffect} from 'react'
import '../css/about.css'
import { Link } from 'react-router-dom'
import '../css/faq.css'

function FAQ() {
    const faqData = [
        { id: 1, question: "How accurate is the TDEE estimation?", answer: " People who actually track their calories say my calculator is extremely accurate, and it's a big reason why it's so popular. In numbers, the calorie estimations should be within ~10% IF you are honest about your activity level. If someone needs about 2,300 calories per day, the calculator could be off by 230ish calories. Over the course of 1 month, this is equal to ~7,000 calories (2lbs). Most people, however, overestimate how much they work out (ie they choose 'Heavy Exercise' when they should choose 'Light Exercise'). You should use the TDEE calculator as a reasonable estimate to start with, and adjust your calories up or down based on your weight change over time." 

        },

        { 
            id: 2,
             question: "Which activity level should I choose?",
              answer: "There are 5 selections you can make: Sedentary, Light Exercise (1-2 days per week), Moderate (3-5 days per week), Heavy (6-7 days per week), and Athlete (2x per day). Actual scientists came up with these figures, and until a better way is proven (by scientists), this is what my calculator will use. It's also important to understand that workouts mean REAL LEGIT workouts. If you work out 7 days per week but take it super easy, this does not qualify you as Heavy Exercise. You will need to be honest with yourself on which activity level you belong to. Regardless, the calculator will show you ranges in calories to help you narrow in on your calorie target. Skew low if you want to lose weight, or skew high if you want to build muscle. Or just use exactly what the calculator says, it's what most people do and you'll be far ahead of the game. After a few weeks, and based off your weight, fine-tune your calories up or down to get close to your actual TDEE."
         },

        { 
            id: 3, question: "I'm not losing weight, why?",
             answer: "You're eating too many calories. If you were eating at a sufficient deficit, you would have lost weight. For starters, you need to start using a food scale and tracking your calories with precision. Most people are blown away by how far off their estimates are compared to reality. Also, be aware that losing weight takes time, so be patient and pay attention to how many calories you are eating per day - and decrease your daily calories if you haven't lost any weight for 4 weeks. It's also true that your weight loss can stall. When your weight stalls, I've personally found the most effective course of action is to fast for 2-3 days. When you fast for a few days, it seems your body will finally let go of those lbs (remember, this is just my opinion and this is not medical advice, see a doctor if you are having issues). Another thing you can and should do - increase your calories to your maintenance calories for a few weeks and allow your body's hormones to normalize. I advocate eating at your maintenance calories once per week when you're cutting to keep your hormones in check, then creating the caloric deficit during the other 6 days of the week" 
        },
        {
            id:4,
            question:'How accurate is the ideal weight estimation?',
             answer:"For most people, at least 1 of the formulas should be reasonably accurate. But just like with BMI, the more muscle you have compared to the average person, the less accurate it will be. Don't stress out about this number, it's a general estimate for populations at large, not individuals."
        },
        {
            id:5,
            question:'Do I have to work out to lose weight?',
             answer:"Nope. You can lose almost as much weight as you want through diet alone. You will, however, be much healthier and look better if you work out. Working out is for general health, calorie intake is for weight. If you're intimidated about the idea of going to the gym and people seeing you, just focus on calories for awhile and lose weight. And then, work out at home when you're ready. I highly recommend the Beachbody programs - you don't even have to finish them to get awesome results. If you can only do 10 minutes per day, even though the full workout is 60 minutes, it's okay. Your fitness will improve until the day you can do the full 60 minutes. The key is to just get started and do something, no matter how small. 1 minute per day is better than 0."

        }
      ];
      
      

      const [openPanels, setOpenPanels] = useState({});

      useEffect(() => {
        // Initialize all panels to be open by default
        const initialOpenPanels = faqData.reduce((acc, item) => {
          acc[item.id] = true;
          return acc;
        }, {});
        setOpenPanels(initialOpenPanels);
      }, []);
    
      const togglePanel = (id) => {
        setOpenPanels((prevOpenPanels) => ({
          ...prevOpenPanels,
          [id]: !prevOpenPanels[id] // Toggle the specific panel by its ID
        }));
      };
      
  return (
    <div className='container'>
        <div className="page">
            <h1>FAQ</h1>
            <p>Don't see your question? Please submit your question on the <Link>contact page.</Link> </p>

            <div className="panel-group">
                {faqData.map((item) => (
                <div key={item.id} className="panel panel-default">
                    <div className="panel-heading">
                    <h4 className="panel-heading" onClick={() => togglePanel(item.id)}>
                        <Link>{item.question}</Link>
                    </h4>
                    </div>
                    <div
                    className={`panel-collapse-cls ${openPanels[item.id] ? 'collapse-open' : 'collapse-cls'}`}
                    >
                    <div className="panel-body">{item.answer}</div>
                    </div>
                </div>
                ))}
                {/* <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-heading" onClick={togglePanel}><Link>How accurate is the TDEE estimation?</Link></h4>
                        
                    </div>

                    <div  
                    className={`panel-collapse-cls ${isOpen ? 'collapse-open' : 'collapse-cls'}`}>
                            <div className="panel-body">
                            People who actually track their calories say my calculator is extremely accurate, and it's a big reason why it's so popular. In numbers, the calorie estimations should be within ~10% IF you are honest about your activity level. If someone needs about 2,300 calories per day, the calculator could be off by 230ish calories. Over the course of 1 month, this is equal to ~7,000 calories (2lbs). Most people, however, overestimate how much they work out (ie they choose 'Heavy Exercise' when they should choose 'Light Exercise'). You should use the TDEE calculator as a reasonable estimate to start with, and adjust your calories up or down based on your weight change over time.
                            </div>

                        </div>
                </div> */}

            </div>

        </div>
    </div>
  )
}

export default FAQ
