"use client";
import { StarIcon } from '@heroicons/react/24/solid'
import { HeartIcon, StarIcon as StarIconOutline } from '@heroicons/react/24/outline'

import React, { useEffect, useLayoutEffect } from "react";
import { Divide, Heart, HeartOff, HeartPulseIcon } from 'lucide-react';



export default function FavoriteButton({ car_id }: { car_id: number }) {
    const [favorited, setFavorited] = React.useState<boolean>(false);
    const [show, setShow] = React.useState<boolean>(false);
    const [available, setAvailable] = React.useState<boolean>(true);
    useEffect(() => {
        fetch(`${location.protocol}//${window.location.host}/api/profile/favorites?car_id=${car_id}`, {
            method: "GET"
        })
            .then(res => res.json()).then(json => {
                console.log(`JSON : ${JSON.stringify(json)}`);
                if (JSON.stringify(json).includes(`{"error":"Unauthorized"}`)) {
                    return;
                }
                if (Object.keys(json).length != 0) {
                    setFavorited(true);
                }
                console.log("asd");
                setShow(true);
            });
    }, [setFavorited, setShow]);
    function toggleFavorite() {
        console.log(available);
        if (!available) {
            return;
        }
        setAvailable(false);
        if (favorited) {
            setFavorited(false);
            fetch(`${location.protocol}//${window.location.host}/api/profile/favorites?car_id=${car_id}`, {
                method: "DELETE"
            })
                .then(res => {
                    if (res.status != 200) {
                        console.log(res);
                        setFavorited(true);
                    }
                    setAvailable(true);
                })
        } else {
            setFavorited(true);
            fetch(`${location.protocol}//${window.location.host}/api/profile/favorites?car_id=${car_id}`, {
                method: "PUT"
            })
                .then(res => {
                    if (res.status != 200) {
                        console.error(res.text);
                        setFavorited(false);
                    }
                    setAvailable(true);
                })
        }
    }
    function render() {
        if (favorited) {
            return (
                <button className='bg-blue-200 rounded-lg border-2 w-full border-blue-600 h-12  font-semibold'>
                    <Heart fill="red" className='inline-block ' /> <p className='inline-block'>Kedvelés</p>
                </button>
            )
        } else {
            return (
                <button className='bg-blue-200 rounded-lg border-2 w-full border-blue-600 h-12 font-semibold'>
                    <Heart fill="none" className='inline-block' /> <p className='inline-block'>Kedvelés</p>
                </button>


            )
        }
    }
    return (
        <div className={" " + (available && "cursor-pointer")} onClick={() => { toggleFavorite() }}>
            {show && render()}
        </div>
    );
}
