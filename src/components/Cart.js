export default function Cart() {
  const l1 = 80;
  const l2 = 100;
  const l3 = 150;
  return (
    <div>
      <h2>Panier</h2>
      <ul>
        <li>Location1 : {l1}€</li>
        <li>Location2 : {l2}€</li>
        <li>Location3 : {l3}€</li>
      </ul>
      Total : {l1 + l2 + l3}€
    </div>
  );
}
