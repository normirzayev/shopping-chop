import _ from "lodash";

export default function Pagination({countItems, onPageChange, pageSize, currentPage }){
  const pageCount = Math.ceil(countItems / pageSize);
  if(pageCount === 1){return null}
  const pages = _.range(1, pageCount + 1)
  return(
    <>
      <ul>
        {
          pages.map(page => (
            <li key={page} className={currentPage === page ? "link active" : "link"}>
              <a 
                href="#1"
                onClick={()=> onPageChange(page)}
              >
                {page}
              </a>
            </li>
          ))
        }
      </ul>
    </>
  )
} 