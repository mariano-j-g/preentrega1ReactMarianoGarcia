const Item = ({ id, name, img, price }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h3> {name} </h3>
      <img src="{img} " style={{ with: 100 }} />
      <h3>$ {price} </h3>
      <button onClick={() => navigate("/detail/${id} ")}></button>
    </div>
  );
};
export default Item;
