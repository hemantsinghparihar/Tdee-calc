import React from 'react'
import '../css/about.css'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='container'>
      <div className="page">
        <h1>About</h1>
        <p>Hi there! My name is Rob & welcome to <strong>TDEECalculator.net!</strong> My cousin Jake and I co-own this website together. We both became interested in fitness from a relatively young age, and when I began to learn programming as a hobby, Jake convinced me to build this site because he thought it would be a fun project! He was so right… I love running this site and I LOVE reading all the email I get from folks saying how much it has helped them. If you are one of those people I'd love to hear from you too.</p>
        
        <p>It might not seem like it, but TDEECalculator.net has thousands of lines of code powering it and it's quite popular! Jake likes design and I do all the coding as well as make sure the site is fast. If it's running slow or you have any suggestions, please <Link>contact us</Link>.
        </p>

        <h2>About This Site</h2>
        
        <p><Link>TDEECalculator.net</Link> currently gets about 500,000+ visitors per month (and growing rapidly!) from other sites who link to us, from people who share it on Facebook, & from the search engines. If you find it useful we hope you will share it around too!</p>

        <p>
            Disclosure: TDEECalculator.net is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to amazon.com. If you buy any products from Amazon after clicking a link on this website, we will earn a small commission which helps us pay for the costs associated with running this site. Please read our Privacy Policy and Terms of Use.
        </p>

        <h3>Formulas Used</h3>

        <p>
            At its core, TDEECalculator.net uses the Mifflin-St Jeor formula to calculate an estimate of your Basal Metabolic Rate, and then we adjust the numbers to take your activity level into account.
        </p>

        <h4>Mifflin-St Jeor Equation</h4>
        <div className="well">
            <code>Mifflin = (10.m + 6.25h - 5.0a) + s</code>
            <p>
                <em>m</em> &nbsp;
                is &nbsp;
                <em>mass</em> &nbsp;
                in kg &nbsp;
                <em>h</em> &nbsp;
                is &nbsp;
                <em>height</em> &nbsp;
                in cm &nbsp;
                <em>a</em> &nbsp;
                is &nbsp;
                <em>age</em> &nbsp;
                in years &nbsp;
                <em>s</em> &nbsp;
                is +5 for males and -151 for females
            </p>
        </div>

        <h4>Katch-McArdle Equation</h4>

        <p>
            Optionally, if you fill out the body fat percentage field, the calculator will instead use the Katch-McArdle Formula, which is the most accurate formula of all. If you don't know your body fat %, you can pick up a pair of cheap <Link>body fat calipers</Link>  on Amazon, or find a place (try University health departments) that offers DEXA scans. DEXA scans are the gold-standard in determining your body fat percentage and generally cost between $50 - $100.
        </p>

        <div className="well">
            <code>Katch = 370 + (21.6 * LBM)</code>
            <p>
                where &nbsp;
                 <em>LBM</em> &nbsp;
                  is &nbsp;
                <em>lean body mass</em>
            </p>
        </div>

        <h4>Revised Harris-Benedict Equation</h4>
        <p>
            The revised Harris-Benedict equation has been in use since 1984, and we calculate this as well for those who want it.

        </p>

        <div className="well">
            <code>
                Harris-Benedict = (13.397m + 4.799h - 5.677a) + 88.362 (MEN)
                 <br />
                 Harris-Benedict = (9.247m + 3.098h - 4.330a) + 447.593 (WOMEN)
            </code>
            <p><em>m</em> &nbsp;
             is &nbsp;
            <em>mass</em>&nbsp; 
             in kg, &nbsp;
            <em>h</em> &nbsp; 
            is  &nbsp;
            <em>height</em> &nbsp; 
            in cm,&nbsp;
            <em>a</em> &nbsp;is
            <em>age</em>&nbsp;  in years</p>
        </div>

      </div>
      
    </div>
  )
}

export default About
