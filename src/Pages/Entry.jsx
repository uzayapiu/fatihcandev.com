import React from "react";
import Posts from "../Components/Posts";
import { useParams } from "react-router-dom";
import OtherNav from "../Components/OtherNav";
import Dvd1 from "../Posts/Dvd1";
import Dvd2 from "../Posts/Dvd2";
import Dvd3 from "../Posts/Dvd3";
import Dvd4 from "../Posts/Dvd4";
import Dvd5 from "../Posts/Dvd5";
import Dvd6 from "../Posts/Dvd6";
import Dvd7 from "../Posts/Dvd7";
import Dvd8 from "../Posts/Dvd8";
import Dvd9 from "../Posts/Dvd9";
import Dvd10 from "../Posts/Dvd10";

export default function Entry() {
    const { id } = useParams();

    if (id === "damn-vulnerable-defi-solutions-1-unstoppable") {
        return (
            <>
                <Dvd1 />
                <OtherNav />
            </>
        );
    } else if (id === "damn-vulnerable-defi-solutions-2-naive-receiver") {
        return (
            <>
                <Dvd2 />
                <OtherNav />
            </>
        );
    } else if (id === "damn-vulnerable-defi-solutions-3-truster") {
        return (
            <>
                <Dvd3 />
                <OtherNav />
            </>
        );
    } else if (id === "damn-vulnerable-defi-solutions-4-side-entrance") {
        return (
            <>
                <Dvd4 />
                <OtherNav />
            </>
        );
    } else if (id === "damn-vulnerable-defi-solutions-5-the-rewarder") {
        return (
            <>
                <Dvd5 />
                <OtherNav />
            </>
        );
    } else if (id === "damn-vulnerable-defi-solutions-6-selfie") {
        return (
            <>
                <Dvd6 />
                <OtherNav />
            </>
        );
    } else if (id === "damn-vulnerable-defi-solutions-7-compromised") {
        return (
            <>
                <Dvd7 />
                <OtherNav />
            </>
        );
    } else if (id === "damn-vulnerable-defi-solutions-8-puppet") {
        return (
            <>
                <Dvd8 />
                <OtherNav />
            </>
        );
    } else if (id === "damn-vulnerable-defi-solutions-9-puppet-v2") {
        return (
            <>
                <Dvd9 />
                <OtherNav />
            </>
        );
    } else if (id === "damn-vulnerable-defi-solutions-10-free-rider") {
        return (
            <>
                <Dvd10 />
                <OtherNav />
            </>
        );
    }
}
