"use client";

export default function FilterError({ error }) {
  console.log(error.message);
  return (
    <div id="error">
      <h2>An error occoured!!</h2>
      <p>{error.message}</p>
    </div>
  );
}
