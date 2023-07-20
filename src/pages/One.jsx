const One = ({style, children}) => {
    return (
      <div>
        <h4 style={style}>
            Page One
            {children}
        </h4>
      </div>
    );
  };
  
  export default One;