import { useDispatch } from "react-redux";
import { filterReducerObj } from "../reducers/filterReducer";

const NotesFilter = () => {
  const dispatch=useDispatch();
  const filterSelected=(filterType)=>{
    dispatch(filterReducerObj(filterType));
  }
  return (
    <div>
      <ul>
        <li>
          <input type="radio" name="filter" onChange={()=>filterSelected('ALL')}/>
          <label>All</label>
        </li>
        <li>
          <input type="radio" name="filter" onChange={()=>filterSelected('IMPORTANT')}/>
          <label>Important</label>
        </li>
        <li>
          <input type="radio" name="filter" onChange={()=>filterSelected('NON-IMPORTANT')}/>
          <label>Non-Important</label>
        </li>
      </ul>
    </div>
  )
}

export default NotesFilter;
