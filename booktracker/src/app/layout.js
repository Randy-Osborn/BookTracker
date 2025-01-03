"use client";
import "./globals.css";
import Authors from "./components/authors";
import Books from "./components/books";
import React, { useState } from "react";
export default function RootLayout({ children }) {
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  return (
    <html lang="en">
             <body className="flex flex-col h-screen">
                {/* Top Banner */}
                <header className="bg-blue-900 text-white p-4">
                    <h1 className="text-2xl font-bold">BookTracker</h1>
                </header>
                {/* Main Content */}
                <div className="flex flex-1">
                    {/* Sidebar */}
                    <aside className="w-64 bg-gray-800 p-4 overflow-y-auto">
            <Authors
              onSelectedAuthor={setSelectedAuthor} />
                    </aside>
                    {/* Main Section */}
                    {selectedAuthor ? (
            <Books author={selectedAuthor} /> // Display books for the selected author
          ) : (
            <p>Please select an author to see their books.</p>
          )}
                </div>
            </body>
    </html>
  );
}
