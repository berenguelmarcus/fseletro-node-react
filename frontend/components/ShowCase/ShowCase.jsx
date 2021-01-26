const ShowCase = () => {

const [showcase, setShowCase] = React.useState([]);

React.useEffect(async () => {
const url = "http://localhost:3000/product";
const response = await fetch(url);
setShowCase(await response.json());
}, []);

return (
<div className="container">
    <div className="list-categories my-3">
        <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action bg-dark text-white"><b>Categorias</b></a>
            <a href="#" className="list-group-item list-group-item-action">Todos (12) </a>
            <a href="#" className="list-group-item list-group-item-action">Geladeiras (3)
            </a>
            <a href="#" className="list-group-item list-group-item-action">Fogões (2) </a>
            <a href="#" className="list-group-item list-group-item-action">Micro-ondas (3)
            </a>
            <a href="#" className="list-group-item list-group-item-action">Lavadora de
                Roupas (2) </a>
            <a href="#" className="list-group-item list-group-item-action">Lavadora de
                Louças (2) </a>
        </div>
    </div>
    <div className="showcase my-3 text-center">
        {showcase.map((element) => {
        return (
        <div className="box-product mx-4 pt-4">
            <div className="card" key={element.product_id}>
                <img id="productImg" className="img-box rounded mx-auto d-block p-2" src={"./img/eletros_img/" +
                    element.product_img} />
                <div className="card-body">
                    <p className="card-text">
                        {element.product_name}
                    </p>
                    <p className="card-text text-success">
                        <b>R$ {element.product_promotion_price}</b>
                    </p>
                    <p className="card-text text-danger">
                        <del>R$ {element.product_price}</del>
                    </p>
                </div>
            </div>
        </div>
        );
        })}
    </div>
</div>
);
}