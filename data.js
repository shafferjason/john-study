// ============================================
// HURST CLASS STUDY: LESSON DATA
// ============================================
// 
// HOW TO ADD A NEW LESSON:
// 
// 1. Copy the entire lesson object template below (from the opening { to the closing },)
// 2. Paste it at the end of the array (before the final ];)
// 3. Fill in your content for each field
// 4. Make sure each lesson has a unique "id"
// 5. Save this file
// 
// IMPORTANT: 
// - Each lesson object must be separated by a comma
// - The "id" must be unique and lowercase with hyphens (e.g., "lesson-1", "lesson-2")
// - Keep the quotes around text values
// - You can use both /audio/filename.mp3 OR full URLs like https://example.com/audio.mp3
// 
// ============================================

const lessonData = [
    {
        // REQUIRED: Unique identifier (used in the URL)
        id: "lesson-1",
        
        // REQUIRED: The lesson title
        title: "Lesson 1: A Deep Dive into the Gospels",
        
        // REQUIRED: Scripture reference
        scripture: "Matthew, Mark, Luke - Overview",
        
        // REQUIRED: Short 1-2 sentence preview of the lesson
        summary_preview: "This foundational lesson explores the Synoptic Gospels—Matthew, Mark, and Luke—examining why we have four distinct accounts of Jesus's life and what makes each Gospel unique.",
        
        // REQUIRED: Full lesson summary (can be as long as you need)
        summary_full: "This lesson served as a foundational study of the Synoptic Gospels (Matthew, Mark, and Luke) to prepare for a deeper study into the Gospel of John. The session explored the definition of 'the gospel,' the literary genre of ancient biography, and the crucial concept of 'target audience' to explain why we have four distinct accounts of Jesus's life. The lesson began with a foundational question: 'What does gospel mean?' The word comes from the Greek euangelion, meaning 'good news,' often used in ancient times to announce a military victory. In a Christian context, quoting 1 Corinthians 15:1-4, the Gospel is the record that 'Christ died for our sins, according to the scriptures, that he was buried, and that he was raised on the 3rd day according to the scriptures.' The discussion then shifted to the genre of the Gospels. While we consider them biographies of Jesus, they must be understood through the lens of ancient biography, which differs significantly from modern biography. Ancient biographers focused on what they deemed most important, often skipping large sections of a person's life—like the missing portions of Jesus's life from infancy to age 12, and from age 12 to 30. The central question was, 'Why do we need four different accounts?' The main reason is that each Gospel was written for a specific target audience. Matthew wrote for Jewish Christians, using heavy Old Testament references (60-100 times) and Jewish terminology. Mark wrote for Gentile Romans, incorporating Latin words and explaining Jewish customs his audience wouldn't know. Luke, a Gentile physician, wrote the most comprehensive gospel with historical detail, universal scope, special emphasis on women (43 mentions), and unique parables. The lesson concluded by emphasizing that the different details in the Gospels are not contradictions. These differences are a hallmark of authentic, independent testimony, all pointing to the same foundational truth.",
        
        // REQUIRED: Short 1-2 sentence preview of how the song connects
        tie_in_preview: "The song 'Enough of the Road' captures the struggle of finding authentic words to share our faith story, inspired by the realization that each Gospel writer crafted their account for a specific audience.",
        
        // REQUIRED: Full explanation of the song's connection to the lesson
        tie_in_full: "Our journey began not with an answer, but with a surprisingly difficult question. When our group leader, Ben, asked us to define the word 'gospel'—a word we use all the time—a quiet struggle filled the room. The definition felt clear in our hearts, yet we couldn't find the words to succinctly express it. That shared, public challenge is captured in the song's opening verse, which takes the struggle and places it in an intimate, one-on-one context. The song opens in the 'lamplight of her kitchen,' where the narrator's 'old Sunday phrases' crumble, forcing a search for a more honest way to share their story. The lesson then pivoted from that personal struggle to a historical revelation. The leader introduced a concept new to many of us: that each of the gospel writers crafted their story for a specific 'target audience.' With this new perspective, the differences between the Gospels no longer seemed like weaknesses to be defended. Instead, they became a strength, serving as powerful evidence of the story's authenticity. Like variations in eyewitness accounts, the unique details in each testimony pointed to the same core truth. The song finds its answer by looking to their example. It realizes that each gospel writer crafted a story from their own experiences, intentionally tailoring it to a unique audience. The 'different kindling' represents their individual perspectives, unique details, and even the seemingly contradictory parts of their accounts. But all of that different kindling serves to reveal the one 'same bright fire': the single, unchanging truth of the Gospel. This realization is more than a permission slip; it's a lesson and a challenge that we, too, must tell the story in a way tailored for our audience. It frees us from the pressure of getting every detail perfect, reminding us that it doesn't have to be 'the whole map,' just 'enough of the road' to help someone find their way.",
        
        // REQUIRED: The title of the song
        song_title: "Enough of the Road",
        
        // OPTIONAL: Path to the song's image (can be /images/filename.jpg or a full URL)
        image_url: "images/lesson-1.png",
        
        // OPTIONAL: Path to the audio file (can be /audio/filename.mp3 or a full URL)
        audio_file: "audio/lesson-1.mp3",
        
        // OPTIONAL: Link to the song on Suno (backup for users who can't play the audio)
        suno_link: "https://suno.com/s/3DKxQRvElIiDWZXN"
    }
    
    // ============================================
    // TO ADD A NEW LESSON:
    // 
    // 1. Add a comma after the closing } above
    // 2. Copy this template:
    // 
    // ,
    // {
    //     id: "lesson-2",
    //     title: "Lesson 2: Your Title Here",
    //     scripture: "John X:XX-XX",
    //     summary_preview: "Short preview here...",
    //     summary_full: "Full lesson text here...",
    //     tie_in_preview: "Short song connection here...",
    //     tie_in_full: "Full song explanation here...",
    //     song_title: "Song Title Here",
    //     image_url: "images/lesson-2.png",
    //     audio_file: "audio/lesson-2.mp3",
    //     suno_link: "https://suno.com/song/your-song-id"
    // }
    //
    // 3. Fill in all the fields
    // 4. Save the file
    // ============================================
];
