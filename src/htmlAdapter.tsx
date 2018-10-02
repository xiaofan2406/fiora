const textInputRender = ({ name, value, updateValue }: FieldRenderProps) => (
  <input
    name={name}
    id={name}
    type="text"
    value={value}
    onChange={event => updateValue(event.target.value)}
  />
);
