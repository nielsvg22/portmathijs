import React from "react";
import LoaderContainer from "../../containers/LoaderContainer";
import Mehdi from "../../assets/images/Mehdi";
import Logo from '../../assets/images/gor.png'

const Loader = () => {
    return (
        <LoaderContainer>
            <Mehdi width={250} />
        </LoaderContainer>
    );
};

export default Loader;
