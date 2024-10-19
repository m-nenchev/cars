
import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(100);
  const toRotate = ["This is a site about cars with problems.", "Here everyone can share a problem with a car.", "Here everyone can get an answer to a car problem"];
  const period = 1000;

  useEffect(() => {
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText((prev) => isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1));

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), period);
        setDelta(period);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(100);
      } else {
        setDelta(isDeleting ? delta / 2 : delta);
      }
    };

    const ticker = setTimeout(() => {
      tick();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, delta]);

  return (
    <section>
      <div>
        <h1>Welcome in Home Cars</h1>
        <span className="txt-rotate">
          <span className="wrap">{text}</span>
        </span>
        <img className="homeImg" src="cars.jpg" alt="Cars Img" />
      </div>
    </section>
  );
}

export default Home;