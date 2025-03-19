import React, { useState } from "react";
import {
  Difficulty,
  EnterName,
  QuestionAmount,
  SelectCategory,
  SelectType,
  SubmitButton,
} from "./setup/index";

export default function Setup({
  flag,
  play,
  setPlay,
  name,
  setName,
  qAmount,
  setQAmount,
  category,
  setCategory,
  difficulty,
  setDifficulty,
  qType,
  setQType,
}) {
  const [fade, setFade] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <form>
      {/* Enter Name Form */}

      {!show && <EnterName flag={flag} name={name} setName={setName} setFade={setFade} fade={fade} setShow={setShow} />}

      {/* Settings Form - Waits for fade-out before appearing */}
      {show && (
        <div className={`${fade ? "fade-out" : "fade-in"}`}>
          <QuestionAmount qAmount={qAmount} setQAmount={setQAmount} />
          <SelectCategory category={category} setCategory={setCategory} />
          <Difficulty difficulty={difficulty} setDifficulty={setDifficulty} />
          <SelectType qType={qType} setQType={setQType} />
          <SubmitButton play={play} setPlay={setPlay} />
        </div>
      )}
    </form>
  );
}
