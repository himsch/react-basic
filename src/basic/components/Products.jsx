import { useEffect, useState } from 'react';

export default function Products() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(prev => !prev);

  useEffect(() => {
    // 초기화.
    setLoading(true);
    setError(undefined);

    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then(res => res.json())
      .then(data => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      })
      .catch(e => setError('에러가 발생함!!'))
      .finally(() => setLoading(false));
    return () => {
      console.log('깨끗하게 청소하는 함수');
    };
  }, [checked]);

  if (loading) return <p>Loading</p>;

  if (error) return <p>{error}</p>;

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
