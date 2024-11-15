import React from 'react'
import '../css/home.css'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { setStatsData } from '../feature/calcSlice';


function MeasureContent(props) {
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
console.log('✌️props --->', props);
const unit=props.unit


const onSubmit = (data) => {
    console.log('data for calculation',data);

    const { gender, age, weight, height, activity, bodyFat } = data;
    let bmr;

    
    
    // return bmi.toFixed(2);

    let heightMeter=height/100
    let bmiE=weight/(heightMeter*heightMeter)
    let bmi=bmiE.toFixed(2);

    if (bodyFat) {
      const LBM = weight * (1 - bodyFat / 100); //lean body mass
      bmr = Math.round(370 + (21.6 * LBM)); //basel metabolic rate
    } else {
      const s = gender === 'male' ? 5 : -151;
      bmr = Math.round((10 * weight + 6.25 * height - 5 * age) + s);
    }

    const activityMultiplier = parseFloat(activity);
    const tdee = Math.round(bmr * activityMultiplier);

    const harrisBenedict = gender === 'male'
      ? (13.397 * weight + 4.799 * height - 5.677 * age) + 88.362
      : (9.247 * weight + 3.098 * height - 4.330 * age) + 447.593;

    console.log('BMR:', bmr);
    console.log('Harris-Benedict:', harrisBenedict);



    const heightInInches = height / 2.54;
    const inchesOver5Feet = heightInInches - 60;

    const devineIdealWeight = gender === 'male'
        ? 50 + 2.3 * inchesOver5Feet
        : 45.5 + 2.3 * inchesOver5Feet;

    // Hamel Formula Ideal Weight
    const hamelIdealWeight = gender === 'male'
        ? 48 + 2.7 * inchesOver5Feet
        : 45.5 + 2.2 * inchesOver5Feet;

    const robinsonIdealWeight = gender === 'male'
    ? 52 + 1.9 * inchesOver5Feet
    : 49 + 1.7 * inchesOver5Feet;  
    
    const millerIdealWeight = gender === 'male'
        ? 56.2 + 1.41 * inchesOver5Feet
        : 53.1 + 1.36 * inchesOver5Feet;

    // Round to one decimal place
    const roundedDevineIdealWeight = Math.round(devineIdealWeight * 10) / 10;
    const roundedHamelIdealWeight = Math.round(hamelIdealWeight * 10) / 10;
    const roundedRobinsonIdealWeight = Math.round(robinsonIdealWeight * 10) / 10;
    const roundedMillerIdealWeight = Math.round(millerIdealWeight * 10) / 10;


    const stats={
        bmr,
        bodyFat,
        bmi,
        harrisBenedict,
        tdee,
        devineIdealWeight: roundedDevineIdealWeight,
        hamelIdealWeight: roundedHamelIdealWeight,
        robinsonIdealWeight:roundedRobinsonIdealWeight,
        millerIdealWeight: roundedMillerIdealWeight,
    }
    dispatch(setStatsData(stats))
    navigate('/results', { state: { stats } })

  };



  return (
    <div className='measure-content'>
        <div className="form-metric">
          
        {unit==='Metric' &&
            <form className='form-metric-in' onSubmit={handleSubmit(onSubmit)} action="">
            <table>
                <tbody>
                    <tr>
                            <td className='col1'>Gender</td>
                            <td>
                                <label htmlFor="">
                                    <input {...register('gender', { required: true })} type="radio" id='male-metric' name='gender' value='male' checked/>
                                    Male
                                </label>
                                <label htmlFor="">
                                    <input {...register('gender')} type="radio" id='female-metric' name='gender' value='female' />
                                    Female
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td className='col1'>
                                <label htmlFor="age">Age</label>
                            </td>
                            <td>
                                <input {...register('age', { required: true })} type="text" name="age"  className='form-control' id='age-matric' style={{width:'60px'}} maxLength={3} />
                            </td>
                        </tr>

                    <tr>
                        <td className='col1'>
                            <label htmlFor="weight">Weight</label>
                        </td>
                        <td>
                            <input {...register('weight', { required: true })} type="text" name="weight"  className='form-control' id='weight-matric' style={{width:'60px'}} maxLength={5} placeholder='kg' />
                        </td>
                    </tr>

                    <tr>
                        <td className='col1'>
                            <label htmlFor="height">Height</label>
                        </td>
                        <td>
                            <input {...register('height', { required: true })} type="text" name="height"  className='form-control' id='height-matric' style={{width:'60px'}} maxLength={3} placeholder='cm' />
                        </td>
                    </tr>

                    <tr>
                            <td className='col1'>
                                <label htmlFor="activity">Activity</label>
                            </td>
                            <td>
                                <select {...register('activity', { required: true })} type="text" name="activity"  className='form-control' id='activity' style={{width:'200px'}} maxLength={5} placeholder='kg' >
                                    <option value="1.2" selected>Sedentary(office job)</option>
                                    <option value="1.375" >Light Exercise(1-2 days/weak)</option>
                                    <option value="1.55" >Moderate Exercise(3-5 days/weak)</option>
                                    <option value="1.725" >Heavy Exercise(6-7 days/weak)</option>
                                    <option value="1.99" >Athelete (2x/day)</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td className='col1 text-muted' style={{position:'relative'}}>
                                <label htmlFor="bodyFat">BodyFat%</label>
                                <span style={{position:'absolute',top:'26px',left:'14px'}}>(optional)</span>
                            </td>
                            <td>
                                <input {...register('fat')} type="text" name="fat"  className='form-control' id='fat-matric' style={{width:'40px'}} maxLength={3} placeholder='15' />
                                
                            </td>
                        </tr>


                    <tr style={{marginTop:'22px'}} >
                        <input type="submit" style={{margin:'0 auto', display:'inline-block'}} className='btn-submit' id='submit-matric' name='matric' value={'calculate'} />

                    </tr>
                </tbody>
            </table>

            </form>
        }

            {/* if imperial then this form */}
        {
        unit==='Imperial' &&
            <form className='form-metric-in' action="">
                
                <table>
                    <tbody>
                        <tr>
                            <td className='col1'>Gender</td>
                            <td>
                                <label htmlFor="">
                                    <input {...register('gender', { required: true })} type="radio" id='male-metric' name='gender' value='male' checked/>
                                    Male
                                </label>
                                <label htmlFor="">
                                    <input {...register('gender')} type="radio" id='female-metric' name='gender' value='female' />
                                    Female
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td className='col1'>
                                <label htmlFor="age">Age</label>
                            </td>
                            <td>
                                <input {...register('age', { required: true })} type="text" name="age"  className='form-control' id='age-matric' style={{width:'60px'}} maxLength={3} />
                            </td>
                        </tr>

                        <tr>
                            <td className='col1'>
                                <label htmlFor="weight">Weight</label>
                            </td>
                            <td>
                                <input {...register('weight', { required: true })} type="number" name="weight"  className='form-control' id='weight-matric' style={{width:'60px'}} maxLength={5} placeholder='lbs' />
                            </td>
                        </tr>

                        <tr>
                            <td className='col1'>
                                <label htmlFor="height">Height</label>
                            </td>
                            <td>
                                <select {...register('height', { required: true })} name="height" className='form-control' id="">
                                    <option selected value="55">4ft 7in</option>
                                    <option value="56">4ft 8in</option>
                                    <option value="57">4ft 9in</option>
                                    <option value="58">4ft 10in</option>
                                    <option value="59">4ft 11in</option>
                                    <option value="60">5ft 0in</option>
                                    <option value="61">5ft 1in</option>
                                    <option value="62">5ft 2in</option>
                                    <option value="63">5ft 3in</option>
                                    <option value="64">5ft 4in</option>
                                    <option value="65">5ft 5in</option>
                                    <option value="66">5ft 6in</option>
                                    <option value="67">5ft 7in</option>
                                    <option value="69">5ft 8in</option>
                                    <option value="70">5ft 9in</option>
                                    <option value="71">5ft 10in</option>
                                    <option value="72">5ft 11in</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td className='col1'>
                                <label htmlFor="activity">Activity</label>
                            </td>
                            <td>
                                <select {...register('activity', { required: true })} type="text" name="activity"  className='form-control' id='activity' style={{width:'200px'}} maxLength={5} placeholder='kg' >
                                    <option value="1.2" selected>Sedentary(office job)</option>
                                    <option value="1.375" >Light Exercise(1-2 days/weak)</option>
                                    <option value="1.55" >Moderate Exercise(3-5 days/weak)</option>
                                    <option value="1.725" >Heavy Exercise(6-7 days/weak)</option>
                                    <option value="1.99" >Athelete (2x/day)</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td className='col1 text-muted' style={{position:'relative'}}>
                                <label htmlFor="bodyFat">BodyFat%</label>
                                <span style={{position:'absolute',top:'26px',left:'14px'}}>(optional)</span>
                            </td>
                            <td>
                                <input {...register('fat', { required: true })} type="number" name="fat"  className='form-control' id='fat-matric' style={{width:'40px'}} maxLength={3} placeholder='15' />
                                
                            </td>
                        </tr>

                        <tr style={{marginTop:'22px'}} >
                            <input  type="submit" style={{margin:'0 auto', display:'inline-block'}} className='btn-submit' id='submit-matric' name='matric' value={'calculate'} />

                        </tr>
                    </tbody>
                </table>

            </form>
        }
            

        </div>
      
    </div>
  )
}

export default MeasureContent
