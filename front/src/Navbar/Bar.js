import React from "react";
import '../Style/Bar.css';
import '../Style/BarText.css';
import PageTitle from "./Contents/PageTitle";
import RequestRes from "./Contents/RequestResult";

// import { useState } from 'react';

function Bar() {
    return (
        <div className="Bar">
            <PageTitle />
            <span className="BarText"> - </span>
            <RequestRes />
        </div>
    );
}

export default Bar;