import { PageTitle } from 'components/PageTitle';
import { EventBoard } from 'components/EventBoard';

import upcomingEvents from '../upcoming-events';

export const App = () => {
  return (
    <>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </>
  );
};
