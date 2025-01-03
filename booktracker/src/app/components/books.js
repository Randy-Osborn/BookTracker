export default function Books({ author }) {
    // Example static data
    const booksByAuthor = {
    "Brandon Sanderson": [
        "Mistborn: The Final Empire",
        "The Way of Kings",
        "Elantris",
        "Warbreaker",
        "Wind and Truth"
    ],
    "J.K. Rowling": [
        "Harry Potter and the Sorcerer's Stone",
        "Harry Potter and the Chamber of Secrets",
        "Harry Potter and the Prisoner of Azkaban",
        "Harry Potter and the Goblet of Fire",
        "Harry Potter and the Order of the Phoenix"
    ],
    "George R.R. Martin": [
        "A Game of Thrones",
        "A Clash of Kings",
        "A Storm of Swords",
        "A Feast for Crows",
        "A Dance with Dragons"
    ],
    "Patrick Rothfuss": [
        "The Name of the Wind",
        "The Wise Man's Fear",
        "The Slow Regard of Silent Things"
    ],
    "Terry Pratchett": [
        "The Colour of Magic",
        "Equal Rites",
        "Wyrd Sisters",
        "Guards! Guards!",
        "Hogfather"
    ],
    "J.R.R. Tolkien": [
        "The Hobbit",
        "The Fellowship of the Ring",
        "The Two Towers",
        "The Return of the King",
        "The Silmarillion"
    ],
    "Neil Gaiman": [
        "American Gods",
        "Good Omens",
        "Neverwhere",
        "The Graveyard Book",
        "Coraline"
    ],
    "Margaret Atwood": [
        "The Handmaid's Tale",
        "Oryx and Crake",
        "The Year of the Flood",
        "Alias Grace",
        "The Blind Assassin"
    ],
    "Stephen King": [
        "The Shining",
        "It",
        "Carrie",
        "Misery",
        "The Dark Tower: The Gunslinger"
    ],
    "Isaac Asimov": [
        "Foundation",
        "I, Robot",
        "The Gods Themselves",
        "The End of Eternity",
        "The Caves of Steel"
    ]
    };

    const books = booksByAuthor[author] || [];

    return (
        <div>
            <h2>{author}'s Books</h2>
            <ul className="space-y-2">
                {books.map((book, index) => (
                    <li key={index} className="p-2 hover:bg-gray-100">{book}</li>
                ))}
            </ul>
        </div>
    );
}
