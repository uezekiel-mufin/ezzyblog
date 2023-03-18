import React from 'react';
import Moment from 'react-moment';

type Props = {
	date: string;
};
const DateFormatter = ({ date }: Props) => {
	return <Moment format='MMM DD, YYYY, h:mm:ss A' utc date={date} />;
};

export default DateFormatter;
