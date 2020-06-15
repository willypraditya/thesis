export const PREFIX_IMAGE =
  process.env.REACT_APP_SUB && process.env.REACT_APP_SUB.toString() !== "/"
    ? `${process.env.REACT_APP_SUB}/images/`
    : "/images/";

export default {
  PREFIX_IMAGE,
};
