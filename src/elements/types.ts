export interface albumType {
    title: string;
    photo: string;
}

export interface localisation {
    title: string;
    map: string;
    adress: string;
    phone: string;
    email: string;
    schedule: string;
}

export interface actionCallType {
    title: string;
    text: string;
}

export interface serviceType {
    service: string;
    explanation: string;
    img: string;
}

export interface presentationType {
    welcome: string;
    presentation1: string;
    presentation2: string;
}

export interface heroType {
    restaurantName: string;
    mark: string;
    services: string[];
    slogan: string;
    servBtnText: string;
    contactBtnText: string;
    image: string;
}

export interface specialityType {
    category: string;
    name: string;
    description: string;
    price: string;
    img: string;
}