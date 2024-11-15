import React from 'react';
import '../css/res.css';

function MacronutrientsComponent(props) {
    const tab = props.tab;
    console.log('✌️tab --->', tab);
    const normalCal=props.normalCal
console.log('✌️normalCal --->', normalCal);

    const calorieIntake = tab === 'Cutting' ? normalCal - 500 
        : tab === 'Bulking' ? normalCal + 500 
        : normalCal;

        const macronutrientRatios = {
            moderateCarb: { protein: 0.30, carb: 0.35, fat: 0.35 },
            lowerCarb: { protein: 0.40, carb: 0.40, fat: 0.20 },
            higherCarb: { protein: 0.30, carb: 0.20, fat: 0.50 },
        };

        const calculateMacros = (calories, ratios) => ({
            protein: Math.round((calories * ratios.protein) / 4), // Protein: 4 kcal/g
            carb: Math.round((calories * ratios.carb) / 4),       // Carbohydrates: 4 kcal/g
            fat: Math.round((calories * ratios.fat) / 9),         // Fat: 9 kcal/g
        });
    
        // Calculate macros for each ratio
        const moderateCarbMacros = calculateMacros(calorieIntake, macronutrientRatios.moderateCarb);
        const lowerCarbMacros = calculateMacros(calorieIntake, macronutrientRatios.lowerCarb);
        const higherCarbMacros = calculateMacros(calorieIntake, macronutrientRatios.higherCarb);
    

    if (tab === 'Maintenance') {
        return (
            <div className='mx-auto'>
                <p>These macronutrient values reflect your maintenance calories of 1,703 calories per day.</p>
                <br />
                <div className='macro-table'>

                    <div className="col-macro px-0">
                        <span className='blue-label'>Moderate Carb (30/35/35)</span>
                        <div className='macrobox'>

                            <div className='macro-styles'>
                                <span className='h2'>{moderateCarbMacros.protein}g</span>
                                <br />
                                <span className='cals'>protein</span>
                            </div>
                            <div className='macro-styles'>
                                <span className='h2'>{moderateCarbMacros.carb}g</span>
                                <br />
                                <span className='cals'>carbs</span>
                            </div>
                            <div className='macro-styles'>
                                <span className='h2'>{moderateCarbMacros.fat}g</span>
                                <br />
                                <span className='cals'>fats</span>
                            </div>

                        </div>
                    </div>

                    <div className="col-macro px-0">
                        <span className='blue-label'>Lower Carb (40/40/20)</span>
                        <div className='macrobox'>

                            <div className='macro-styles'>
                                <span className='h2'>{lowerCarbMacros.protein}g</span>
                                <br />
                                <span className='cals'>protein</span>
                            </div>
                            <div className='macro-styles'>
                                <span className='h2'>{lowerCarbMacros.carb}g</span>
                                <br />
                                <span className='cals'>carbs</span>
                            </div>
                            <div className='macro-styles'>
                                <span className='h2'>{lowerCarbMacros.fat}g</span>
                                <br />
                                <span className='cals'>fats</span>
                            </div>

                        </div>
                    </div>

                    <div className="col-macro px-0">
                        <span className='blue-label'>Higher Carb (30/20/50)
                        </span>
                        <div className='macrobox'>

                            <div className='macro-styles'>
                                <span className='h2'>{higherCarbMacros.protein}g</span>
                                <br />
                                <span className='cals'>protein</span>
                            </div>
                            <div className='macro-styles'>
                                <span className='h2'>{higherCarbMacros.carb}g</span>
                                <br />
                                <span className='cals'>carbs</span>
                            </div>
                            <div className='macro-styles'>
                                <span className='h2'>{higherCarbMacros.fat}g</span>
                                <br />
                                <span className='cals'>fats</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if (tab === 'Cutting') {
        return (
            <div className='mx-auto'>
            <p>These macronutrient values reflect your maintenance calories of 1,703 calories per day.</p>
            <br />
            <div className='macro-table'>

                <div className="col-macro px-0">
                    <span className='blue-label'>Moderate Carb (30/35/35)</span>
                    <div className='macrobox'>

                        <div className='macro-styles'>
                            <span className='h2'>{moderateCarbMacros.protein}g</span>
                            <br />
                            <span className='cals'>protein</span>
                        </div>
                        <div className='macro-styles'>
                            <span className='h2'>{moderateCarbMacros.carb}g</span>
                            <br />
                            <span className='cals'>carbs</span>
                        </div>
                        <div className='macro-styles'>
                            <span className='h2'>{moderateCarbMacros.fat}g</span>
                            <br />
                            <span className='cals'>fats</span>
                        </div>

                    </div>
                </div>

                <div className="col-macro px-0">
                    <span className='blue-label'>Lower Carb (40/40/20)</span>
                    <div className='macrobox'>

                        <div className='macro-styles'>
                            <span className='h2'>{lowerCarbMacros.protein}g</span>
                            <br />
                            <span className='cals'>protein</span>
                        </div>
                        <div className='macro-styles'>
                            <span className='h2'>{lowerCarbMacros.carb}g</span>
                            <br />
                            <span className='cals'>carbs</span>
                        </div>
                        <div className='macro-styles'>
                            <span className='h2'>{lowerCarbMacros.fat}g</span>
                            <br />
                            <span className='cals'>fats</span>
                        </div>

                    </div>
                </div>

                <div className="col-macro px-0">
                    <span className='blue-label'>Higher Carb (30/20/50)
                    </span>
                    <div className='macrobox'>

                        <div className='macro-styles'>
                            <span className='h2'>{higherCarbMacros.protein}g</span>
                            <br />
                            <span className='cals'>protein</span>
                        </div>
                        <div className='macro-styles'>
                            <span className='h2'>{higherCarbMacros.carb}g</span>
                            <br />
                            <span className='cals'>carbs</span>
                        </div>
                        <div className='macro-styles'>
                            <span className='h2'>{higherCarbMacros.fat}g</span>
                            <br />
                            <span className='cals'>fats</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        );
    }

    else if (tab === 'Bulking') {
        return (
            <div className='mx-auto'>
            <p>These macronutrient values reflect your maintenance calories of 1,703 calories per day.</p>
            <br />
            <div className='macro-table'>

                <div className="col-macro px-0">
                    <span className='blue-label'>Moderate Carb (30/35/35)</span>
                    <div className='macrobox'>

                        <div className='macro-styles'>
                            <span className='h2'>{moderateCarbMacros.protein}g</span>
                            <br />
                            <span className='cals'>protein</span>
                        </div>
                        <div className='macro-styles'>
                            <span className='h2'>{moderateCarbMacros.carb}g</span>
                            <br />
                            <span className='cals'>carbs</span>
                        </div>
                        <div className='macro-styles'>
                            <span className='h2'>{moderateCarbMacros.fat}g</span>
                            <br />
                            <span className='cals'>fats</span>
                        </div>

                    </div>
                </div>

                <div className="col-macro px-0">
                    <span className='blue-label'>Lower Carb (40/40/20)</span>
                    <div className='macrobox'>

                        <div className='macro-styles'>
                            <span className='h2'>{lowerCarbMacros.protein}g</span>
                            <br />
                            <span className='cals'>protein</span>
                        </div>
                        <div className='macro-styles'>
                            <span className='h2'>{lowerCarbMacros.carb}g</span>
                            <br />
                            <span className='cals'>carbs</span>
                        </div>
                        <div className='macro-styles'>
                            <span className='h2'>{lowerCarbMacros.fat}g</span>
                            <br />
                            <span className='cals'>fats</span>
                        </div>

                    </div>
                </div>

                <div className="col-macro px-0">
                    <span className='blue-label'>Higher Carb (30/20/50)
                    </span>
                    <div className='macrobox'>

                        <div className='macro-styles'>
                            <span className='h2'>{higherCarbMacros.protein}g</span>
                            <br />
                            <span className='cals'>protein</span>
                        </div>
                        <div className='macro-styles'>
                            <span className='h2'>{higherCarbMacros.carb}g</span>
                            <br />
                            <span className='cals'>carbs</span>
                        </div>
                        <div className='macro-styles'>
                            <span className='h2'>{higherCarbMacros.fat}g</span>
                            <br />
                            <span className='cals'>fats</span>
                        </div>

                    </div>
                </div>
            </div>
         
        </div>
        );
    }
    else {
        return null;
    }
}

export default MacronutrientsComponent;
