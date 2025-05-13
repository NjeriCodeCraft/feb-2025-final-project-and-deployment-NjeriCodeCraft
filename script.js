document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Featured books data - now with IDs for URL parameters
    const featuredBooks = [
        {
            id: "the-midnight-library",
            title: "The Midnight Library",
            author: "Matt Haig",
            category: "Fantasy",
            image: "Images/The Midnight Library_ Matt Haig.jpeg",
            description: "Between life and death there is a library, and within that library, the shelves go on forever.",
            teaser: "Between life and death there is a library, and within that library, the shelves go on forever...",
            summary: "Nora Seed finds herself in the Midnight Library, a place between life and death where each book represents a different life she might have lived. As she explores these alternate realities, she must discover what truly makes life worth living."
        },
        {
            id: "project-hail-mary",
            title: "Project Hail Mary",
            author: "Andy Weir",
            category: "Science Fiction",
            image: "Images/Project Hail Mary.jpeg",
            description: "A lone astronaut must save the earth from disaster in this incredible new science-based thriller.",
            teaser: "A lone astronaut must save the earth from disaster in this incredible new science-based thriller...",
            summary: "Ryland Grace wakes up on a spaceship with no memory of who he is or how he got there. As his memories slowly return, he realizes he's on a desperate mission to save Earth from an extinction-level threat."
        },
        {
            id: "where-the-crawdads-sing",
            title: "Where the Crawdads Sing",
            author: "Delia Owens",
            category: "Mystery",
            image: "Images/Where The Crawdads Sing.jpeg",
            description: "For years, rumors of the 'Marsh Girl' have haunted Barkley Cove, a quiet town on the North Carolina coast.",
            teaser: "For years, rumors of the 'Marsh Girl' have haunted Barkley Cove...",
            summary: "Kya Clark is known as the 'Marsh Girl' of Barkley Cove. When the town's golden boy is found dead, Kya becomes the prime suspect. The story alternates between Kya's coming-of-age and the murder investigation."
        },
        {
            id: "the-song-of-achilles",
            title: "The Song of Achilles",
            author: "Madeline Miller",
            category: "Historical Fiction",
            image: "Images/The Song of Achilles, Madeline Miller.jpeg",
            description: "A tale of gods, kings, immortal fame, and the human heart during the Trojan War.",
            teaser: "A tale of gods, kings, immortal fame, and the human heart...",
            summary: "A retelling of Homer's Iliad through the perspective of Patroclus, focusing on his relationship with Achilles from their childhood friendship through the Trojan War."
        }
    ];

    // Load featured books
    const bookGrid = document.getElementById('featuredBooks');

    if (bookGrid) {
        featuredBooks.forEach(book => {
            try {
                const bookCard = document.createElement('div');
                bookCard.className = 'book-card';
                bookCard.innerHTML = `
                    <div class="book-img">
                        <img src="${book.image}" alt="${book.title}" onerror="this.onerror=null;this.src='https://via.placeholder.com/300x450?text=Book+Cover'">
                    </div>
                    <div class="book-info">
                        <h3>${book.title}</h3>
                        <p>By ${book.author} | ${book.category}</p>
                        <p class="description">${book.description}</p>
                        <a href="featured-books.html?book=${book.id}" class="btn read-review-btn">Read Review</a>
                    </div>
                `;
                bookGrid.appendChild(bookCard);
            } catch (error) {
                console.error('Error creating book card:', error);
            }
        });
    }

    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            alert(`Thank you for subscribing with ${email}! You'll receive our latest book recommendations soon.`);
            this.reset();
        });
    }

    // Explore button click
    const exploreBtn = document.getElementById('exploreBtn');
    
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            window.location.href = 'categories.html';
        });
    }

    // Store book data in localStorage for featured-books.html to access
    localStorage.setItem('novelNestBooks', JSON.stringify(featuredBooks));
});