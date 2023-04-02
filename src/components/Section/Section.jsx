import PropTypes from 'prop-types';
import { SectionWithTitle, Title } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <>
      <SectionWithTitle>
        <Title>{title}</Title>
        {children}
      </SectionWithTitle>
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
