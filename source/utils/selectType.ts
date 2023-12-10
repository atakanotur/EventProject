import {MyEvent} from '../types';

export const selectTypeOfEvent = (events: MyEvent[], selectedType: number) => {
  console.log('selectedType', selectedType);
  const filteredData: MyEvent[] = events.filter(e => e.myEventTypeId == selectedType);
  console.log('filteredData', filteredData);
  return filteredData;
};
