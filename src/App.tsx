import Guitarra from "./components/Guitarra";
import Header from "./components/Header";
import { useCart } from "./hooks/useCart";

function App() {
  const {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
  } = useCart();

  return (
    <>
      <Header
        cart={cart}
        clearCart={clearCart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestras guitarras</h2>

        <div className="row mt-5">
          {data.map((item) => {
            return (
              <Guitarra key={item.id} guitar={item} addToCart={addToCart} />
            );
          })}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarShop - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
