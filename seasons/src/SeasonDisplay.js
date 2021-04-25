import './SeasonDisplay.css';
import React from 'react';


const seasonConfig = {
    summer:{
        text: `It's time to go to the beach`,
        iconName: 'sun'
    },
    winter:{
        text: `It's cold`,
        iconName: 'snowflake'
    }
}

const getSeason = function(lat, month){
    if(month > 2 && month < 9){
        // ternary expression
       return lat > 0 ? 'summer' : 'winter';
    }else{
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth())
    const {text, iconName} = seasonConfig[season]
    
    return(
        <div className={`${season} season-display`}>
            <i className={`${iconName} icon massive icon-left`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon massive icon-right`} />
        </div>
    )
};

export default SeasonDisplay