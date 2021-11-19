const FourthSection = () => {
  return (
    <div className="heroes-2 wf-section">
      <div
        data-w-id="b935e862-faa4-0ed0-2abd-3556f4b0a7c0"
        style={{
          opacity: 1,
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
        className="container"
      >
        <div className="section-display left">
          <div className="text-display dark">NEMESIS</div>
        </div>
        <div className="flex-columns row w-row">
          <div className="column-10 w-col w-col-5">
            <h3 className="nemesis-text mb-20">ネメシス</h3>
            <h3 className="text-white mb-20 white-text">NEMESIS</h3>
            <p className="text-white-opacity mb-40 white-text">
              Each bloodline has a dark force that seeks its way to power. As
              long as there is a concept of victors the vanquished will also
              exist.{" "}
            </p>
          </div>
          <div className="column w-col w-col-7">
            <img
              src="https://assets-global.website-files.com/614234887546d4556cfcc459/6154f9a0b085f3358d603894_4.png"
              loading="lazy"
              width={650}
              sizes="(max-width: 767px) 92vw, (max-width: 1919px) 55vw, 650px"
              srcSet="https://assets-global.website-files.com/614234887546d4556cfcc459/6154f9a0b085f3358d603894_4-p-500.png 500w, https://assets-global.website-files.com/614234887546d4556cfcc459/6154f9a0b085f3358d603894_4-p-800.png 800w, https://assets-global.website-files.com/614234887546d4556cfcc459/6154f9a0b085f3358d603894_4-p-1080.png 1080w, https://assets-global.website-files.com/614234887546d4556cfcc459/6154f9a0b085f3358d603894_4.png 1500w"
              alt=""
              className="heroes-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FourthSection;
