const Two = ({style, children}) => {
    style = style || {backgroundColor: "lightblue", margin: 0};
    return (
      <div>
        <h4 style={style}>
            Component Two
            {children}
        </h4>
      </div>
    );
  };
  
  export default Two;