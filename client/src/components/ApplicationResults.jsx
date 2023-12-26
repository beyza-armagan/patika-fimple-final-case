import PropTypes from "prop-types";

function ApplicationResults({ applicationCode }) {
  return <div>{applicationCode}</div>;
}

ApplicationResults.propTypes = {
  applicationCode: PropTypes.string,
};

export default ApplicationResults;
