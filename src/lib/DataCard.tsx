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
        img: "https://i.imgur.com/qZQZQZQ.png",
        url: "https://github.com/JoviRC/Addventure",
        title: "Addventure",
        description:
            "Juego Matematico infantil para Android desarrollado en Angular, Firebase, Ionic. ( Tesis Universitaria )",
    },
    {
        img: "https://i.imgur.com/qZQZQZQ.png",
        url: "https://github.com/JoviRC/Portfolio-React",
        title: "Portafolio",
        description: "Codigo fuente de esta web desarrollada en React.",
    },
    {
        img: "https://i.imgur.com/qZQZQZQ.png",
        url: "https://github.com/JoviRC/menu-simple",
        title: "Menu Simple",
        description: "Web para restaurant Simple desarrollada en React.",
    },
];

export default DataCard;
