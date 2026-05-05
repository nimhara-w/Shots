import { brewList } from "../../constants/index.js";

const Brews = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center text-4xl bg-soft-black/90">
      <div className="list">
        <div className="popular">
          <h2>Popular Brews</h2>

          <ul>
            {brewList.map(({ name, description, price }) => (
              <li key={name} className="mb-4">
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <p>{price}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Brews;
