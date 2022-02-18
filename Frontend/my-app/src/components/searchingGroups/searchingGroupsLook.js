import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    containerOfGroups: {
        display: "flex",
        justifyContent: "space-around",
        gap: "20px",
        [theme.breakpoints.down(780)]: {
          flexDirection: "column",
          alignItems: "center"
        },
      },
      titleOfGroupsSearching: {
        marginTop: "100px",
        fontSize: "2em",
        [theme.breakpoints.down(780)]: {
          fontSize: "2em"
        },
  
      },
      groupsContainer: {
        textAlign: "center",
      },
      containerOfBody: {
        height: "100vh",
        transition: "all 0.8s ease",
        WebkitTransition: "all 0.8s ease",
        MozTransition: "all 0.8s ease",
      },
}));
