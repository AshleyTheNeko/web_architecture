import React, { useEffect, useState } from "react";
import axios from "axios"
import '../../Style/BarText.css';

function RequestRes() {
    const [element, setElement] = useState("Loading...");

    useEffect(() => {
        axios
            .get("http://localhost:8880/data")
            .then((data) => {
                var infos = data.data.msg;
                setElement(infos);
            })
            .catch((err) => {
                setElement("No server? :(")
            });
    }, []);
    return (
        <span className="BarText">{element}</span>
    );
}

export default RequestRes;