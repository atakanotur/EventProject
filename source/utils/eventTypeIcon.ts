export const EventTypeIcon = (eventTypeId: number) => {
  if (eventTypeId === 0) return 'cafe-outline';
  else if (eventTypeId === 1) return 'airplane-outline';
  else if (eventTypeId === 2) return 'moon-outline';
  else if (eventTypeId === 3) return 'football-outline';
  else if (eventTypeId === 4) return 'beer-outline';
  else if (eventTypeId === 5) return 'fish-outline';
  else if (eventTypeId === 6) return 'code-working-outline';
  else if (eventTypeId === 7) return 'pizza-outline';
  else if (eventTypeId === 8) return 'color-palette-outline';
  else return 'cafe-outline';
};
