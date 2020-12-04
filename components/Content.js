const Content = ({d}) => {
    return (
        <div>
           <h3>{d.heading}</h3>
            <p>{d.text}</p>
            <p>{d.link}</p>
        </div>
    );
};

export default Content;