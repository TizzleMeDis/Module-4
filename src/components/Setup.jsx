import React from "react";
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
  return (
    <form>
      <EnterName name={name} setName={setName} />

      {name && (
        <>
          <QuestionAmount qAmount={qAmount} setQAmount={setQAmount} />
          <SelectCategory category={category} setCategory={setCategory} />
          <Difficulty difficulty={difficulty} setDifficulty={setDifficulty} />
          <SelectType qType={qType} setQType={setQType} />
          <SubmitButton play={play} setPlay={setPlay} />
        </>
      )}
    </form>
  );
}