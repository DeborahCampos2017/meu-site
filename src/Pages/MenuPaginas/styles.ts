const useStyles = () => ({
  container: {
    padding: 1.5,
    backgroundColor: "#3D2D5E",
  },
  boldTitle: {
    fontWeight: "bold",
    color: "white",
    textTransform: "none",
    fontSize: 20,
    "&:hover, &:focus": {
      backgroundColor: "#FFC222",
      transition: "background 0.5s",
      color: "black",
    },
  },
  bold: {
    fontWeight: "bold",
    color: "white",
  },
});

export default useStyles;
