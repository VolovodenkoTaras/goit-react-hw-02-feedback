import PropTypes from 'prop-types';
import { FeedbackBtn, BtnsWrapper } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnsWrapper>
      {options.map(({ id, category }) => (
        <li key={id}>
          <FeedbackBtn onClick={() => { onLeaveFeedback(category); }} >
            {category}
          </FeedbackBtn>
        </li>
      ))}
    </BtnsWrapper>    
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.exact({
      category: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
   onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;


