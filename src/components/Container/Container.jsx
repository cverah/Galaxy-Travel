import "./Container.css";

const Container = ({ title, children }) => {
  return (
    <section className="container">
      {title && <h1>{title}</h1>}
      <p>{children}</p>
    </section>
  );
};

export default Container;
