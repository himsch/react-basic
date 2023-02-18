import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(prev => !prev);

  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then(res => res.json())
      .then(data => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      });
    return () => {
      console.log('깨끗하게 청소하는 함수');
    };
  }, [checked]);

  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show Only Sale</label>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
