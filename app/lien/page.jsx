import React from "react";
import Image from "next/image";
import Link from "next/link";
import prier from "/public/prier.jpg";
import pureheart from "/public/pureheart.jpg";
import me from "/public/moi.jpeg";

const SavoirPlus = () => {
  return (
    <div className="container">
      <h1>Le lien avec ma vie</h1>
      <br />
      <h2>
        La raison pour laquelle Dieu a fait l&apos;inondation est, car les
        humains étaient très énervés et pas si gentils, alors il voulait
        &quot;nettoyer&quot; le mal de la Terre.
      </h2>
      <br />
      <h2>
        Personnellement, j&apos;aime dédier quelques minutes à Dieu et prier.
        Soit, le matin a l&apos;école, ou avant que je mange, ou même avant de
        dormir. De plus, je vais à l&apos;église chaque semaine le dimanche.
        C&apos;est comme si je &quot;nettoyais&quot; tout ce qui est mal dans
        mon cœur.
      </h2>
      <br />
      <div className="examples">
        <Image className="example" src={prier} alt="image" width={400} />
        <Image className="example" src={pureheart} alt="image" width={400} />
        <Image className="example" src={me} alt="image" width={400} />
      </div>
      <Link className="retourner" href="/">
        <button>Retourner</button>
      </Link>
    </div>
  );
};

export default SavoirPlus;
