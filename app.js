/**
 * Enhanced Vibelink - Premium Social Media Platform
 * Features: Arrogant Gold/White & Teal/Black themes, Real profile pictures, 
 * Enhanced share functionality, Premium animations, Optimized profile pages
 */

class VibeLinkApp {
    constructor() {
        // Application state
        this.currentUser = null;
        this.users = [];
        this.posts = [];
        this.comments = [];
        this.likes = [];
        this.follows = [];
        this.notifications = [];
        this.currentPage = 'feed';
        this.theme = 'light';
        this.currentEditingPost = null;
        this.currentSharePost = null;
        this.isLoading = true;

        // Initialize application
        this.init();
    }

    /**
     * Initialize the application with loading screen
     */
    init() {
        this.showLoadingScreen();
        setTimeout(() => {
            this.loadInitialData();
            this.bindEvents();
            this.initializeTheme();
            this.hideLoadingScreen();
            this.showLoginPage();
        }, 2000);
    }

    /**
     * Show enhanced loading screen
     */
    showLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.classList.remove('hidden');
        }
    }

    /**
     * Hide loading screen with animation
     */
    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                loadingScreen.style.opacity = '1';
            }, 500);
        }
    }

    /**
     * Initialize theme based on system preference
     */
    initializeTheme() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.theme = prefersDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-color-scheme', this.theme);
        this.updateThemeToggle();
    }

    /**
     * Load initial data with real profile pictures and fallbacks
     */
    loadInitialData() {
        // Enhanced users with real profile pictures and fallbacks
        this.users = [
            {
                id: "user1",
                displayName: "Dead_Coder",
                username: "Nitesh Sawardekar", 
                email: "abc@gmail.com",
                password: "Admin@123",
                bio: "Full-stack developer passionate about clean code and innovative solutions. Coffee enthusiast ☕ Building the future with every line of code.",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
                fallbackAvatar: "https://ui-avatars.com/api/?name=Dead+Coder&size=150&background=FFD700&color=1A1A1A&bold=true",
                coverPhoto: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=200&fit=crop&auto=format&q=80",
                posts: 42,
                following: 156,
                followers: 89,
                joinDate: "January 2023",
                location: "San Francisco, CA",
                website: "deadcoder.dev"
            },
            {
                id: "user2",
                displayName: "Lady_Bug", 
                username: "Seema Singh",
                email: "xyz@gmail.com",
                password: "Admin@123",
                bio: "UX/UI Designer crafting beautiful digital experiences. Design thinking advocate 🎨 Making the web more beautiful, one pixel at a time.",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
                fallbackAvatar: "https://ui-avatars.com/api/?name=Lady+Bug&size=150&background=FF6B6B&color=FFFFFF&bold=true",
                coverPhoto: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=200&fit=crop&auto=format&q=80",
                posts: 28,
                following: 203, 
                followers: 145,
                joinDate: "March 2023",
                location: "New York, NY",
                website: "ladybugdesign.com"
            },
            {
                id: "user3",
                displayName: "Ronin",
                username: "Karma",
                email: "mno@gmail.com",
                password: "Admin@123", 
                bio: "Tech entrepreneur and startup mentor. Building the future one line of code at a time 🚀 Investor • Advisor • Dreamer",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
                fallbackAvatar: "https://ui-avatars.com/api/?name=Ronin&size=150&background=20B2AA&color=000000&bold=true",
                coverPhoto: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=200&fit=crop&auto=format&q=80",
                posts: 67,
                following: 98,
                followers: 234,
                joinDate: "November 2022",
                location: "Austin, TX", 
                website: "roninventures.com"
            }
        ];

        // Enhanced sample posts including shared posts
        this.posts = [
            {
                id: "post1",
                userId: "user1",
                content: "Just shipped a new feature! The feeling of seeing your code in production never gets old 🚀 #coding #webdev #javascript",
                timestamp: new Date().toISOString(),
                likes: 12,
                comments: 3,
                shares: 1,
                image: null,
                type: "original"
            },
            {
                id: "post2", 
                userId: "user2",
                content: "Design is not just what it looks like and feels like. Design is how it works. - Steve Jobs ✨ #design #ux #inspiration",
                timestamp: new Date(Date.now() - 3600000).toISOString(),
                likes: 8,
                comments: 2,
                shares: 4,
                image: null,
                type: "original"
            },
            {
                id: "post3",
                userId: "user3", 
                content: "Remember: Every expert was once a beginner. Keep pushing forward! 💪 #motivation #startup #entrepreneurship",
                timestamp: new Date(Date.now() - 7200000).toISOString(),
                likes: 25,
                comments: 7,
                shares: 12,
                image: null,
                type: "original"
            },
            {
                id: "share1",
                userId: "user2",
                type: "shared",
                shareMessage: "This is so inspiring! Every developer should read this 👏",
                originalPostId: "post1",
                timestamp: new Date(Date.now() - 1800000).toISOString(),
                likes: 5,
                comments: 1,
                shares: 0
            }
        ];

        // Sample comments
        this.comments = [
            { id: "comment1", postId: "post1", userId: "user2", content: "Congratulations! What technology stack did you use?", timestamp: new Date().toISOString() },
            { id: "comment2", postId: "post1", userId: "user3", content: "Amazing work! Can't wait to see what you build next.", timestamp: new Date().toISOString() },
            { id: "comment3", postId: "post2", userId: "user1", content: "Absolutely love this quote! So true for developers too.", timestamp: new Date().toISOString() },
            { id: "comment4", postId: "post3", userId: "user2", content: "This is exactly what I needed to hear today. Thanks for sharing!", timestamp: new Date().toISOString() }
        ];

        // Trending topics
        this.trendingTopics = [
            "#WebDevelopment",
            "#UXDesign", 
            "#JavaScript",
            "#TechTrends",
            "#StartupLife",
            "#CodeLife",
            "#DesignThinking",
            "#Innovation"
        ];

        // Enhanced avatar options with real Unsplash images and fallbacks
        this.avatarOptions = [
            {
                url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
                fallback: "https://ui-avatars.com/api/?name=Avatar+1&size=150&background=FFD700&color=1A1A1A&bold=true"
            },
            {
                url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
                fallback: "https://ui-avatars.com/api/?name=Avatar+2&size=150&background=FF6B6B&color=FFFFFF&bold=true"
            },
            {
                url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
                fallback: "https://ui-avatars.com/api/?name=Avatar+3&size=150&background=20B2AA&color=000000&bold=true"
            },
            {
                url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
                fallback: "https://ui-avatars.com/api/?name=Avatar+4&size=150&background=8B4513&color=FFFFFF&bold=true"
            },
            {
                url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
                fallback: "https://ui-avatars.com/api/?name=Avatar+5&size=150&background=9932CC&color=FFFFFF&bold=true"
            },
            {
                url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
                fallback: "https://ui-avatars.com/api/?name=Avatar+6&size=150&background=FF4500&color=FFFFFF&bold=true"
            }
        ];
    }

    /**
     * Enhanced image loading with fallback support
     */
    loadImageWithFallback(imgElement, primaryUrl, fallbackUrl, alt = '') {
        if (!imgElement) return;

        imgElement.alt = alt;
        imgElement.style.opacity = '0';
        
        // Try loading primary image
        const testImg = new Image();
        testImg.crossOrigin = 'anonymous';
        
        testImg.onload = () => {
            imgElement.src = primaryUrl;
            imgElement.style.transition = 'opacity 0.3s ease';
            imgElement.style.opacity = '1';
        };
        
        testImg.onerror = () => {
            // Fallback to secondary image
            imgElement.src = fallbackUrl;
            imgElement.style.transition = 'opacity 0.3s ease';
            imgElement.style.opacity = '1';
        };
        
        testImg.src = primaryUrl;
    }

    /**
     * Bind all event listeners
     */
    bindEvents() {
        // Authentication events
        document.getElementById('loginForm')?.addEventListener('submit', (e) => this.handleLogin(e));
        document.getElementById('signupForm')?.addEventListener('submit', (e) => this.handleSignup(e));
        document.getElementById('showSignup')?.addEventListener('click', (e) => this.showSignupPage(e));
        document.getElementById('showLogin')?.addEventListener('click', (e) => this.showLoginPage(e));
        
        // Demo account buttons
        document.querySelectorAll('.demo-account-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleDemoLogin(e));
        });

        // Navigation events
        document.getElementById('logoBtn')?.addEventListener('click', () => this.navigateToPage('feed'));
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleNavigation(e));
        });
        document.querySelectorAll('.bottom-nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleNavigation(e));
        });

        // User menu events
        document.getElementById('userMenuBtn')?.addEventListener('click', (e) => this.toggleUserDropdown(e));
        document.getElementById('switchUserBtn')?.addEventListener('click', () => this.showUserSwitchModal());
        document.getElementById('logoutBtn')?.addEventListener('click', () => this.logout());

        // Theme toggle
        document.getElementById('themeToggle')?.addEventListener('click', () => this.toggleTheme());

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', this.debounce((e) => this.handleSearch(e), 300));
            searchInput.addEventListener('focus', () => this.showSearchResults());
            searchInput.addEventListener('blur', () => setTimeout(() => this.hideSearchResults(), 200));
        }

        // Post creation and management
        document.getElementById('createPostBtn')?.addEventListener('click', () => this.showPostModal());
        document.getElementById('postForm')?.addEventListener('submit', (e) => this.handlePostSubmit(e));
        document.getElementById('closePostModal')?.addEventListener('click', () => this.hidePostModal());
        document.getElementById('cancelPost')?.addEventListener('click', () => this.hidePostModal());
        
        // Post content character counter
        document.getElementById('postContent')?.addEventListener('input', (e) => this.updateCharacterCount(e));

        // Image upload preview
        document.getElementById('postImage')?.addEventListener('change', (e) => this.handleImageUpload(e));

        // Profile management
        document.getElementById('changeAvatarBtn')?.addEventListener('click', () => this.showAvatarModal());
        document.getElementById('closeAvatarModal')?.addEventListener('click', () => this.hideAvatarModal());
        document.getElementById('editProfileBtn')?.addEventListener('click', () => this.editProfile());

        // Modal backdrop clicks
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-backdrop')) {
                this.hideAllModals();
            }
        });

        // Share modal events
        document.getElementById('shareForm')?.addEventListener('submit', (e) => this.handleShare(e));
        document.getElementById('closeShareModal')?.addEventListener('click', () => this.hideShareModal());
        document.getElementById('cancelShare')?.addEventListener('click', () => this.hideShareModal());

        // User switch modal events
        document.getElementById('closeUserSwitchModal')?.addEventListener('click', () => this.hideUserSwitchModal());

        // Mobile menu toggle
        document.getElementById('mobileMenuBtn')?.addEventListener('click', () => this.toggleMobileMenu());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyboardNavigation(e));

        // Theme change detection
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!this.manualThemeSet) {
                this.theme = e.matches ? 'dark' : 'light';
                document.documentElement.setAttribute('data-color-scheme', this.theme);
                this.updateThemeToggle();
            }
        });
    }

    /**
     * Handle user login with enhanced feedback
     */
    handleLogin(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        const user = this.users.find(u => u.email === email && u.password === password);
        
        if (user) {
            this.currentUser = user;
            this.animateLogin();
        } else {
            this.showError('loginError', 'Invalid email or password. Try using a demo account.');
        }
    }

    /**
     * Animate login transition
     */
    animateLogin() {
        const loginPage = document.getElementById('loginPage');
        loginPage.style.transform = 'scale(0.95)';
        loginPage.style.opacity = '0';
        
        setTimeout(() => {
            this.showMainApp();
        }, 300);
    }

    /**
     * Handle demo account login with visual feedback
     */
    handleDemoLogin(e) {
        const email = e.target.dataset.email;
        const password = e.target.dataset.password;
        
        // Add clicking animation
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = 'scale(1)';
        }, 150);
        
        document.getElementById('loginEmail').value = email;
        document.getElementById('loginPassword').value = password;
        
        setTimeout(() => {
            const user = this.users.find(u => u.email === email);
            if (user) {
                this.currentUser = user;
                this.animateLogin();
            }
        }, 300);
    }

    /**
     * Handle user signup
     */
    handleSignup(e) {
        e.preventDefault();
        const password = document.getElementById('signupPassword').value;
        
        if (!this.validatePassword(password)) {
            this.showError('signupError', 'Password must be at least 6 characters with 1 uppercase, 1 number, and 1 special character.');
            return;
        }

        this.showError('signupError', 'Signup is for demo only. Please use one of the predefined accounts.', 'info');
        setTimeout(() => this.showLoginPage(), 2000);
    }

    /**
     * Enhanced theme toggle with smooth transition
     */
    toggleTheme() {
        this.manualThemeSet = true;
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        
        // Add transition class for smooth theme change
        document.body.classList.add('theme-transitioning');
        
        document.documentElement.setAttribute('data-color-scheme', this.theme);
        this.updateThemeToggle();
        
        // Remove transition class after animation
        setTimeout(() => {
            document.body.classList.remove('theme-transitioning');
        }, 500);
    }

    /**
     * Update theme toggle button
     */
    updateThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.textContent = this.theme === 'light' ? '🌙' : '☀️';
            themeToggle.title = `Switch to ${this.theme === 'light' ? 'dark' : 'light'} mode`;
        }
    }

    /**
     * Show main application with enhanced transitions
     */
    showMainApp() {
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('signupPage').classList.add('hidden');
        
        const mainApp = document.getElementById('mainApp');
        mainApp.classList.remove('hidden');
        mainApp.style.opacity = '0';
        mainApp.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            mainApp.style.transition = 'all 0.5s ease';
            mainApp.style.opacity = '1';
            mainApp.style.transform = 'translateY(0)';
        }, 100);
        
        this.updateCurrentUserUI();
        this.updateSidebarProfile();
        this.renderTrendingTopics();
        this.renderPosts();
        this.navigateToPage('feed');
    }

    /**
     * Enhanced update current user UI with proper image loading
     */
    updateCurrentUserUI() {
        if (!this.currentUser) return;

        // Update user avatars with fallback
        this.loadImageWithFallback(
            document.getElementById('currentUserAvatar'),
            this.currentUser.avatar,
            this.currentUser.fallbackAvatar,
            this.currentUser.displayName
        );
        
        this.loadImageWithFallback(
            document.getElementById('dropdownUserAvatar'),
            this.currentUser.avatar,
            this.currentUser.fallbackAvatar,
            this.currentUser.displayName
        );

        document.getElementById('dropdownUserName').textContent = this.currentUser.displayName;
        document.getElementById('dropdownUserEmail').textContent = this.currentUser.email;
    }

    /**
     * Enhanced update sidebar profile with proper image loading
     */
    updateSidebarProfile() {
        if (!this.currentUser) return;

        this.loadImageWithFallback(
            document.getElementById('sidebarAvatar'),
            this.currentUser.avatar,
            this.currentUser.fallbackAvatar,
            this.currentUser.displayName
        );

        document.getElementById('sidebarDisplayName').textContent = this.currentUser.displayName;
        document.getElementById('sidebarUsername').textContent = `@${this.currentUser.username}`;
        document.getElementById('sidebarPosts').textContent = this.currentUser.posts;
        document.getElementById('sidebarFollowing').textContent = this.currentUser.following;
        document.getElementById('sidebarFollowers').textContent = this.currentUser.followers;
    }

    /**
     * Enhanced post rendering with proper share handling
     */
    renderPosts() {
        const container = document.getElementById('postsContainer');
        if (!container) return;

        const sortedPosts = [...this.posts].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        
        container.innerHTML = sortedPosts.length > 0 ? 
            sortedPosts.map(post => this.renderPost(post)).join('') : 
            '<div class="empty-state"><p>No posts yet. Create the first one!</p></div>';

        // Bind post interaction events and load images
        this.bindPostEvents();
        this.loadPostImages();
    }

    /**
     * Load post images with fallbacks
     */
    loadPostImages() {
        // Load all avatar images in posts
        document.querySelectorAll('.post-card .avatar').forEach(img => {
            const postCard = img.closest('.post-card');
            const postId = postCard?.dataset.postId;
            
            if (postId) {
                const post = this.posts.find(p => p.id === postId);
                if (post) {
                    let user;
                    if (post.type === 'shared') {
                        user = this.users.find(u => u.id === post.userId);
                    } else {
                        user = this.users.find(u => u.id === post.userId);
                    }
                    
                    if (user) {
                        this.loadImageWithFallback(img, user.avatar, user.fallbackAvatar, user.displayName);
                    }
                }
            }
        });

        // Load shared post original user avatars
        document.querySelectorAll('.shared-post .avatar').forEach(img => {
            const sharedPost = img.closest('.post-card');
            const postId = sharedPost?.dataset.postId;
            
            if (postId) {
                const post = this.posts.find(p => p.id === postId);
                if (post && post.type === 'shared') {
                    const originalPost = this.posts.find(p => p.id === post.originalPostId);
                    if (originalPost) {
                        const originalUser = this.users.find(u => u.id === originalPost.userId);
                        if (originalUser) {
                            this.loadImageWithFallback(img, originalUser.avatar, originalUser.fallbackAvatar, originalUser.displayName);
                        }
                    }
                }
            }
        });
    }

    /**
     * Enhanced post rendering with proper share functionality
     */
    renderPost(post) {
        // Handle shared posts
        if (post.type === 'shared') {
            return this.renderSharedPost(post);
        }

        const user = this.users.find(u => u.id === post.userId);
        if (!user) return '';

        const isLiked = this.likes.some(like => like.postId === post.id && like.userId === this.currentUser.id);
        const postComments = this.comments.filter(comment => comment.postId === post.id);
        const timeAgo = this.getTimeAgo(new Date(post.timestamp));
        const canEdit = post.userId === this.currentUser.id;

        return `
            <div class="post-card" data-post-id="${post.id}">
                <div class="post-header">
                    <img src="" alt="${user.displayName}" class="avatar avatar--md" data-user-id="${user.id}">
                    <div class="post-user-info">
                        <div class="post-user-name" data-user-id="${user.id}">${user.displayName}</div>
                        <div class="post-username">@${user.username} • ${timeAgo}</div>
                    </div>
                    ${canEdit ? `<button class="post-menu-btn" data-post-id="${post.id}">⋯</button>` : ''}
                </div>
                <div class="post-content">${post.content}</div>
                ${post.image ? `<img src="${post.image}" alt="Post image" class="post-image">` : ''}
                <div class="post-actions">
                    <button class="post-action like-btn ${isLiked ? 'liked' : ''}" data-post-id="${post.id}">
                        <span class="action-icon">${isLiked ? '❤️' : '🤍'}</span>
                        <span class="action-count">${post.likes}</span>
                    </button>
                    <button class="post-action comment-btn" data-post-id="${post.id}">
                        <span class="action-icon">💬</span>
                        <span class="action-count">${post.comments}</span>
                    </button>
                    <button class="post-action share-btn" data-post-id="${post.id}">
                        <span class="action-icon">🔄</span>
                        <span class="action-count">${post.shares}</span>
                    </button>
                </div>
                <div class="comments-section" id="comments-${post.id}">
                    ${postComments.map(comment => this.renderComment(comment)).join('')}
                    <form class="comment-form" data-post-id="${post.id}">
                        <input type="text" class="comment-input" placeholder="Add a comment..." required>
                        <button type="submit" class="comment-submit">Post</button>
                    </form>
                </div>
            </div>`;
    }

    /**
     * Render shared post with proper attribution
     */
    renderSharedPost(post) {
        const sharer = this.users.find(u => u.id === post.userId);
        const originalPost = this.posts.find(p => p.id === post.originalPostId);
        
        if (!sharer || !originalPost) return '';
        
        const originalUser = this.users.find(u => u.id === originalPost.userId);
        if (!originalUser) return '';

        const isLiked = this.likes.some(like => like.postId === post.id && like.userId === this.currentUser.id);
        const postComments = this.comments.filter(comment => comment.postId === post.id);
        const timeAgo = this.getTimeAgo(new Date(post.timestamp));
        const canEdit = post.userId === this.currentUser.id;

        return `
            <div class="post-card" data-post-id="${post.id}">
                <div class="post-header">
                    <img src="" alt="${sharer.displayName}" class="avatar avatar--md" data-user-id="${sharer.id}">
                    <div class="post-user-info">
                        <div class="post-user-name" data-user-id="${sharer.id}">${sharer.displayName}</div>
                        <div class="post-username">@${sharer.username} • ${timeAgo}</div>
                    </div>
                    ${canEdit ? `<button class="post-menu-btn" data-post-id="${post.id}">⋯</button>` : ''}
                </div>
                <div class="share-attribution">
                    <span class="user-name">${sharer.displayName}</span> shared <span class="user-name">${originalUser.displayName}</span>'s post
                </div>
                ${post.shareMessage ? `<div class="post-content">${post.shareMessage}</div>` : ''}
                <div class="shared-post">
                    <div class="shared-post-header">
                        <img src="" alt="${originalUser.displayName}" class="avatar avatar--sm" data-user-id="${originalUser.id}">
                        <span><strong>${originalUser.displayName}</strong> @${originalUser.username}</span>
                    </div>
                    <div class="shared-post-content">${originalPost.content}</div>
                    ${originalPost.image ? `<img src="${originalPost.image}" alt="Original post image" class="post-image">` : ''}
                </div>
                <div class="post-actions">
                    <button class="post-action like-btn ${isLiked ? 'liked' : ''}" data-post-id="${post.id}">
                        <span class="action-icon">${isLiked ? '❤️' : '🤍'}</span>
                        <span class="action-count">${post.likes}</span>
                    </button>
                    <button class="post-action comment-btn" data-post-id="${post.id}">
                        <span class="action-icon">💬</span>
                        <span class="action-count">${post.comments}</span>
                    </button>
                    <button class="post-action share-btn" data-post-id="${post.originalPostId}">
                        <span class="action-icon">🔄</span>
                        <span class="action-count">${originalPost.shares}</span>
                    </button>
                </div>
                <div class="comments-section" id="comments-${post.id}">
                    ${postComments.map(comment => this.renderComment(comment)).join('')}
                    <form class="comment-form" data-post-id="${post.id}">
                        <input type="text" class="comment-input" placeholder="Add a comment..." required>
                        <button type="submit" class="comment-submit">Post</button>
                    </form>
                </div>
            </div>`;
    }

    /**
     * Enhanced comment rendering with proper image loading
     */
    renderComment(comment) {
        const user = this.users.find(u => u.id === comment.userId);
        if (!user) return '';

        const commentHtml = `
            <div class="comment-item" data-comment-id="${comment.id}">
                <img src="" alt="${user.displayName}" class="avatar avatar--sm" data-user-id="${user.id}">
                <div class="comment-content">
                    <div class="comment-author">${user.displayName}</div>
                    <div class="comment-text">${comment.content}</div>
                </div>
            </div>`;

        // Load avatar after rendering
        setTimeout(() => {
            const commentElement = document.querySelector(`[data-comment-id="${comment.id}"] .avatar`);
            if (commentElement) {
                this.loadImageWithFallback(commentElement, user.avatar, user.fallbackAvatar, user.displayName);
            }
        }, 0);

        return commentHtml;
    }

    /**
     * Enhanced profile page rendering with proper image loading
     */
    renderProfilePage() {
        if (!this.currentUser) return;

        // Update profile information
        this.loadImageWithFallback(
            document.getElementById('profileAvatar'),
            this.currentUser.avatar,
            this.currentUser.fallbackAvatar,
            this.currentUser.displayName
        );

        document.getElementById('profileDisplayName').textContent = this.currentUser.displayName;
        document.getElementById('profileUsername').textContent = `@${this.currentUser.username}`;
        document.getElementById('profileBio').textContent = this.currentUser.bio;
        document.getElementById('profileLocation').textContent = this.currentUser.location || 'Location not set';
        document.getElementById('profileJoinDate').textContent = this.currentUser.joinDate || 'Unknown';
        
        const websiteLink = document.getElementById('profileWebsite');
        if (websiteLink && this.currentUser.website) {
            websiteLink.textContent = this.currentUser.website;
            websiteLink.href = `https://${this.currentUser.website}`;
        }

        // Update stats
        document.getElementById('profilePosts').textContent = this.currentUser.posts;
        document.getElementById('profileFollowing').textContent = this.currentUser.following;
        document.getElementById('profileFollowers').textContent = this.currentUser.followers;

        // Render user's posts in grid format
        const userPosts = this.posts.filter(post => 
            (post.userId === this.currentUser.id && post.type !== 'shared') ||
            (post.userId === this.currentUser.id && post.type === 'shared')
        );
        
        const container = document.getElementById('profilePosts');
        if (container) {
            container.innerHTML = userPosts.length > 0 ? 
                userPosts.map(post => this.renderPost(post)).join('') : 
                '<div class="empty-state"><p>No posts yet</p></div>';
            
            // Load images after rendering
            setTimeout(() => this.loadPostImages(), 100);
        }

        // Animate profile elements
        this.animateProfileElements();
    }

    /**
     * Enhanced avatar selection with proper image loading
     */
    showAvatarModal() {
        const modal = document.getElementById('avatarModal');
        const grid = document.getElementById('avatarGrid');
        
        if (!modal || !grid) return;

        grid.innerHTML = this.avatarOptions.map((avatar, index) => `
            <img src="" alt="Avatar ${index + 1}" class="avatar-option ${avatar.url === this.currentUser.avatar ? 'selected' : ''}" data-avatar="${avatar.url}" data-fallback="${avatar.fallback}">
        `).join('');

        // Load avatar images
        grid.querySelectorAll('.avatar-option').forEach((option, index) => {
            this.loadImageWithFallback(option, this.avatarOptions[index].url, this.avatarOptions[index].fallback, `Avatar ${index + 1}`);
            
            option.addEventListener('click', (e) => {
                // Add selection animation
                option.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    option.style.transform = 'scale(1)';
                    this.selectAvatar(e);
                }, 150);
            });
        });

        modal.classList.remove('hidden');
    }

    /**
     * Enhanced avatar selection with animation
     */
    selectAvatar(e) {
        const newAvatar = e.target.dataset.avatar;
        const newFallback = e.target.dataset.fallback;
        
        // Update avatar selection UI
        document.querySelectorAll('.avatar-option').forEach(option => {
            option.classList.remove('selected');
        });
        e.target.classList.add('selected');

        // Update user avatar with animation
        this.currentUser.avatar = newAvatar;
        this.currentUser.fallbackAvatar = newFallback;
        
        // Animate avatar changes
        const avatarElements = [
            { selector: '#currentUserAvatar', element: document.getElementById('currentUserAvatar') },
            { selector: '#dropdownUserAvatar', element: document.getElementById('dropdownUserAvatar') },
            { selector: '#sidebarAvatar', element: document.getElementById('sidebarAvatar') },
            { selector: '#profileAvatar', element: document.getElementById('profileAvatar') }
        ];
        
        avatarElements.forEach(({ element }) => {
            if (element) {
                element.style.transform = 'scale(0)';
                setTimeout(() => {
                    this.loadImageWithFallback(element, newAvatar, newFallback, this.currentUser.displayName);
                    element.style.transition = 'transform 0.3s ease';
                    element.style.transform = 'scale(1)';
                }, 150);
            }
        });

        setTimeout(() => this.hideAvatarModal(), 800);
    }

    // Continue with all remaining methods from the previous implementation...
    // (Include all other methods with the same functionality)

    /**
     * Validate password requirements
     */
    validatePassword(password) {
        const hasLength = password.length >= 6;
        const hasUppercase = /[A-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        
        return hasLength && hasUppercase && hasNumber && hasSpecial;
    }

    showError(elementId, message, type = 'error') {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.className = `error-message ${type}`;
            errorElement.classList.remove('hidden');
            setTimeout(() => {
                errorElement.style.opacity = '0';
                setTimeout(() => {
                    errorElement.classList.add('hidden');
                    errorElement.style.opacity = '1';
                }, 300);
            }, 5000);
        }
    }

    showLoginPage(e) {
        if (e) e.preventDefault();
        document.getElementById('loginPage').classList.remove('hidden');
        document.getElementById('signupPage').classList.add('hidden');
        document.getElementById('mainApp').classList.add('hidden');
    }

    showSignupPage(e) {
        if (e) e.preventDefault();
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('signupPage').classList.remove('hidden');
        document.getElementById('mainApp').classList.add('hidden');
    }

    renderTrendingTopics() {
        const container = document.getElementById('trendingTopics');
        if (!container) return;
        container.innerHTML = this.trendingTopics.map(topic => 
            `<div class="trending-topic">${topic}</div>`
        ).join('');
    }

    handleNavigation(e) {
        const page = e.target.dataset.page;
        if (page) {
            this.navigateToPage(page);
        }
    }

    bindPostEvents() {
        document.querySelectorAll('.like-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleLike(e));
        });
        document.querySelectorAll('.comment-form').forEach(form => {
            form.addEventListener('submit', (e) => this.handleComment(e));
        });
        document.querySelectorAll('.share-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleShareClick(e));
        });
        document.querySelectorAll('.post-user-name').forEach(name => {
            name.addEventListener('click', (e) => this.handleUserClick(e));
        });
        document.querySelectorAll('.post-menu-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handlePostMenu(e));
        });
    }

    handleLike(e) {
        e.preventDefault();
        const postId = e.currentTarget.dataset.postId;
        const existingLike = this.likes.find(like => like.postId === postId && like.userId === this.currentUser.id);
        
        const post = this.posts.find(p => p.id === postId);
        if (!post) return;

        if (existingLike) {
            this.likes = this.likes.filter(like => like.id !== existingLike.id);
            post.likes--;
        } else {
            this.likes.push({
                id: `like-${Date.now()}`,
                postId,
                userId: this.currentUser.id,
                timestamp: new Date().toISOString()
            });
            post.likes++;
            this.animateLike(e.currentTarget);
            
            if (post.userId !== this.currentUser.id) {
                this.addNotification(post.userId, 'like', `${this.currentUser.displayName} liked your post`, postId);
            }
        }

        const isLiked = !existingLike;
        const iconSpan = e.currentTarget.querySelector('.action-icon');
        const countSpan = e.currentTarget.querySelector('.action-count');
        
        iconSpan.textContent = isLiked ? '❤️' : '🤍';
        countSpan.textContent = post.likes;
        e.currentTarget.classList.toggle('liked', isLiked);
        
        this.updateNotificationBadge();
    }

    animateLike(button) {
        button.classList.add('like-animation');
        
        for (let i = 0; i < 5; i++) {
            const heart = document.createElement('div');
            heart.textContent = '❤️';
            heart.style.position = 'absolute';
            heart.style.fontSize = '12px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1000';
            
            const rect = button.getBoundingClientRect();
            heart.style.left = rect.left + Math.random() * 30 + 'px';
            heart.style.top = rect.top + Math.random() * 20 + 'px';
            
            document.body.appendChild(heart);
            
            heart.animate([
                { transform: 'translateY(0) scale(1)', opacity: 1 },
                { transform: 'translateY(-30px) scale(0.5)', opacity: 0 }
            ], {
                duration: 1000,
                easing: 'ease-out'
            }).onfinish = () => heart.remove();
        }
        
        setTimeout(() => button.classList.remove('like-animation'), 600);
    }

    handleComment(e) {
        e.preventDefault();
        const postId = e.target.dataset.postId;
        const input = e.target.querySelector('.comment-input');
        const content = input.value.trim();
        
        if (!content) return;

        const comment = {
            id: `comment-${Date.now()}`,
            postId,
            userId: this.currentUser.id,
            content,
            timestamp: new Date().toISOString()
        };

        this.comments.push(comment);
        
        const post = this.posts.find(p => p.id === postId);
        if (post) {
            post.comments++;
            if (post.userId !== this.currentUser.id) {
                this.addNotification(post.userId, 'comment', `${this.currentUser.displayName} commented on your post`, postId);
            }
        }

        const commentsSection = document.getElementById(`comments-${postId}`);
        if (commentsSection) {
            const commentHTML = this.renderComment(comment);
            const form = commentsSection.querySelector('.comment-form');
            form.insertAdjacentHTML('beforebegin', commentHTML);
        }

        const commentBtn = document.querySelector(`[data-post-id="${postId}"].comment-btn .action-count`);
        if (commentBtn) {
            commentBtn.textContent = post.comments;
        }

        input.value = '';
        this.updateNotificationBadge();
    }

    handleShareClick(e) {
        const postId = e.currentTarget.dataset.postId;
        const post = this.posts.find(p => p.id === postId);
        if (!post) return;
        this.currentSharePost = post;
        this.showShareModal(post);
    }

    handleShare(e) {
        e.preventDefault();
        if (!this.currentSharePost) return;

        const shareMessage = document.getElementById('shareMessage').value.trim();
        
        const sharedPost = {
            id: `share-${Date.now()}`,
            userId: this.currentUser.id,
            type: 'shared',
            shareMessage: shareMessage,
            originalPostId: this.currentSharePost.id,
            timestamp: new Date().toISOString(),
            likes: 0,
            comments: 0,
            shares: 0
        };

        this.posts.unshift(sharedPost);
        this.currentSharePost.shares++;

        if (this.currentSharePost.userId !== this.currentUser.id) {
            this.addNotification(
                this.currentSharePost.userId, 
                'share', 
                `${this.currentUser.displayName} shared your post`, 
                this.currentSharePost.id
            );
        }

        this.hideShareModal();
        this.renderPosts();
        this.updateNotificationBadge();
        this.showTemporaryMessage('Post shared successfully! 🎉');
    }

    showShareModal(post) {
        const modal = document.getElementById('shareModal');
        const preview = document.getElementById('originalPostPreview');
        const user = this.users.find(u => u.id === post.userId);
        
        if (!modal || !preview || !user) return;

        preview.innerHTML = `
            <div class="original-post">
                <div class="post-header">
                    <img src="" alt="${user.displayName}" class="avatar avatar--sm">
                    <div class="post-user-info">
                        <div class="post-user-name">${user.displayName}</div>
                        <div class="post-username">@${user.username}</div>
                    </div>
                </div>
                <div class="post-content">${post.content}</div>
                ${post.image ? `<img src="${post.image}" alt="Post image" class="post-image">` : ''}
            </div>`;

        // Load avatar in preview
        const previewAvatar = preview.querySelector('.avatar');
        if (previewAvatar) {
            this.loadImageWithFallback(previewAvatar, user.avatar, user.fallbackAvatar, user.displayName);
        }

        modal.classList.remove('hidden');
        document.getElementById('shareMessage').focus();
    }

    hideShareModal() {
        document.getElementById('shareModal')?.classList.add('hidden');
        document.getElementById('shareMessage').value = '';
        this.currentSharePost = null;
    }

    showTemporaryMessage(message) {
        const messageEl = document.createElement('div');
        messageEl.textContent = message;
        messageEl.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--theme-primary);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.75rem;
            box-shadow: var(--shadow-gold);
            z-index: 10000;
            font-family: var(--font-body);
            font-weight: 600;
            animation: slideInRight 0.3s ease;
        `;
        
        document.body.appendChild(messageEl);
        
        setTimeout(() => {
            messageEl.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => messageEl.remove(), 300);
        }, 3000);
    }

    animateProfileElements() {
        const elements = [
            '.profile-avatar-container',
            '.profile-info-container', 
            '.profile-actions-container',
            '.profile-stat-card'
        ];
        
        elements.forEach((selector, index) => {
            const els = document.querySelectorAll(selector);
            els.forEach((el, elIndex) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    el.style.transition = 'all 0.5s ease';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, (index + elIndex) * 100);
            });
        });
    }

    handleSearch(e) {
        const query = e.target.value.toLowerCase().trim();
        const resultsContainer = document.getElementById('searchResults');
        
        if (!query) {
            this.hideSearchResults();
            return;
        }

        const results = this.users.filter(user => 
            user.displayName.toLowerCase().includes(query) ||
            user.username.toLowerCase().includes(query) ||
            user.email.toLowerCase().includes(query) ||
            user.bio.toLowerCase().includes(query)
        );

        if (results.length > 0) {
            resultsContainer.innerHTML = results.map(user => `
                <div class="search-result-item" data-user-id="${user.id}">
                    <img src="" alt="${user.displayName}" class="avatar avatar--sm" data-user-id="${user.id}">
                    <div>
                        <div style="font-weight: 600; color: var(--theme-text-primary);">${user.displayName}</div>
                        <div style="font-size: 0.875rem; color: var(--theme-text-secondary); font-family: var(--font-mono);">@${user.username}</div>
                        <div style="font-size: 0.75rem; color: var(--theme-text-secondary); margin-top: 2px;">${user.bio.substring(0, 50)}...</div>
                    </div>
                </div>
            `).join('');

            // Load avatars in search results
            resultsContainer.querySelectorAll('.avatar').forEach(avatar => {
                const userId = avatar.dataset.userId;
                const user = this.users.find(u => u.id === userId);
                if (user) {
                    this.loadImageWithFallback(avatar, user.avatar, user.fallbackAvatar, user.displayName);
                }
            });

            resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', (e) => this.handleSearchResultClick(e));
            });

            this.showSearchResults();
        } else {
            resultsContainer.innerHTML = '<div class="search-result-item">No users found</div>';
            this.showSearchResults();
        }
    }

    navigateToPage(pageName) {
        document.querySelectorAll('.nav-btn, .bottom-nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        document.querySelectorAll(`[data-page="${pageName}"]`).forEach(btn => {
            btn.classList.add('active');
        });

        const currentPage = document.querySelector('.page.active');
        const targetPage = document.getElementById(`${pageName}Page`);
        
        if (currentPage && currentPage !== targetPage) {
            currentPage.style.opacity = '0';
            currentPage.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                currentPage.classList.add('hidden');
                currentPage.classList.remove('active');
                currentPage.style.opacity = '1';
                currentPage.style.transform = 'translateX(0)';
            }, 200);
        }

        if (targetPage) {
            setTimeout(() => {
                targetPage.classList.remove('hidden');
                targetPage.classList.add('active');
                targetPage.style.opacity = '0';
                targetPage.style.transform = 'translateX(20px)';
                
                setTimeout(() => {
                    targetPage.style.transition = 'all 0.3s ease';
                    targetPage.style.opacity = '1';
                    targetPage.style.transform = 'translateX(0)';
                }, 50);
            }, 200);
        }

        this.currentPage = pageName;

        setTimeout(() => {
            switch (pageName) {
                case 'profile':
                    this.renderProfilePage();
                    break;
                case 'notifications':
                    this.renderNotifications();
                    break;
                case 'feed':
                    this.renderPosts();
                    break;
            }
        }, 250);
    }

    // Include all remaining utility methods...
    handleUserClick(e) {
        const userId = e.target.dataset.userId;
        const user = this.users.find(u => u.id === userId);
        if (user) {
            this.showTemporaryMessage(`Viewing ${user.displayName}'s profile`);
        }
    }

    handlePostMenu(e) {
        const postId = e.currentTarget.dataset.postId;
        const post = this.posts.find(p => p.id === postId);
        
        if (!post || post.userId !== this.currentUser.id) return;

        const action = confirm('What would you like to do?\n\nOK - Edit Post\nCancel - Delete Post');
        
        if (action) {
            this.editPost(post);
        } else if (confirm('Are you sure you want to delete this post?')) {
            this.deletePost(postId);
        }
    }

    editPost(post) {
        this.currentEditingPost = post;
        document.getElementById('postModalTitle').textContent = 'Edit Post';
        document.getElementById('postContent').value = post.content;
        this.showPostModal();
    }

    deletePost(postId) {
        this.posts = this.posts.filter(p => p.id !== postId);
        this.comments = this.comments.filter(c => c.postId !== postId);
        this.likes = this.likes.filter(l => l.postId !== postId);
        this.renderPosts();
        this.showTemporaryMessage('Post deleted successfully');
    }

    showPostModal() {
        document.getElementById('postModal').classList.remove('hidden');
        document.getElementById('postContent').focus();
        this.updateCharacterCount({ target: document.getElementById('postContent') });
    }

    hidePostModal() {
        document.getElementById('postModal').classList.add('hidden');
        document.getElementById('postForm').reset();
        document.getElementById('imagePreview').classList.add('hidden');
        document.getElementById('imagePreview').innerHTML = '';
        document.getElementById('postModalTitle').textContent = 'Create Post';
        this.currentEditingPost = null;
    }

    handlePostSubmit(e) {
        e.preventDefault();
        const content = document.getElementById('postContent').value.trim();
        const imageFile = document.getElementById('postImage').files[0];
        
        if (!content && !imageFile) return;

        if (this.currentEditingPost) {
            this.currentEditingPost.content = content;
            if (imageFile) {
                this.handleImageFileRead(imageFile, (imageDataUrl) => {
                    this.currentEditingPost.image = imageDataUrl;
                    this.hidePostModal();
                    this.renderPosts();
                });
            } else {
                this.hidePostModal();
                this.renderPosts();
            }
        } else {
            const post = {
                id: `post-${Date.now()}`,
                userId: this.currentUser.id,
                content,
                timestamp: new Date().toISOString(),
                likes: 0,
                comments: 0,
                shares: 0,
                image: null,
                type: 'original'
            };

            if (imageFile) {
                this.handleImageFileRead(imageFile, (imageDataUrl) => {
                    post.image = imageDataUrl;
                    this.posts.unshift(post);
                    this.currentUser.posts++;
                    this.updateSidebarProfile();
                    this.hidePostModal();
                    this.renderPosts();
                });
            } else {
                this.posts.unshift(post);
                this.currentUser.posts++;
                this.updateSidebarProfile();
                this.hidePostModal();
                this.renderPosts();
            }
        }
    }

    handleImageFileRead(file, callback) {
        const reader = new FileReader();
        reader.onload = (e) => callback(e.target.result);
        reader.readAsDataURL(file);
    }

    updateCharacterCount(e) {
        const count = e.target.value.length;
        const counter = document.getElementById('charCount');
        if (counter) {
            counter.textContent = count;
            counter.style.color = count > 250 ? '#FF4757' : 'var(--theme-text-secondary)';
        }
    }

    handleImageUpload(e) {
        const file = e.target.files[0];
        const preview = document.getElementById('imagePreview');
        
        if (!file || !preview) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            preview.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    }

    toggleUserDropdown(e) {
        e.stopPropagation();
        const dropdown = document.getElementById('userDropdown');
        if (dropdown) {
            dropdown.classList.toggle('hidden');
        }

        if (!dropdown.classList.contains('hidden')) {
            setTimeout(() => {
                document.addEventListener('click', this.closeUserDropdown.bind(this), { once: true });
            }, 0);
        }
    }

    closeUserDropdown() {
        document.getElementById('userDropdown')?.classList.add('hidden');
    }

    showUserSwitchModal() {
        const modal = document.getElementById('userSwitchModal');
        const list = document.getElementById('userSwitchList');
        
        if (!modal || !list) return;

        list.innerHTML = this.users.map(user => `
            <div class="user-item" data-user-id="${user.id}">
                <img src="" alt="${user.displayName}" class="avatar avatar--md" data-user-id="${user.id}">
                <div class="user-item-info">
                    <div class="user-item-name">${user.displayName}</div>
                    <div class="user-item-email">${user.email}</div>
                </div>
                ${user.id === this.currentUser.id ? '<span class="status status--success">Current</span>' : ''}
            </div>
        `).join('');

        // Load avatars
        list.querySelectorAll('.avatar').forEach(avatar => {
            const userId = avatar.dataset.userId;
            const user = this.users.find(u => u.id === userId);
            if (user) {
                this.loadImageWithFallback(avatar, user.avatar, user.fallbackAvatar, user.displayName);
            }
        });

        list.querySelectorAll('.user-item').forEach(item => {
            item.addEventListener('click', (e) => this.switchUser(e));
        });

        modal.classList.remove('hidden');
    }

    hideUserSwitchModal() {
        document.getElementById('userSwitchModal')?.classList.add('hidden');
    }

    switchUser(e) {
        const userId = e.currentTarget.dataset.userId;
        const user = this.users.find(u => u.id === userId);
        
        if (user && user.id !== this.currentUser.id) {
            this.currentUser = user;
            this.updateCurrentUserUI();
            this.updateSidebarProfile();
            this.renderPosts();
            this.hideUserSwitchModal();
            this.closeUserDropdown();
            this.navigateToPage('feed');
            this.showTemporaryMessage(`Switched to ${user.displayName}`);
        }
    }

    hideAvatarModal() {
        document.getElementById('avatarModal')?.classList.add('hidden');
    }

    handleSearchResultClick(e) {
        const userId = e.currentTarget.dataset.userId;
        const user = this.users.find(u => u.id === userId);
        
        if (user) {
            this.showTemporaryMessage(`Viewing ${user.displayName}'s profile`);
            this.hideSearchResults();
            document.getElementById('searchInput').value = '';
        }
    }

    showSearchResults() {
        document.getElementById('searchResults')?.classList.remove('hidden');
    }

    hideSearchResults() {
        document.getElementById('searchResults')?.classList.add('hidden');
    }

    addNotification(userId, type, message, postId = null) {
        if (userId === this.currentUser.id) return;

        this.notifications.push({
            id: `notification-${Date.now()}`,
            userId,
            type,
            message,
            postId,
            timestamp: new Date().toISOString(),
            read: false
        });
    }

    updateNotificationBadge() {
        const badge = document.getElementById('notificationBadge');
        const unreadCount = this.notifications.filter(n => !n.read && n.userId === this.currentUser.id).length;
        
        if (badge) {
            if (unreadCount > 0) {
                badge.textContent = unreadCount;
                badge.classList.remove('hidden');
            } else {
                badge.classList.add('hidden');
            }
        }
    }

    renderNotifications() {
        const container = document.getElementById('notificationsList');
        if (!container) return;

        const userNotifications = this.notifications
            .filter(n => n.userId === this.currentUser.id)
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        if (userNotifications.length === 0) {
            container.innerHTML = '<div class="empty-state"><p>No notifications yet</p></div>';
            return;
        }

        container.innerHTML = userNotifications.map(notification => {
            const timeAgo = this.getTimeAgo(new Date(notification.timestamp));
            return `
                <div class="notification-item ${!notification.read ? 'unread' : ''}" data-notification-id="${notification.id}">
                    <div class="notification-content">
                        <div class="notification-text">${notification.message}</div>
                        <div class="notification-time">${timeAgo}</div>
                    </div>
                </div>
            `;
        }).join('');

        this.notifications.forEach(n => {
            if (n.userId === this.currentUser.id) {
                n.read = true;
            }
        });
        
        this.updateNotificationBadge();
    }

    logout() {
        this.currentUser = null;
        this.showLoginPage();
        this.closeUserDropdown();
        this.showTemporaryMessage('Logged out successfully');
    }

    hideAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.add('hidden');
        });
        this.currentEditingPost = null;
        this.currentSharePost = null;
    }

    toggleMobileMenu() {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.toggle('mobile-open');
        }
    }

    handleKeyboardNavigation(e) {
        if (e.key === 'Escape') {
            this.hideAllModals();
            this.hideSearchResults();
            this.closeUserDropdown();
        }
        
        if (e.ctrlKey || e.metaKey) {
            switch (e.key) {
                case '1':
                    e.preventDefault();
                    this.navigateToPage('feed');
                    break;
                case '2':
                    e.preventDefault();
                    this.navigateToPage('profile');
                    break;
                case '3':
                    e.preventDefault();
                    this.navigateToPage('notifications');
                    break;
                case 'n':
                    e.preventDefault();
                    this.showPostModal();
                    break;
            }
        }
    }

    editProfile() {
        this.showTemporaryMessage('Profile editing feature coming soon!');
    }

    getTimeAgo(date) {
        const now = new Date();
        const diffInSeconds = Math.floor((now - date) / 1000);
        
        if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
        if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`;
        
        return date.toLocaleDateString();
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.vibeLinkApp = new VibeLinkApp();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (!document.hidden && window.vibeLinkApp && window.vibeLinkApp.currentUser) {
        window.vibeLinkApp.updateNotificationBadge();
    }
});

// Handle window resize for responsive behavior
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        document.getElementById('sidebar')?.classList.remove('mobile-open');
    }
});

// Add CSS animations for new features
const additionalStyles = `
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideOutRight {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100px);
  }
}

.theme-transitioning * {
  transition: background-color 500ms ease, color 500ms ease, border-color 500ms ease !important;
}
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);