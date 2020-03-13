const timeSince = (date) => {

        const diffTime = Math.floor(new Date() - date);
        const diffHours = Math.floor(diffTime / (1000 * 60 * 60 ));

        let interval, intervalType;

       if (diffHours < 1) {
           interval = diffHours / 60;
           intervalType = 'минут';
       } else if (diffHours < 24) {
           interval = diffHours;
           intervalType = 'часов';
       } else if (diffHours > 24) {
            interval = Math.floor(diffHours / 24);

            if (interval === 1) {
                intervalType = 'день';
            } else if (interval < 5) {
                intervalType = 'дня';
            } else {
                intervalType =  'дней';
            }
        }

        return interval + ' ' + intervalType + ' назад';
    };

export default timeSince;