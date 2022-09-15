import React from "react";

export const SkeletorCard = ({ Class }) => {
  return (
    <div className={`wrapperSkeletonCard ${Class}`}>
      <div className="SkeletorCard SkeletorCard_img" />
      <div className="SkeletorCard SkeletorCard_tittle" />
      <div className="SkeletorCard SkeletorCard_subtittle" />

      <div className="d-flex d-flex-row">
        <div className="SkeletorCard SkeletorCard_circle" />
        <div className="SkeletorCard SkeletorCard_circle" />
        <div className="SkeletorCard SkeletorCard_circle" />
        <div className="SkeletorCard SkeletorCard_circle" />
        <div className="SkeletorCard SkeletorCard_circle" />
      </div>
      <div className="SkeletorCard SkeletorCard_subtittle2" />
      <div className="SkeletorCard SkeletorCard_subtittle3" />
      <div className="d-flex flex-column justify-content-end ">
        <div className="SkeletorCard SkeletorCard_footer1" />
        <div className="SkeletorCard SkeletorCard_footer2" />
      </div>
    </div>
  );
};
