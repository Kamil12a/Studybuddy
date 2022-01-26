
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

export default function FieldTofilled({
    question, fill, onChangeFunction
}) {
    const useStyles = makeStyles((theme) => ({
        question: {
            margin: "20px",
            width: "130px",
            [theme.breakpoints.down(780)]: {
                fontSize: "1.2em",
            },
        },
        chooseName: {
            marginLeft: "10px",
        },
        chooseAvatarAndName: {
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
        },

    }));
    const classes = useStyles();


    return (<>
        <div>
            <Grid className={classes.chooseAvatarAndName}>
                <Typography className={classes.question} component="h1" variant="h5">
                    {question}
                </Typography>
                <TextField
                    onChange={onChangeFunction}
                    className={classes.chooseName}
                    label={fill}
                    variant="outlined"
                />
            </Grid>
        </div>
    </>
    );
}


