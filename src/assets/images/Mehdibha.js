import * as React from "react";
import { useTheme } from "@material-ui/styles";
import Gor from "../../assets/images/gor.png";

const Logo = (props) => {
    const theme = useTheme();
    return (
        <>
        <img style={{ height: "250px"}} src={Gor}></img>
        </>
    );
};

export default Logo;
