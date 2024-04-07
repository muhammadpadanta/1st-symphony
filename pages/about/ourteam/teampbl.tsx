import React, { useState } from "react";

import "../../../styles/teampbl.css";
import "../../../styles/twclass.css";

export function TeamPbl() {
  const [selected, setSelected] = useState("c1");

  return (
    <>
      <div className="h-screen">
        <div className="pt-10 mb-10">
          <p
            style={{ filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))" }}
            className=" text-6xl xs:pt-24 xl:pt-0 2xl:pt-24 text-gray-200 flex justify-center items-center"
          >
            Check out Our Team
          </p>
        </div>

        <div className="wrapper">
          <div className="containercardteampbl">
            <input
              type="radio"
              name="slide"
              id="c1"
              checked={selected === "c1"}
              onChange={() => setSelected("c1")}
            />
            <label htmlFor="c1" className="cardteampbl">
              <div className="row">
                <div className="icon">🔎</div>
                <div className="description">
                  <h4>PBL - Team 1</h4>
                  <p>Click on the Photo to see Member Details👉</p>
                </div>
              </div>
            </label>

            <input
              type="radio"
              name="slide"
              id="c2"
              checked={selected === "c2"}
              onChange={() => setSelected("c2")}
            />
            <label htmlFor="c2" className="cardteampbl">
              <div className="row">
                <div className="icon">1</div>
                <div className="description">
                  <h4>Yurisha Anindya</h4>
                  <p>Team Leader</p>
                </div>
              </div>
            </label>

            <input
              type="radio"
              name="slide"
              id="c3"
              checked={selected === "c3"}
              onChange={() => setSelected("c3")}
            />
            <label htmlFor="c3" className="cardteampbl">
              <div className="row">
                <div className="icon">2</div>
                <div className="description">
                  <h4>Muhammad Padanta Tarigan</h4>
                  <p>Front-end & Back-end Engineer</p>
                </div>
              </div>
            </label>

            <input
              type="radio"
              name="slide"
              id="c4"
              checked={selected === "c4"}
              onChange={() => setSelected("c4")}
            />
            <label htmlFor="c4" className="cardteampbl">
              <div className="row">
                <div className="icon">3</div>
                <div className="description">
                  <h4>Christoffel Aristo Marbun</h4>
                  <p>UI/UX</p>
                </div>
              </div>
            </label>

            <input
              type="radio"
              name="slide"
              id="c5"
              checked={selected === "c5"}
              onChange={() => setSelected("c5")}
            />
            <label htmlFor="c5" className="cardteampbl">
              <div className="row">
                <div className="icon">4</div>
                <div className="description">
                  <h4>Theodore Kevin Sebastian</h4>
                  <p>...</p>
                </div>
              </div>
            </label>

            <input
              type="radio"
              name="slide"
              id="c6"
              checked={selected === "c6"}
              onChange={() => setSelected("c6")}
            />
            <label htmlFor="c6" className="cardteampbl">
              <div className="row">
                <div className="icon">5</div>
                <div className="description">
                  <h4>Iqbal Haris Munandar</h4>
                  <p>AFK</p>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamPbl;
