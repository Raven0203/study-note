import Item from "./Item";

const List = ({ Listtest,place_id/* listData, deleteData, submittingStatus  */}) => {
  return <div>
    {
     Listtest.map(item => <Item key={item} place_id={place_id}/>)
    }
     </div>
    
     
  }

export default List;
