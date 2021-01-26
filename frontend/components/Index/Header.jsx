const Header = () => {
    return (
        <header className="bg-dark">
            <nav className="container nav align-items-center justify-content-between">
                <a href="index.html" className="navbar-brand nav-link text-light">
                    FullStackEletro.com.br
                </a>
                <a href="index.html" className="navbar nav-link text-light">Página Inicial</a>
                <a href="showcase.html" className="navbar nav-link text-light">Produtos</a>
                <a href="adress.html" className="navbar nav-link text-light">Endereços</a>
                <a href="orders.html" className="navbar nav-link text-light">Últimas Vendas</a>
            </nav>
        </header>
    );
}