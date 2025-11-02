// ============================================
// HURST CLASS STUDY: LESSON DATA
// ============================================
//
// HOW TO ADD A NEW LESSON:
//
// 1. Copy the entire lesson object template below (from the opening { to the closing },)
// 2. Paste it at the end of the array (before the final ]);
// 3. Fill in your content for each field
// 4. Make sure each lesson has a unique "id"
// 5. Save this file
//
// IMPORTANT:
// - Each lesson object must be separated by a comma
// - The "id" must be unique and lowercase with hyphens (e.g., "lesson-1", "lesson-2")
// - Keep the quotes around text values
// - Use relative paths: "images/lesson-x.png", "audio/lesson-x.mp3"
// ============================================

const lessonData = [
    {
        id: "lesson-1",
        title: "Lesson 1: A Deep Dive into the Gospels",
        scripture: "Matthew, Mark, Luke - Overview",
        summary_preview:
            "This foundational lesson explores the Synoptic Gospels—Matthew, Mark, and Luke—examining why we have four distinct accounts of Jesus's life and what makes each Gospel unique.",
        summary_full:
            "This lesson served as a foundational study of the Synoptic Gospels (Matthew, Mark, and Luke) to prepare for a deeper study into the Gospel of John. The session explored the definition of 'the gospel,' the literary genre of ancient biography, and the crucial concept of 'target audience' to explain why we have four distinct accounts of Jesus's life. The lesson began with a foundational question: 'What does gospel mean?' The word comes from the Greek euangelion, meaning 'good news,' often used in ancient times to announce a military victory. In a Christian context, quoting 1 Corinthians 15:1-4, the Gospel is the record that 'Christ died for our sins, according to the scriptures, that he was buried, and that he was raised on the 3rd day according to the scriptures.' The discussion then shifted to the genre of the Gospels. While we consider them biographies of Jesus, they must be understood through the lens of ancient biography, which differs significantly from modern biography. Ancient biographers focused on what they deemed most important, often skipping large sections of a person's life—like the missing portions of Jesus's life from infancy to age 12, and from age 12 to 30. The central question was, 'Why do we need four different accounts?' The main reason is that each Gospel was written for a specific target audience. Matthew wrote for Jewish Christians, using heavy Old Testament references (60-100 times) and Jewish terminology. Mark wrote for Gentile Romans, incorporating Latin words and explaining Jewish customs his audience wouldn't know. Luke, a Gentile physician, wrote the most comprehensive gospel with historical detail, universal scope, special emphasis on women (43 mentions), and unique parables. The lesson concluded by emphasizing that the different details in the Gospels are not contradictions. These differences are a hallmark of authentic, independent testimony, all pointing to the same foundational truth.",
        tie_in_preview:
            "The song 'Enough of the Road' captures the struggle of finding authentic words to share our faith story, inspired by the realization that each Gospel writer crafted their account for a specific audience.",
        tie_in_full:
            "Our journey began not with an answer, but with a surprisingly difficult question. When our group leader, Ben, asked us to define the word 'gospel'—a word we use all the time—a quiet struggle filled the room. The definition felt clear in our hearts, yet we couldn't find the words to succinctly express it. That shared, public challenge is captured in the song's opening verse, which takes the struggle and places it in an intimate, one-on-one context. The song opens in the 'lamplight of her kitchen,' where the narrator's 'old Sunday phrases' crumble, forcing a search for a more honest way to share their story. The lesson then pivoted from that personal struggle to a historical revelation. The leader introduced a concept new to many of us: that each of the gospel writers crafted their story for a specific 'target audience.' With this new perspective, the differences between the Gospels no longer seemed like weaknesses to be defended. Instead, they became a strength, serving as powerful evidence of the story's authenticity. Like variations in eyewitness accounts, the unique details in each testimony pointed to the same core truth. The song finds its answer by looking to their example. It realizes that each gospel writer crafted a story from their own experiences, intentionally tailoring it to a unique audience. The 'different kindling' represents their individual perspectives, unique details, and even the seemingly contradictory parts of their accounts. But all of that different kindling serves to reveal the one 'same bright fire': the single, unchanging truth of the Gospel. This realization is more than a permission slip; it's a lesson and a challenge that we, too, must tell the story in a way tailored for our audience. It frees us from the pressure of getting every detail perfect, reminding us that it doesn't have to be 'the whole map,' just 'enough of the road' to help someone find their way.",
        song_title: "Enough of the Road",
        image_url: "images/lesson-1.png",
        audio_file: "audio/lesson-1.mp3",
        suno_link: "https://suno.com/s/3DKxQRvElIiDWZXN"
    },
    {
        id: "lesson-2",
        title: "Lesson 2: Reading the Gospels with Humility and Context",
        scripture: "Matthew 8:1–4",
        summary_preview:
            "This lesson explores how to approach the Gospels with humility—recognizing cultural, historical, and contextual distance—so that we don’t confuse description for prescription.",
        summary_full:
            "Lesson 2 emphasizes reading the Gospels with humility and awareness of context. It unpacks how modern readers can misapply Scripture when failing to consider its original audience or purpose. The discussion centers on Matthew 8:1–4, where Jesus heals a leper, showing compassion beyond social boundaries. The class examined the 'Bull’s-Eye Method'—a layered approach to interpretation that distinguishes what applied to the original audience, what applies universally, and what applies personally today. Participants learned how easily description can be mistaken for prescription and how humility keeps interpretation grounded in truth rather than assumption.",
        tie_in_preview:
            "The song 'Standing at the Doorway' captures the tension between the world’s noise and the quiet call to understand before acting, mirroring our need to approach the Gospels with reverent humility.",
        tie_in_full:
            "The song ‘Standing at the Doorway’ draws from the imagery of waiting on the threshold between understanding and assumption. Just as the lesson calls us to read the Gospels carefully, the song’s narrator stands before the 'doorway of truth,' acknowledging the temptation to rush into conclusions. The lyrics reflect the slow, faithful process of listening—mirroring the humility required to truly grasp Jesus’s message in its historical and cultural context. Both the song and the lesson invite believers to pause, reflect, and enter into understanding rather than react from instinct.",
        song_title: "Standing at the Doorway",
        image_url: "images/lesson-2.png",
        audio_file: "audio/lesson-2.mp3",
        suno_link: "https://suno.com/s/qyxWoygzR74r0Aqd"
    },
    {
        id: "lesson-3",
        title: "Lesson 3: Establishing the Historical Witness of John's Gospel",
        scripture: "John 20:28, 30–31",
        summary_preview:
            "This lesson examines John’s Gospel as an eyewitness account, reinforced by archaeological and textual evidence that confirm its authenticity and purpose.",
        summary_full:
            "Lesson 3 focuses on John’s Gospel as a direct testimony of Jesus’s life and divinity. Participants explored the significance of John 20:28—Thomas’s declaration 'My Lord and my God'—and how it frames the book’s purpose statement in verses 30–31. The discussion included the discovery of a Domitian coin bearing divine titles, demonstrating the political and theological stakes of calling Jesus 'God.' The class considered John’s distinctiveness as an eyewitness and how his narrative builds a bridge between history and faith.",
        tie_in_preview:
            "The song 'The Last Witness' reflects John’s unique perspective as the final living eyewitness to Christ’s ministry, weaving faith, memory, and revelation together.",
        tie_in_full:
            "‘The Last Witness’ draws its emotional center from John’s longevity and reflection as the last surviving disciple. The song evokes the weight of memory—of seeing miracles, hearing the voice of God made flesh, and carrying those memories across decades. It parallels John’s Gospel: intimate, reflective, and written so 'you may believe.' Through both the song and the lesson, we see faith as testimony—anchored not in myth, but in the eyewitness witness who outlived them all.",
        song_title: "The Last Witness",
        image_url: "images/lesson-3.png",
        audio_file: "audio/lesson-3.mp3",
        suno_link: "https://suno.com/s/J33ELRr9EsWyTzYM"
    },
    {
        id: "lesson-4",
        title: "Lesson 4: A Map to John's Gospel — Purpose, Signs, and the 'I AM' Statements",
        scripture: "John 20:30–31; John 1:1–18",
        summary_preview:
            "This lesson explores the structure of John’s Gospel—the seven miraculous signs and the seven 'I AM' statements—as a map revealing Jesus’s divine identity.",
        summary_full:
            "Lesson 4 invites participants to navigate John’s Gospel as a spiritual map. The class examined how the seven miraculous signs—from turning water to wine to raising Lazarus—each illuminate a unique facet of Christ’s divinity. The 'I AM' statements ('I am the bread of life,' 'I am the light of the world,' etc.) serve as signposts connecting Old Testament revelation with the person of Jesus. Together, these motifs form a cohesive portrait of purpose and power: that we may believe and have life in His name.",
        tie_in_preview:
            "The song 'Every Wonder Spoke His Name' celebrates how every miracle in John’s Gospel reveals not just power, but identity—the Creator speaking through creation itself.",
        tie_in_full:
            "In ‘Every Wonder Spoke His Name,’ the music and lyrics weave the themes of John’s Gospel into a lyrical journey through the signs of Jesus. Each verse reflects one of the miracles, building toward the realization that every act of power was also a declaration of who He is. The song’s refrain—'Every wonder spoke His name'—echoes the Gospel’s purpose: that belief arises not from spectacle, but from revelation. It complements the lesson’s call to read John as both narrative and theology, a map marked by the signs of divinity.",
        song_title: "Every Wonder Spoke His Name",
        image_url: "images/lesson-4.png",
        audio_file: "audio/lesson-4.mp3",
        suno_link: "https://suno.com/s/sCJVmoBBPZD71zHl"
    },
    {
        id: "lesson-5",
        title: "Lesson 5: John's Prologue — The Pre-existent Word and the Themes of the Gospel",
        scripture: "John 1:1–18",
        summary_preview:
            "This lesson examines the opening of John’s Gospel, where the eternal Word becomes flesh, setting the foundation for all that follows.",
        summary_full:
            "Lesson 5 focuses on the majestic prologue of John’s Gospel, presenting Jesus as the divine Word who was with God and was God from the beginning. The study delves into the theological depth of 'In the beginning was the Word,' highlighting how John connects creation, revelation, and incarnation. Participants discussed how this passage introduces the Gospel’s major themes: light versus darkness, grace and truth, and the mystery of God made visible in human form.",
        tie_in_preview:
            "The song 'Never The Same' captures the transformation that occurs when the Word becomes flesh and dwells among us—how nothing remains unchanged once grace takes hold.",
        tie_in_full:
            "‘Never The Same’ brings to life the awe of the incarnation. The song echoes the poetic rhythm of John’s prologue, tracing how divine presence enters human history and alters it forever. Its verses build from quiet wonder to proclamation, mirroring the movement from 'the Word was with God' to 'the Word became flesh.' The lesson and song together remind us that the revelation of Christ is not theoretical—it’s experiential, and once encountered, we are never the same.",
        song_title: "Never The Same",
        image_url: "images/lesson-5.png",
        audio_file: "audio/lesson-5.mp3",
        suno_link: "https://suno.com/s/V8QYmNKy4hBvczwK"
    }

    // ============================================
    // TEMPLATE FOR NEW LESSONS
    // ============================================
    // ,
    // {
    //     id: "lesson-6",
    //     title: "Lesson 6: Your Title Here",
    //     scripture: "John X:XX–XX",
    //     summary_preview: "Short preview here...",
    //     summary_full: "Full lesson text here...",
    //     tie_in_preview: "Short song connection preview...",
    //     tie_in_full: "Full song explanation here...",
    //     song_title: "Song Title Here",
    //     image_url: "images/lesson-6.png",
    //     audio_file: "audio/lesson-6.mp3",
    //     suno_link: "https://suno.com/s/[your-song-id]"
    // }
];

