import PropTypes from 'prop-types';
import { FeedbackList, FeedbackListItem } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <FeedbackList>
      <FeedbackListItem>Good: {good}</FeedbackListItem>
      <FeedbackListItem>Neutral: {neutral}</FeedbackListItem>
      <FeedbackListItem>Bad: {bad}</FeedbackListItem>
      <FeedbackListItem>Total: {total()}</FeedbackListItem>
      <FeedbackListItem>
        Positive feedback: {positivePercentage()}%
      </FeedbackListItem>
    </FeedbackList>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
