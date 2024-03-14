import React, { useEffect } from "react";
import { useNavigate } from "react-router";

function NoPage() {
    const navigate = useNavigate();
    useEffect(() => navigate("/"));

    return <div>Uh oh! This page doesn't exist.</div>;
}

export default NoPage;
