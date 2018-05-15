    import React from "react";
    import ReactDom from "react-dom";

    const title = "welcome to the first react-minimilist-app"

    const tracks = [
        {
            title: "title1"
        },
        {
            title: "title2"
        }
    ];


    ReactDom.render(<div>
        {tracks.map((track)=> {
            return <div className="track" key={track.title}>{track.title}</div>;
        })}
    </div>, document.getElementById("app"));

    module.hot.accept();