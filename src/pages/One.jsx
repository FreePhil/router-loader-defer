const One = ({style, children}) => {
    style = style || {backgroundColor: "lightgray", margin: 0};
    return (
      <div>
        <h4 style={style}>
            Component One
            {children}
        </h4>
      </div>
    );
  };
  
  export default One;