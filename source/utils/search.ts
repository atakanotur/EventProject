import {MyEvent} from '../types';

var myData: MyEvent[];

export const search = (events: MyEvent[], searchText: String) => {
  myData = events;
  const event: MyEvent = {
    id: 0,
    myEventTypeId: 0,
    userId: 0,
    name: '',
    address: '',
    date: new Date(),
    participantLimit: 0,
    participantCount: 0,
  };
  let data: MyEvent[] = [];
  for (let variable in event) {
    data = removeDuplicates(data.concat(searchType(variable, searchText)));
  }
  return data;
};

const searchType = (type: any, searchText: String) => {
  const data: MyEvent[] = myData.filter((item: any) => {
    const itemData: MyEvent[] = parseTypes(item[type]);
    const textData: any = searchText.toLowerCase();
    return itemData.indexOf(textData) > -1;
  });
  return data;
};

const parseTypes = (item: any) => {
  const typeOfItem = typeof item;
  if (typeOfItem == 'string') return item.toLowerCase();
  else return item.toString().toLowerCase();
};

const removeDuplicates = (data: MyEvent[]) => {
  return data.filter((item, index) => data.indexOf(item) === index);
};
