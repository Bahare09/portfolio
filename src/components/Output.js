const Output = ({ outputValue, onOutputValueChange }) => {
  return (
    <div className="output-wrapper">
      <textarea
        className="output-field"
        value={outputValue}
        onChange={onOutputValueChange}
      />
    </div>
  );
};

export default Output;
