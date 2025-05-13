document.addEventListener('DOMContentLoaded', function() {
    // Initialize user reactions from localStorage
    let userReactions = JSON.parse(localStorage.getItem('bookReactions')) || {};

    // Get category from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('category');
    
    if (!categoryId) {
        window.location.href = 'categories.html';
        return;
    }
    
    // Set page title
    const categoryTitle = document.getElementById('category-title');
    categoryTitle.textContent = `${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} Books`;
        // Add category-specific quotes
const categoryQuotes = {
    'fantasy': {
        text: "Fantasy is hardly an escape from reality. It's a way of understanding it.",
        author: "— Lloyd Alexander"
    },
    'sci-fi': {
        text: "Science fiction is any idea that occurs in the head and doesn't exist yet, but soon will, and will change everything for everybody.",
        author: "— Ray Bradbury"
    },
    'mystery': {
        text: "The very essence of mystery is uncertainty; the solution is always less exciting than the pursuit.",
        author: "— Agatha Christie"
    },
    // Add more categories as needed
    'default': {
        text: "A reader lives a thousand lives before he dies. The man who never reads lives only one.",
        author: "— George R.R. Martin"
    }
};

// Set the quote for the current category
const quoteData = categoryQuotes[categoryId] || categoryQuotes['default'];
document.getElementById('quote-text').textContent = quoteData.text;
document.getElementById('quote-author').textContent = quoteData.author;
        // Sample book data - in real app, this would come from an API
        const allBooks = {
            'fantasy': [
                {
                    id: 1,
                    title: "The Name of the Wind",
                    author: "Patrick Rothfuss",
                    cover: "Images/The Name of the Wind.jpeg",
                    likes: 245,
                    dislikes: 12,
                    description: "The story of Kvothe, an adventurer and musician who grows to be the most notorious wizard the world has ever seen."
                },
                {
                    id: 2,
                    title: "Mistborn",
                    author: "Brandon Sanderson",
                    cover: "Images/Mistborn (Mistborn trilogy, 1).jpeg",
                    likes: 312,
                    dislikes: 18,
                    description: "A epic fantasy heist story set in a world where the Dark Lord has already won."
                },
                {
                    id: 3,
                    title: "The Way of Kings",
                    author: "Brandon Sanderson",
                    cover: "Images/The Way of Kings (The Stormlight Archive).jpeg",
                    likes: 487,
                    dislikes: 23,
                    description: "The first book in the Stormlight Archive series, featuring a world torn by violent storms and ancient conflicts."
                },
                {
                    id: 4,
                    title: "The Lies of Locke Lamora",
                    author: "Scott Lynch",
                    cover: "Images/The Lies of Locke Lamora (Fantasy).jpeg",
                    likes: 398,
                    dislikes: 15,
                    description: "A tale of thievery and deception set in the city of Camorr, following the exploits of the Gentleman Bastards."
                },
                {
                    id: 5,
                    title: "The Priory of the Orange Tree",
                    author: "Samantha Shannon",
                    cover: "Images/The Priory of the Orange Tree (The Roots of Chaos).jpeg",
                    likes: 356,
                    dislikes: 27,
                    description: "An epic feminist fantasy about a world divided by dragons and the women who must unite it."
                },
                {
                    id: 6,
                    title: "The Fifth Season",
                    author: "N.K. Jemisin",
                    cover: "Images/11 Sci-Fi Books Every Woman Should Read.jpeg",
                    likes: 412,
                    dislikes: 19,
                    description: "A groundbreaking fantasy novel set in a world plagued by apocalyptic natural disasters."
                },
                {
                    id: 7,
                    title: "The Poppy War",
                    author: "R.F. Kuang",
                    cover: "Images/The Poppy War The awardwinning epic fantasy trilogy that combines the history of China_.. _ bol",
                    likes: 376,
                    dislikes: 31,
                    description: "A dark fantasy inspired by 20th-century Chinese history, following a war orphan's rise to power."
                }
            ],
            'sci-fi': [
                {
                    id: 8,
                    title: "Dune",
                    author: "Frank Herbert",
                    cover: "Images/Dune (Dune Chronicles, Book 1).jpeg",
                    likes: 428,
                    dislikes: 22,
                    description: "A stunning blend of adventure and mysticism, environmentalism and politics."
                },
                {
                    id: 9,
                    title: "Neuromancer",
                    author: "William Gibson",
                    cover: "Images/Neuromancer.jpeg",
                    likes: 387,
                    dislikes: 25,
                    description: "The novel that defined cyberpunk, featuring hackers, AI, and virtual reality."
                },
                {
                    id: 10,
                    title: "The Three-Body Problem",
                    author: "Liu Cixin",
                    cover: "Images/The Three-Body Problem.jpeg",
                    likes: 421,
                    dislikes: 17,
                    description: "A groundbreaking Chinese sci-fi novel about humanity's first contact with an alien civilization."
                },
                {
                    id: 11,
                    title: "Snow Crash",
                    author: "Neal Stephenson",
                    cover: "Images/Snow Crash.jpeg",
                    likes: 365,
                    dislikes: 22,
                    description: "A satirical cyberpunk novel featuring a futuristic America and virtual reality mafia."
                },
                {
                    id: 12,
                    title: "Hyperion",
                    author: "Dan Simmons",
                    cover: "Images/Hyperion_ A Novel.jpeg",
                    likes: 403,
                    dislikes: 14,
                    description: "A science fiction masterpiece following seven pilgrims on their journey to the Time Tombs."
                },
                {
                    id: 13,
                    title: "Children of Time",
                    author: "Adrian Tchaikovsky",
                    cover: "Images/Children of Time_ Winner of the Arthur C_ Clarke Award for Best Science Fiction Novel (The Children of Time Novels).jpeg",
                    likes: 398,
                    dislikes: 11,
                    description: "An epic space opera about the last humans searching for a new home and the evolved spiders they encounter."
                }
            ],
            
            'mystery': [
                {
                    id: 14,
                    title: "Gone Girl",
                    author: "Gillian Flynn",
                    cover: "Images/If You Love Colleen Hoover's _Verity,_ You'll Love These Women-Centered Thrillers.jpeg",
                    likes: 528,
                    dislikes: 32,
                    description: "A psychological thriller about a woman who disappears on her fifth wedding anniversary."
                },
                {
                    id: 15,
                    title: "The Girl with the Dragon Tattoo",
                    author: "Stieg Larsson",
                    cover: "Images/The Girl with the Dragon Tattoo series.jpeg",
                    likes: 487,
                    dislikes: 28,
                    description: "A journalist and a hacker investigate a 40-year-old disappearance."
                },
                {
                    id: 16,
                    title: "The Silent Patient",
                    author: "Alex Michaelides",
                    cover: "Images/books I recommend.jpeg",
                    likes: 412,
                    dislikes: 19,
                    description: "A woman shoots her husband and then stops speaking, and a criminal psychotherapist tries to unravel the mystery."
                }
            ],
            'romance': [
                {
                    id: 17,
                    title: "The Hating Game",
                    author: "Sally Thorne",
                    cover: "Images/The Hating Game_ TikTok made me buy it! The perfect enemies to lovers romcom.jpeg",
                    likes: 398,
                    dislikes: 15,
                    description: "Two executive assistants who despise each other are up for the same promotion."
                },
                {
                    id: 18,
                    title: "Beach Read",
                    author: "Emily Henry",
                    cover: "Images/Beach Read by Emily Henry.jpeg",
                    likes: 432,
                    dislikes: 21,
                    description: "A romance writer and a literary fiction author spend the summer living in neighboring beach houses."
                },
                {
                    id: 19,
                    title: "Red, White & Royal Blue",
                    author: "Casey McQuiston",
                    cover: "Images/Prepare To Swoon Over The 'Red, White & Royal Blue' Cast In These Adorable Photos.jpeg",
                    likes: 512,
                    dislikes: 25,
                    description: "The First Son of the United States falls in love with the Prince of Wales."
                }
            ],
            'historical': [
                {
                    id: 20,
                    title: "The Book Thief",
                    author: "Markus Zusak",
                    cover: "Images/The Book Thief.jpeg",
                    likes: 587,
                    dislikes: 18,
                    description: "A story set in Nazi Germany, narrated by Death, about a girl who steals books."
                },
                {
                    id: 21,
                    title: "All the Light We Cannot See",
                    author: "Anthony Doerr",
                    cover: "Images/Here's What Happens in the _All the Light We Cannot See_ Book.jpeg",
                    likes: 498,
                    dislikes: 22,
                    description: "The paths of a blind French girl and a German boy collide in occupied France during WWII."
                },
                {
                    id: 22,
                    title: "Pachinko",
                    author: "Min Jin Lee",
                    cover: "Images/Phoebe Robinson, Gillian Jacobs, and More Share Their Favorite Books Written by Women.jpeg",
                    likes: 456,
                    dislikes: 17,
                    description: "A sweeping saga of a Korean family living in Japan across four generations."
                }
            ],
            'thriller': [
                {
                    id: 23,
                    title: "The Silent Patient",
                    author: "Alex Michaelides",
                    cover: "Images/books I recommend.jpeg",
                    likes: 487,
                    dislikes: 24,
                    description: "A psychological thriller about a woman who shoots her husband and then stops speaking."
                },
                {
                    id: 24,
                    title: "The Girl on the Train",
                    author: "Paula Hawkins",
                    cover: "Images/14 Of The Most Buzzed-About Books Of 2015.jpeg",
                    likes: 432,
                    dislikes: 31,
                    description: "A woman becomes entangled in a missing persons investigation that she watches from her train window."
                },
                {
                    id: 25,
                    title: "Sharp Objects",
                    author: "Gillian Flynn",
                    cover: "Images/13 Books to Read If You Still Miss Gossip Girl.jpeg",
                    likes: 398,
                    dislikes: 27,
                    description: "A reporter returns to her hometown to cover the murders of two young girls."
                }
            ],
            'horror': [
                {
                    id: 26,
                    title: "The Shining",
                    author: "Stephen King",
                    cover: "Images/The Shining (Books-A-Million Exclusive)_ Stephen King_ 9780525615507.jpeg",
                    likes: 512,
                    dislikes: 19,
                    description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father."
                },
                {
                    id: 27,
                    title: "Mexican Gothic",
                    author: "Silvia Moreno-Garcia",
                    cover: "Images/Mexican Gothic + Asada Mushroom Tacos - The Hungry Bookworm.jpeg",
                    likes: 421,
                    dislikes: 23,
                    description: "A socialite investigates her cousin's claims that her husband is trying to murder her."
                },
                {
                    id: 28,
                    title: "The Haunting of Hill House",
                    author: "Shirley Jackson",
                    cover: "Images/The Haunting of Hill House (Books-A-Million Exclusive)_ Shirley Jackson_ 9781101948798.jpeg",
                    likes: 387,
                    dislikes: 15,
                    description: "Four people come to stay in a notoriously haunted mansion for a paranormal investigation."
                }
            ],
            'biography': [
                {
                    id: 29,
                    title: "Becoming",
                    author: "Michelle Obama",
                    cover: "Images/Favourite Personal Development Read for Women_.jpeg",
                    likes: 587,
                    dislikes: 12,
                    description: "The memoir of former First Lady Michelle Obama, chronicling her journey from Chicago to the White House."
                },
                {
                    id: 30,
                    title: "Educated",
                    author: "Tara Westover",
                    cover: "Images/Educated (ebook), Tara Westover _ 9781473538641 _ Boeken _ bol.jpeg",
                    likes: 498,
                    dislikes: 18,
                    description: "A memoir about a woman who grew up in a survivalist family and went on to earn a PhD from Cambridge."
                },
                {
                    id: 31,
                    title: "Born a Crime",
                    author: "Trevor Noah",
                    cover: "Images/Goodreads.jpeg",
                    likes: 512,
                    dislikes: 14,
                    description: "The comedian's remarkable story of growing up in South Africa during apartheid."
                }
            ]
        };
    
        // Display books for the selected category
        const booksGrid = document.getElementById('booksGrid');
        const categoryBooks = allBooks[categoryId] || [];
    
        if (categoryBooks.length === 0) {
            booksGrid.innerHTML = '<p class="no-books">No books found in this category.</p>';
            return;
        }
    
        categoryBooks.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';
            bookCard.innerHTML = `
                <div class="book-cover">
                    <img src="${book.cover}" alt="${book.title}">
                </div>
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p class="author">By ${book.author}</p>
                    <p class="description">${book.description}</p>
                    <div class="reactions">
                        <button class="like-btn ${userReactions[book.id] === 'like' ? 'active' : ''}" data-book-id="${book.id}">
                            <i class="fas fa-thumbs-up"></i>
                            <span class="like-count">${book.likes}</span>
                        </button>
                        <button class="dislike-btn ${userReactions[book.id] === 'dislike' ? 'active' : ''}" data-book-id="${book.id}">
                            <i class="fas fa-thumbs-down"></i>
                            <span class="dislike-count">${book.dislikes}</span>
                        </button>
                    </div>
                </div>
            `;
            booksGrid.appendChild(bookCard);
        });
    
        // Handle like/dislike clicks
    document.addEventListener('click', function(e) {
        const bookId = e.target.closest('.like-btn, .dislike-btn')?.dataset.bookId;
        if (!bookId) return;

        const isLike = e.target.closest('.like-btn');
        const isDislike = e.target.closest('.dislike-btn');
        const countSpan = isLike 
            ? e.target.closest('.like-btn').querySelector('.like-count')
            : e.target.closest('.dislike-btn').querySelector('.dislike-count');

        // Get current reaction for this book
        const currentReaction = userReactions[bookId];
        
        // If clicking the same button again - undo the reaction
        if ((currentReaction === 'like' && isLike) || 
            (currentReaction === 'dislike' && isDislike)) {
            countSpan.textContent = parseInt(countSpan.textContent) - 1;
            delete userReactions[bookId];
            localStorage.setItem('bookReactions', JSON.stringify(userReactions));
            updateButtonStyles(bookId);
            return;
        }

        // If switching from like to dislike or vice versa
        if (currentReaction) {
            // Decrease the previous reaction count
            const prevButton = document.querySelector(
                currentReaction === 'like' 
                    ? `.like-btn[data-book-id="${bookId}"]` 
                    : `.dislike-btn[data-book-id="${bookId}"]`
            );
            const prevCountSpan = prevButton.querySelector(
                currentReaction === 'like' ? '.like-count' : '.dislike-count'
            );
            prevCountSpan.textContent = parseInt(prevCountSpan.textContent) - 1;
        }

        // Apply new reaction
        countSpan.textContent = parseInt(countSpan.textContent) + 1;
        userReactions[bookId] = isLike ? 'like' : 'dislike';
        localStorage.setItem('bookReactions', JSON.stringify(userReactions));
        updateButtonStyles(bookId);
    });

    function updateButtonStyles(bookId) {
        const likeBtn = document.querySelector(`.like-btn[data-book-id="${bookId}"]`);
        const dislikeBtn = document.querySelector(`.dislike-btn[data-book-id="${bookId}"]`);
        
        if (userReactions[bookId] === 'like') {
            likeBtn.classList.add('active');
            dislikeBtn.classList.remove('active');
        } 
        else if (userReactions[bookId] === 'dislike') {
            dislikeBtn.classList.add('active');
            likeBtn.classList.remove('active');
        } 
        else {
            likeBtn.classList.remove('active');
            dislikeBtn.classList.remove('active');
        }
    }
});