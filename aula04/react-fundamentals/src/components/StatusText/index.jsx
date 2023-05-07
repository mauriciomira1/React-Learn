const status = true;
export const StatusText = () => (
  <h2
    style={{
      color: status ? "#00ff9f" : "#f64348",
    }}
  >
    Current status: {status ? "ON" : "OFF"}
  </h2>
);
