import { createContext } from "react";

const Data = [
 {
  id: 1,
  genre: "Bollywood",
  ref: "https://www.bollywoodlife.com/videos/kiara-advani-birthday-journey-from-child-model-to-successful-bollywood-actress-2529733/",
  image:
   "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/00000021-6.jpeg?impolicy=Medium_Widthonly&w=420",
  heading:
   "Kiara Advani Birthday: Journey From Child Model to Successful Bollywood Actress",
  subheading:
   "Kiara Advani's philanthropic efforts have garnered attention. She actively participates in various charitable initiatives and supports causes close to her heart. She started as a child model, Kiara's path to Bollywood success has been nothing short of extraordinary.",
  content:
   'Starting as a child model, Kiara\'s path to Bollywood success has been nothing short of extraordinary. The young Kiara, born as Alia Advani but changed her name to Kiara Advani, as suggested by Salman Khan. She initially ventured into the modeling world and quickly gained recognition for her striking looks and charming presence on the runway. Gradually, her passion for performing arts led her to explore acting opportunities. Kiara\'s Bollywood debut came with the 2014 film "Fugly," which received a mixed response. However, it was her breakthrough role as Sakshi Dhoni, the wife of Indian cricket legend MS Dhoni, in the biopic "M.S. Dhoni: The Untold Story" (2016) that catapulted her to stardom. Her convincing portrayal earned her accolades and marked a turning point in her career. Following her successful debut, Kiara ventured into various genres, proving her versatility as an actress.',
  date: "July 31, 2023",
 },
 {
  id: 2,
  genre: "Bollywood",
  ref: "https://www.bollywoodlife.com/videos/omg-2-controversy-akshay-kumars-lord-shiva-character-to-be-changed-2529533/",
  image:
   "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/00000011-33.jpeg?impolicy=Medium_Widthonly&w=420",
  heading:
   "OMG 2 Controversy: Akshay Kumar's Lord Shiva character to be changed?",
  subheading:
   'In a sudden shift of events, the hotly anticipated "OMG - Oh My God!" sequel gets involved in a contentious debate. The Central Board of Film Certification (CBFC) has suggested changing Akshay Kumar\'s iconic portrayal of Lord Shiva in "OMG 2."',
  content:
   'OMG 2 Controversy: In a surprising turn of events, the highly anticipated sequel to the blockbuster "OMG - Oh My God!" is embroiled in a heated controversy. Reports suggest that the Central Board of Film Certification (CBFC) has recommended altering Akshay Kumar\'s iconic portrayal of Lord Shiva in "OMG 2." The original film, released several years ago, garnered immense praise for its thought-provoking storyline and Akshay Kumar\'s remarkable performance as the modern-day Lord Shiva. However, with "OMG 2" in the works, the CBFC\'s suggestion to replace Lord Shiva\'s character with a different mythological figure has raised eyebrows among fans and cinephiles alike. The CBFC\'s decision has sparked debates within the film industry and among audiences about artistic freedom and the portrayal of religious figures on the big screen. Some argue that altering Lord Shiva\'s character could dilute the essence of the film\'s message, which focused on questioning religious practices and embracing spirituality beyond conventions. As the controversy gains momentum, the production team of "OMG 2" has remained tight-lipped about the proposed changes, leaving fans eagerly awaiting an official statement.',
  date: "July 31, 2023",
 },
 {
  id: 3,
  genre: "Bollywood",
  ref: "https://www.bollywoodlife.com/news-gossip/kgf-3-yash-puts-a-condition-to-be-a-part-of-prashanth-neel-directorial-entertainment-news-stst-2530226/",
  image:
   "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/News18-BL-ZB-36.jpg?impolicy=Medium_Widthonly&w=1280&h=900",
  heading:
   "KGF 3: Yash puts a condition to be a part of Prashanth Neel directorial",
  subheading:
   "Kannada actor Yash has earned global fandom through his performance in director Prashanth Neel’s KGF and KGF 2. After a dream, box office run in India, this year on July 14, both films were screened across theaters in Japan, which received the same amount of love as the Indian audience. To add cherry on top of the cake, the makers have confirmed that KGF 3 is already underway. Amidst all this, another interesting revelation surrounding Yash has come to the fore. Reportedly, Yash will be part of KGF's third segment only under one condition.",
  date: "July 31, 2023",
 },
 {
  id: 4,
  genre: "Bollywood",
  ref: "https://www.bollywoodlife.com/news-gossip/why-hema-malini-doesnt-stays-with-dharmendra-actress-broke-her-silence-on-this-checkout-2529619/",
  image:
   "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/why-Hema-malini-dont-stay-with-Dharmendra.jpg?impolicy=Medium_Widthonly&w=1280&h=900",
  heading:
   "Why Hema Malini does not stay with Dharmendra? Actress breaks her silence",
  subheading:
   "Hema Malini doesn't need any introduction, but still, people ask about her relationship with Dharmendra and why she doesn't live with him despite being married. Recently she opened up on this matter.",
  content:
   "Dharmendra is currently in the spotlight because of a kissing scene he had with Shabana Azmi, who primarily lives with his ex-wife Prakash Kaur and their children. His second wife, Hema Malini, discussed her relationship with him just a few days ago and explained why, despite their marriage, she does not live with him. Although Hema Malini is content in her marriage to Dharmendra, her parents did not initially support their daughter's love for the 'Sholay' actor because he was previously married to Prakash Kaur. Hema Malini had no complaints about Dharmendra, who remarried Dream Girl without divorcing Prakash Kaur, despite their 43-year marriage. At the moment, Dharmendra resides with his ex-wife and her family. ",
  date: "July 31, 2023",
 },
 {
  id: 5,
  genre: "Bollywood",
  ref: "https://www.bollywoodlife.com/news-gossip/gadar-2-sunny-deol-ameesha-patels-film-will-have-not-one-but-two-antagonists-deets-inside-entertainment-news-stst-2529918/",
  image:
   "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/Untitled-design-9-7.png?impolicy=Medium_Widthonly&w=1280&h=900",
  heading:
   "Gadar 2: Sunny Deol, Ameesha Patel's film will have not one but two antagonists; deets inside",
  subheading:
   "Rohit Choudhary revealed that after Gadar 2 director Anil Sharma was left impressed by his hard work, the filmmaker extended his screen time in the film.",
  content:
   "Gadar: The Katha Continues or Gadar 2, starring Sunny Deol and Ameesha Patel is ready to hit the theatres on August 11. The film’s much-anticipated trailer promises high-octane action. Also, this time, the story will focus on the father-son equation, between Sunny Deol’s Tara Singh and actor Utkarsh Sharma’s Charanjeet. Earlier, it was reported that Manish Wadhwa, who portrayed the role of Genetal Qadir in Shah Rukh Khan’s Pathaan, will be the prime antagonist in Gadar 2. In what comes as an interesting addition, it is now unveiled that Gadar 2 will have another villain. And he is Rohit Choudhary. ",
  date: "July 31, 2023",
 },
 {
  id: 6,
  genre: "Bollywood",
  ref: "https://www.bollywoodlife.com/news-gossip/rocky-aur-rani-kii-prem-kahaani-alia-bhatt-pens-thank-you-note-for-fans-following-positive-response-eternally-grateful-entertainment-news-stst-2529677/",
  image:
   "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/Untitled-design-8-8.png?impolicy=Medium_Widthonly&w=1280&h=900",
  heading:
   "Rocky Aur Rani Kii Prem Kahaani: Alia Bhatt pens thank you note for fans following positive response, ‘eternally grateful’",
  subheading:
   "In the picture, Ranveer donned a simple tee that he teamed up with a black cap and a silver chain.",
  content:
   "Ranveer Singh and Alia Bhatt are currently on cloud nine, with their latest film Rocky Aur Rani Kii Prem Kahaani scoring big in the theatres. The Karan Johar directorial witnessed a good box office run in its opening weekend, collecting approximately Rs 87 crore worldwide. Although the film opened to mixed reviews from critics, fans seem to have poured all their love into the romantic comedy. Elated at the overwhelming response, Alia Bhatt penned a heartwarming note on Instagram saying “eternally grateful” for the abundance of love. Along with the write-up, she also dropped a picture with her RARKPK co-star Ranveer and Karan Johar.",
  date: "July 31, 2023",
 },
 {
  id: 7,
  genre: "Bollywood",
  ref: "https://www.bollywoodlife.com/news-gossip/sobhita-dhulipala-ignores-ishaan-khattar-on-the-ramp-netizens-point-out-lack-of-chemistry-entertainment-news-2529334/",
  image:
   "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/kanagankaran-3.png?impolicy=Medium_Widthonly&w=1280&h=900",
  heading:
   "Sobhita Dhulipala 'ignores' Ishaan Khattar on the ramp; netizens point out lack of chemistry",
  subheading:
   "Sobhita Dhulipala royally ignores Ishaan Khattar at the ramp walk; netizens are going bonkers with her expression and is calling the actor a school kid infront of the Made In Heaven 2 actress.",
  content:
   "Sobhita Dhulipala royally ignores Ishaan Khattar at the ramp walk when they both appeared walking for the same designer and the fans connot get over this video and are claiming that they can watch it for more than 1000 times Recently the Made In Heaven 2 actress and Ishaan walked the ramp together in Delhi and their chemistry was zero and in fact the royal ignore by Sobhita on the ramp to Ishaan grabbed all the eyeballs nd many are lashing her over her attitude and others are loving it and calling her the pro. Sobhita looked HOT AF , but her ignore to Ishaan became the talk of the town and the video is going viral on the internet like a wildfire.",
  date: "July 31, 2023",
 },
 {
  id: 8,
  genre: "Bollywood",
  ref: "https://www.bollywoodlife.com/news-gossip/nora-fatehi-takes-indirect-dig-at-actresses-who-date-big-actors-to-be-seen-says-she-was-asked-to-do-the-same-entertainment-news-2529316/",
  image:
   "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/kanagankaran-2.png?impolicy=Medium_Widthonly&w=1280&h=900",
  heading:
   "Nora Fatehi takes indirect dig at actresses who date big actors to be seen, says she was asked to do the same",
  subheading:
   "Watch the video of Nora Fatehi spilling the beans on the dark side of Bollywood, which will make you question the authenticity of the relationships in this industry.",
  content:
   "Nora Fatehi is a self-made woman; she was initially laughed at, judged, and mocked, but she is now called a game changer and is going places with her talent. In her latest interview, Nora Fatehi talks about the dark side of Bollywood that we have witnessed in many films, including Heroine, which starred Kareena Kapoor Khan in the lead role. Now Nora reveals that she was asked many times by her PRs in Bollywood that she should date any big actor to be seen and how that will be helpful in her career. But Nora is proud of her accomplishment, which is not because of any other hero but herself. There are many netizens who think that she is taking an indirect dig at the actresses who are dating biggies and saying that the relationships in Bollywood are only for fame and publicity.",
  date: "July 31, 2023",
 },
 {
  id: 9,
  genre: "Bollywood",
  ref: "https://www.bollywoodlife.com/news-gossip/kajol-calls-shah-rukh-khan-poor-guy-recalling-a-hilarious-incident-with-the-superstar-entertainment-news-2529283/",
  image:
   "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/kanagankaran-1.png?impolicy=Medium_Widthonly&w=1280&h=900",
  heading:
   "Kajol calls Shah Rukh Khan ‘poor guy’ recalling a hilarious incident with the superstar",
  subheading:
   "Kajol shared one of the incidents with Shah Rukh Khan while filming their blockbuster movie Dilwale Dulhania Le Jaayenge and called him a poor guy.",
  content:
   "Kajol and Shah Rukh Khan share the greatest bond ever, and it's rare to see this kind of friendship. Kajol and SRK are buddies, and their bond is something that will make you want to have something similar like this. Both stars are super successful today and are doing absolutely great in their respective careers, and they have come a long way. In her recent interview, Kajol mentioned one incident that made her call SRK a poor guy at that time. Kajol shared one of her anecdotes from her blockbuster film Dilwale Dulhania Le Jaayenge along with Pathaan star, where she said that he got a frozen shoulder after he picked her up for a photoshoot for the said film. In an interaction with Curly Tales, Kajol sympathises with the Jawaan actor even now, and because of that, she feels extremely bad for him. ",
  date: " July 31, 2023 ",
 },
 {
  id: 10,
  genre: "Bollywood",
  ref: "https://www.bollywoodlife.com/news-gossip/anurag-kashyap-raves-about-karan-johar-new-movie-rocky-aur-rani-kii-prem-kahaani-shares-highlight-of-ranveer-singh-alia-bhatt-film-entertainment-news-2528424/",
  image:
   "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/kanagankaran-3.png?impolicy=Medium_Widthonly&w=1280&h=900",
  heading:
   "Anurag Kashyap raves about Karan Johar new movie Rocky Aur Rani Kii Prem Kahaani; shares highlight of Ranveer Singh, Alia Bhatt film",
  subheading:
   "Anurag Kashyap has heaped praises on Karan Johar directed Rocky Aur Rani Kii Prem Kahaani starring Ranveer Singh and Alia Bhatt. Here's what he has to say...",
  content:
   "Rocky Aur Rani Kii Prem Kahaani is winning hearts all over. Karan Johar directed new movie stars Alia Bhatt as Rani and Ranveer Singh as Rocky with Jaya Bachchan, Shabana Azmi, Dharmendra and more in key roles. The opening day of Rocky Aur Rani Kii Prem Kahaani saw decent business and it's growing. A lot of celebrities have already praised the movie and now, Anurag Kashyap has also joined the list. He has penned a lengthy note expressing his thoughts on the new movie. ",
  date: "July 30, 2023",
 },
 {
  id: 11,
  genre: "Bollywood",
  ref: "https://www.bollywoodlife.com/news-gossip/sonu-nigam-bhushan-kumar-hug-it-out-at-the-singers-birthday-bash-video-viral-entertainment-news-2528394/",
  image:
   "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/Sonu-Nigam-Bhushan-Kumar.png?impolicy=Medium_Widthonly&w=1280&h=900",
  subheading:
   "Sonu Nigam and Bhushan Kumar had a nasty spat a couple of months ago. But the water is under the bridge now. The T-Series head attended Sonu's birthday bash as well.",
  content:
   "Sonu Nigam and Bhushan Kumar have a long-standing history. They have worked together for decades but about last year, it seems they had a fallout over something. Nasty allegations were made and Divya Khosla Kumar, Bhushan's wife had a nasty exchange over social media on the same. But it seems all is now well between Sonu Nigam and Bhushan Kumar of T-Series. In fact, today happens to be Sonu Nigam's birthday and a party was thrown which was attended by Kumar as well. The video is the talk of the town right now.",
  date: "July 30, 2023",
 },
 {
  id: 12,
  genre: "Bollywood",
  ref: "https://www.bollywoodlife.com/news-gossip/double-ismart-sanjay-dutt-is-menacing-in-first-look-poster-fans-call-him-pan-indian-villain-entertainment-news-stst-2527798/",
  image:
   "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/Sonu-Nigam-Bhushan-Kumar.png?impolicy=Medium_Widthonly&w=1280&h=900",
  heading:
   "Double iSmart: Sanjay Dutt is menacing in first-look poster, fans call him ‘pan Indian villain’",
  subheading:
   "Sanjay Dutt's first look poster for Double iSmart, captures him sporting a menacing gangster avatar. The poster was unveiled on his birthday, July 29.",
  content:
   "Film director Puri Jagannadh’s 2019 action romance iSmart Shankar, starring Ram Pothineni was declared a hit upon its release. Now, after almost 4 years, Puri Jagannadh is back with the film’s sequel, titled Double iSmart, eyeing a release on March 8, 2024. But the upcoming sequel has a special twist. Besides Ram Pothineni reprising his role in Double iSmart, a Bollywood actor has been roped in as well. Any guesses? It is Sanjay Dutt. Yes, the good news comes with the makers dropping Dutt’s first look poster today, July 29. And needless to say, fans are gripped with excitement about his role in the film.",
  date: "July 29, 2023",
 },
 {
  id: 13,
  genre: "Bollywood",
  ref: "https://www.bollywoodlife.com/news-gossip/kangana-ranaut-slams-karan-johar-for-wasting-rs-250-crores-on-rocky-aur-rani-kii-prem-kahaani-gives-this-advice-to-ranveer-singh-entertainment-news-2527734/",
  image:
   "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/Kangana-Ranaut-Rocky-Aur-Rani-Kii-Prem-Kahaani-Karan-Johar-Ranveer-Singh.png?impolicy=Medium_Widthonly&w=1280&h=900",
  heading:
   "Kangana Ranaut slams Karan Johar for wasting Rs 250 crores on Rocky Aur Rani Kii Prem Kahaani; gives THIS advice to Ranveer Singh",
  subheading:
   "Kangana Ranaut has taken to her social handle and slammed Karan Johar for making Rocky Aur Rani Kii Prem Kahaani. She also has given a piece of her mind to Ranveer Singh. Check out the Instagram stories of the actress below:",
  content:
   "Rocky Aur Rani Kii Prem Kahaani starring Alia Bhatt and Ranveer Singh is in cinemas. It was released on 28th of July, Friday. The movie made a business of Rs 11.10 crores at the box office on its opening day. The numbers are not great but it's a decent box office for the movie. However, Kangana Ranaut does not think so. She has slammed the filmmaker, Karan Johar for making Rocky Aur Rani Kii Prem Kahaani. The actress has also given a piece of advice to Ranveer Singh. ",
  date: "July 29, 2023",
 },
 {
  id: 14,
  genre: "Bollywood",
  ref: "https://www.bollywoodlife.com/news-gossip/sonu-nigam-issues-warning-against-imposter-woman-claiming-to-be-from-his-social-media-team-entertainment-news-stst-2527587/",
  image:
   "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/Untitled-design-16-3.png?impolicy=Medium_Widthonly&w=1280&h=900",
  heading:
   "Sonu Nigam issues warning against imposter woman claiming to be from his social media team",
  subheading:
   "Sonu Nigam's legal advisor, Ashish Joshi has ascertained that they will be taking appropriate legal measures to being the culprit into custody earliest by next week.",
  content:
   "Sonu Nigam, one of the acclaimed Bollywood singers, will be celebrating his 50th birthday on July 30. Just a day ahead of the special occasion, the singer received an unpleasant surprise. Apparently, Sonu Nigam faced a scam pertaining to his social media handles. A woman has been sending text messages to the masses, calling herself to be from Sonu Nigam’s social media team. After learning about the scam going by his name, the singer has issued a warning to his fans who follow him on media platforms. An investigation is currently underway. ",
  date: "July 29, 2023 ",
 },
 {
  id: 15,
  genre: "Bollywood",
  ref: "https://www.bollywoodlife.com/news-gossip/gadar-2-gaurav-chopra-on-the-sequel-of-an-iconic-film-you-will-not-feel-jabardasti-banaya-hai-exclusive-entertainment-news-2527182/",
  image:
   "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/Untitled-design-16-3.png?impolicy=Medium_Widthonly&w=1280&h=900",
  heading:
   "Gadar 2: Gaurav Chopra on the sequel of an iconic film; 'You will not feel jabardasti banaya hai'",
  subheading:
   "Gadar 2 actor Gaurav Chopra assures that the film is not a 'jabardasti' ka sequel. He also said that the story is moving organically and hence there will not be any trolling.",
  content:
   "Sunny Deol and Ameesha Patel starrer Gadar 2 has been in the news since a long time. Gadar is an iconic film and the announcement of its sequeal has left everyone excited. Sunny Deol and Ameesha Patel will be returning as Tara Singh and Sakina in the film. The trailer of the film released recently and it has grabbed everyone's attention. The whole cast and crew of the film were present for the trailer launch.",
  date: "July 28, 2023",
 },
 {
  id: 16,
  genre: "Bollywood",
  ref: "https://www.bollywoodlife.com/news-gossip/huma-qureshi-opens-up-on-being-body-shamed-dealing-with-negative-comments-entertainment-news-stst-2526273/",
  image:
   "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/Untitled-design-16-3.png?impolicy=Medium_Widthonly&w=1280&h=900",
  heading:
   "Huma Qureshi opens up on being body shamed, dealing with negative comments",
  subheading:
   'Recalling an incident when a film reviewer body-shamed her, Huma Qureshi opined that the masses do not review films now, they are more preoccupied with "being slanderous."',
  content:
   "Huma Qureshi has always been a strong advocate of body positivity. Despite being trolled for her body weight and sartorial choices, she chooses to turn a deaf ear to the naysayers and live life on her own terms. But the incessant criticism sometimes does take a toll on her, revealed the Gangs of Wasseypur actress herself. In a heart-to-heart interaction with a media portal, Huma opened up about being body shamed, how it affected her at one point, and how she deals with such derogatory comments now.",
  date: "July 28, 2023",
 },
 {
  id: 17,
  genre: "Bollywood",
  ref: "https://www.bollywoodlife.com/news-gossip/javed-akhtars-epic-reply-to-troll-who-tried-testing-his-knowledge-on-oppenheimer-goes-viral-entertainment-news-stst-2525838/",
  image:
   "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/Untitled-design-6-1.jpg?impolicy=Medium_Widthonly&w=1280&h=900",
  heading:
   "Javed Akhtar's epic reply to troll who tried testing his knowledge on Oppenheimer goes viral",
  subheading:
   "Christopher Nolan's biographical thriller Oppenheimer made its grand debut in India on July 21, and its opening day collection was an impressive Rs 14.5 crore.",
  content:
   "Christopher Nolan's film Oppenheimer has been enjoying tremendous success at the box office in India. The theatres are filled to capacity, and fans are thoroughly engrossed in the gripping storyline. Even Bollywood celebrities have flocked to witness its brilliance on the silver screen. Many of these stars have taken to their social media platforms to share their reviews of the movie. Among them was the renowned screenwriter-lyricist, Javed Akhtar, who watched the film yesterday and shared a review on Twitter. Not only he gave a positive review but responded to a user who tried to test his knowledge.",
  date: "July 27, 2023 ",
 },
 {
  id: 18,
  genre: "Bollywood",
  ref: "https://www.bollywoodlife.com/news-gossip/raghav-chadha-opens-up-on-how-his-life-took-a-turn-after-getting-engaged-to-parineeti-chopra-2524990/",
  image:
   "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/Parineeti-raghav-2.jpg?impolicy=Medium_Widthonly&w=1280&h=900",
  heading:
   "Raghav Chadha opens up on how his life took a turn after getting engaged to Parineeti Chopra",
  subheading:
   "Currently, Parineeti and Raghav are exploring various locations in Rajasthan to find the one that resonates with their vision and preferences. From the regal charm of Udaipur to the enchanting allure of Kishangarh, the couple is leaving no stone unturned in their quest for the perfect setting to exchange their vows.",
  content:
   "Parineeti Chopra and Raghav Chadha are one of the newly engaged couples in T'town and are all set to get married soon. Their pictures from the engagement, and later from the airport went viral for all the right reasons. The couple announced their engagement in May in New Delhi and is reportedly set to tie the knot later this year. Just like any other couple who are deeply in love, Raghav and Parineeti are spending quality time with each other. ",
  date: "July 27, 2023",
 },
 {
  id: 19,
  genre: "Bollywood",
  ref: "https://www.bollywoodlife.com/news-gossip/bawaal-varun-dhawan-janhvi-kapoor-film-upsets-jewish-human-rights-ngo-pressure-on-ott-platform-to-take-down-the-film-entertainment-news-2524783/",
  image:
   "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/FotoJet-2023-07-27T092903.060.jpg?impolicy=Medium_Widthonly&w=1280&h=900",
  heading:
   "Bawaal: Varun Dhawan, Janhvi Kapoor film upsets Jewish Human Rights NGO; pressure on OTT platform to take down the film?",
  subheading:
   "Bawaal: Varun Dhawan, Janhvi Kapoor film makes Jewish centre for Holocaust victims upset; open letter to Prime Video to take down the movie",
  content:
   "Varun Dhawan and Janhvi Kapoor's Bawaal left many netizens in shock after the climax scene drew inspiration with the condition of people at the Nazi death camp of Auschwitz. Netizens had been quick to call out the makers saying that comparing Hitler's genocide of Jews with the marital woes of a couple was tone deaf and downright offensive. The makers defended the movie saying that no one found it objectionable. In fact, many praised the film of social media saying it was an emotional affair. ",
  date: "July 27, 2023",
 },
 {
  id: 20,
  genre: "Bollywood",
  ref: "https://www.bollywoodlife.com/news-gossip/decoding-how-kartik-aaryan-became-indias-own-gen-z-common-mans-superstar-entertainment-news-2523463/",
  image:
   "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/FotoJet-2023-07-26T140639.553.jpg?impolicy=Medium_Widthonly&w=1280&h=900",
  heading:
   "Decoding how Kartik Aaryan became India's own Gen-Z 'Common man's superstar'",
  subheading:
   "As Kartik Aaryan gears up to receive the Rising Global Superstar of Indian Cinema Award, let us take a look at how deftly he carved his career in the industry",
  content:
   "Kartik Aaryan has firmly established himself as one of the young superstars of the country. His track record at the box office is impeccable. Barring the odd Shehzada, all his films have recovered money. After the pandemic, he was one of the first stars to give a Rs 200 crore plus movie with Bhool Bhulaiyaa 2. Kartik Aaryan is soon going to be felicitated at the Indian Film Festival of Melbourne as the Rising Global Star. He said he is thrilled to get the invite from the Victorian Government. Kartik Aaryan has delivered a number of successful movies and is known as the common man's superstar. In today's BollywoodLife Specials, let us analyze his phenomenal growth in Bollywood.",
  date: "July 26, 2023",
 },
 {
  id: 21,
  genre: "Technology",
  ref: "https://www.news18.com/tech/google-is-working-on-a-feature-that-makes-scanning-qr-codes-easier-from-afar-8509033.html",
  image:
   "https://images.news18.com/ibnlive/uploads/2023/08/qr-code-scanning-16912181913x2.jpg?impolicy=website&width=510&height=356",
  heading:
   "Google Is Working On A Feature That Makes Scanning QR Codes Easier From Afar",
  subheading:
   "Google's new API library version 17.2.0 mentions a new auto-zooming feature for easy scanning of distant QR codes on Android. Here's how it could work.",
  content:
   "f you have an Android phone and have tried to make a payment or scan a QR code that was far away, you may have had trouble scanning it, even with the zoom feature. However, it appears that Google’s new feature will let you easily scan QR codes that are far away by “auto-zooming.” Google is reportedly working on a new feature that will zoom in on a QR code when it detects it in the camera frame, making it easy to scan codes for payments and getting information, as found in the latest Google API available to developers. Google’s new QR zooming feature was discovered in the new bundled ML Kit Barcode Scanning API library version 17.2.0, as reported by Mishaal Rahman. This feature works with Google’s code scanner, both in the Google QR Code Scanner system app and when integrated into other apps, as noted by The Verge.",
  date: " AUGUST 05, 2023",
 },
 {
  id: 22,
  genre: "Technology",
  ref: "https://www.news18.com/tech/hp-dragonfly-g4-laptop-launched-in-india-with-thin-design-security-features-check-price-specs-here-8502217.html",
  image:
   "https://images.news18.com/ibnlive/uploads/2023/08/hp-dragonfly-g4-price-india-16911378773x2.jpg?impolicy=website&width=510&height=356",
  heading:
   "HP Dragonfly G4 Laptop Launched In India With Thin Design, Security Features: Check Price, Specs Here",
  subheading:
   "HP has expanded its portfolio of premium enterprise-centric laptops in India with the launch of the Dragonfly G4. Here are all the details, with specifications and Indian pricing.",
  content:
   "P has updated its premium laptop lineup in India with the launch of the new HP Dragonfly G4 laptop, which includes a variety of high-end features—such as a sleek, lightweight design that weighs less than a kilogram and Intel’s 13th generation Core processor. The HP Dragonfly G4 is a business-centric laptop powered by a 13th generation Intel Core i7 processor, up to 32GB of DDR5 RAM, and a 2TB M.2 SSD. It also includes an encryption feature for the SSD—which ensures that professionals can rest easy knowing that their data is safe. The HP Dragonfly G4 has a USB Type-A port, 2 Thunderbolt 4 USB Type-C ports, headphone and mic combo jack, an HDMI port, and even a nano SIM card slot for I/O. The SIM card slot could come in handy for users who need access to mobile data while on the go. The laptop has a 13.5-inch WUXGA+ display with a brightness of 400 nits. It can be customized to have a touch-enabled OLED panel, and higher peak brightness. HP has focused on making the Dragon G4 more portable and lightweight, while also ensuring its durability. The company claims that the laptop offers no compromises in terms of its durability despite its lightweight design. The laptop is powered by Windows 11 Pro and has a large trackpad, and gets a 68-WHr battery cell.",
  date: "AUGUST 04, 2023",
 },
 {
  id: 23,
  genre: "Technology",
  ref: "https://www.news18.com/tech/metas-audiocraft-ai-can-generate-music-and-sound-effects-from-text-prompts-how-it-works-8493241.html",
  image:
   "https://images.news18.com/ibnlive/uploads/2023/08/meta-ai-16910458553x2.jpg?impolicy=website&width=510&height=356",
  heading:
   "Meta's AudioCraft AI Can Generate Music And Sound Effects From Text Prompts: How It Works",
  subheading:
   "Ever thought of a ChatGPT-like tool, but for generating music? Meta has done exactly that with its AudioCraft generative AI tool. Read on to know how it works.",
  content:
   "reating original soundtracks for projects of all kinds is a time-consuming and expensive process that requires the expertise and skills of an artist. But what if an AI-powered tool could create a custom soundtrack suited to your project with just a few prompts? Meta has done exactly that with its AudioCraft generative AI tool. Meta promises that users can create “high-quality, realistic audio and music from text” with the tool family. Meta notes that while AI generated images have taken off—AI-generated audio is still lagging behind, but with the new AudioCraft tool family, users will be able to create “music, sound, compression, and generation—all in the same place.”",
  date: "AUGUST 03, 2023",
 },
 {
  id: 24,
  genre: "Technology",
  ref: "https://www.news18.com/tech/whatsapp-bans-over-66-lakh-bad-accounts-in-india-all-details-8491585.html",
  image:
   "https://images.news18.com/ibnlive/uploads/2023/08/untitled-design-2023-08-02t120547.577-16909581683x2.jpg?impolicy=website&width=510&height=356",
  heading: "WhatsApp Bans Over 66 Lakh Bad Accounts In India: All Details",
  subheading:
   "WhatsApp banned a record of over 66 lakh bad accounts in India in the month of June, in compliance with the new IT Rules 2021.",
  content:
   'eta-owned WhatsApp banned a record of over 66 lakh bad accounts in India in the month of June, in compliance with the new IT Rules 2021. Between June 1-30, “6,611,700 WhatsApp accounts were banned and 2,434,200 of these accounts were proactively banned, before any reports from users", WhatsApp said in its monthly compliance report on Wednesday. The most popular messaging platform, which has over 500 million users in the country, received another record 7,893 complaint reports in June in the country, and the records “actioned" were 337. “Accounts Actioned" denotes reports where WhatsApp took remedial action based on the report and taking action denotes either banning an account or a previously banned account being restored as a result. “This user-safety report contains details of the user complaints received and the corresponding action taken by WhatsApp, as well as WhatsApp’s own preventive actions to combat abuse on our platform," according to the company.',
  date: "AUGUST 03, 2023",
 },
 {
  id: 25,
  genre: "Technology",
  ref: "https://www.news18.com/tech/nasas-netflix-like-streaming-website-will-show-you-live-events-and-it-is-free-8476867.html",
  image:
   "https://images.news18.com/ibnlive/uploads/2023/05/untitled-design-276-16855576143x2.png?impolicy=website&width=510&height=356",
  heading:
   "NASA’s Netflix-Like Streaming Website Will Show You Live Events And It Is Free",
  subheading:
   "The new-look platform will offer live coverage as well as documentaries without any ads.",
  content:
   "The National Aeronautics and Space Administration or NASA has come up with its own Netflix-like streaming service which will offer live space content and other documentaries for the public. All this content will be available free of cost and there won’t be any ads either. The website is in beta avatar for now, but NASA is offering everyone the chance to explore the content of this website and even give feedback about their experience to the space agency. NASA states all these feedbacks will be closely observed and the future updates will look to fulfil the wish list from these people. “Transforming our digital presence will help us better tell the stories of how NASA explores the unknown in air and space, inspires through discovery, and innovates for the benefit of humanity,” as said by NASA spokesperson in a post.",
  date: "AUGUST 01, 2023",
 },
 {
  id: 26,
  genre: "Technology",
  ref: "https://www.news18.com/tech/foxconn-to-invest-rs-1600-crore-in-tamil-nadu-to-set-up-mobile-components-manufacturing-facility-8467321.html",
  image:
   "https://images.news18.com/ibnlive/uploads/2023/07/foxconn-16907939983x2.jpg?impolicy=website&width=510&height=356",
  heading:
   "Foxconn to Invest Rs 1,600 Crore in Tamil Nadu to Set Up Mobile Components Manufacturing Facility",
  subheading:
   "Industries Minister TRB Rajaa said repeated investments and expansion plans in Tamil Nadu by Foxconn, which already assembles iPhones in the state, 'are a testament to the state being the top choice for manufacturing in India'",
  content:
   'In a major boost to the electronics manufacturing sector in Tamil Nadu, Taiwanese electronics giant Foxconn has signed a Letter of Intent (LoI) with the state government to set up a new mobile components manufacturing facility at a cost of Rs 1,600 crore. The CEO and chairman of Hon Hai Technology Group, Foxconn, Young Liu, met with Tamil Nadu Chief Minister MK Stalin and Industries Minister TRB Rajaa. They agreed to set up the facility, which will be located in Kanchipuram district, and is expected to generate 6,000 jobs. Rajaa said repeated investments and expansion plans in Tamil Nadu by Foxconn, which already assembles iPhones in the state, “are a testament to the state being the top choice for manufacturing in India for major companies across the world”. “This is a major achievement for the state. Manufacturers who have seen immense success in Tamil Nadu over the past many years know that by investing more in the state they will only gain more. This also illustrates the trust global investors have in the leadership of our chief minister," he added. The minister also believes that with this proposed investment and future proposals, Tamil Nadu is expected to significantly increase its electronics exports in the coming years which will play a critical role in attaining Stalin’s ambition of a $1 trillion economy in the state.',
  date: "JULY 31, 2023,",
 },
 {
  id: 27,
  genre: "Technology",
  ref: "https://www.news18.com/tech/walmart-buys-tiger-globals-remaining-flipkart-stake-for-1-4-billion-report-8467267.html",
  image:
   "https://images.news18.com/ibnlive/uploads/2023/06/untitled-design-154-16867833333x2.png?impolicy=website&width=510&height=356",
  heading:
   "Walmart Buys Tiger Global’s Remaining Flipkart Stake For $1.4 Billion: Report",
  subheading:
   "According to a report in Wall Street Journal, Walmart has paid the money to boost Flipkart’s stake.",
  content:
   'etail giant Walmart has reportedly paid $1.4 billion to acquire VC form Tiger Global’s remaining shares in the e-commerce major. According to a report in Wall Street Journal, Walmart has paid the money to boost Flipkart’s stake. “Purchase of shares from Tiger Global values the Indian e-commerce company at about $35 billion,” the report said late on Sunday. Walmart purchased Tiger Global’s remaining holding in Flipkart to further cement its control of the Indian e-commerce giant. Tiger Global made an overall gain of $3.5 billion on an investment of $1.2 billion, reports mentioned. Flipkart was earlier valued at $37.6 billion in a 2021 funding round. Walmart had 72 per cent share in Flipkart as reported last. Tiger Global held a 4 per cent stake in the e-commerce leader. Last month, Flipkart began a “one-time discretionary" cash payment of $700 million to employees following its separation from fintech firm PhonePe. In an email to employees, Flipkart Group chief executive Kalyan Krishnamurthy said, “We have exciting times ahead, and as we continue to grow across businesses, I look forward to your continued dedication and determination to bring about the future that we envision and scale new heights together.”',
  date: "JULY 31, 2023",
 },
 {
  id: 28,
  genre: "Technology",
  ref: "https://www.news18.com/tech/semicon-india-india-looks-to-chip-the-scales-in-its-favour-by-attracting-opportunities-investments-8460403.html",
  image:
   "https://images.news18.com/ibnlive/uploads/2023/07/modi-semiconductor-1-16905325983x2.jpg?impolicy=website&width=510&height=356",
  heading:
   "Semicon India: India Looks to ‘Chip’ the Scales in Its favour By Attracting Opportunities, Investments",
  subheading:
   "As a majority of semiconductor engineers worldwide are either Indian or of Indian origin, India possesses the ability to become a semiconductor hub in the global market and supply in the severe scarcity of skilled workers worldwide",
  content:
   "he global market is witnessing a significant increase in the demand for semiconductors in recent years. Wider adoption of 5G technology in the telecom sector, increasing expansion of cryptocurrency mining, Blockchain technology, and digitization are increasing the demand for higher Economic Order Quantity (EOQ) of the processing units. The expansion of the semiconductor market has a direct connection to the rising global demand for consumer electronics. Taking note of the opportunities, the Government of India started the programme, ‘SemiconIndia’, to attract large investments to set up the semiconductor industry in the country. The Semiconductor Industry Association (SIA) reported the industry generated revenues of $40.7 billion in May 2023 globally, up 1.7% from April 2023. From the previous year until September 2022, the global semiconductor industry was valued at $500-$600 billion and complements the global electronics industry worth approximately $3 trillion. According to the Strategic Investment Research Unit (SIRU), the Indian semiconductor market has been estimated to be worth $23.2 billion and will continue to expand at a compound annual growth rate (CAGR) of 17.10% to reach $80.3 billion by 2028. The Hindu reported, “The setting up of one semiconductor fab requires an investment of anywhere between $3 and $7 billion.”",
  date: "JULY 30, 2023",
 },
 {
  id: 29,
  genre: "Technology",
  ref: "https://www.news18.com/tech/twitter-rebrand-complete-x-icon-replaces-bird-logo-on-android-and-ios-8453023.html",
  image:
   "https://images.news18.com/ibnlive/uploads/2023/07/twitter-x-icon-16906059933x2.jpg?impolicy=website&width=510&height=356",
  heading:
   "Twitter Rebranding Complete? 'X' Icon Replaces Bird Logo On Android And iOS",
  subheading:
   "The Twitter app on iOS has now fully transitioned to showing the new X logo as the official icon. The app name on iOS also reads as ‘X,’ and there is no mention of Twitter.",
  content:
   "f you update the Twitter app on both iOS and Android, you will find that Elon Musk’s rebranding efforts are now complete. The Twitter app on iOS has now fully transitioned to showing the new X logo as the official icon. The app name on iOS also reads as ‘X,’ and there is no mention of Twitter. Therefore, if a person who has not been following what has happened to Twitter suddenly searches for Twitter on the Apple App Store or the Google Play Store, they will instead find X—which Musk is calling the “everything app.” Many loyalists and fans of the platform formerly known as Twitter were taken aback by the sudden rebranding to X. Many are wondering if this rebranding exercise will be the final straw after a series of controversial moves by the billionaire. On the other hand, Elon Musk seems unfazed by the changes, and has even announced that X has reached a “new high” of 540 million active monthly users.",
  date: "JULY 29, 2023",
 },
 {
  id: 30,
  genre: "Technology",
  ref: "https://www.news18.com/tech/sony-ps5-sales-hit-40-million-playstation-ceo-says-availability-no-longer-affected-by-shortages-8446549.html",
  image:
   "https://images.news18.com/ibnlive/uploads/2023/07/ps5-discount-india-16899454743x2.jpg?impolicy=website&width=510&height=356",
  heading:
   "Sony PS5 Sales Hit 40 Million; PlayStation CEO Says Availability No Longer Affected By Shortages",
  subheading:
   "Sony has sold 40 million PS5 consoles since its launch in 2020. Check how the console's sales have been over the past couple of years.",
  content:
   "ony has announced that it has sold 40 million PS5 consoles since its launch in November 2020. This is a slower pace than the previous console generation, but Sony Interactive CEO Jim Ryan attributed this to the “unprecedented challenges of COVID” and the “months it took for supply chains to normalize.” Ryan said that Sony is now able to meet demand in all regions and that the PS5 availability will no longer be affected by shortages and supply issues. Ryan added that they are finally meeting the “pent up demand.” Sony PS5 sales were also negatively impacted by the high prices that resellers were charging and selling in the grey market. In India, the PS5 console was being sold for almost one and a half times its MSRP after launch. The disc variant, which launched at Rs 49,990, was often seen being sold for upwards of Rs 65,000 openly online and in offline stores across India. We investigated the alleged black market activity that was affecting sales back in January of this year, and we found that many retailers were alleging that others were selling the console at a premium.",
  date: "JULY 28, 2023",
 },
 {
  id: 31,
  genre: "Technology",
  ref: "https://www.news18.com/tech/amd-to-invest-400-million-in-india-by-2028-aiming-to-create-3000-new-jobs-8446099.html",
  image:
   "https://images.news18.com/ibnlive/uploads/2023/07/amd-india-investement-16905279843x2.jpg?impolicy=website&width=510&height=356",
  heading:
   "AMD To Invest $400 Million In India By 2028; Aiming To Create 3,000 New Jobs",
  subheading:
   "US chipmaker AMD will invest $400 million in India to build its largest design center in Bengaluru. The new campus will create 3,000 engineering jobs in the country.",
  content:
   "U.S. chipmaker Advanced Micro Devices said on Friday it will invest around $400 million in India over the next five years and will build its largest design center in the tech hub of Bengaluru. AMD’s announcement was made by its Chief Technology Officer Mark Papermaster at an annual semiconductor conference that started Friday in Prime Minister Narendra Modi’s home state of Gujarat. Other speakers at the flagship event include Foxconn Chairman Young Liu and Micron CEO Sanjay Mehrotra. Despite being a late entrant, the Modi government has been courting investments into India’s nascent chip sector to establish its credentials as a chipmaking hub. AMD said it will open its new design centre campus in Bengaluru by end of this year and create 3,000 new engineering roles within five years. “Our India teams will continue to play a pivotal role in delivering the high-performance and adaptive solutions that support AMD customers worldwide,” Papermaster said. The new 500,000-square-foot (55,555 square yards) campus will increase AMD’s office footprint in India to 10 locations. It already has more than 6,500 employees in the country.",
  date: "JULY 28, 2023",
 },
 {
  id: 32,
  genre: "Technology",
  ref: "https://www.news18.com/world/taiwans-chip-giant-tsmc-affirms-commitment-to-its-roots-unveils-new-rd-facility-8445469.html",
  image:
   "https://images.news18.com/ibnlive/uploads/2023/07/untitled-design-240-16905271893x2.png?impolicy=website&width=510&height=356",
  heading:
   "Taiwan's Chip Giant TSMC Affirms Commitment to its Roots, Unveils New R&D Facility",
  subheading:
   "TSMC launches massive R&D facility in Taiwan, vows to maintain focus on home base amid global chip demand and geopolitical pressures",
  content:
   'Chip giant TSMC said it is determined to “keep its roots in Taiwan", as it launched a massive new research and development facility in the northern city of Hsinchu on Friday. Taiwan Semiconductor Manufacturing Company (TSMC) controls more than half the world’s output of microchips, which are the lifeblood of the modern global economy, powering everything from coffee machines and smartphones to cars and missiles. Much of its manufacturing base is in Hsinchu, where its state-of-the-art facilities are producing ever-smaller silicon wafers that have skyrocketed in demand, especially due to the recent boom in AI-related technology. At the Friday launch of its R&D facility, chairman Mark Liu said the centre will “develop world-leading technologies in the semiconductor industry more actively to explore 2-nanometre and 1.4-nanometre technology". The company is racing to begin mass production of the 1.4-nanometre chip — smaller than a fraction of a fingernail — ahead of its rival Samsung, the world’s second-largest producer. Its production lines have expanded beyond Taiwan as Western powers have raised concerns about the crucial industry being centred on an island that China claims as its territory — having ramped up political pressures against it in the past year.',
  date: "JULY 28, 2023",
 },
 {
  id: 33,
  genre: "Technology",
  ref: "https://www.news18.com/tech/chatgpt-fined-3-6-million-won-for-exposing-personal-info-of-687-south-koreans-report-8444833.html",
  image:
   "https://images.news18.com/ibnlive/uploads/2023/05/wp-image-957-16850253693x2.jpg?impolicy=website&width=510&height=356",
  heading:
   "ChatGPT Fined 3.6 Million Won For Exposing Personal Info Of 687 South Koreans: Report",
  subheading:
   "A total of 687 users in South Korea have been confirmed to be among those affected by the exposure.",
  content:
   "South Korea’s Personal Information Protection Commission (PIPC) on Thursday imposed a fine of 3.6 million won ($2,829) on OpenAI, the operator of the generative chatbot ChatGPT, for exposing personal information of its 687 citizens. According to OpenAI, a now-patched bug in an open-source library on ChatGPT created a caching issue in March. It caused an unintentional visibility of payment information of ChatGPT Plus subscribers during a nine-hour window, including first and last names, email addresses, the last four digits of credit card numbers and credit card expiration dates, Yonhap reported. A total of 687 users in South Korea have been confirmed to be among those affected by the exposure. The PIPC said it has fined OpenAI for breaching its duty to report a leakage to authorities within 24 hours of finding it. But the privacy watchdog concluded the company cannot be held responsible for lax personal information protection measures.",
  date: "JULY 28, 2023",
 },
 {
  id: 34,
  genre: "Technology",
  ref: "https://www.news18.com/tech/indian-space-tech-startup-pixxel-wins-grant-from-idex-to-manufacture-satellites-for-indian-air-force-8427145.html",
  image:
   "https://images.news18.com/ibnlive/uploads/2023/07/pixxel-16903507203x2.jpg?impolicy=website&width=510&height=356",
  heading:
   "Indian Space Tech Startup Pixxel Wins Grant From iDEX To Manufacture Satellites For Air Force",
  subheading:
   "Pixxel has won the SPARK grant by iDEX; this will allow it to develop small multi-payload satellites for the Indian Air Force.",
  content:
   "ndian space technology startup Pixxel has won a multi-crore grant from iDEX, which will allow it to manufacture miniaturized multi-payload satellites for the Indian Air Force. As a homegrown startup, Pixxel specializes in developing hyperspectral earth-imaging technology. The grant from iDEX is part of its SPARK grants, and according to the startup, this grant will allow it to develop small satellites of up to 150 kilograms for Electro-Optical, Infrared, Synthetic Aperture Radar, and Hyper Spectral applications. This development follows Pixxel’s recent $36 million Series B fundraising round led by Google, which took place just a month ago. According to a MoneyControl report, the startup has recently been working on developing hyperspectral imagery satellites for the Indian defense sector.",
  date: "JULY 26, 2023",
 },
 {
  id: 35,
  genre: "Technology",
  ref: "https://www.news18.com/tech/xboxs-new-limited-edition-controllers-smell-like-pizza-heres-why-8421115.html",
  image:
   "https://images.news18.com/ibnlive/uploads/2023/07/xbox-pizza-controller-16902826563x2.jpg?impolicy=website&width=510&height=356",
  heading:
   "Xbox's New Limited Edition Controllers Smell Like Pizza: Here's Why",
  subheading:
   "that if we told you that Xbox's new limited edition Teenage Mutant Ninja Turtles themed controllers smell like pizza? Yes, they are real, and here are all the details.",
  content:
   "box is releasing a new line of limited edition controllers that smell like pizza. While this may seem strange, the new wireless controllers for Xbox Series X/S and PC are indeed “pizza-scented.” The controllers are Teenage Mutant Ninja Turtles themed, and are being released to celebrate the release of the Teenage Mutant Ninja Turtles: Mutant Mayhem movie. Gamers have previously seen numerous limited edition controllers from both Xbox and PlayStation, but this is the first time a controller has included an olfactory element, rather than simply offering a different choice of build materials and color schemes. Xbox has stated that the controller is available in four variations—each representing the signature colors, weapons, and personalities of the Teenage Mutant Ninja Turtles: Leonardo, Raphael, Donatello, and Michelangelo. And to disperse the pizza scent, the controllers have built-in scent diffusers shaped like a slice of New York style pizza. However, the controllers will only be available in limited quantities and only be available through Xbox’s giveaway—meaning you can’t buy them. To participate in the giveaway, fans can enter by following the Xbox Game Pass account on Twitter and retweeting the official Xbox Game Pass sweepstakes tweet. Xbox says that the giveaway for Teenage Mutant Ninja Turtles themed controlled will run from July 24 to August 13, 2023.",
  date: "JULY 25, 2023",
 },
 {
  id: 36,
  genre: "Technology",
  ref: "https://www.news18.com/tech/mappls-mapmyindia-tops-app-stores-chart-challenges-googles-dominance-in-navigation-8413141.html",
  image:
   "https://images.news18.com/ibnlive/uploads/2023/07/untitled-design-2023-07-24t192635.721-16902073123x2.jpg?impolicy=website&width=510&height=356",
  heading:
   "Mappls MapmyIndia Tops App Stores Chart, Challenges Google’s Dominance in Navigation",
  subheading:
   "Mappls MapmyIndia, the made-in-India maps and navigation app, is the number one application on the Apple iOS App Store across all categories, and is among the top 15 applications in the Google Play Store across all categories",
  content:
   "appls MapmyIndia, the made in India maps and navigation app, has been the number one application on the Apple iOS App Store across all categories, in addition to being the number one app in the navigation category, while Google Maps is the seventh most popular app in the Apple App Store. It is also the most popular app in the Maps and Navigation category on the Android Google Play Store. Mappls App is among the top 15 applications in the Google Play Store across all categories, ahead of any other app in related categories (maps and navigation, as well as travel and local). Google Maps is not one of the Google Play Store’s top 100 applications. The app is supported by the most advanced and cutting-edge underlying map data and technology, allowing all users to have the smartest, safest, and most accurate maps and navigation experience possible in the country. The company built India’s very first internet mapping platform and portal, MapmyIndia.com (now called Mappls.com) in 2004. Speaking to News18 about the success, Rohan Verma CEO & ED, MapmyIndia & Mappls, said: “The large majority, 95% of people, from India mainly downloaded Mappls App as the app is mainly focused on giving mapping information about this country. It also happened at a time when we simply did no advertisement. Some NRIs from the US, Canada and the Middle East are also downloading this app, but mainly because they want to see their country.”",
  date: "JULY 24, 2023",
 },
 {
  id: 37,
  genre: "Technology",
  ref: "https://www.news18.com/tech/elon-musks-new-twitter-logo-x-has-a-23-year-old-history-8408521.html",
  image:
   "https://images.news18.com/ibnlive/uploads/2023/07/untitled-design-2023-07-24t095256.600-16901727103x2.jpg?impolicy=website&width=510&height=356",
  heading: "There's A History Behind Elon Musk's New Twitter Logo 'X'",
  subheading:
   "Musk wanted the company to be named X.com, with PayPal as one of its subsidiaries. He even attempted to rename the payment system X-PayPal, but there was resistance since PayPal was already a trusted brand.",
  content:
   'witter owner Elon Musk recently announced the rebranding of Twitter’s bird logo to an “X," with the aim to create X as a global marketplace centered around audio, video, messaging, payments/banking, and more. The domain X dot com now redirects users to Twitter dot com. Musk mentioned that the new X logo will go live later today. But how many of you know that Twitter’s potential new logo takes Elon Musk back to his tech entrepreneur days when he was a 28-year-old, with aspirations to launch an online banking company in 1999. According to a popular author Walter Isaacson, the infatuation of Elon Musk with the name X.com goes way back. His experience at Scotiabank had convinced him that the industry was ripe for disruption. So in March 1999, he founded X.com. “His concept for X.com was grand. It would be a one-stop everything-store for all financial needs: banking, digital purchases, checking, credit cards, investments, and loans. Transactions would be handled instantly, with no waiting for payments to clear. His insight was that money is simply an entry into a database, and he wanted to devise a way that all transactions were securely recorded in real time," Isaacson wrote on Twitter.',
  date: "JULY 24, 2023",
 },
 {
  id: 38,
  genre: "Technology",
  ref: "https://www.news18.com/explainers/wormgpt-chatgpt-malicious-ai-tool-all-you-need-to-know-8388727.html",
  image:
   "https://images.news18.com/ibnlive/uploads/2023/07/untitled-design-41-2-16899139923x2.jpg?impolicy=website&width=510&height=356",
  heading:
   "What is WormGPT? ChatGPT's 'Malicious Cousin' with No Ethical Boundaries. Should You Worry? | Explained",
  subheading:
   "WormGPT was cooked up exclusively for malicious deeds, such as malware creation and exploiting vulnerabilities",
  content:
   'When ChatGPT was developed by OpenAI in November last year, it took the world by storm. The AI-powered language model not only answered queries and provided information, but also eased doing task that took days like writing tasks, analysing datasets and writing codes. While the OpenAI chatbot began to be used by millions worldwide, Google launched an alternative Bard, while Microsoft came up with AI-powered search engine Bing AI or the new Bing. Many other alternatives came out offering similar and more advanced capabilities. However, a new AI tool, termed as malicious cousin of ChatGPT, was launched recently and is being promoted for sale on a hacker forum. WormGPT is based on the GPTJ language model, which was developed in 2021. It reportedly has a range of features, including unlimited character support, chat memory retention and code formatting capabilities. Researchers from cybersecurity firm SlashNext said the cybercrime tool is a blackhat “alternative" to ChatGPT and “lets you do all sorts of illegal stuff and easily sell it online in the future."',
  date: "JULY 21, 2023",
 },
 {
  id: 39,
  genre: "Technology",
  ref: "https://www.news18.com/tech/truecaller-launches-ai-powered-assistant-in-india-for-call-screening-how-it-works-8388889.html",
  image:
   "https://images.news18.com/ibnlive/uploads/2023/07/truecaller-16899151753x2.jpg?impolicy=website&width=510&height=356",
  heading:
   "Truecaller Launches AI-Powered Assistant In India For Call Screening: How It Works",
  subheading:
   "Truecaller has launched its AI-powered Assistant in India, which helps users screen calls and avoid answering them altogether. Here's how it works.",
  content:
   "any smartphone users, whether they have Android or iOS devices, rely on the Truecaller app for its spam detection services. Now, it appears that the app is doubling down on its commitment to make life simpler by introducing the Truecaller Assistant in India. The service was launched in Australia and the US last September and is finally making its way to India. Truecaller Assistant answers calls on your behalf when you don’t want to answer them, or when you want to avoid talking to a marketer or a spammer. Truecaller stated that while Caller ID helps identify incoming calls, the Assistant takes it a step further by not only answering the calls but also interacting with the callers. As anticipated, the Truecaller Assistant uses the company’s AI-powered algorithms to enable call screening, but the service is only available for Android users currently. TRUECALLER ASSISTANT: HOW IT WORKS If you have the Truecaller Assistant enabled, you can click ‘Assistant’ to screen a call when you receive one. However, if you are unable or unwilling to answer the call, the Assistant will answer it after a few rings.",
  date: "JULY 21, 2023",
 },
 {
  id: 40,
  genre: "Technology",
  ref: "https://www.news18.com/tech/heres-how-metas-llama-2-is-different-compared-to-its-rivals-google-bard-and-chatgpt-8371861.html",
  image:
   "https://images.news18.com/ibnlive/uploads/2023/07/chatgpt-vs-llma-2-16897437953x2.jpg?impolicy=website&width=510&height=356",
  heading:
   "Here's How Meta's Llama 2 Is Different From Its Rivals Google Bard And ChatGPT",
  subheading:
   "Llama 2 is a generative AI model but there are a few key differences between Meta’s Llama 2 and its competitors—including OpenAI’s GPT-4 (ChatGPT) and Google PaLM 2 (Bard). Check the differences here.",
  content:
   "2023 is certainly shaping up to be the year of AI, with companies racing to launch their own generative AI models. Meta has followed suit with an upgraded version of its LLaMa LLM model, called Llama 2. Meta has released the model as open source—meaning that it is available for free for both commercial and research purposes. Meta and Microsoft have partnered to distribute Llama 2—which is now available in the Azure AI model catalog. This will allow developers using Microsoft Azure to use and benefit from Llama 2. Now, while Llama 2 is a generative AI model, or more specifically, a Large Language Model (LLM), there are a few key differences between Meta’s Llama 2 and its competitors—including OpenAI’s GPT-4 (ChatGPT) and Google PaLM 2 (Bard). Percy Liang, director of Stanford’s Center for Research on Foundation Models, points out that Meta’s research paper acknowledges that Llama 2 is less powerful than GPT-4 and that there is a performance gap between the two models. In terms of benchmarks, Llama 2 model also performs slightly below its rivals—GPT-4 and PaLM 2.",
  date: "JULY 19, 2023",
 },
 {
  id: 41,
  genre: "Hollywood",
  ref: "https://www.koimoi.com/box-office/barbie-beats-wonder-woman-being-the-highest-grossing-film-directed-by-a-female-director-is-just-less-than-100-million-away-from-entering-the-1-billion-club-to-surpass-captain-marvel/",
  image:
   "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/08/barbie-box-office-margot-robbie-starrer-likely-to-enter-the-coveted-billion-dollar-club-before-monday-director-greta-gerwig-all-set-to-make-history-001.jpg",
  heading:
   "Barbie Beats Wonder Woman Being The Highest Grossing Film Directed By A Female Director, Is Just Less Than $100 Million Away From Entering The $1 Billion Club To Surpass Captain Marvel",
  subheading:
   "Greta Gerwig’s Barbie is all set to make history as it’s less than $100 million away from entering the coveted $1 billion club. Read on!",
  content:
   "Greta Gerwig’s Barbie, starring Margot Robbie as the much-loved doll and Ryan Gosling as Ken, is unstoppable. The juggernaut of the bubblegum pink flick has taken the worldwide box office by storm and has smashed and made some records. And now, the musical fantasy will likely make more records by the time Monday is here! As reported by CNBC, Margot Robbie and Ryan Gosling-led Barbie has already collected $916.1 million and is expected to hit the coveted billion-dollar benchmark before Monday. Yes, the film needs less than $100 million to be part of the $1 billion club.",
  date: "August 5, 2023",
 },
 {
  id: 42,
  genre: "Hollywood",
  ref: "https://www.koimoi.com/hollywood-news/christopher-nolan-holding-an-imax-65mm-camera-weighing-over-113-kg-over-cillian-murphy-in-this-bts-image-from-oppenheimer-has-caught-netizens-attention-one-says-i-would-be-so-terrif/",
  image:
   "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/08/netizens-react-to-christopher-nolan-holding-an-imax-65mm-camera-weighing-over-113-kg-over-cillian-murphy-in-bts-image-from-oppenheimer-001.jpg",
  heading:
   "Christopher Nolan Holding An IMAX 65mm Camera Weighing Over 113 Kg Over Cillian Murphy In This BTS Image From Oppenheimer Has Caught Netizens’ Attention, One Says “I Would Be So Terrified”",
  subheading:
   "A behind-the-scenes photo from Oppenheimer sets ft. Christopher Nolan, Cillian Murphy, & a giant IMAX camera has caught netizens’ attention - read on",
  content:
   "Christopher Nolan is among the most celebrated filmmakers of all time. He never fails to blow away the audience’s minds with his work and recently left everyone in awe of his art of filmmaking with Oppenheimer. The director did go the extra mile to bring the story of J Robert Oppenheimer, the father of the atomic bomb, along with Cillian Murphy. As the director has always been very particular about every scene in his films, he even hung an IMAX camera over Murphy during one scene, which made the netizens go crazy. Apart from Murphy, the movie also stars Emily Blunt, Matt Damon, Robert Downey Jr, Florence Pugh, Rami Malek and more. Despite its box office battle against Margot Robbie and Ryan Gosling’s Barbie, the movie has broken various records across the globe.",
  date: "August 5, 2023",
 },
 {
  id: 43,
  genre: "Hollywood",
  ref: "https://www.koimoi.com/hollywood-news/selena-gomez-goes-on-yet-another-alleged-date-with-zayn-malik-in-los-angeles-netizens-react-why-does-sel-have-the-same-taste-as-both-of-the-hadid-sisters/",
  image:
   "https://www.koimoi.com/hollywood-news/selena-gomez-goes-on-yet-another-alleged-date-with-zayn-malik-in-los-angeles-netizens-react-why-does-sel-have-the-same-taste-as-both-of-the-hadid-sisters/",
  heading:
   "Selena Gomez Goes On Yet Another Alleged Date With Zayn Malik In Los Angeles? Netizens React “Why Does Sel Have The Same Taste As Both Of The Hadid Sisters…”",
  subheading:
   "Amid romance rumours, Selena Gomez goes out on an alleged date with Zayn Malik in Los Angeles. Find out the truth below.",
  content:
   "Selena Gomez is currently on a roll on social media and sharing reels and pictures of herself on TikTok and Instagram, treating her fans time and again. The singer is also making alleged romance rumours with Zayn Malik, and on to the series of new events, new reports state that both Sel and Zayn reportedly went on an alleged date in Los Angeles. Netizens are now reacting to the reports on social media, and scroll below to read the scoop. Selena and Zayn both have a massive fan following on social media, with over 427 million and 50 million followers on Instagram. While ,there hasn’t been an official confirmation from both stars, but they have been spotted a few times together, according to reports.",
  date: "August 5, 2023",
 },
 {
  id: 44,
  genre: "Hollywood",
  ref: "https://www.koimoi.com/hollywood-news/dc-gets-slammed-once-again-for-retaining-gal-gadots-wonder-woman-but-axing-henry-cavills-superman-one-says-it-should-be-a-felony/",
  image:
   "https://www.koimoi.com/hollywood-news/dc-gets-slammed-once-again-for-retaining-gal-gadots-wonder-woman-but-axing-henry-cavills-superman-one-says-it-should-be-a-felony/",
  heading:
   "DC Gets Slammed Once Again For Retaining Gal Gadot’s Wonder Woman But Axing Henry Cavill’s Superman, One Says “It Should Be A Felony”",
  subheading:
   "DC fans are furious over the new changes as James Gunn decides to keep Gal Gadot in the roster but kicks out Henry Cavill. Read on for more!",
  content:
   "The DC Extended Universe has undergone a complete makeover since James Gunn and Peter Safran took over. The first significant change was letting go of Henry Cavill as Superman, whom the fans adored. However, the studio did not hesitate to retain the scandalous Ezra Miller as The Flash. In recent news, we learned that Gal Gadot will indeed be returning as Wonder Woman for her third solo outing, and the fans are fuming in rage. James Gunn is chopping down trees left, right, and center and is not willing to compromise with his plans at all. According to him, Cavill, whose performance as Clark Kent received endless praise, did not fit into his plans. But Gal Gadot is not going anywhere. Initially, the ‘Guardians of the Galaxy’ director scrapped the script curated by Patty Jenkins, ensuring her departure from this venture.",
  date: "August 5, 2023",
 },
 {
  id: 45,
  genre: "Hollywood",
  ref: "https://www.koimoi.com/hollywood-news/when-al-pacino-hinted-at-bad-blood-between-him-christopher-nolan-revealing-why-oppenheimer-director-possibly-didnt-offer-him-any-film-post-2002s-insomnia/",
  image:
   "https://www.koimoi.com/hollywood-news/when-al-pacino-hinted-at-bad-blood-between-him-christopher-nolan-revealing-why-oppenheimer-director-possibly-didnt-offer-him-any-film-post-2002s-insomnia/",
  heading:
   "When Al Pacino Hinted At Bad Blood Between Him & Christopher Nolan, Revealing Why Oppenheimer Director Possibly Didn’t Offer Him Any Film Post 2002’s Insomnia",
  subheading:
   "'Godfather' actor Al Pacino and the 'Oppenheimer' director Christopher Nolan - might never work again and here's why.",
  content:
   "Christopher Nolan is currently enjoying the massive success of ‘Oppenheimer’ starring Cillian Murphy, Robert Downey Jr, Florence Pugh, and more. The director has been delivering quality content since day one, which has put him on a pedestal. Now, when you become great, you work with greats, right? The same was the case with Nolan as he collaborated with the legendary Al Pacino in 2002 for a movie called ‘Insomnia’. If you ever wondered why they did not work together again, let us help you find the answer. Al Pacino has touched and turned everything into gold throughout this career. One such movie was ‘Insomnia’ which was directed by Nolan. On a budget of $46 Million, the movie grossed over $116 million, making it a success. So why didn’t these two shake hands for another flick? Al Pacino once revealed the reason behind this lesser-known beef.",
  date: "August 5, 2023",
 },
 {
  id: 46,
  genre: "Hollywood",
  ref: "https://www.koimoi.com/hollywood-news/zack-snyders-justice-league-sequel-had-plans-of-making-this-villain-a-big-baddy-of-the-dc-universe/",
  image:
   "https://www.koimoi.com/hollywood-news/zack-snyders-justice-league-sequel-had-plans-of-making-this-villain-a-big-baddy-of-the-dc-universe/",
  heading:
   "Zack Snyder’s Justice League Sequel Had Plans Of Making This Villain A “Big Baddy Of The DC Universe”",
  subheading:
   "New details have now revealed Zack Snyder had plans of carrying the DCEU even further with an entirely new villain. Read on for more!",
  content:
   "DCEU kicked off in the right direction with Zack Snyder behind the wheel. However, not every great thing comes to fruition. The same thing happened with the Snydervesrse, which was a detailed plan of your favourite DC superheroes going against the most powerful supervillains. It all came crashing down in 2016 when Justice League dropped and the movie was slammed by almost everyone. Now, a DCEU creative has revealed the big plans they had for the Justice League Sequel. There was going to be a Flash villain! Snyder has time and again explained that he had plans of creating an Avengers: Endgame-esque meet-up for the DCEU superheroes. But according to the fans, his vision was not taken into consideration, following which he stepped out. But that doesn’t mean we cannot know what they had planned. Let’s take a look.",
  date: "August 5, 2023",
 },
 {
  id: 47,
  genre: "Hollywood",
  ref: "https://www.koimoi.com/hollywood-news/did-dwayne-johnson-blame-james-gunn-peter-safran-taking-dcs-control-in-hands-for-the-mega-failure-of-his-black-adam-by-saying-it-got-caught-in-a-vortex-of-new-leadership/",
  image:
   "https://www.koimoi.com/hollywood-news/did-dwayne-johnson-blame-james-gunn-peter-safran-taking-dcs-control-in-hands-for-the-mega-failure-of-his-black-adam-by-saying-it-got-caught-in-a-vortex-of-new-leadership/",
  heading:
   "Did Dwayne Johnson Blame James Gunn & Peter Safran Taking DC’s Control In Hands For ‘Black Adam’ Franchise Getting Scrapped By Saying “It Got Caught In A Vortex Of New Leadership”?",
  subheading:
   "Dwayne Johnson reflects on his controversial DC film Black Adam & what went wrong with it. Here's what he has to say about it!",
  content:
   "The DC Universe has been going through huge changes, and it began with the appointment of James Gunn and Peter Safran as the new heads. Dwayne Johnson, who made his DCEU debut with Black Adam, got pulled into many controversies, especially for bringing back Henry Cavill’s Superman. Now, the actor has once again reflected on that time and what went wrong. Scroll below to get the deets. Johnson’s superhero film came out in 2022, and it received mixed reviews from the audience, but out and out, it was The Rock’s film, and he did it well to promote it, but things did not pan out in his favour. But bringing back Cavill for the post-credit sure gave hope among fans, only to get shattered soon after Gunn and Safran took over the DCU.",
  date: "August 5, 2023",
 },
 {
  id: 48,
  genre: "Hollywood",
  ref: "https://www.koimoi.com/hollywood-news/batman-ben-affleck-once-revealed-the-real-reason-he-hung-up-his-cape-fearing-he-would-drink-himself-to-death/",
  image:
   "https://www.koimoi.com/hollywood-news/batman-ben-affleck-once-revealed-the-real-reason-he-hung-up-his-cape-fearing-he-would-drink-himself-to-death/",
  heading:
   "‘Batman’ Ben Affleck Once Revealed The Real Reason He Hung Up His Cape, Fearing “He Would Drink Himself To Death”",
  subheading:
   "A couple of years ago, actor Ben Affleck opened up about the real reason he hung up his Batman cape. Read on to know about it.",
  content:
   "Many actors have essayed the part of the Caped Crusader in the DCU, and actor Ben Affleck is just one of them. Ben played the role of Batman in several of the studio’s superhero films, including Batman v Superman: Dawn of Justice, Justice League and Zack Snyder’s Justice League, as well as cameos in Suicide Squad and The Flash. As per reports, he was supposed to play the Dark Knight in Matt Reeves’ ‘The Batman’ (it featured Robert Pattinson in the titular role) but backed out of the project. But why did he not want to play the part again? In 2020, the actor spilled the beans and revealed the real reason behind hanging up the cape. Scroll below to read all about it.",
  date: "August 5, 2023",
 },
 {
  id: 49,
  genre: "Hollywood",
  ref: "https://www.koimoi.com/hollywood-news/justin-biebers-net-worth-in-2023-reportedly-stands-at-a-jaw-dropping-300-million-2485-crore-as-long-as-hailey-bieber-promises-to-stand-by-him-hes-only-meant-to-do-better/",
  image:
   "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/08/justin-biebers-net-worth-in-2023-reportedly-stands-at-a-jaw-dropping-300-million-2485-crore-read-on-001.jpg",
  heading:
   "Justin Bieber’s Net Worth In 2023 Reportedly Stands At A Jaw-Dropping $300 Million (2,485 Crore); As Long As Hailey Bieber Promises To Stand By Him, He’s Only Meant To Do Better!",
  subheading:
   "Justin Bieber's net worth in 2023 will make you chase your dreams ever harder. Scroll below to read the scoop!",
  content:
   "Justin Bieber started off very early in his career and became an overnight sensation with his song ‘Baby’ in 2010. While he became popular day by day, he also started making headlines for his alleged romance with singer Selena Gomez back in the day, and they were one of the most adorable couples in Hollywood. Justin is now married to model Hailey Bieber, and today, we bring you his net worth by 2023, and it seems like as long as Victoria’s Secret model is by his side, he’s only meant to do better. Scroll below to read the scoop! Justin is one of the most followed celebrities on social media, with over 293 million followers on Instagram. He often gives a glimpse of his personal and professional life on the photo-sharing platform, and we love his adorable pictures with his wife Hailey.",
  date: "August 4, 2023",
 },
 {
  id: 50,
  genre: "Hollywood",
  ref: "https://www.koimoi.com/hollywood-news/sylvester-stallone-once-recalled-the-disinterest-george-lucas-had-during-his-star-wars-audition-revealed-i-told-him-i-would-look-like-crap/",
  image:
   "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/08/sylvester-stallone-once-recalled-telling-george-lucas-guys-in-space-dont-have-this-face-while-auditioning-for-han-solos-part-in-star-wars-001.jpg",
  heading:
   "Sylvester Stallone Once Recalled The Disinterest George Lucas Had During His Star Wars Audition, Revealed, “(I Told Him) I Would Look Like Crap”",
  subheading:
   "Did you know Sylvester Stallone auditioned for Harrison Ford’s part in George Lucas’ Star Wars? Read on to know how it went!",
  content:
   "Sylvester Stallone is well known not only in Hollywood but across the globe as an action star thanks to his portrayal of boxer Rocky Balboa in the Rocky series (1976–present). The actor has been delivering hits for around six decades and has been part of several well-known films and franchises, including The Expendables and The Rambo films. But did you know he even tried landing a part in Star Wars? Stallone auditioned for a pivotal role in George Lucas’ Star War – but unfortunately didn’t land it. The original trilogy – for which he auditioned, featured Mark Hamill (Luke Skywalker), Harrison Ford (Han Solo), Carrie Fisher (Princess Leia), and James Earl Jones (Darth Vader’s voice). Read on to know which role Sylvester auditioned for and how it went.",
  date: "August 4, 2023",
 },
 {
  id: 51,
  genre: "Hollywood",
  ref: "https://www.koimoi.com/hollywood-news/john-cena-recalls-sleeping-in-a-car-eating-a-pizza-every-day-for-free-from-a-local-store/",
  image:
   "https://www.koimoi.com/hollywood-news/john-cena-recalls-sleeping-in-a-car-eating-a-pizza-every-day-for-free-from-a-local-store/",
  heading:
   "John Cena Recalls Sleeping In A Car & Eating A Pizza Everyday For Free From A Local Store: “I Didn’t Have The Money To Pay…”",
  subheading:
   "John Cena, before making it big in WWE, experienced homelessness and struggled to eat since he had no money. Read on to know the details.",
  content:
   "Former WWE superstar and now Hollywood actor John Cena had a journey full of roadblocks. From living in a car to making it big in wrestling, Cena surely had an eventful journey. The Fast Saga actor, in a recent interview, opened up about his hustle and spilled the beans about how he ate a pizza a day for free thanks to a local store who ran an offer. John Cena won the WWE championship a whopping 16 times and then stepped into acting. The former wrestler has been part of movies like The Marine, 12 Rounds, The Reunion, F9: The Fast Saga, The Suicide Squad, Fast X and the most recent Barbie.",
  date: "August 4, 2023",
 },
 {
  id: 52,
  genre: "Hollywood",
  ref: "https://www.koimoi.com/hollywood-news/guardians-of-the-galaxy-vol-3-receives-highest-ever-rating-on-disney-hotstar-leaves-behind-secret-invasion-moon-knight-many-others-to-garner-the-top-spot/",
  image:
   "https://www.koimoi.com/hollywood-news/guardians-of-the-galaxy-vol-3-receives-highest-ever-rating-on-disney-hotstar-leaves-behind-secret-invasion-moon-knight-many-others-to-garner-the-top-spot/",
  heading:
   "Guardians Of The Galaxy Vol 3 Receives Highest-Ever Rating On Disney + Hotstar, Leaves Behind Secret Invasion, Moon Knight & Many Others To Garner The Top Spot!",
  subheading:
   "Guardians of the Galaxy Vol 3 is a movie with a historic rating that has hit on the Disney+ Hotstar platform. Read on.",
  content:
   "It’s the end of the Guardians era with the last movie Guardians of the Galaxy Vol 3, and to cater to a larger audience, the film has hit the OTT platform Disney+ Hotstar since August 2, 2023. And even though it came as a brutal form of violence towards animals along with MCU’s first F-bomb and other controversies, the film still got a PG-13 rating that the Marvel movies usually receive. For the unversed, GoTG is an action-packed space-faring drama starring Chris Pratt, Zoe Saldana, Karen Gillan, Dave Bautista, Bradley Cooper and others in pivotal roles. Now, as James Gunn already said no to any more sequels, audiences are streaming the movie on Disney+ to bid their last goodbye.",
  date: "August 4, 2023",
 },
 {
  id: 53,
  genre: "Hollywood",
  ref: "https://www.koimoi.com/hollywood-news/cardi-bs-mic-thrown-at-fan-during-las-vegas-concert-auctions-for-whopping-99000/",
  image:
   "https://www.koimoi.com/hollywood-news/cardi-bs-mic-thrown-at-fan-during-las-vegas-concert-auctions-for-whopping-99000/",
  heading:
   "Cardi B’s Mic, Thrown At Fan During Las Vegas Concert, Auctions For Whopping $99,000",
  subheading:
   "With five days left before the auction is closed, it remains to be seen where the winning bid lands for Cardi B's controversial mic.",
  content:
   "A microphone-turned-weapon which was thrown by rapper Cardi B at her recent Las Vegas show will soon benefit others. The mic has been put up for auction at eBay and is currently sitting at a staggering price, reports aceshowbiz.com. According to the listing, the Shure Axient digital mic is auctioned off for charity. The used mic actually belongs to an audio production company called The Wave in Sin City and the owner tells tmz.com that the proceeds will be split with two charities, the Wounded Warrior Project and a local Vegas charity called Friendship Circle Las Vegas, which benefits teens and young adults with special needs. The bidding for the mic, which originally cost $1,000, started at $500 but it has since risen up to nearly $100,000. It is currently sitting at more than $99,000 after 121 bids were made. With five days left before the auction is closed, it remains to be seen where the winning bid lands.",
  date: "August 4, 2023",
 },
 {
  id: 54,
  genre: "Hollywood",
  ref: "https://www.koimoi.com/hollywood-news/george-clooney-break-silence-on-donating-1-million-to-sag-aftra-hardship-fund-were-determined-to-meet-this-moment/",
  image:
   "https://www.koimoi.com/hollywood-news/george-clooney-break-silence-on-donating-1-million-to-sag-aftra-hardship-fund-were-determined-to-meet-this-moment/",
  heading:
   "George Clooney Breaks Silence On Donating $1 Million To SAG-AFTRA Hardship Fund, “…We’re Determined To Meet This Moment”",
  subheading:
   "The Rock was one of the first stars to respond with financial assistance after Vance wrote to some of the highest-earning SAG-AFTRA members",
  content:
   "George Clooney and Amal Clooney, Dwayne ‘The Rock’ Johnson and Meryl Streep are among the stars who have donated $1 million or more to the SAG-AFTRA Foundation’s Emergency Financial Assistance Fund. The stars – and other celebrity pals including Jennifer Lopez and Ben Affleck, Oprah Winfrey, Julia Roberts, Matt and Luciana Damon, Leonardo DiCaprio, Hugh Jackman and Deborra-lee Furness, Ryan Reynolds and Blake Lively, Nicole Kidman and Arnold Schwarzenegger – have all donated the huge sum to help struggling actors during the ongoing SAG-AFTRA strike.",
  date: "August 4, 2023",
 },
 {
  id: 55,
  genre: "Hollywood",
  ref: "https://www.koimoi.com/hollywood-news/tom-cruise-to-get-back-with-sofia-vergara-after-her-divorce-it-has-always-eaten-him-that-he-dumped-her-chose-katie-reports/",
  image:
   "https://www.koimoi.com/hollywood-news/tom-cruise-to-get-back-with-sofia-vergara-after-her-divorce-it-has-always-eaten-him-that-he-dumped-her-chose-katie-reports/",
  heading:
   "om Cruise To Get Back With Sofia Vergara After Her Divorce? “It Has Always Eaten Him That He Dumped Her & Chose Katie”",
  subheading:
   "Now that Sofia Vergara has called splits from her husband, Joe Manganiello, Tom Cruise wants to reignite romance with her. Read on",
  content:
   "American actor Tom Cruise is one of the biggest stars in Hollywood and one of the world’s highest-paid actors. He has given several blockbusters in his career. However, he often made headlines for his affair with Hollywood actresses. His romance with Sofia Vergara did not get due attention back in the day.The Mission Impossible actor briefly courted the “Modern Family” actress before he fell in love with Katie Holmes in 2005. At a pre-Oscars event, Will Smith introduced them, and the Hollywood action star started pursuing Vergara.",
  date: "August 4, 2023",
 },
 {
  id: 56,
  genre: "Hollywood",
  ref: "https://www.koimoi.com/hollywood-news/when-brad-pitt-confessed-he-loved-being-married-to-ex-wife-jennifer-aniston-i-can-fart-eat-ice-cream-in-bed/",
  image:
   "https://www.koimoi.com/hollywood-news/when-brad-pitt-confessed-he-loved-being-married-to-ex-wife-jennifer-aniston-i-can-fart-eat-ice-cream-in-bed/",
  heading:
   "When Brad Pitt Confessed He Loved Being Married To Ex-Wife Jennifer Aniston: “I Can Fart & Eat Ice Cream In Bed…”",
  subheading:
   "Today, we bring you a throwback to when Brad Pitt opened up about his marriage with ex-wife Jennifer Aniston",
  content:
   "Brad Pitt is one of the biggest names in the entertainment business globally and never misses an opportunity to make headlines with her personal and professional life. The actor, who shares six kids with Angelina Jolie, was once married to Friends actress Jennifer Aniston. In an interview, the Fight Club actor once described how it feels to be married to Jen while also mentioning the best part about it, which includes farting and eating ice cream in bed. For those who don’t know, Brad and Jen were once upon the time most famous couples in Hollywood and their wedding was a lavish affair. The two met on the sets of Friends, and before they knew it, they were already head-to-toe in love with each other.",
  date: "August 2, 2023",
 },
 {
  id: 57,
  genre: "Hollywood",
  ref: "https://www.koimoi.com/hollywood-news/og-avengers-iron-man-captain-america-co-personify-each-of-the-6-infinity-stones-this-crazy-fan-theory-will-not-only-blow-you-away-but-will-make-you-emotional-too-watch/",
  image:
   "https://www.koimoi.com/hollywood-news/og-avengers-iron-man-captain-america-co-personify-each-of-the-6-infinity-stones-this-crazy-fan-theory-will-not-only-blow-you-away-but-will-make-you-emotional-too-watch/",
  heading:
   "OG Avengers Iron Man, Captain America & Co Personify Each Of The 6 Infinity Stones? This Crazy Fan Theory Will Not Only Blow You Away But Will Make You Emotional Too! Watch",
  subheading:
   "Check out this crazy – but interesting fan theory that states the original Avengers represent each of the 6 Infinity Stones. It’s mind-blowing!",
  content:
   "Marvel Comics has given the world several superheroes, but the original six Avengers – Iron Man, Captain America, Black Widow, Thor, Hulk, and Hawkeye have a special place in the hearts of many. While MCU fans had to tearfully bid adieu to the first three during their quest to find the Infinity Stones, battle Thanos and his army and then return them to their original timelines, did you know each of the six represents one of the stones? We recently came across an interesting theory about the Infinity Stones and how the original Avengers represent each of them. Read on to know more about it and be blown away!",
  date: "August 1, 2023",
 },
 {
  id: 58,
  genre: "Hollywood",
  ref: "https://www.koimoi.com/hollywood-news/emily-blunt-took-a-break-from-acting-to-focus-on-marital-issues-with-john-krasinski-netizens-ask-ariana-grande-pete-davidson-to-stay-away-from-them/",
  image:
   "https://www.koimoi.com/hollywood-news/emily-blunt-took-a-break-from-acting-to-focus-on-marital-issues-with-john-krasinski-netizens-ask-ariana-grande-pete-davidson-to-stay-away-from-them/",
  heading:
   "Emily Blunt Took A Break From Acting To Focus On Marital Issues With John Krasinski? Netizens Ask Ariana Grande & Pete Davidson To Stay Away From Them",
  subheading:
   "Emily Blunt and John Krasinski might be going through a rough phase in their marriage. Read on to know what’s really happening.",
  content:
   "Emily Blunt and John Krasinski never get tired of talking about each other on public platforms, whether it is a red carpet event or a talk show. The two are always giving major couple goals to their loyal fans. However, it appears there might be a problem brewing up between the two as a Reddit post has claimed that Emily Blunt taking a break from acting is only to sort out her marital issues. Scroll down to read the scoop. Emily Blunt, on the work front, was recently seen in Christopher Nolan’s Oppenheimer which also stars Cillian Murphy, Robert Downey Jr, and Florence Pugh in prominent roles. The actress had recently announced that she will be taking a break from acting to focus on her kids, and this has surely got her fans worried. Emily Blunt and John Krasinski got married in 2010.",
  date: "July 31, 2023",
 },
 {
  id: 59,
  genre: "Hollywood",
  ref: "https://www.koimoi.com/hollywood-news/superman-henry-cavills-final-appearance-from-the-flash-goes-viral-is-being-labelled-the-most-disappointing-as-fans-brutally-slam-the-studio-wb-has-fcked-him-mor/",
  image:
   "https://www.koimoi.com/hollywood-news/superman-henry-cavills-final-appearance-from-the-flash-goes-viral-is-being-labelled-the-most-disappointing-as-fans-brutally-slam-the-studio-wb-has-fcked-him-mor/",
  heading:
   "‘Superman’ Henry Cavill’s Final Appearance From The Flash Goes Viral & Is Being Labelled The Most Disappointing As Fans Brutally Slam",
  subheading:
   "The Flash continues to be criticized on the Internet, and today, it is for Henry Cavill’s final appearance as Superman. Read on.",
  content:
   "Amongst a lot other things that The Flash starring Ezra Miller is criticized for, its CGI stands on the top spot and the movie has already received a whole lot of flack for its labelled ‘bad CGI’. While the movie now is on streaming and many are watching it only to understand the uproar against it, and that only means that the dissection will be more rigorous now because the pause, play, and rewind buttons are in the hands of the viewer. This has now led to a netizens posting Henry Cavill’s still from his cameo or his CGIed cameo, and fans are trolling the studio again. For the unversed, led by Ezra Miller, The Flash was directed by Andy Muschietti and was one of the biggest event movies for the studio. The movie starred Ben Affleck, Gal Gadot, Michael Keaton, Nicolas Cage, Sasha Calle, and many more in big and small roles. Henry was upto make his last appearance as Superman, before he bids a goodbye as James Gunn has axed his future in the DCU.",
  date: "July 31, 2023",
 },
 {
  id: 60,
  genre: "Hollywood",
  ref: "https://www.koimoi.com/hollywood-news/hugh-jackman-won-wolverine-losing-iconic-roles-like-jack-sparrow-james-bond-8-more/",
  image:
   "https://www.koimoi.com/hollywood-news/hugh-jackman-won-wolverine-losing-iconic-roles-like-jack-sparrow-james-bond-8-more/",
  heading:
   "Hugh Jackman Won Wolverine Losing Iconic Roles Like Jack Sparrow, James Bond & 8 More But We Won’t Complaint Because Logan Is Love!",
  subheading:
   "While Hugh Jackman made it big in Hollywood playing Wolverine, he would have been a part of these 10 films, including James Bond and Pirates of The Caribbean.",
  content:
   "Hugh Jackman needs no introduction. The actor is among the most beloved and biggest movie stars with an illustrious career. We all have known and loved him for bringing the mutant Wolverine, aka Logan, to the screens for a long time. While the actor found fame with the role, he also lost and passed on various others, including Daniel Craig’s James Bond and Johnny Depp’s Jack Sparrow. Here’s the list of movies the actor did not become a part of. Jackman began his journey with the Australian TV show Correlli in 1995. As he entered Hollywood, the actor got his big break with the 2000 flick X-Men.",
  date: "July 30, 2023",
 },
 {
  id: 61,
  genre: "Fitness",
  ref: "https://www.news18.com/lifestyle/health-and-fitness-importance-of-physical-therapy-or-physio-therapy-pre-and-post-joint-replacement-8437135.html",
  image:
   "https://www.news18.com/lifestyle/health-and-fitness-importance-of-physical-therapy-or-physio-therapy-pre-and-post-joint-replacement-8437135.html",
  heading:
   "Importance of Physical Therapy or Physio Therapy Pre and Post Joint Replacement",
  subheading:
   "Dr. Sai Krishna B. Naidu provides information about a psychotherapy in the case of pre- and post-joint replacement. Check here for more details.",
  content:
   "As you are aware physical therapy strengthens the muscles around the Joint helping to improve the longitivtiy of the Joint . Muscles contribute majorly for good functioning of the Joint , with out muscles / tendon the joints do not move. Weak muscles contribute to weak joints causing faster wearing causing osteoarthritis. Hence strong muscles help your joints in the body. Physical therapy done rightly under the physio therapist advice and guidance helps achieve the above faster and optimally. There are lot of evidence showing pre operative rehabilitation helps reduce the post patient care and pain by 40 percent ( issue Joint and bone surgery Oct 2014)",
  date: "July 27, 2023",
 },
 {
  id: 62,
  genre: "Fitness",
  ref: "https://www.news18.com/lifestyle/the-oppenheimer-diet-cillian-murphy-survived-on-one-almond-a-day-8415883.html",
  image:
   "https://www.news18.com/lifestyle/the-oppenheimer-diet-cillian-murphy-survived-on-one-almond-a-day-8415883.html",
  heading: "The Oppenheimer Diet: Cillian Murphy Survived on One Almond a Day",
  subheading:
   "Oppenheimer's persona and appearance were of utmost importance to him, so he went to great lengths to achieve authenticity.",
  content:
   "Actors strive to deliver exceptional performances on screen by fully immersing themselves in their characters. They work hard to master accents and adopt specific body language, as acting requires a dedication to authenticity. One actor who takes this commitment to a whole new level is Cillian Murphy, known for his role in Peaky Blinders. In Christopher Nolan’s film Oppenheimer, he portrays the iconic physicist, J Robert Oppenheimer, bringing his character to life on the big screen.cIn a recent interview with Extra, Cillian’s co-star Emily Blunt revealed the extraordinary sacrifice he made to embody the role of Oppenheimer. According to Emily, “He had such a monumental undertaking. And he could only eat, like, an almond every day. He was so emaciated.” In her conversation with The Guardian, Emily, mentioned that Cillian Murphy was so committed to the diet that at times, he forgot to eat or sleep because he was filled with “crazy energy.”",
  date: "July 26, 2023",
 },
 {
  id: 63,
  genre: "Fitness",
  ref: "https://www.news18.com/lifestyle/5-food-items-you-should-avoid-if-you-are-diabetic-here-is-why-8446201.html",
  image:
   "https://www.news18.com/lifestyle/5-food-items-you-should-avoid-if-you-are-diabetic-here-is-why-8446201.html",
  heading: "5 Food Items You Should Avoid If You Are Diabetic",
  subheading:
   "For diabetics and prediabetics, it is important to be very mindful about the type of carbs and their portion sizes to be included in each meal",
  content:
   "arbohydrates are the primary fuel source along with other macronutrients like proteins and fats that provide energy to our body. All forms of carbohydrates except fiber are broken down into glucose in our body. This glucose is transported to all the body cells through our bloodstream with the help of Insulin (hormone produced by the pancreas). However, in Type-2 diabetes, our body cannot efficiently remove glucose from our bloodstream due to insufficiency or inefficiency of insulin, which leads to high blood glucose levels.",
  date: "July 28, 2023",
 },
 {
  id: 64,
  genre: "Fitness",
  ref: "https://www.news18.com/lifestyle/health-and-fitness-debina-bonnerjee-slams-trolls-for-fat-shaming-her-post-pregnancy-5-tips-to-combat-fatphobia-8327785.html",
  image:
   "https://www.news18.com/lifestyle/health-and-fitness-debina-bonnerjee-slams-trolls-for-fat-shaming-her-post-pregnancy-5-tips-to-combat-fatphobia-8327785.html",
  heading:
   "Debina Bonnerjee Slams Trolls for Fat-Shaming Her Post-Pregnancy; 5 Tips to Combat Fatphobia",
  subheading:
   "It's sad that fatphobia still prevails in our society. We may start to eliminate the damaging attitudes about weight and body image by realising what it really implies. Read here to know more",
  content:
   "ebina Bonnerjee, a television actress, recently called out trolls for fat-shaming her after giving birth. She revealed in a vlog post that she frequently hears insulting remarks about her body, such as ‘chothi haathi’ and ‘mini haathi.’ But instead of allowing these remarks harm her mental state, Debina decided to use them as inspiration to better herself. Fatphobia has become a big problem in a culture that places a high value on appearance. It alludes to the prejudice, dread, and treatment of those who are deemed to be obese or overweight on the part of others. In other words, fatphobia can cause prejudice based on weight in medical settings.",
  date: "July 13, 2023",
 },
 {
  id: 65,
  genre: "Fitness",
  ref: "https://zeenews.india.com/people/shilpa-shetty-aces-stand-up-challenge-fans-laud-actress-for-her-fitness-stst-2630247.html",
  image:
   "https://zeenews.india.com/people/shilpa-shetty-aces-stand-up-challenge-fans-laud-actress-for-her-fitness-stst-2630247.html",
  heading:
   "Shilpa Shetty Aces ‘Stand-up Challenge’ — Fans Laud Her Fitness Levels",
  subheading:
   "Shilpa Shetty has always inspired her fans through her workout videos on soail media and has been a true fitness icon in Bollywood.",
  content:
   "Shilpa Shetty Kundra is one of the most popular actresses in Bollywood. Apart from being a fantastic actress, Shilpa has always inspired people through her workouts and has been a true fitness icon. From core-strengthening workouts to flexible yoga asanas, the actress has always motivated her fans and followers through workout videos on social media. Now, Shilpa Shetty has shared a similar video on social media, where she is seen performing a ‘stand-up challenge’. According to the actress, the challenge tests one’s mobility, flexibility, and ability to move the body freely and normally.",
  date: "July 03, 2023",
 },
 {
  id: 66,
  genre: "Fitness",
  ref: "https://zeenews.india.com/health/joesthetics-death-reason-expert-explains-causes-signs-and-preventive-measures-of-aneurysms-2630189",
  image:
   "https://zeenews.india.com/health/joesthetics-death-reason-expert-explains-causes-signs-and-preventive-measures-of-aneurysms-2630189",
  heading:
   "Joesthetics Death: Expert Explains Causes, Signs, And Preventive Measures Of Aneurysms",
  subheading:
   "Dr Amit Gupta, Principal Consultant - Neurosciences, Neurosurgery, Spine Surgery, Max Super Speciality Hospital, explains causes, preventive measures, early signs and treatment for aneurysms. ",
  content:
   'Jo Lindner, a famous fitness influencer on social media, passed away at the age of 30 due to an unexpected aneurysm on July 2. This news left his fans in shock and condolences soon started pouring on his various social media accounts. His girlfriend, Nicha, confirmed his tragic passing on Instagram, expressing her grief and referring to Jo as an extraordinary individual in this world. The German YouTuber, popularly known as "Joesthetics," received outpouring tributes across various social media platforms. Jo has been regularly sharing videos showcasing his life there. Alongside his 940,000 subscribers, the bodybuilder shared workout tips, and dietary advice, and even displayed his shoe collection. But how did Jo die? What is the reason behind Jo’s death? As per reports, Joesthetics died due to aneurysms.',
  date: "July 03, 2023",
 },
 {
  id: 67,
  genre: "Fitness",
  ref: "https://zeenews.india.com/health/pre-operative-exercise-substantially-helps-with-recovery-study-2634398",
  image:
   "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2023/07/12/1239244-aerobic-hiit-pexels.jpg?im=Resize=(700,400)",
  heading: "Pre-Operative Exercise Substantially Helps With Recovery: Study",
  subheading:
   "Generally, post-operative complications occur in about 30 per cent of patients. In the study, those who undertook high-intensity interval training prior to surgery showed a consistent reduction in post-surgery complications, say researchers.",
  content:
   "A University of Otago study demonstrates that a short plan of high-intensity interval training before surgery can significantly aid recovery. The study, published in the journal Surgery, reviewed and analysed 12 studies including 832 patients who had undertaken preoperative high-intensity interval training. Such training involves repeated aerobic high-intensity intervals at about 80 per cent of the maximum heart rate followed by active recovery. Lead investigator Dr Kari Clifford says the study included all types of major surgeries – those expected to last more than two hours or with an anticipated blood loss of greater than 500ml – and including liver, lung, colorectal, urologic, and mixed major abdominal surgeries. The average age of participants in the intervention group was 66 and 67 in the control group.",
  date: "July 12, 2023",
 },
 {
  id: 68,
  genre: "Fitness",
  ref: "https://zeenews.india.com/health/exercise-to-lower-blood-pressure-wall-squats-planks-could-help-says-study-2640948",
  image:
   "https://zeenews.india.com/health/exercise-to-lower-blood-pressure-wall-squats-planks-could-help-says-study-2640948",
  heading:
   "Exercise To Lower Blood Pressure? Wall Squats, Planks Could Help, Says Study",
  subheading:
   "Suffering from high blood pressure (BP)? Doing static isometric exercises the sort that involves engaging muscles without movement such as wall squats and planks are best for lowering blood pressure, finds a study.",
  content:
   "The study, published online in the British Journal of Sports Medicine, showed that cardio (aerobic exercises); dynamic resistance training, such as squats, press-ups, and weights; high-intensity interval training or HIIT (episodic short bouts of high-intensity exercise interspersed with short periods of recovery at a lower intensity) are also effective. But isometric exercises were able to reduce systolic (upper reading) BP by 98 per cent, compared to combined training (76 per cent), dynamic resistance training (46 per cent), aerobic exercise training (40.5 per cent) and HIIT (39 per cent). Wall squats (isometric) and running (aerobic) were found to be the most effective individual exercises for reducing systolic BP (90.5 per cent) and diastolic (lower reading) BP (91 per cent), respectively, with isometric exercise, overall, the most effective for reducing both blood pressure elements.",
  date: "July 26, 2023",
 },
 {
  id: 69,
  genre: "Fitness",
  ref: "https://zeenews.india.com/health/high-fitness-levels-may-reduce-death-risk-from-cardiovascular-disease-in-men-study-2601338",
  image:
   "https://zeenews.india.com/health/high-fitness-levels-may-reduce-death-risk-from-cardiovascular-disease-in-men-study-2601338",
  heading:
   "High Fitness Levels May Reduce Death Risk From Cardiovascular Disease In Men: Study",
  subheading:
   "This study looked at the relationship between blood pressure, fitness, and the risk of cardiovascular death.",
  content:
   'Being healthy may reduce the chance of dying from cardiovascular disease in men with high blood pressure. This finding is the result of a 29-year investigation. The study\'s findings were published today in the European Journal of Preventive Cardiology, an ESC journal. "This was the first study to evaluate the joint effects of fitness and blood pressure on the risk of dying from cardiovascular disease," study author Professor Jari Laukkanen of the University of Eastern Finland in Kuopio, Finland, said. "The findings suggest that physical activity may help avoid some of the negative effects of high blood pressure." Around 1.3 billion persons between the ages of 30 and 79 suffer from hypertension or high blood pressure. Globally, hypertension is one of the main causes of premature death and a significant risk factor for heart attacks and strokes. High levels of cardiorespiratory fitness have been associated with longer lifespans, according to previous studies.',
  date: "May 01, 2023",
 },
 {
  id: 70,
  genre: "Fitness",
  ref: "https://zeenews.india.com/health/benefits-of-exercise-working-out-while-fasting-can-help-with-mental-focus-and-clarity-heres-why-2641905",
  image:
   "https://zeenews.india.com/health/benefits-of-exercise-working-out-while-fasting-can-help-with-mental-focus-and-clarity-heres-why-2641905",
  heading:
   "Benefits Of Exercise: Working Out While Fasting Can Help With Mental Focus And Clarity, Here's Why",
  subheading:
   "Fasting has been a tradition as old as any. We all have fasted at one time or another, for various reasons including but not limited to cultural, religious, and health purposes. Here are reasons why working out during your fast can help you with burning fat and mental clarity.",
  content:
   "While fasts are often observed for good health, an unhealthy myth follows this custom. It is often believed that one should not workout during fasting. But, the truth cannot be any far from the truth. In reality, working out during fasts can be beneficial, as long as you know what kind of workout plan works for you. While you do need to consider certain things while working out during a fast, it is preferable to not skip your workout. Kushal Pal Singh, Fitness and Performance Expert of Anytime Fitness discusses how to schedule your workout during fasts.",
  date: "July 29, 2023",
 },
 {
  id: 71,
  genre: "Fitness",
  ref: "https://indianexpress.com/article/lifestyle/fitness/dr-kiran-bedi-fitness-mantra-74-never-had-samosa-poori-kachori-pakode-walking-exercise-journaling-8872559/",
  image:
   "https://indianexpress.com/article/lifestyle/fitness/dr-kiran-bedi-fitness-mantra-74-never-had-samosa-poori-kachori-pakode-walking-exercise-journaling-8872559/",
  heading:
   "Kiran Bedi reveals fitness mantra at 74: ‘I have never had samosa, poori, kachori, pakode…’",
  subheading:
   "Sharing some advice for those in their 30s and 40s, Dr Bedi said that it is necessary to first accept whatever situation you are in life and then take the decision to either reject it or change it",
  content:
   "One of the finest former officers of the Indian Police Force, Kiran Bedi is a name to reckon with. The former Lieutenant Governor of Puducherry is fit like a fiddle at 74. Sharing her fitness mantra, Dr Bedi revealed how meditation and yoga have helped her along with journaling, in a freewheeling conversation with Habuild founder Saurabh Bothra. “I have never had samosa, poori, kachori, pakode. I don’t eat ‘faltu‘ (useless) stuff for which I need to repent later. I never consciously have had fried stuff. If I crave pani puri, I would rather drink kanji,” said Bedi, who is credited as the first woman to join officer ranks in the Indian Police Service.",
  date: "August 5, 2023",
 },
 {
  id: 72,
  genre: "Fitness",
  ref: "https://indianexpress.com/article/lifestyle/fitness/deepika-padukone-washboard-abs-diet-activity-8870943/",
  image:
   "https://indianexpress.com/article/lifestyle/fitness/deepika-padukone-washboard-abs-diet-activity-8870943/",
  heading:
   "Deepika Padukone stuns as she sports washboard abs: ‘Not so long ago…’",
  subheading:
   '"Embracing a balanced diet fuels your journey to sports washboard abs and enhances overall well-being," said Dr Esther Sathiaraj, AGM, clinical nutrition and dietetics, HCG Cancer Hospital, Bangalore',
  content:
   "Trust Deepika Padukone to regularly give us fitness goals with her dedication and enviable physique. As such, the actor recently took everyone, including her husband and actor Ranveer Singh, by surprise as she dropped a picture displaying her toned abs. “Once upon a time…Not so long ago…,” wrote the Fighter actor. “A warning would’ve been nice,” wrote Ranveer in the comments section, and we could not agree more. Taking some inspiration from the 37-year-old, experts decode how to tone your abs. Attaining sports washboard abs is not just about crunches and sweat but also a dynamic symphony of nutrition and exercise, said Dr Esther Sathiaraj, AGM, clinical nutrition and dietetics, HCG Cancer Hospital, Bangalore.",
  date: "August 1, 2023 ",
 },
 {
  id: 73,
  genre: "Fitness",
  ref: "https://indianexpress.com/article/lifestyle/fitness/samantha-ruth-prabhu-takes-an-ice-bath-at-4-degrees-for-six-minutes-8862734/",
  image:
   "https://indianexpress.com/article/lifestyle/fitness/samantha-ruth-prabhu-takes-an-ice-bath-at-4-degrees-for-six-minutes-8862734/",
  heading:
   "Samantha Ruth Prabhu takes ice bath at 4 degrees for six minutes; how does it help?",
  subheading:
   'The most obvious benefit of ice baths is that they simply make the body feel good," said Dr Ashish Singhal, consultant orthopaedic and knee replacement, Paras Hospital, Udaipur',
  content:
   "Samantha Ruth Prabhu has been giving a mix of travel, fitness, and wellness inspiration from her vacation in Indonesia. As such, the Kushi actor, who has been battling an autoimmune condition myositis for over a year, has been seen indulging in me-time all the more in the lush greens of Indonesia’s Bali, including in Uluwatu. Keeping us engaged with her interesting feed on Instagram, the 36-year-old was seen immersing herself in an ice bath at four degrees for six straight minutes. “#Icebaths. 4 degrees. 6 minutes,” Samantha captioned the post on Instagram Stories. So, naturally, we decided to expand our knowledge about how ice bath works on our body. Urging that there are varied schools of thought,  Dr Priyanka Rohatgi, chief clinical dietician, Apollo Hospitals, Bangalore said that evidence has shown that cold showers are great to boost immunity, combat depression, reduce localised pains, inflammation and any kind of muscle soreness.",
  date: "July 27, 2023",
 },
 {
  id: 74,
  genre: "Fitness",
  ref: "https://indianexpress.com/article/lifestyle/fitness/ranveer-singh-trainer-lloyd-stevens-look-jacked-bodybuilding-throwback-8848019/",
  image:
   "https://indianexpress.com/article/lifestyle/fitness/ranveer-singh-trainer-lloyd-stevens-look-jacked-bodybuilding-throwback-8848019/",
  heading:
   "With a throwback picture, trainer reveals how Ranveer Singh managed to look ‘jacked’",
  subheading:
   "Everyone these days is looking for a quick fix. In fact, I can confidently tell you, the faster the results the more likely the method you used will unsustainable in the long-term, shared Lloyd Stevens, fitness trainer and transformation specialist",
  content:
   "Bollywood celebrities are at the peak of their fitness routine and have always managed to create awe around their transformation with the help of celebrity trainers. As such, when Lloyd Stevens, fitness trainer and transformation specialist, shared a throwback picture of actor Ranveer Singh from his 2016-Befikre days, we couldn’t help but go down the memory lane with Stevens, who opened up about how Singh managed to surprise everyone with his chiselled physique. “Was tidying up my camera roll and came across this picture of Ranveer Singh looking jacked. This was the prep for Befikre and we were in Paris/France at that time,” he shared. What was the secret? “Kept it simple, pure consistency and hard work … that’s it,” added Stevens.",
  date: "July 19, 2023",
 },
 {
  id: 75,
  genre: "Fitness",
  ref: "https://indianexpress.com/article/lifestyle/fitness/gautami-kapoor-dances-stress-free-can-dancing-help-8667172/",
  image:
   "https://indianexpress.com/article/lifestyle/fitness/gautami-kapoor-dances-stress-free-can-dancing-help-8667172/",
  heading: "Gautami Kapoor dances to go ‘stress-free’; can it really help?",
  subheading:
   "If the infectious smile on her face in all her videos of dancing is to be believed, Kapoor does really seem free of stress",
  content:
   "Who can confess to never putting on your headphones and dancing like you had not a single care in the world? Well, Gautami Kapoor definitely can’t. The 48-year-old routinely puts videos of herself dancing with her daughter, her trainer, the people from her dance class, well, everyone. She recently posted a video dancing barefoot in a dance class, along with her trainer and others in the class. She hashtagged the picture #stressfree. If the infectious smile on her face in all her videos of dancing are to be believed, Kapoor does really seem free of stress. Kapoor’s stress-free wide smiles intrigued us so we talked to some experts to determine whether dancing really can relieve stress and make your body feel lighter.",
  date: "August 3, 2023",
 },
 {
  id: 76,
  genre: "Fitness",
  ref: "https://www.hellomagazine.com/healthandbeauty/health-and-fitness/20230116161859/best-ice-baths-plunge-pools/",
  image:
   "https://www.hellomagazine.com/healthandbeauty/health-and-fitness/20230116161859/best-ice-baths-plunge-pools/",
  heading:
   "Best ice baths 2023: How Joe Wicks, Nicole Scherzinger & more celebrities swear by at-home plunge pools",
  subheading:
   "Cold showers and ice baths, also known as cold-water immersion therapy, soared in popularity last year, and continues to be the health trend to follow. ",
  content:
   "Cold-water immersion is, quite simply is deliberately exposing ourselves to the cold, whether it is a blast of cold water after a shower, after a sauna or steam session, ice bath after exercise, even walking in the fresh air, and even dunking our face in cold water like Bella Hadid. It has numerous health benefits, from boosting metabolism, mental health benefits, can close pores and awaken the skin for a glowing complexion, while also aiding the immune system. Wim Hoff’s series Freeze The Fear showed the benefits of cold-water immersion, and since we have seen other celebrities, including Spice Girls Mel C fitness guru Joe Wicks, Madonna, Chris Hemsworth, Kendall Jenner, and presenter Emma Willis also follow suit. But you don’t have to venture to your local gym, or the extreme cold continents, to practice this, as there are a number of DIY ice baths to shop online. It’s important to note hot and cold water therapy is not for everyone, and should be taken slowly and steadily, with calm breaths so not to shock the body. It has been recommended to ease the duration of time in a plunge pool, from one minute, and up to 15 minutes for some experts, but be cautious. ",
  date: "17 JAN 2023,",
 },
 {
  id: 77,
  genre: "Fitness",
  ref: "https://www.news18.com/lifestyle/ways-to-protect-your-children-from-dengue-fever-8415637.html",
  image:
   "https://www.news18.com/lifestyle/ways-to-protect-your-children-from-dengue-fever-8415637.html",
  heading: "Ways To Protect Your Children From Dengue Fever",
  subheading:
   "Dengue occurs due to the bite of an Aedes mosquito and shows symptoms like headache, muscle pain, joint pains, nausea etc.",
  content:
   "ith the arrival of the monsoon, the vector-borne disease Dengue fever is on the rise in Delhi. According to PTI, a total of 163 Dengue cases have been registered till mid-July. Children are more prone to Dengue, as they are exposed to outdoor activities. They are likely to be at schools, or playing on streets. With heavy rainfall, water tends to collect in containers, dwellings and drains and become breeding grounds for mosquitoes. Dengue occurs due to the bite of an Aedes mosquito and shows symptoms like headache, muscle pain, joint pains, nausea etc. Parents must take care of their children in these crucial times and must take measures to control the mosquito-spread. Here are things that parents must keep in mind to prevent children from Dengue fever.",
  date: "July 28, 2023",
 },
 {
  id: 78,
  genre: "Fitness",
  ref: "https://www.news18.com/lifestyle/long-term-smokers-displayed-symptoms-not-meeting-smoking-related-disease-criteria-shows-study-8512201.html",
  image:
   "https://www.news18.com/lifestyle/long-term-smokers-displayed-symptoms-not-meeting-smoking-related-disease-criteria-shows-study-8512201.html",
  heading:
   "Long-term Smokers Displayed Symptoms Not Meeting Smoking-related Disease Criteria Shows Study",
  subheading:
   "The study included participants who had smoked one pack of cigarettes a day for 20 years or more.",
  content:
   "Long-term smokers showed symptoms not fitting any of the existing tobacco-related disease criteria, in a study conducted in the US. 1379 people aged 40 to 80 years were recruited. Half of them showed persistently high levels of respiratory symptoms such as shortness of breath, daily cough and phlegm, and decreased ability to exercise. However, they performed well in the breathing tests used to diagnose chronic obstructive pulmonary disease (COPD), researchers at the University of California-San Francisco (UCSF), US, found. COPD, known to be associated with long-term tobacco exposure, is evaluated through spirometry. It tests lung function by measuring how quickly and effectively a person fills and empties their lungs at maximum effort. “We found that many people who have a lot of primary tobacco exposure have the same symptoms as people who have COPD, but can’t be diagnosed with COPD,” said William McKleroy, first author of the study published in the Journal of the American Medical Association (JAMA). This, he said, was because they performed normally in spirometry.",
  date: "AUGUST 05, 2023",
 },
 {
  id: 79,
  genre: "Fitness",
  ref: "https://www.news18.com/lifestyle/study-shows-short-bursts-of-intense-exercise-linked-to-reduced-risk-of-cancer-8462797.html",
  image:
   "https://www.news18.com/lifestyle/study-shows-short-bursts-of-intense-exercise-linked-to-reduced-risk-of-cancer-8462797.html",
  heading:
   "Study Shows Short Bursts Of Intense Exercise Linked To Reduced Risk Of Cancer",
  subheading:
   "It is not always necessary to get hours of exercise on all seven days of the week, smaller durations of effective workout sessions can do wonders",
  content:
   "ust 4-5 minutes of vigorous activity that makes people huff and puff during daily tasks is associated with a lower risk of some cancers by up to 32 per cent, according to a study. The research, published in the journal JAMA Oncology, used data from wearable devices to track the daily activity of over 22,000 ‘non-exercisers’. Researchers at the University of Sydney in Australia then followed the group’s clinical health records for close to seven years to monitor for cancer. They found that four to five minutes of vigorous intermittent lifestyle physical activity or ‘VILPA’ was associated with a substantially lower cancer risk compared to those who undertook no VILPA. Short bursts of activity — around one minute each — includes activities like vigorous housework, carrying heavy shopping around the grocery store, bursts of power walking or playing high-energy games with the kids. Adults who don’t exercise are at increased risk of developing certain cancers like breast, endometrial or colon, but until recently the impact of less structured forms of vigorous physical activity was unable to be measured, the researchers said.",
  date: "July 30, 2023",
 },
 {
  id: 80,
  genre: "Fitness",
  ref: "https://www.news18.com/lifestyle/fitness-icon-milind-soman-sets-new-standards-with-his-kettlebell-workout-watch-now-8433187.html",
  image:
   "https://www.news18.com/lifestyle/fitness-icon-milind-soman-sets-new-standards-with-his-kettlebell-workout-watch-now-8433187.html",
  heading:
   "Fitness Icon Milind Soman Sets New Standards With His Kettlebell Workout, Watch Now",
  subheading:
   "Milind Soman was recently seen swinging Kettlebell effortlessly from one hand to the other.",
  content:
   'ilind Soman has always remained a hardcore fitness enthusiast and never refrains himself from trying out new techniques and regimes. His Instagram feed has an abundance of workout reels that will surely motivate anyone to shed your laziness and take on the fitness journey. Recently, the actor posted a reel showcasing his new routine with the use of a kettlebell. Netizens are in awe to realise how easy and swift he made this strenuous exercise look. In his recent Instagram post, Milind Soman effortlessly swings the Kettlebell from one hand to the other in a way that would benefit his hand as well as leg muscles. “Something about kettlebells makes them so much fun! And fun makes it so much easier to fight lazy!!!! Going to develop some more complex flows, this one is 10 kg, and it’s perfect for me to start with," read his caption.',
  date: "July 27, 2023",
 },
 {
  id: 81,
  genre: "Food",
  ref: "https://indianexpress.com/article/lifestyle/food-wine/monsoon-recipe-batata-bhajiya-snacks-8846280/",
  image:
   "https://indianexpress.com/article/lifestyle/food-wine/monsoon-recipe-batata-bhajiya-snacks-8846280/",
  heading:
   "Monsoon munchies: Try this simple recipe to satiate your cravings this season",
  subheading:
   "Recently, Chef Sanjeev Kapoor shared a simple and easy-to-make recipe of Batata Bhajiya.",
  content:
   "Monsoons are underway, bringing much-needed relief from the sweltering heat and high temperatures. It is also the perfect weather to gorge on some snacks while enjoying the rain, making the experience even better. If you’re wondering what to munch on in this rainy weather, we have got you covered. Recently, Chef Sanjeev Kapoor shared a simple and easy-to-make recipe of Batata Bhajiya.Also known as bataka na bhajiya or bataka na pita na bhajiya in Gujarat, this snack is close to every Gujarati’s heart. Before french fries came into the picture, this was the OG monsoon party snack! We know what you’re thinking–this fried food is not healthy. Well, you’re not wrong, but we are allowed to cheat on our diets once in a while.",
  date: "",
 },
 {
  id: 82,
  genre: "Food",
  ref: "https://indianexpress.com/article/lifestyle/food-wine/chicken-65-ranked-among-worlds-top-10-fried-chicken-dishes-taste-atlas-list-8875925/",
  image: "https://images.indianexpress.com/2023/08/chicken-65.jpg?w=640",
  heading:
   "Chicken 65 ranked among world’s top 10 fried chicken dishes, check out the list",
  subheading:
   "India's very own Chicken 65 made the country proud by ranking 10th on the list.",
  content:
   "Fried chicken is one of the most popular dishes among non-vegetarians. Who does not savour the juicy tender bites coated with a crispy crust? What’s even better is that every region has its own way of preparing this indulgence. Recognising the popularity of fried chicken across the globe, recently Taste Atlas, a popular food guide, released a list of the “10 Best Fried Chicken Dishes” in the world. Any guesses as to what bagged the top spot on this list? It is none other than Indonesia’s decadent ayam goreng, which scored 4.6 stars out of 5. According to Taste Atlas, this Indonesian-style fried chicken consists of chicken cuts, preferably bone-in pieces such as thighs and drumsticks, which are marinated in spices, then shortly braised before being fried until golden and crispy. “The marinade is typically based on traditional spices such as lemongrass, galangal, turmeric, and tamarind, but since the dish is enjoyed throughout the country, it comes in numerous regional variations that may include other spices and marinades, or various additions such as grated coconut or rice flour crumbs,” it said.",
  date: "August 4, 2023",
 },
 {
  id: 83,
  genre: "Food",
  ref: "https://indianexpress.com/article/lifestyle/food-wine/australian-chef-gary-mehigan-madurai-bun-parotta-8875851/",
  image:
   "https://indianexpress.com/article/lifestyle/food-wine/australian-chef-gary-mehigan-madurai-bun-parotta-8875851/",
  heading:
   "Australian Chef Gary Mehigan shares his love for Madurai’s bun parotta",
  subheading:
   '"My goodness it’s delicious…..and I want one now!" the chef wrote.',
  content:
   "A delectable South Indian street food, bun parotta is loved by many for its delightful fusion of flaky parotta and soft bun. It is usually served with a spicy curry or flavourful chutney and offers a unique blend of textures and flavours that will leave you wanting more. This scrumptious delicacy has now also found a fan in Australian Chef Gary Mehigan, who took to social media to share a video of Madurai street vendors skillfully preparing bun parotta. Calling the duo’s method of preparing the dish “dream skills”, he wrote, “I may have posted this before but every time I watch it…wow! This was in Madurai in Tamil Nadu at a shop making and selling bun parotta.” “You tease this super light and crisp bread apart and dip it into a number of different spicy gravies. My goodness it’s delicious…and I want one now!” the chef added.",
  date: "August 4, 2023",
 },
 {
  id: 84,
  genre: "Food",
  ref: "https://indianexpress.com/article/lifestyle/food-wine/cleaning-greasy-utensils-properly-8655729/",
  image:
   "https://indianexpress.com/article/lifestyle/food-wine/cleaning-greasy-utensils-properly-8655729/",
  heading: "How to wash your greasy utensils properly?",
  subheading:
   "Getting the grease off of utensils is like raging a war against them with your dish scrub as your chosen weapon",
  content:
   "Who hasn’t spent half their afternoon scrubbing the life out of their kadhai after hosting a brunch with their friends? Getting the grease off of utensils is like raging war against them with your dish scrub as your chosen weapon. And as in any war, it’s important to have a good strategy. While The Great Liquid Soap and The Sidekick Scrub are important players, they’re no warrior Viking who will change the whole game, and who better to talk to than the actual Vikings of this war: chefs? According to chef Vaibhav Bhargava at Cho, Vietnamese Kitchen and Bar, cleaning kitchen utensils properly helps prevent the growth and spread of harmful bacteria, germs, and other pathogens. “This is especially important in food preparation areas where cross-contamination can occur easily. By regularly cleaning and sanitising utensils, you minimise the risk of foodborne illnesses,” he added. Chef Nikhil Rastogi at UNOX told Indianexpress.com that properly cleaning utensils can also preserve their longevity as “grease accumulation over time can lead to a layer of grime on the utensils, compromising their appearance and potentially affecting the taste of the food prepared with them.”",
  date: "July 31, 2023",
 },
 {
  id: 85,
  genre: "Food",
  ref: "https://indianexpress.com/article/lifestyle/food-wine/subway-free-sandwiches-lifetime-unique-condition-name-change-8867431/",
  image:
   "https://indianexpress.com/article/lifestyle/food-wine/subway-free-sandwiches-lifetime-unique-condition-name-change-8867431/",
  heading:
   "Subway will give you free sandwiches for life, but on this unique condition",
  subheading:
   "The official contest rules state that the lifestyle supply of subs will come in the form of a one-time payment of $50,000 in Subway gift cards",
  content:
   "Subway’s fresh and customisable sandwiches, offering a diverse selection of toppings, sauces, and bread choices, have garnered a dedicated following among food enthusiasts. It remains a popular go-to option for those seeking a filling and delightful dining experience. And now, the exciting news is that you have the chance to enjoy a lifetime of free Subway sandwiches! The fast-food franchise is offering its customers a lifetime of free sandwiches. But there’s a catch! To earn this tempting offer, you need to legally change your first name to ‘Subway’. The company will then pick a winner and even pay the legal fees of the person who wants to adopt this new and unique identity. According to the food chain, interested participants can apply for the same between August 1 and August 4. The winner will be chosen by random drawing on August 7. “Between August 1 and August 4, Subway superfans and sandwich lovers can visit SubwayNameChange.com, and enter to win free Subway Deli Heroes for life if they commit to legally change their name. Subway will select one lucky winner to earn free sandwiches and assume an iconic new identity. Subway will provide the winner with money to reimburse them for legal and processing costs for the name change, making it easy and effortless to become Subway and enjoy a lifetime of delicious subs,” Subway said in a statement.",
  date: "July 30, 2023",
 },
 {
  id: 86,
  genre: "Food",
  ref: "https://indianexpress.com/article/lifestyle/food-wine/r-madhavan-favourite-food-kolhapuri-misal-kat-recipe-8859131/",
  image:
   "https://indianexpress.com/article/lifestyle/food-wine/r-madhavan-favourite-food-kolhapuri-misal-kat-recipe-8859131/",
  heading:
   "R Madhavan shares his favourite food: ‘I sneak into Kolhapur only to have that’",
  subheading:
   'R Madhavan expressed, "And once you have eaten it, you can feel the stinging around your lips. But the taste of it is so lovely"',
  content:
   "Everyone has their favourite foods which make them salivate. It is no different for actor R Madhavan, who recently shared his favourite food which happens to be a Maharashtrian special — but with a twist. “Kolhapuri Misal which has a kat. That kat can’t be made anywhere else in the world. Not in Mumbai or Pune. Jo Kolhapur ka kat hota hai woh kat hota hai (That Kolhapuri Kat is the original). And once you have eaten it, you can feel the stinging around your lips. But the taste of it is so lovely,” Madhavan expressed in a chat with the food blogging platform Yum Yum Kitchen on Instagram. In the snippet shared by the platform, he added, “I sneak into Kolhapur only to have that. Why am I salivating right now as I speak. That Maharashtrian food is my favourite. Misal Pav.” Tarun Shetty, corporate chef, SMAAASH said misal is garnished with kat, a very hot concoction with a strong onion, garlic, and Maharashtrian Kala or Goda Masala flavour. Stressing that Kolhapuri misal is a famous Maharashtrian street food that can be termed as healthy cause it has sprouts (matki) which are rich in fibre and protein, Shetty expressed that the masala is what lends it a unique taste. “Misal is specially made using dried coconut and poppy seeds which makes the misal tastier. This misal can be relished with some nice toasted buttered pav,” said Shetty.",
  date: "July 26, 2023",
 },
 {
  id: 87,
  genre: "Food",
  ref: "https://indianexpress.com/article/lifestyle/food-wine/sudha-murty-love-passion-food-choices-pure-vegetarian-not-even-egg-garlic-kunal-vijjayakar-8856934/",
  image:
   "https://indianexpress.com/article/lifestyle/food-wine/sudha-murty-love-passion-food-choices-pure-vegetarian-not-even-egg-garlic-kunal-vijjayakar-8856934/",
  heading:
   "Sudha Murty opens up about her food choices at home, during travels: ‘I am a pure vegetarian. Not even egg, garlic’",
  subheading:
   '"Narayana Murthy does not eat sweets. I love sweets. He is not a foodie at all," said Sudha Murty in a conversation with food critic Kunal Vijjayakar',
  content:
   "It is well-known that Sudha Murty is a renowned teacher and philanthropist, but did you know she is a foodie at heart? Speaking about her love for food, Sudha, 72, feels that India is not a country but a “continent”, owing to its diversity. “India is not a country. India is a continent. Food, taste, dresses, and the way of speaking change every 150 km. For instance, compared to Karnataka, the taste in Hubli differs. Tastes in Mysuru, Bengaluru, Kudremukh, Coorg, etc are so different from each other. In India, we have so many varieties, so many methods, so many combinations,” said Sudha, in a conversation with food critic Kunal Vijjayakar as part of his food show, Khaane Mein Kya Hai? The duo was seen enjoying a lavish spread of Mysuru-cuisine including peanut Koshambir, tender cashew nut and tondli sabzi, raita and South Indian pulao, sweet poli with coconut and jaggery, sabudana and sevai kheer, and akki flour or rice flour roti. Re-affirming that she loves to eat, Sudha admitted that she is “not a good cook”. However, she can do basic cooking. “I am not a good cook. It’s not that I don’t like cooking but I don’t know how to cook,” said Sudha, who is married to entrepreneur and founder of Infosys NR Narayana Murthy.",
  date: "July 29, 2023",
 },
 {
  id: 88,
  genre: "Food",
  ref: "https://indianexpress.com/article/lifestyle/food-wine/delhi-cafe-cocopots-barbie-movie-pink-burger-desserts-8854126/",
  image: "https://images.indianexpress.com/2023/07/pink-menu.jpg?w=640",
  heading:
   "Barbie fever! Delhi cafe introduces pink-themed shoe dessert and burger meal",
  subheading:
   "Adding to the list of Burger King Brazil and Grill'd Australia, a cafe in Delhi has embraced the Barbie trend and launched its own pink-themed meals",
  content:
   "The Barbie fever, ignited by the much-anticipated release of the Greta Gerwig film Barbie, has taken the world by storm. The trend of Barbiecore fashion has dominated the style scene for a whole year, and various brands, including food chains, have jumped on the bandwagon by introducing pink-themed meals to pay homage to the movie. This pink frenzy shows no signs of slowing down, as the captivating hue continues to be splashed everywhere. Adding to the list of Burger King Brazil and Grill’d Australia, a cafe in Delhi has embraced the Barbie trend and launched its own pink-themed meals. Cocopots, owned by chef Ritika from New York City, has amazed netizens with its eye-catching pink menu items, such as a pink burger, a bubblegum milkshake, and fries with pink sauce. “It’s a Barbie world, and we’re just dining in it! Get ready to indulge in a magical meal inspired by the fabulous Barbie movie at @cocopotsbyritika,” announced the cafe’s official Instagram account, located in Delhi’s Kamala Nagar.",
  date: "July 22, 2023",
 },
 {
  id: 89,
  genre: "Food",
  ref: "https://indianexpress.com/article/lifestyle/food-wine/navara-rice-ayurveda-benefits-8767079/",
  image:
   "https://indianexpress.com/article/lifestyle/food-wine/navara-rice-ayurveda-benefits-8767079/",
  heading:
   "This rice variety is considered ‘one of the best grains in Ayurveda’; here’s why",
  subheading:
   "Ayurveda recommends daily consumption of Njavara rice as it is considered to be an appetizer, carminative and energy booster, according to Dr Swathi Ramamurthy, Head R&D, Herby Angel.",
  content:
   "Rice has been an important part of Indian cuisine for centuries. There seem to have been around hundreds of varieties of rice. While you may be aware of white and brown rice, there also exists a variety called Navara or Njavara rice. Talking about the rice variety, Dr Swathi Ramamurthy, head (research & development) at Herby Angel, said, “Njavara rice is a traditional variety of rice whose origin can be traced back to Kerala. The crop yields harvest within 60 days of sowing. Hence, it’s also known as Shastika Shali i.e., rice that grows in 60 days. It is unpolished rice, which is reddish brown in colour, and has been used extensively in Ayurveda, not only as food but also as medicine. It is considered as one of the traditional superfoods owing to its high nutritive values.” Dr Rekha Radhamony, an Ayurveda doctor, highlighted the many benefits of Njavara rice. “Here is a drink that I give to my in-house patients every day at @adirekhaayurveda as a post-treatment drink for instantly improving energy levels and nourishment!” she wrote on Instagram.",
  date: "July 20, 2023",
 },
 {
  id: 90,
  genre: "Food",
  ref: "https://indianexpress.com/article/lifestyle/food-wine/add-green-beans-to-your-diet-to-make-it-wholesome-recipe-inside-8830726/",
  image:
   "https://indianexpress.com/article/lifestyle/food-wine/add-green-beans-to-your-diet-to-make-it-wholesome-recipe-inside-8830726/",
  heading: "Make your diet wholesome with nutritious green beans",
  subheading:
   "When stir-fried beans are consumed, they are low in calories and high in fibre, making them a filling and satisfying addition to meals, said Dr Nirupama Rao, Rejua Energy Centre, Mumbai",
  content:
   "Sometimes, we crave a nourishing meal that not only meets our nutritional needs but also leaves us feeling satisfied and content. That’s where green beans come in. Not only are they a quick and easy addition to your diet, but they can also be transformed into a delightful stir-fried vegetable dish that will quickly become a favourite on your dining table. Nutritionist Shweta Anarase also believes that beans make for a power-packed and wholesome addition to your diet. “Not going to lie, I make these garlicky beans at least three times a week. I pair it with my main dishes and the entire meal becomes so wholesome and nutritious,” said Anarase. She also said that green beans are highly anti-inflammatory and are rich in vitamins A, C, and K. “They are a good source of folic acid. It also packed with fibre which makes it excellent for your gut bugs!” said Anarase. Agreeing with her, Dr Nirupama Rao, Rejua Energy Centre, Mumbai said that it benefits the heart and digestive health, owing to its vitamins, minerals, and fibre content.",
  date: "July 19, 2023",
 },
 {
  id: 91,
  genre: "Food",
  ref: "https://indianexpress.com/article/lifestyle/food-wine/burger-king-brazil-barbie-inspired-burger-shake-8833186/",
  image:
   "https://indianexpress.com/article/lifestyle/food-wine/burger-king-brazil-barbie-inspired-burger-shake-8833186/",
  heading:
   "Burger King Brazil launches pink Barbie-inspired burger and shake to celebrate movie release",
  subheading:
   '"Barbies from all over Brazil, tune in to this novelty that came straight from Barbie LandTM? to our kingdom!" the eatery wrote',
  content:
   "The anticipation surrounding Greta Gerwig’s highly anticipated film Barbie, set to hit theatres later this month, is absolutely incredible! Through product placements and social media engagement, the makers have successfully immersed us in the vibrant world of Barbie. With a Barbie-themed Airbnb, the emergence of Barbiecore fashion, and an impressive array of over 100 brand partnerships, they have infused our lives with a pink hue in anticipation of the star-studded Barbie film, featuring Margot Robbie and Ryan Gosling. Joining the bandwagon is Burger King Brazil which recently unveiled its limited edition Barbie-themed items on the menu. In celebrations of the Barbie movie, the eatery launched a special pink burger and a pink shake. “Barbies from all over Brazil, tune in to this novelty that came straight from Barbie LandTM? to our kingdom!” Burger King Brazil wrote on Instagram. The pink burger comes with “delicious smoky pink sauce, Ken’s potato which in this special shell package”, it added. The Barbie shake, on the other hand, comes with a pink doughnut. “No, they are not plastic… they are real food and AWESOME!”",
  date: "July 14, 2023",
 },
 {
  id: 92,
  genre: "Food",
  ref: "https://indianexpress.com/article/lifestyle/food-wine/chef-ranveer-brar-world-kebab-day-history-types-8835824/",
  image: "https://images.indianexpress.com/2023/07/ranveer-brar.jpg?w=640",
  heading:
   "Chef Ranveer Brar traces the history of kebabs: ‘A marriage of flavours, spices, and techniques’",
  subheading:
   "World Kebab Day: According to the chef, kebabs are a gift from Turkey and Russia and made their way to India via the Silk Route",
  content:
   "Kebabs, the sizzling skewers of marinated meat, have captured the hearts and palates of food lovers around the globe. Every year, on World Kebab Day, enthusiasts from diverse cultures come together to celebrate this beloved dish. This year, the day is being observed on July 14. Celebrating the same, Chef Ranveer Brar took to Instagram to share the rich history of kebabs. “As a true blue Lucknowite and a chef, a familiar query or point of conversation that I inevitably attract is about Biryanis and Kebabs. Given, my heart will always beat a little extra for the Lucknowi Biryani, but let’s save that spicy conversation for another day. Let’s talk about Kebabs today,” he started out saying. According to the chef, kebabs are a gift from Turkey and Russia and made their way to India via the Silk Route. “What happened next was what we do best. A marriage of flavours, spices and techniques to make this dish a ubiquitous part of our cuisine,” he added. He further shared that mentions of kebab-style cooking of meat go as far back as the Mahabharata era. “Where the pre-Mughal kebab was more about marination and open grill cooking, basically more rustic in nature, the Mughal culinarians evolved it into a delicacy, enhancing them with spices, dry fruits and cooking techniques.”",
  date: "July 14, 2023",
 },
 {
  id: 93,
  genre: "Food",
  ref: "https://indianexpress.com/article/lifestyle/food-wine/google-doodle-celebrates-indias-beloved-street-food-pani-puri-8832640/",
  image:
   "https://indianexpress.com/article/lifestyle/food-wine/google-doodle-celebrates-indias-beloved-street-food-pani-puri-8832640/",
  heading: "Google Doodle celebrates India’s beloved street food pani puri",
  subheading:
   '"The interactive game Doodle celebrates pani puri — a popular South Asian street food made of a crispy shell stuffed with potatoes, chickpeas, spices, or chilis and flavoured waters"',
  content:
   "Indians have an unparalleled love for their diverse and delectable street foods. Among the myriad choices, one snack is a favourite among all age groups: pani puri. Known by different names like gol gappe, phuchka, and gupchup, it is a beloved street food that encapsulates the essence of Indian culinary delights. It consists of crispy hollow puris filled with tangy and spicy water and a delightful medley of mashed potatoes, chickpeas, and chutneys.Celebrating this flavourful snack was Google’s recent Doodle which was an interactive game for all pani puri lovers. “Today’s interactive game Doodle celebrates pani puri — a popular South Asian street food made of a crispy shell stuffed with potatoes, chickpeas, spices, or chilis and flavoured waters,” it wrote. According to Google, there’s a variety of panipuri for everyone’s taste buds. So much so that on July 12, 2015, a restaurant called Indori Zayka and Dainik Bhaskar in Indore, Madhya Pradesh, achieved the World Record for serving the most flavours of pani puri by offering 51 options! The event was held under the guidance of Masterchef Neha Shah.",
  date: "July 13, 2023",
 },
 {
  id: 94,
  genre: "Food",
  ref: "https://indianexpress.com/article/lifestyle/food-wine/as-price-hike-hits-tomatoes-hard-here-are-some-expert-approved-alternatives-to-count-on-8826876/",
  image:
   "https://images.indianexpress.com/2023/07/tomato_200_express-photo.jpeg?w=640",
  heading: "As tomato prices remain high, experts suggest these alternatives",
  subheading:
   "Tarun Shetty, corporate chef, SMAAASH enlisted peeled and canned tomatoes as one of the options",
  content:
   "Food without gravy is unthinkable especially in the Indian kitchen and for that one needs tomatoes. But with the price surge hitting tomatoes hard in many markets including states like Maharashtra and Tamil Nadu, many are left wondering if there are some easily found alternatives that can help for the time being. As such, we decided to seek expert opinions on what could be some foods that can replace the taste and flavour of tomatoes to help you in the kitchen. Tarun Shetty, corporate chef, SMAAASH enlisted peeled and canned tomatoes as one of the options. “Tomatoes that have been collected when ripe and heated to seal them in a can are called canned tomatoes. The skin is occasionally torn off and other times it is not. These tomatoes can be utilised in a variety of ways, whether they are whole, chopped, or crushed,” said Shetty. Another suggestion was to substitute it with tamarind for its tangy and sweet flavour. Registered dietitian Garima Goyal concurred and shared that the tangy flavour is way more pronounced than tomatoes.",
  date: "July 13, 2023",
 },
 {
  id: 95,
  genre: "Food",
  ref: "https://indianexpress.com/article/lifestyle/food-wine/what-is-the-kew-variety-of-pineapples-that-tripura-cm-manik-saha-sent-to-bangladesh-pm-sheikh-hasina-8825488/",
  image:
   "https://images.indianexpress.com/2023/07/kew-pineapple_200_icar.gov_.in_.jpg?w=640",
  heading:
   "What is the ‘kew’ variety of pineapples that Tripura CM Manik Saha sent to Bangladesh PM Sheikh Hasina?",
  subheading:
   "The flesh is light yellow, almost fibreless, and very juicy, said registered dietitian Garima Goyal",
  content:
   "In a goodwill gesture, Tripura Chief Minister Manik Saha sent 980 kgs of a special variety of pineapples named kew to Bangladesh Prime Minister Sheikh Hasina recently. Notably, Hasina sent 500 kg of mangoes to Saha. P B Jamatia, director, horticulture department was responsible for handing over 100 boxes of the “specially plucked kew variety of pineapples” at the Assistant High Commission of India, Chittagong in Dhaka, reported PTI. “The chief minister, as part of a goodwill gesture, sent 980 kg of pineapples to Prime Minister Hasina. We are honoured to send the gift,” Jamatia told PTI. What is special about this variety? Jamatia added that the variety is known for its unique taste, smell, and size. Kew variety is a late-maturing pineapple variety and is the leading commercial variety in India, said registered dietitian Garima Goyal who added that it is valued particularly for its canning quality or can be preserved in a can for longer. “Fruit weighs 2-3 kgs, and is oblong in shape. It slightly tapers towards the crown. Eyes are broad and shallow making the fruit more suitable for canning. The fruit is yellow when fully ripe. The flesh is light yellow, almost fibreless, and very juicy with 0.6-1.2 per cent acid, and its TSS content (sugar content measures which include carbohydrates, organic acids, proteins, fats and minerals of the fruit) varies from 12-16 brix,” said Goyal.",
  date: "July 11, 2023 ",
 },
 {
  id: 96,
  genre: "Food",
  ref: "https://indianexpress.com/article/lifestyle/food-wine/global-diet-challenges-advice-limit-high-fat-dairy-foods-8807058/",
  image: "https://images.indianexpress.com/2023/07/dairy-1.jpg?w=640",
  heading: "Global diet study challenges advice to limit high-fat dairy foods",
  subheading:
   "The research, published on Friday in the European Heart Journal, found that diets emphasising fruit, vegetables, dairy (mainly whole-fat), nuts, legumes and fish were linked with a lower risk of cardiovascular disease (CVD) and premature death in all world regions.",
  content:
   "Up to two servings a day of dairy, mainly whole-fat, can be included in a healthy diet as it may protect against high blood pressure and metabolic disorders, according to a study using data from 80 countries. The research, published on Friday in the European Heart Journal, found that diets emphasising fruit, vegetables, dairy (mainly whole-fat), nuts, legumes and fish were linked with a lower risk of cardiovascular disease (CVD) and premature death in all world regions. The addition of unprocessed red meat or whole grains had little impact on outcomes, the researchers said. Low-fat foods have taken centre stage with the public, food industry and policymakers, with nutrition labels focused on reducing fat and saturated fat, they said. “Our findings suggest that the priority should be increasing protective foods such as nuts (often avoided as too energy dense), fish and dairy, rather than restricting dairy (especially whole-fat) to very low amounts,” said study author Andrew Mente from McMaster University, Canada. “Our results show that up to two servings a day of dairy, mainly whole-fat, can be included in a healthy diet. This is in keeping with modern nutrition science showing that dairy, particularly whole-fat, may protect against high blood pressure and metabolic syndrome,” Mente said.",
  date: " July 8, 2023 ",
 },
 {
  id: 97,
  genre: "Food",
  ref: "https://indianexpress.com/article/lifestyle/food-wine/world-chocolate-day-eggless-chocolate-mousse-recipe-8803364/",
  image:
   "https://images.indianexpress.com/2023/07/Eggless-Chocolate-Mousse.jpg?w=640",
  heading:
   "World Chocolate Day 2023: Whip up this delicious eggless chocolate mousse today",
  subheading: "Bonus: It contains just four ingredients!",
  content:
   "Whether it’s the velvety smoothness of a milk chocolate bar, the intense decadence of a dark chocolate truffle, or the delightful combination of flavours in a chocolate mousse, people simply can’t get enough of chocolates. And, why not? After all, the pure bliss that chocolate brings is undeniable. Capturing the same love and fascination for chocolates is World Chocolate Day, which is an annual celebration of chocolate, occurring globally on July 7. Many believe that the day commemorates the anniversary of the introduction of chocolate to Europe in 1550. The observance of World Chocolate Day, however, dates back to 2009. This day is a perfect opportunity to satisfy your chocolate cravings and share the joy of the same with your family and friends. As such, how about whipping up some scrumptious chocolate mousse today? If you are not in the mood for some eggs in your dessert, you can still indulge in this mousse with an eggless version that’s equally decadent. Prajit P Kumar, Jr Sous Chef Bakery, The Ashok recently shared one such recipe with us and we couldn’t help but bring it to you. Bonus: It contains just four ingredients!",
  date: " July 7, 2023",
 },
 {
  id: 98,
  genre: "Food",
  ref: "https://indianexpress.com/article/lifestyle/food-wine/butter-garlic-naan-second-best-flatbread-complete-list-taste-atlas-8802938/",
  image:
   "https://images.indianexpress.com/2023/07/butter-garlic-naan-1200.jpg?w=640",
  heading: "Butter garlic naan named second best flatbread in the world",
  subheading:
   "It is recommended to serve butter garlic naan with a variety of Indian dishes such as curries, butter chicken, dal makhani, malai kofta, or shahi paneer.",
  content:
   "atbreads, the thin and versatile breads enjoyed worldwide, are an essential part of many cuisines. Whether it’s the chapati in India, the pita in the Middle East, or the tortilla in Mexico, they are cherished for their convenience and adaptability. If you are someone who can’t get enough of flatbreads, you must check out the latest rankings of the world’s best flatbreads, released by Taste Atlas, an experiential travel online guide for traditional food. “Flatbreads have been enjoyed across different cultures for centuries, with each region adding its own distinct flavours and techniques to this culinary creation. While determining the absolute best flatbread would be an impossible task for anyone, we’ve turned to mathematics and counted your votes – as we always do,” it wrote. Roti canai from Malaysia, a traditional pan-fried flatbread made with flour, water, eggs, and fat, has been ranked the best flatbread. “The dough for roti canai is repeatedly folded, so the final product has a layered texture, a soft interior, and a crispy outer layer. The most common fat used in roti canai is ghee, the traditional Indian clarified butter. It is believed that the dish originated in India when the Indian labourers who migrated to Malaysia brought the recipe and the tradition of preparing this crispy pastry to the foreign country,” Taste Atlas said.",
  date: "July 7, 2023",
 },
 {
  id: 99,
  genre: "Food",
  ref: "https://indianexpress.com/article/lifestyle/food-wine/monsoon-vegetable-kantoli-spiny-gourd-8690144/",
  image:
   "https://images.indianexpress.com/2023/06/kantoli_200_wikimedia-commons.jpg?w=640",
  heading:
   "Discover the health benefits of Kantoli, a little-known monsoon vegetable",
  subheading:
   "Being high in fibre, the vegetable aids in digestion and prevents constipation, said Dr Ushakiran Sisodia, registered dietician and clinical nutritionist, Nanavati Max Super Speciality Hospital, Mumbai",
  content:
   "pting for seasonal vegetables is an excellent choice for maintaining a consistent nutritional intake while staying budget-friendly. In fact, the best part about including seasonal fruits and vegetables in your diet is their inherent ability to fight seasonal illnesses and flu. As such, it is time to brief you about a little-known monsoon vegetable – Kantoli. Available in monsoon, Kantoli is a spiky vegetable resembling lychee in appearance. Its scientific name is Momordica dioica, commonly known as spiny gourd or spine gourd and also as bristly balsma pear, prickly carolaho, and teasle gourd. Kantoli, a species of flowering plants in the gourd family, is used as a vegetable in all regions of India and some parts of South Asia. It falls under the category of medicinal foods, mentioned nutritionist Leema Mahajan in a post on Instagram. It helps to keep the infections and seasonal colds and flu away. It is not only enjoyed for its taste but also valued for its potential health benefits. Also great to prevent obesity-related fatty liver. Believed to have diuretic, anti-inflammatory, and antimicrobial properties, it is a good source of dietary fibre, vitamins A and C, and minerals like potassium and calcium,” Mahajan said. Concurred Dr Ushakiran Sisodia, registered dietician and clinical nutritionist, Nanavati Max Super Speciality Hospital, Mumbai and said that kantoli is known to be rich in vitamin A, vitamin C, and vitamin B9 (folate) and contains minerals like iron, magnesium, and potassium. “Most importantly, as it’s low in calories, those following a diet or weight control regime can freely eat it. Being high in fibre, the vegetable aids in digestion and prevents constipation,” said Dr Sisodia.",
  date: "July 7, 2023",
 },
 {
  id: 100,
  genre: "Food",
  ref: "https://indianexpress.com/article/lifestyle/food-wine/biryani-indian-rojak-eight-popular-foods-singapore-8755233/",
  image:
   "https://images.indianexpress.com/2023/07/shreyak-singh-0j4bisyPo3M-unsplash.jpg?w=640",
  heading: "Biryani, Indian Rojak among top eight popular foods in Singapore",
  subheading:
   "Other dishes on the list released by local gas supplier City Energy to promote traditional foods were laksa (noodles in gravy of coconut milk), chicken rice and Hokkien mee, as well as char kway teow (Chinese fried noodles).",
  content:
   "Biryani and Indian Rojak are among the top eight popular dishes that Singaporeans enjoy and want to preserve it in the multi-racial island nation. Biryani, still popularly cooked by the third-generation descendants of migrants from South India, is today an everyday meal among multinational Singaporeans, said Syed Kassim told PTI. Kasim, 50, operates a wide variety of foods from his stall, which was started 50 years ago by his grandfather, whose ancestors were among the early migrants from Ramanathanpuram in Tamil Nadu. Syed Kassim is among the dwindling number of hawkers in Singapore, where efforts are being made to preserve the hawker culture. Another popular dish is “Indian Rojak”, a fusion of Singapore-origin Indian food which is made up of 23 varieties of deep-fried vegetables and meat malls that are consumed with gravy made from crushed peanuts and tamarin. Sagubarsadiq, 38, is another third-generation hawker of Indian descent who is keeping up the Indian-origin food outlet going in Singapore. It was started by his father 34 years ago. Other dishes on the list released by local gas supplier City Energy to promote traditional foods were laksa (noodles in gravy of coconut milk), chicken rice and Hokkien mee, as well as char kway teow (Chinese fried noodles).",
  date: " July 5, 2023",
 },
];



export const DataStorage = createContext(Data);