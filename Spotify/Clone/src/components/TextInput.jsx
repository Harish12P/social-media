const TextInput = () => {
  return (
    <div className="textInputDiv flex flex-col space-y-2 w-full">
      <label form="124" className="font-semibold">
        sample Label
      </label>
      <input
        type="text"
        placeholder="Placeholder"
        className="p-2 border border-grey-400 border-solid rounded placeholder-gray-500"
        id={label}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};
export default TextInput;
