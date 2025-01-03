"use client";
import React, { useState } from "react";
export default function Authors({ onSelectedAuthor }) {
    //Start with temp authors switch to database later
    const authors = [
  "Brandon Sanderson", 
  "J.K. Rowling", 
  "George R.R. Martin", 
  "Patrick Rothfuss", 
  "Terry Pratchett", 
  "J.R.R. Tolkien", 
  "Neil Gaiman", 
  "Margaret Atwood", 
  "Stephen King", 
  "Isaac Asimov"
    ];
    const [selectedAuthor, setSelectedAuthor] = useState(null);

    const handleAuthorClick = (author) => {
        setSelectedAuthor(author);
        onSelectedAuthor(author);
    }
    return ( 
    <ul className="space-y-2">
         {authors.map((author) => (
                <li
                    key={author}
                    className={`cursor-pointer p-3 ${
                        selectedAuthor === author ? "bg-green-700" : "hover:text-purple-600"
                    }`}
                    onClick={() => handleAuthorClick(author)}
                >
                    {author}
                </li>
            ))}
        </ul>
);
};

