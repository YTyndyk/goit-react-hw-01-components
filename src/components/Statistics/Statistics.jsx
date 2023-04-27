import PropTypes from 'prop-types';
import {
  CardSection,
  Title,
  List,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <CardSection>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map((item, idx) => (
          <Item key={item.id} id={item.id} index={idx}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </CardSection>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
