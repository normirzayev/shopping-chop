import { slice, take } from "lodash";

export const paginate = (item, currentPage, pageSize) =>{
  const startIndex = (currentPage - 1) * pageSize;
  let list = slice(item, startIndex);
  list = take(list, pageSize)

  return list;
}