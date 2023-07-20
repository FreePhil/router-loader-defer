const Three = ({style, children}) => {
  style = style || {backgroundColor: "lightyellow", margin: 0};
    return (
      <div>
        <h4 style={style}>
            Component Three
            {children}
        </h4>
      </div>
    );
  };
  
  export default Three;