const Item = ({ detail,place_id,itemtest }) => {
/* 
  function deleteItem() {
    submittingStatus.current = true
    deleteData(function(prev) {
      return prev.filter(item => item.id !== id)
    })
  } */

  return (
    <div className="item">
      <div>
        <p>{place_id}</p>
        <p>
          我是行程
          <button /* onClick={deleteItem}  */className="remove">刪除行程</button>
        </p>
      </div>
      
    </div>
  );
};

export default Item;
