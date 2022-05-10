const Shop = ({ id, address } : IShopProps) => {
    return(
        <>
            <span className="shop">{address}</span>
        </>
    );
}

interface IShopProps {
    id: string,
    address: string
}

export default Shop;