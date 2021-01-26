const Orders = () => {

    const [orders, setOrders] = React.useState([]);

    React.useEffect(async () => {
    const url = "http://localhost:3000/order";
    const response = await fetch(url);
    setOrders(await response.json());
    }, []);

    return (
        <div className="container">
            {orders.map((element) => {
                return (
                    <div class="card my-4">
                        <div class="card-body">
                            <h5 class="card-title">Nosso cliente {element.customer_name} adquiriu uma:</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{element.product_name}</h6>
                            <a href="showcase.html" class="card-link">Adquira já o seu!</a>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}