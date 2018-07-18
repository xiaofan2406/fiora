export const getMessage = state => state.greet.message;

export const getTimes = state => state.greet.times;

export const getGreeting = state =>
  Array(getTimes(state))
    .fill(getMessage(state))
    .join(' ');
