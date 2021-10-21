import React from "react";
import { Particles as ReactParticles } from "react-tsparticles";
import options from "../config/particles.json";

const Particles = () => {
    return (
        <div className="particle-container">
            <ReactParticles options={options} height={"40vh"} />
        </div>
    );
};
export default Particles;