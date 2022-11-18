import PropTypes from 'prop-types';

import { Event } from 'components/Event';
import css from './EventBoard.module.css';

export const EventBoard = ({ events }) => {
  return (
    <div className={css.evenBoard}>
      {events.map(({ name, location, speaker, type, time: { start, end } }) => (
        <Event
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={start}
          end={end}
        />
      ))}
    </div>
  );
};

EventBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: PropTypes.shape({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};
