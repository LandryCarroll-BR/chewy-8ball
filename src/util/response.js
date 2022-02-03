import React from "react";

// eslint-disable-next-line react/prop-types
const Response = ({ number }) => {
  switch (number) {
    case 2:
      return <p className="chewy-response">Maybe not that.</p>;
    case 3:
      return <p className="chewy-response">Getting tired. Maybe later.</p>;
    case 4:
      return <p className="chewy-response">Seriously? nooooooo</p>;
    case 5:
      return <p className="chewy-response">But why?</p>;
    case 6:
      return <p className="chewy-response">I mean sinners sin man.</p>;
    case 7:
      return <p className="chewy-response">Seriously?</p>;
    case 8:
      return <p className="chewy-response">Sigh.</p>;
    case 9:
      return <p className="chewy-response">Ooooooo that might work!</p>;
    case 10:
      return <p className="chewy-response">Yes. Way to not suck.</p>;
    case 11:
      return <p className="chewy-response">Thank you for your service.</p>;
    case 12:
      return <p className="chewy-response">Sure.</p>;
    case 13:
      return <p className="chewy-response">I meannnnnnn</p>;
    case 14:
      return <p className="chewy-response">Who gives a shit?</p>;
    case 15:
      return <p className="chewy-response">Not bad.</p>;
    case 16:
      return <p className="chewy-response">Ya know</p>;
    case 17:
      return <p className="chewy-response">*Chewy laughs*</p>;
    case 18:
      return <p className="chewy-response">Big brain.</p>;
    case 19:
      return <p className="chewy-response">I meannnn</p>;
    case 20:
      return <p className="chewy-response">lol nice.</p>;
    case 21:
      return (
        <p className="chewy-response">
          I am uncomfortable with that, but okay.
        </p>
      );
    case 22:
      return <p className="chewy-response">Maybe.</p>;
    case 23:
      return <p className="chewy-response">Seriously man?</p>;
    case 24:
      return <p className="chewy-response">Thats sketchy.</p>;
    case 25:
      return <p className="chewy-response">hmmmm...</p>;
    case 26:
      return <p className="chewy-response">the fuuuuhhhh?</p>;
    case 27:
      return <p className="chewy-response">no.</p>;
    case 28:
      return <p className="chewy-response">please stop.</p>;
    case 29:
      return (
        <p className="chewy-response">I cannot believe you just said that.</p>
      );
    case 30:
      return (
        <p className="chewy-response">This is why we cant have nice things.</p>
      );
    case 31:
      return <p className="chewy-response">Im sorry what did you say??</p>;
    default:
      return <p className="chewy-response">Hello.</p>;
  }
};

export default Response;
