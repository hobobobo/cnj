/*
 * Jokes Messages
 *
 * This contains all the text for the Jokes component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'CNJ.containers.Jokes';

export default defineMessages({
  more: {
    id: `${scope}.more`,
    defaultMessage: 'More!!!',
  },
  couldNotLoadJokes: {
    id: `${scope}.couldNotLoadJokes`,
    defaultMessage: 'Сould not load jokes',
  },
});
