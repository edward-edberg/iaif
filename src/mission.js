import React from "react";

function Mission() {
  return (
    <article className="mission-values">
      <div className="mission">
        <h3 className="mission-title">Our mission</h3>
        <p className="mission-item">
          The IAIF supports international exchanges between the peoples of
          Indonesia and the United States to create and nurture innovation.
        </p>
      </div>

      <div className="values">
        <div className="value-list">
          <p className="value-item">
            <ion-icon name="wallet"></ion-icon>
          </p>
          <p className="value-desc">
            IAIF funds and provides practical and organizational support for
            educational and cultural exchanges.
          </p>
        </div>
        <div className="value-list">
          <p className="value-item">
            <ion-icon name="people"></ion-icon>
          </p>
          <p className="value-desc">
            IAIF identifies activities where exchange and cooperation can
            encourage fruitful innovations.
          </p>
        </div>
        <div className="value-list">
          <p className="value-item">
            <ion-icon name="globe"></ion-icon>
          </p>
          <p className="value-desc">
            IAIF fosters networks of innovators who collectively can inspire and
            enable other innovators and innovative projects, and
          </p>
        </div>
      </div>
    </article>
  );
}

export default Mission;
