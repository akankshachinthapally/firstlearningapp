import { useState } from "react";
const Options = () => {
  const [category, setCategory] = useState("");
  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div>
      <h2>Choose your favourite category </h2>
      <select defaultValue={category} onChange={handleChange}>
        <option value="">Select any category</option>
        <option value="reels">Reels</option>
        <option value="insta">Insta</option>
        <option value="prime">Prime</option>
        <option value="hotstar">Hotstar</option>
        <option value="stories">Stories</option>
      </select>
      {category && (
        <h2>
          You selected
          <span style={{ color: "red", fontWeight: "bold", fontSize: "40px" }}>
            {" "}
            {category}
          </span>
        </h2>
      )}
    </div>
  );
};

export default Options;
