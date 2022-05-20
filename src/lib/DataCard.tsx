interface CardMap {
    img: string;
    url: string;
    title: string;
    description: string;
}

interface Card {
    [id: number]: CardMap;
}

const DataCard: Card = [
    {
        img: "/assets/img/addventure.png",
        url: "https://github.com/JoviRC/Addventure",
        title: "Addventure",
        description:
            "Juego Matemático infantil para Android desarrollado en Angular, Firebase e Ionic. ( Tesis Universitaria )",
    },
    {
        img: `${
            localStorage.getItem("theme") === "light"
                ? "/assets/img/webpagedark.png"
                : "/assets/img/webpagelight.png"
        }`,
        url: "https://github.com/JoviRC/Portfolio-React",
        title: "Portafolio",
        description: "Codigo fuente de esta web desarrollada en React.",
    },
    {
        img: "/assets/img/simple.png",
        url: "https://github.com/JoviRC/simplerest",
        title: "Menu Simple",
        description: "Web para restaurant Simple desarrollada en React.",
    },
    {
        img: "/assets/img/inventory.png",
        url: "https://github.com/JoviRC/inventory-electron",
        title: "Inventory",
        description:
            "(En Desarrollo) Software desarrollado en Electron, ReactJs, Json-Server y Express.",
    },
    {
        img: "/assets/img/checkin.png",
        url: "https://github.com/JoviRC/CheckIn-Clock.git",
        title: "CheckIn",
        description:
            "(En Desarrollo) Software desarrollado en Electron, ReactJs, Json-Server y Express.",
    },
];

export default DataCard;
