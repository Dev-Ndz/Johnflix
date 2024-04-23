const slogan = 
    ["AmaJhon Prime: Your Ticket to Johnderfull Adventures!",
    "Unlock Endless Entertainment with AmaJhon Prime!",
    "Stream with Confidence, Choose AmaJhon Prime!",
    "AmaJhon Prime: Your Passport to Prime Jhontertainment!",
    "Experience AmaJhon Prime: Where Every Stream is a John-stonishing Delight!",
    "AmaJhon Prime: Your Gateway to Streaming Greatness!",
    "Dive into a World of Jhonder with AmaJhon Prime!",
    "Make Every Night Movie Night with AmaJhon Prime!",
    "AmaJhon Prime: Elevating Your Streaming Experience, One John at a Time!",
    "AmaJhon Prime: Where Every Stream is a John-ius Decision!"
]

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export const getSlogan = () => {
    const index = randomNumber(0,slogan.length-1)
    const randomSlogan = slogan[index]
    return randomSlogan;
}