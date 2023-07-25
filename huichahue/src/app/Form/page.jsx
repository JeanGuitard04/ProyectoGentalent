import styles from "./Form.module.css";

const Form = () => {
  return (
    <section className={styles.form}>
      <br />
      <br />
      <center>
        <br />
        <br />
        <br />
        <strong>
          <p className={styles.title}>CONTÁCTANOS</p>
        </strong>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <form action="/backend" method="POST" className={styles.formContent}>
          <label htmlFor="nombre" className={styles.label}>
            <p className={styles.labelText}>NOMBRE:</p>
          </label>
          <input
            autoComplete="off"
            id="nombre"
            name="nombre"
            placeholder="Ingresa tu nombre"
            type="text"
            className={styles.input}
          />
          <br />
          <br />

          <label htmlFor="rut" className={styles.label}>
            <p className={styles.labelText}>RUT:</p>
          </label>
          <input
            autoComplete="off"
            id="rut"
            name="rut"
            placeholder="(Opcional)"
            type="text"
            className={styles.input}
          />
          <br />
          <br />

          <label htmlFor="tienda-o-local" className={styles.label}>
            <p className={styles.labelText}>Tienda o local:</p>
          </label>
          <input
            autoComplete="off"
            id="tienda-o-local"
            name="tienda-o-local"
            placeholder="(Opcional)"
            type="text"
            className={styles.input}
          />
          <br />
          <br />

          <label htmlFor="teléfono" className={styles.label}>
            <p className={styles.labelText}>Teléfono:</p>
          </label>
          <input
            autoComplete="off"
            id="teléfono"
            name="teléfono"
            placeholder="Ingresa tu teléfono"
            type="text"
            className={styles.input}
          />
          <br />
          <br />

          <label htmlFor="correo-electrónico" className={styles.label}>
            <p className={styles.labelText}>Correo Electrónico:</p>
          </label>
          <input
            autoComplete="off"
            id="correo-electrónico"
            name="correo-electrónico"
            placeholder="Ingresa tu e-mail"
            type="text"
            className={styles.input}
          />
          <br />
          <br />

          <label htmlFor="solicitudes" className={styles.label}>
            <p className={styles.labelText}>Solicitud</p>
          </label>
          <select id="solicitudes" name="solicitudes" className={styles.select}>
            <option value="consultas" className={styles.option}>
              Consultas o Pedidos
            </option>
            <option value="venta-mayorista" className={styles.option}>
              Venta Mayorista
            </option>
            <option value="reclamos-y-sugerencias" className={styles.option}>
              Reclamos y Sugerencias
            </option>
          </select>
          <br />
          <br />

          <label htmlFor="mensaje" className={styles.label}>
            <p className={styles.labelText}>Mensaje:</p>
          </label>
          <textarea className={styles.textarea}></textarea>
          <br />
          <input type="submit" className={styles.submitButton} />
        </form>
        <br />
        <br />
        <br />
      </center>
    </section>
  );
};

export default Form;
