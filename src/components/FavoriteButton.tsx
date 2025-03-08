"use client";
import { StarIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'

import React, { useEffect, useLayoutEffect } from "react";



export default function FavoriteButton({car_id}: {car_id: number}) {
    const [favorited, setFavorited] = React.useState<boolean>(false);
    const [show, setShow] = React.useState<boolean>(false);
    useEffect(() => {
        fetch(`http${window.location.host.includes("localhost:") ? "" : "s"}://${window.location.host}/api/profile/favorites?car_id=${car_id}`, {
            method: "GET"
        })
        .then(res => res.json()).then(json => {
            console.log(`JSON : ${JSON.stringify(json)}`);
            if(JSON.stringify(json).includes(`{"error":"Unauthorized"}`)) {
                return;
            }
            if(Object.keys(json).length != 0) {
                setFavorited(true);
            }
            console.log("asd");
            setShow(true);
        });
    });
    function toggleFavorite() {
        if(favorited) {
            setFavorited(false);
            fetch(`http${window.location.host.includes("localhost:") ? "" : "s"}://${window.location.host}/api/profile/favorites?car_id=${car_id}`, {
                method: "DELETE"
            })
            .then(res => {
                if(res.status != 200) {
                    console.error(res.text);
                    setFavorited(true);
                }
            })
        }else {
            setFavorited(true);
            fetch(`http${window.location.host.includes("localhost:") ? "" : "s"}://${window.location.host}/api/profile/favorites?car_id=${car_id}`, {
                method: "PUT"
            })
            .then(res => {
                if(res.status != 200) {
                    console.error(res.text);
                    setFavorited(false);
                }
            })
        }
    }
    function render() {
        if(favorited) {
            return (<StarIcon/>)
        }else {
            return (<StarIconOutline/>)
        }
    }
    return (
        <div className="mr-3 w-[32px]" onClick={() => {toggleFavorite()}}>
            {show && render()}
        </div>
    );
}
