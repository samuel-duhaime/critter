import ReactMoment from "react-moment"; // Library to format date

// REF: https://www.npmjs.com/package/react-moment

// Component to format date
const Moment = ({
  date, // Any date
  format, // Example: "hh:mm A · MMM D YYYY"
}) => {
  return <ReactMoment date={date} format={format} />;
};

export default Moment;
