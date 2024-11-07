import React from "react";
import Image from "next/image";
import construction from "/public/construction.jpg";
import animaux from "/public/animaux.jpg";
import pluie from "/public/arche.jpg";
import colombe from "/public/colombe.jpg";
import Link from "next/link";

const SavoirPlus = () => {
  return (
    <div className="container">
      <h1>Le résumé de l&apos;histoire</h1>
      <br />
      <h2>
        L&apos;histoire de l&apos;arche de Noé, que l’on trouve dans le livre de
        la Genèse, raconte comment Noé, famille et tous animaux ont été sauvés
        d&apos;un déluge grâce à l&apos;arche qu&apos;ils avaient construite
        selon les instructions de Dieu.
      </h2>
      <br />
      <h2>
        Un jour, Dieu dit à Noé qu&apos;il est choisi pour construire une arche
        qui peur supporter un mâle et une femelle de chaque espèce
        d&apos;animaux, et ça famille, car une grande inondation va se passer.
      </h2>
      <br />
      <div className="images">
        <Image src={construction} width={400} alt="image" className="left" />
        <h2>
          Noé et sa famille commencent à construire l&apos;arche géante pour que
          tout les animaux puissent y faire.
        </h2>
      </div>
      <br />
      <div className="images">
        <h2>
          Une fois terminé, les animaux ont déjà commencé à entrer. Mais il
          n&apos;avait pas beaucoup de temps avant que le déluge commence.
        </h2>
        <Image src={animaux} width={400} alt="image" className="right" />
      </div>
      <br />
      <div className="images">
        <Image src={pluie} width={400} alt="image" className="left" />
        <h2>
          Après que tous les animaux (un mâle et une femelle) de chaque espèce
          était sur le bateau, le déluge a commencé. Cette pluie constante
          augmentait de plus en plus pendant 40 jours et 40 nuits.
        </h2>
      </div>
      <br />
      <div className="border">
        <h2 className="a">
          Si le déluge a commencé aujourd&apos;hui, le 7 novembre 2024, le
          déluge se terminera le
        </h2>
        <h1>17 décembre 2024</h1>
      </div>
      <br />
      <div className="images">
        <h2>
          Après le déluge, Noé libère un corbeau puis une colombe pour vérifier
          si les eaux se sont retirées. Le corbeau retourne à l&apos;arche, mais
          la colombe revient avec un rameau d&apos;olivier, symbole de vie
          nouvelle et la terre.
        </h2>
        <Image src={colombe} height={300} alt="image" className="right" />
        <br />
        <br />
      </div>
      <Link className="retourner" href="/">
        <button>Retourner</button>
      </Link>
    </div>
  );
};

export default SavoirPlus;
