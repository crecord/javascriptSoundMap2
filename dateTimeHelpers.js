function getSeason(dateString) {
   sections = dateString.split("/");
   month = sections[0];
    season = '';
    switch(month) {
        case '12':
        case '1':
        case '2':
            season = 'Winter';
        break;
        case '3':
        case '4':
        case '5':
            season = 'Spring';
        break;
        case '6':
        case '7':
        case '8':
            season = 'Summer';
        break;
        case '9':
        case '10': 
        case '11':
            season = 'Fall';
        break;
    }
    return season;
}

function getTimeOfDay(dayString) {
   sections = dayString.split(":");
   hour = parseInt(sections[0]);
    time = '';
    if ( 5 <= hour <=10){
      time= "morning";
    }
    else if (11 <= hour <=14){
      time = "midday";
    }
    else if (15 <= hour <=20){
      time = "afternoon";
    }
    else if ((21 <= hour <=24) ||( 1 <= hour <= 4) ){
      time = "night";
    }
    return time;
}