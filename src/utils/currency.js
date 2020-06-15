import Cookies from "universal-cookie";

const cookies = new Cookies();

const getDefaultCurrency = () => {
  return cookies.get("currency") || "idr";
};

const setDefaultCurrency = (currency) => {
  cookies.set("currency", currency, { path: "/" });
};

const formatCurrency = (data) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(
    data
  );

export { getDefaultCurrency, setDefaultCurrency, formatCurrency };
