import PropTypes from 'prop-types';
import { FeedbackBtn, BtnsWrapper } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const [typeGood, typeNeutral, typeBad] = options;
  return (
    <BtnsWrapper>
      <FeedbackBtn type="button" onClick={() => onLeaveFeedback(typeGood)}>
        Good
      </FeedbackBtn>
      <FeedbackBtn type="button" onClick={() => onLeaveFeedback(typeNeutral)}>
        Neutral
      </FeedbackBtn>
      <FeedbackBtn type="button" onClick={() => onLeaveFeedback(typeBad)}>
        Bad
      </FeedbackBtn>
    </BtnsWrapper>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
