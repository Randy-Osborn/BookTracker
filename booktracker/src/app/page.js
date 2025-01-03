"use client";
import Image from "next/image";
import React, { useState } from "react";
import Authors from "./components/authors";
import Books from "./components/books";
export default function Home() {
   const [selectedAuthor, setSelectedAuthor] = useState(null);

    return (
        <div className="flex">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 p-4 overflow-y-auto">
                <Authors onSelectedAuthor={setSelectedAuthor} selectedAuthor={selectedAuthor} />
            </aside>

            {/* Main Section */}
            <main className="flex-1 p-4 overflow-y-auto">
                {selectedAuthor ? (
                    <Books author={selectedAuthor} />
                ) : (
                    <p>Please select an author to see their books.</p>
                )}
            </main>
        </div>
    );
}
