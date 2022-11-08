import imagemFundo from "../../Assets/lampadaLaranja.png";

const useStyles = () => ({
  container: {
    backgroundColor: "#FFC222",
    marginTop: 1,
  },
  imagem: {
    backgroundImage: `url(${imagemFundo})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: 2800,
    height: 545,
  },
  bold: {
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 7,
    color: "#3D2D5E",
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    margin: 2,
    color: "#3D2D5E",
  },
  textUltimo: {
    fontWeight: "bold",
    textAlign: "center",
    margin: 2,
    color: "#3D2D5E",
  },
});

export default useStyles;
