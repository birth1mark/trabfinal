const Select = ({ selectedValue, values, onChange }) => {
    return (
      <select value={selectedValue} onChange={onChange}>
        {[
          <option key={-1} value="-1">
            Vazio
          </option>,
          ...values.map((produto, index) => {
            return (
              <option key={index} value={produto?.id}>
                {produto?.id}
              </option>
            );
          }),
        ]}
      </select>
    );
  };
  
  export default Select;
  