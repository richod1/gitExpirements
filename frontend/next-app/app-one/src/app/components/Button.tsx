

export default function Button(){
    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
      ];

      const listItems=products.map((product)=>(
        <li key={product.id}>
            {product.title}

        </li>
      ))
    return(
        <>
        <button>Click</button>
        <ul>{listItems}</ul>
        </>
    )
}