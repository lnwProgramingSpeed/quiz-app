import { Question } from "./question";

export const question: Question[] = [
    {
        id: 1,
        text: 'Who is Gay',
        image: '../assets/images/gay.jpg',
        choices: [
            { id: 1, text: 'Latte', isAnswer: false },
            { id: 2, text: 'Pain1811', isAnswer: false },
            { id: 3, text: 'angle aerk', isAnswer: false },
            { id: 4, text: 'Head cancer', isAnswer: false },
            { id: 5, text: 'camo', isAnswer: false },
            { id: 6, text: 'lnwFlash', isAnswer: false },
            { id: 7, text: 'All choices are correct', isAnswer: true }
        ]
    },
    {
        id: 2,
        text: 'The taobin destroyer',
        image: '../assets/images/taobin.jpg',
        choices: [
            { id: 1, text: 'Head cancer', isAnswer: true },
            { id: 2, text: 'camo', isAnswer: false },
            { id: 3, text: 'lnwFlash', isAnswer: false },
            { id: 4, text: 'All choices are correct', isAnswer: false }
        ]
    },
    {
        id: 3,
        text: 'The undawn enjoyers',
        image: '../assets/images/undawn.jpg',
        choices: [
            { id: 1, text: 'Pain1811', isAnswer: false },
            { id: 2, text: 'angle aerk', isAnswer: true },
            { id: 3, text: 'Head cancer', isAnswer: false },
            { id: 4, text: 'All choices are correct', isAnswer: false }
        ]
    },
    {
        id: 4,
        text: 'The one have no car',
        image: '../assets/images/no car.jpg',
        choices: [
            { id: 1, text: 'Latte', isAnswer: false },
            { id: 2, text: 'angle aerk', isAnswer: false },
            { id: 3, text: 'Head cancer', isAnswer: false },
            { id: 4, text: 'lnwflash', isAnswer: true }
        ]
    },
    {
        id: 5,
        text: 'bro who is gay but getting girl',
        image: '../assets/images/girl.jpg',
        choices: [
            { id: 1, text: 'Latte', isAnswer: false },
            { id: 2, text: 'Pain1811', isAnswer: false },
            { id: 3, text: 'camo', isAnswer: false },
            { id: 4, text: 'All choices are correct', isAnswer: true }
        ]
    },
    {
        id: 6,
        text: 'The undawn designer',
        image: '../assets/images/designer.jpg',
        choices: [
            { id: 1, text: 'Pain1811', isAnswer: false },
            { id: 2, text: 'angle aerk', isAnswer: false },
            { id: 3, text: 'Head cancer', isAnswer: false },
            { id: 4, text: 'camo', isAnswer: true }
        ]
    }
];
