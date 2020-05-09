const ITEM_MOVED = 'ITEM_MOVED';

const moveItem = (item) => ({
  type: ITEM_MOVED,
  payload: item
});

export {
  ITEM_MOVED
};