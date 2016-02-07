// var MLhelper = require('./MLhelper');
var jsonfile = require('jsonfile');
// var oauth2Client = new OAuth2(config.google.clientID, config.google.clientSecret, config.google.redirectURL);
// var token = {
//   access_token: 'ya29.gAK94MDD-MdOxgCGQ4s_Z4ZCN4BKJyZNPDzTjM457ULuNkpT0qpvTTN04s2Tuk98lNn_',
//   token_type: 'Bearer',
//   refresh_token: '1/uq2o2Q0Zd4m5HEKzqgBY8584kadOTe4QFLWlzM3xfjBIgOrJDtdun6zK6XiATCKT',
//   expiry_date: 1454795819635
// };
// oauth2Client.setCredentials(token);

// // var ans = [];

// // var maxResults = 200, count = 0;

// // function format() {
// //   var outputStr = '';
// //   for (var i = 0; i < ans.length; i ++) {
// //     for (var j = 0; j < ans[i].length; j ++) {
// //       outputStr += ans[i][j].title + '\n' + ans[i][j].content + '\n';
// //     }
// //   }
// //   console.log(outputStr);
// //   fs.writeFile("./test", outputStr, function(err) {
// //     console.log(err);
// //   });
// //   jsonfile.writeFile('tmp/ans.json', ans, function (err) {
// //     console.error(err)
// //   });
// // }

// var AYLIENTextAPI = require('aylien_textapi');
// var textapi = new AYLIENTextAPI({
//   application_id: config.aylien.application_id,
//   application_key: config.aylien.application_key
// });

// var ans = jsonfile.readFileSync('tmp/ans.json');
// var expected = 2 * ans.length, count = 0;
// var summary = [], entities = [];
// for (var i = 0; i < ans.length; i ++) {
//   summary.push({});
//   entities.push({});
// }
// for (var i = 0; i < ans.length; i ++) {
//   closure(i);
// }

// function closure(i) {
//   var knwlInstance = new Knwl('english');
//   knwlInstance.init(ans[i].content);
//   if (knwlInstance.get('dates').length != 0)
//     ans[i].dates = knwlInstance.get('dates')[0];
//   if (knwlInstance.get('times').length != 0)
//     ans[i].times = knwlInstance.get('times')[0];
//   if (knwlInstance.get('places').length != 0)
//     ans[i].places = knwlInstance.get('places')[0];
//   textapi.summarize({
//     'title': ans[i].title,
//     'text': ans[i].content,
//     'sentences_number': 1
//   }, function(error, response) {
//     console.log(count);
//     if (error === null) {
//       // console.log(response.sentences);
//       summary[i] = response.sentences[0];
//       count += 1;
//       if (count == expected) {
//         format();
//       }
//     } else {
//       count += 1;
//       if (count == expected) {
//         format();
//       }
//     }
//   });
//   textapi.entities({
//     'text': ans[i].content
//   }, function(error, response) {
//     console.log(count);
//     if (error === null) {
//       // console.log(response.entities);
//       entities[i] = response.entities;
//       count += 1;
//       if (count == expected) {
//         format();
//       }
//     } else {
//       count += 1;
//       if (count == expected) {
//         format();
//       }
//     }
//   });
// }

// function combine(i) {
//   ans[i].summary = summary[i];
//   ans[i].entities = entities[i];
// }

// function format() {
//   for (var i = 0; i < ans.length; i ++)
//     combine(i);
//   console.log(ans[0]);
//   console.log(ans[1]);
//   jsonfile.writeFile('tmp/all.json', ans, function (err) {
//   });
// }


var data = [
    {
      "title":"*BRYTE info session THIS WEDNESDAY*",
      "content":"From Cecilia Garza <cecilia_garza@brown.edu> for all studentsInterested in one-on-one, in-home tutoring? Brown Refugee Youth Tutoring and Enrichment (BRYTE) pairs tutors with recently resettled refugee youth in Providence to build meaningful relationships while working to achieve language and cultural fluency. Want to join?! Attend one of our upcoming info sessions for more on BRYTE:Wed., Feb. 3rd at 9-9:30pm-Smitty B 201Sun., Feb. 7th at 2-2:30pm-BERT 015Mon., Feb. 8th at 9-9:30pm-BERT 015WE'LL ALSO BE AT THE ACTIVITIES FAIR! COME CHAT!",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":3,
         "preview":"Feb.",
         "found":53
      },
      "places":{
         "place":"ALSO",
         "preview":"8th at 9-9:30pm-BERT 015WE'LL ALSO BE AT THE ACTIVITIES FAIR!",
         "found":66
      },
      "summary":"Brown Refugee Youth Tutoring and Enrichment (BRYTE) pairs tutors with recently resettled refugee youth in Providence to build meaningful relationships while working to achieve language and cultural fluency.",
      "entities":{
         "location":[
            "Providence"
         ],
         "email":[
            "cecilia_garza@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "Refugee Youth Tutoring",
            "tutors with recently resettled refugee youth",
            "language and cultural fluency",
            "tutoring",
            "BRYTE",
            "Feb.",
            "Refugee",
            "Youth",
            "pm-BERT",
            "one-on-one",
            "cultural",
            "fluency",
            "language",
            "info",
            "in-home",
            "<cecilia_garza@brown.edu>",
            "relationships",
            "sessions",
            "meaningful",
            "Garza"
         ],
         "date":[
            "9-9:30pm-Smitty",
            "2-2:30pm-BERT",
            "9-9:30pm-BERT"
         ]
      }
   },
   {
      "title":"Register Your Personal Property with DPS",
      "content":"From Thomas L Shelton Jr <thomas_shelton_jr@brown.edu> for allMonday,February 1st. 11am - 2PM. Barus & Holley - Main LobbyRegister your personal property today with Brown University Department of Public Safety. We register lap tops, cell phones, bicycles, tablets, and more! Receive one Bear tip coin with each personal property registration! and it's free!",
      "times":{
         "hour":2,
         "minute":"00",
         "daynight":"PM",
         "preview":"2PM.",
         "found":11
      },
      "summary":"Receive one Bear tip coin with each personal property registration!",
      "entities":{
         "organization":[
            "Brown University Department of Public Safety",
            "Bear"
         ],
         "location":[
            "Shelton Jr"
         ],
         "email":[
            "thomas_shelton_jr@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "personal property",
            "personal",
            "property",
            "allMonday",
            "February",
            "Barus",
            "Holley",
            "tops",
            "<thomas_shelton_jr@brown.edu>",
            "Safety",
            "cell",
            "Main",
            "Bear",
            "coin",
            "tablets",
            "Brown",
            "Public",
            "phones",
            "University",
            "bicycles"
         ],
         "date":[
            "February",
            "today"
         ],
         "person":[
            "Thomas L Shelton Jr <thomas_shelton_jr@brown"
         ]
      }
   },
   {
      "title":"**Summer B-Lab is back!** 2/11 Info Session",
      "content":"From Elizabeth Malone <elizabeth_malone@brown.edu> for allB-Lab is back! Breakthrough Lab, an initiative of the Provost’s office, enables students to pursue their entrepreneurial passions and further develop their ventures. The program runs June 6 - July 29 and includes mentoring, networking, and a final venture showcase. Students from all departments and disciplines are strongly encouraged to apply. To learn more, join us at our upcoming Info Session: 2/11 (Petteruti Lounge) @ 7-8:30pm. RSVP below! More info at brown.edu/initiatives/summer-b-lab/.",
      "dates":{
         "year":"unknown",
         "month":6,
         "day":6,
         "preview":"The program runs June 6 - July 29 and includes mentoring, networking, and a final",
         "found":31
      },
      "places":{
         "place":"Info",
         "preview":"To learn more, join us at our upcoming Info Session: 2/11 (Petteruti Lounge) @ 7-8:30pm.",
         "found":61
      },
      "summary":"Breakthrough Lab, an initiative of the Provost’s office, enables students to pursue their entrepreneurial passions and further develop their ventures.",
      "entities":{
         "email":[
            "elizabeth_malone@brown.edu"
         ],
         "url":[
            "brown.edu",
            "brown.edu/initiatives/summer-b-lab/."
         ],
         "keyword":[
            "ventures",
            "students",
            "Info",
            "allB-Lab",
            "Breakthrough",
            "initiative",
            "Provost",
            "<elizabeth_malone@brown.edu>",
            "office",
            "July",
            "mentoring",
            "June",
            "Session",
            "final",
            "entrepreneurial",
            "passions",
            "program",
            "networking",
            "departments",
            "showcase"
         ],
         "date":[
            "June 6 - July 29"
         ],
         "person":[
            "Elizabeth Malone"
         ]
      }
   },
   {
      "title":"International Sunday Lunch - Bridges International",
      "content":"From Vivian Phung <vivian_phung@brown.edu> for all undergraduatesBridges International builds bridges cross-culturally for American and international students by offering services, social connections, and spiritual resources. We hope all Brown international students can experience God's love through our Brown community.We'll be learning to make (and eat) Schnitzel and Spaetzle, a German dish.Weekly General Body Meeting — This Sunday, 2/7 at 1pmLocation: 9 East Transit Street, (ring the top doorbell)Rides: Meet @ Faunce at 12:45 sharp",
      "places":{
         "place":"East",
         "preview":"Spaetzle, a German dish.Weekly General Body Meeting — This Sunday, 2/7 at 1pmLocation: 9 East Transit Street, (ring the top doorbell)Rides: Meet @",
         "found":57
      },
      "summary":"From Vivian Phung <vivian_phung@brown.edu> for all undergraduatesBridges International builds bridges cross-culturally for American and international students by offering services, social connections, and spiritual resources.",
      "entities":{
         "organization":[
            "American"
         ],
         "email":[
            "vivian_phung@brown.edu"
         ],
         "url":[
            "brown.edu",
            "community.We",
            "dish.Weekly"
         ],
         "keyword":[
            "Brown international students",
            "international students",
            "International",
            "students",
            "Brown",
            "doorbell",
            "ring",
            "Street",
            "Transit",
            "East",
            "1pmLocation",
            "Body",
            "Sunday",
            "Meet",
            "General",
            "dish.Weekly",
            "German",
            "Spaetzle",
            "Schnitzel",
            "Faunce"
         ],
         "date":[
            "Sunday",
            "12:45"
         ],
         "person":[
            "Schnitzel",
            "Meet"
         ]
      }
   },
   {
      "title":"Cuneiform @ Tech House",
      "content":"From Christine H Yu <christine_yu@brown.edu> for all undergraduatesJoin Tech House at 2 PM SATURDAY (2/6) at Harkness House to learn to write some things in Akkadian cuneiform! This ancient writing system died out around 2000 years ago, but has a history stretching over 5000 years in the past. Leave with your very own clay tablet!",
      "times":{
         "hour":2,
         "minute":"00",
         "daynight":"PM",
         "preview":"From Christine H Yu <christine_yu@brown.edu> for all undergraduatesJoin Tech House at 2 PM SATURDAY (2/6) at Harkness House to learn to write some",
         "found":11
      },
      "places":{
         "place":"Harkness House",
         "preview":"<christine_yu@brown.edu> for all undergraduatesJoin Tech House at 2 PM SATURDAY (2/6) at Harkness House to learn to write some things in Akkadian cuneiform!",
         "found":15
      },
      "entities":{
         "organization":[
            "Harkness House"
         ],
         "email":[
            "christine_yu@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "House",
            "Tech",
            "years",
            "writing",
            "undergraduatesJoin",
            "ancient",
            "Akkadian",
            "cuneiform",
            "SATURDAY",
            "Harkness",
            "system",
            "<christine_yu@brown.edu>",
            "history",
            "Christine",
            "clay",
            "tablet"
         ],
         "date":[
            "2000 years ago",
            "5000"
         ],
         "person":[
            "Christine H Yu"
         ]
      }
   },
   {
      "title":"Using Social Media for the Internship/ Job Search",
      "content":"From CareerLAB <careerlab@brown.edu> for all undergraduatesJoin us TODAY (1/26/16) 3:00pm - 4:00pm in Salomon 001More and more employers are using social media, especially LinkedIn, to look for potential hires and post positions. LinkedIn is also a great way to reach out to the more than 53,000 Brown alumni who have LinkedIn profiles. Learn how to get started utilizing LinkedIn for your job search this year. Tips on creating your profile as well as how to effectively network with LinkedIn will be discussed.",
      "dates":{
         "year":16,
         "month":1,
         "day":26,
         "preview":"From CareerLAB <careerlab@brown.edu> for all undergraduatesJoin us TODAY (1/26/16) 3:00pm - 4:00pm in Salomon 001More and more employers are using",
         "found":8
      },
      "times":{
         "hour":"3",
         "minute":"00",
         "daynight":"Unknown",
         "preview":"From CareerLAB <careerlab@brown.edu> for all undergraduatesJoin us TODAY (1/26/16) 3:00pm - 4:00pm in Salomon 001More and more employers are using social",
         "found":9
      },
      "summary":"Tips on creating your profile as well as how to effectively network with LinkedIn will be discussed.",
      "entities":{
         "organization":[
            "Salomon"
         ],
         "email":[
            "careerlab@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "LinkedIn",
            "TODAY",
            "Salomon",
            "001More",
            "undergraduatesJoin",
            "employers",
            "social",
            "<careerlab@brown.edu>",
            "media",
            "potential",
            "positions",
            "CareerLAB",
            "hires",
            "post",
            "profiles",
            "great",
            "Brown",
            "alumni",
            "year",
            "search"
         ],
         "date":[
            "this year"
         ]
      }
   },
   {
      "title":"Resume/Cover Letter Writing",
      "content":"From CareerLAB <careerlab@brown.edu> for all undergraduatesTODAY (1/26) 5pm-6pm in Salomon 001A tailored,well-written resume and cover letter will get you an interview! Join us to get tips on crafting documents that will get the attention of the reader and get you in the door.",
      "times":{
         "hour":5,
         "minute":"00",
         "daynight":"PM",
         "preview":"From CareerLAB <careerlab@brown.edu> for all undergraduatesTODAY (1/26) 5pm-6pm in Salomon 001A tailored,well-written resume and cover letter will get you",
         "found":7
      },
      "entities":{
         "keyword":[
            "documents",
            "5pm-6pm",
            "tips",
            "Salomon",
            "interview",
            "001A",
            "tailored,well-written",
            "letter",
            "attention",
            "undergraduatesTODAY",
            "reader",
            "<careerlab@brown.edu>",
            "CareerLAB",
            "door"
         ],
         "url":[
            "brown.edu"
         ],
         "email":[
            "careerlab@brown.edu"
         ],
         "organization":[
            "Salomon"
         ]
      }
   },
   {
      "title":"CLAB 0010: Unpacking CareerLAB",
      "content":"From CareerLAB <careerlab@brown.edu> for all undergraduatesJoin us TODAY (1/26/16) 4pm- 5pm in Salomon 001Peer Career Advisors will teach you how to get started with the necessary tools offered by CareerLAB including: how to write a resume or cover letter, search for internships through BrownConnect, create your career profile in the Brown Job Board (JIB), and use Twitter and LinkedIn for the internship hunt!It's the perfect first step with CareerLAB.  We make it fun, and refreshments will be provided.",
      "dates":{
         "year":16,
         "month":1,
         "day":26,
         "preview":"From CareerLAB <careerlab@brown.edu> for all undergraduatesJoin us TODAY (1/26/16) 4pm- 5pm in Salomon 001Peer Career Advisors will teach you how",
         "found":8
      },
      "times":{
         "hour":5,
         "minute":"00",
         "daynight":"PM",
         "preview":"From CareerLAB <careerlab@brown.edu> for all undergraduatesJoin us TODAY (1/26/16) 4pm- 5pm in Salomon 001Peer Career Advisors will teach you how to get",
         "found":10
      },
      "entities":{
         "keyword":[
            "CareerLAB",
            "internships",
            "Career",
            "TODAY",
            "hunt!It",
            "perfect",
            "Advisors",
            "Salomon",
            "001Peer",
            "LinkedIn",
            "Board",
            "search",
            "profile",
            "tools",
            "Twitter",
            "Brown",
            "letter",
            "BrownConnect",
            "undergraduatesJoin",
            "step"
         ],
         "url":[
            "brown.edu"
         ],
         "email":[
            "careerlab@brown.edu"
         ],
         "organization":[
            "Salomon 001Peer Career Advisors"
         ]
      }
   },
   {
      "title":"Brown EMS Information Session",
      "content":"From Harin Lee <harin_lee@brown.edu> for all undergraduatesThere will be an information session for students interested in volunteering with Brown EMS beginning in Fall 2016 on Thursday, February 11th at 7:00 PM in Metcalf Auditorium. There will be information about Brown EMS and the application process. Please plan to attend if you will be applying to work as a volunteer EMT.  Reach out to harin_lee@brown.edu with any questions!",
      "dates":{
         "year":2016,
         "month":2,
         "day":11,
         "preview":"in volunteering with Brown EMS beginning in Fall 2016 on Thursday, February 11th at 7:00 PM in Metcalf Auditorium.",
         "found":26
      },
      "times":{
         "hour":"7",
         "minute":"00",
         "daynight":"PM",
         "preview":"Brown EMS beginning in Fall 2016 on Thursday, February 11th at 7:00 PM in Metcalf Auditorium.",
         "found":29
      },
      "summary":"There will be information about Brown EMS and the application process.",
      "entities":{
         "date":[
            "2016",
            "Thursday",
            "February 11th"
         ],
         "keyword":[
            "Brown",
            "session",
            "process",
            "students",
            "application",
            "interested",
            "Auditorium",
            "plan",
            "Fall",
            "Metcalf",
            "undergraduatesThere",
            "Thursday",
            "February",
            "11th",
            "<harin_lee@brown.edu>",
            "volunteer",
            "Harin",
            "questions"
         ],
         "url":[
            "brown.edu",
            "brown.edu"
         ],
         "email":[
            "harin_lee@brown.edu",
            "harin_lee@brown.edu"
         ]
      }
   },
   {
      "title":"Join Harmonizing Grace, Brown's only Gospel Choir!",
      "content":"From Kathleen M Hay <kathleen_hay@brown.edu> for all studentsHave a heart for God and Brown's campus? Love to sing? Join Harmonizing Grace! We are Brown's only gospel choir, dedicated to praising the name of God and bringing the light of Jesus Christ to campus with our voices.No audition required! No experience necessary! All voices welcome! Check us out at the Activities Fair and come to our first rehearsal on Sunday, January 31, 5-7 pm in Manning Chapel.God bless!",
      "dates":{
         "year":"unknown",
         "month":1,
         "day":31,
         "preview":"the Activities Fair and come to our first rehearsal on Sunday, January 31, 5-7 pm in Manning Chapel.God bless!",
         "found":69
      },
      "places":{
         "place":"Activities Fair",
         "preview":"Check us out at the Activities Fair and come to our first rehearsal on Sunday,",
         "found":57
      },
      "summary":"From Kathleen M Hay <kathleen_hay@brown.edu> for all studentsHave a heart for God and Brown's campus?",
      "entities":{
         "organization":[
            "Jesus Christ",
            "Activities"
         ],
         "email":[
            "kathleen_hay@brown.edu"
         ],
         "url":[
            "brown.edu",
            "voices.No",
            "Chapel.God"
         ],
         "keyword":[
            "campus",
            "Brown",
            "Sunday",
            "rehearsal",
            "Fair",
            "Activities",
            "heart",
            "January",
            "voices",
            "experience",
            "audition",
            "voices.No",
            "light",
            "Christ",
            "Jesus",
            "studentsHave",
            "choir",
            "gospel",
            "Grace",
            "Manning"
         ],
         "date":[
            "Sunday",
            "January 31"
         ],
         "person":[
            "Kathleen M Hay",
            "Brown"
         ]
      }
   },
   {
      "title":"2/9 at 4PM – Screening of ‘The Examined Life’",
      "content":"From Cogut Center for the Humanities <traude_kastner@brown.edu> for all students, campus faculty, all staffFilm screening of \"The Examined Life\" and Q&A with Astra Taylor2/9, 4:00PM, Pembroke Hall 305, 172 Meeting St.In The Examined Life, filmmaker Astra Taylor accompanies some of today’s most influential thinkers: Kwame Anthony Appiah, Michael Hardt, Avital Ronell, Peter Singer, Slavoj Zizek, Judith Butler, Martha Nussbaum and Cornel West, on a series of excursions through places and spaces that hold particular resonance for them and their ideas.",
      "times":{
         "hour":"4",
         "minute":"00",
         "daynight":"Unknown",
         "preview":"staffFilm screening of \"The Examined Life\" and Q&A with Astra Taylor2/9, 4:00PM, Pembroke Hall 305, 172 Meeting St.In The Examined Life, filmmaker Astra",
         "found":24
      },
      "entities":{
         "email":[
            "traude_kastner@brown.edu"
         ],
         "url":[
            "brown.edu",
            "St.In"
         ],
         "keyword":[
            "Examined Life",
            "Astra",
            "Examined",
            "Life",
            "places",
            "excursions",
            "<traude_kastner@brown.edu>",
            "series",
            "students",
            "West",
            "campus",
            "Cornel",
            "Nussbaum",
            "Ronell",
            "Judith",
            "Martha",
            "Zizek",
            "Butler",
            "Slavoj",
            "Appiah"
         ],
         "person":[
            "Astra Taylor",
            "Anthony Appiah",
            "Michael Hardt",
            "Avital Ronell",
            "Peter Singer",
            "Slavoj Zizek",
            "Judith Butler",
            "Martha Nussbaum"
         ],
         "product":[
            "Astra Taylor2/9",
            "Astra Taylor"
         ]
      }
   },
   {
      "title":"2016 E.J. Lownes Memorial Organ Recital",
      "content":"From Office of the Chaplains and Religious Life <jessica_wiles@brown.edu> for all students, campus faculty, all staffInternationally acclaimed Swedish concert organist, composer, and recording artist Hans-Ola Ericsson will be performing the annual E.J. Lownes Memorial Guest Artist Organ Recital Friday, February 26 at 8 p.m. in Sayles Hall. Ericsson will be performing works of Messiaen, Rameau, and his transcription of Swedish composer Arne Mellnäs’ “Omnia tempus habeant.” Open to the public and free of charge.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":26,
         "preview":"Lownes Memorial Guest Artist Organ Recital Friday, February 26 at 8 p.m.",
         "found":39
      },
      "summary":"Ericsson will be performing works of Messiaen, Rameau, and his transcription of Swedish composer Arne Mellnäs’ “Omnia tempus habeant.”",
      "entities":{
         "email":[
            "jessica_wiles@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "Omnia tempus habeant",
            "Swedish composer",
            "Ericsson",
            "artist",
            "composer",
            "Swedish",
            "Life",
            "<jessica_wiles@brown.edu>",
            "habeant",
            "tempus",
            "students",
            "Omnia",
            "campus",
            "Religious",
            "public",
            "Mellnäs",
            "faculty",
            "Recital",
            "p.m.",
            "Organ"
         ],
         "date":[
            "Friday",
            "February 26"
         ],
         "person":[
            "Religious Life",
            "Hans-Ola Ericsson",
            "Arne Mellnäs"
         ]
      }
   },
   {
      "title":"Biotechnology and Global Health Symposium",
      "content":"From Elizabeth D Jackvony <elizabeth_jackvony@brown.edu> for allThe Biotechnology and Global Health Symposium will address the growing challenges of health care in resource limited settings and elucidate how engineers and medical care providers can work together to help solve healthcare issues through innovative and outside-the-box thinking.Feb 11, 2016, 5pm - 7:30pm at The Institute at Brown for Environment & Society, 85 Waterman Street, Room 130Sponsored by Biomedical Engineering and the Global Health Initiative",
      "times":{
         "hour":"7",
         "minute":"30",
         "daynight":"Unknown",
         "preview":"healthcare issues through innovative and outside-the-box thinking.Feb 11, 2016, 5pm - 7:30pm at The Institute at Brown for Environment & Society, 85 Waterman",
         "found":49
      },
      "places":{
         "place":"Brown Environment",
         "preview":"and outside-the-box thinking.Feb 11, 2016, 5pm - 7:30pm at The Institute at Brown for Environment & Society, 85 Waterman Street, Room 130Sponsored by",
         "found":53
      },
      "entities":{
         "organization":[
            "Global Health Symposium",
            "The Institute",
            "Brown for Environment & Society",
            "Biomedical Engineering",
            "Global Health Initiative"
         ],
         "email":[
            "elizabeth_jackvony@brown.edu"
         ],
         "url":[
            "brown.edu",
            "thinking.Feb"
         ],
         "keyword":[
            "Engineering and the Global Health",
            "health care",
            "Global Health",
            "engineers",
            "Health",
            "care",
            "Global",
            "allThe",
            "Environment",
            "Brown",
            "Institute",
            "Society",
            "thinking.Feb",
            "Biotechnology",
            "outside-the-box",
            "Waterman",
            "innovative",
            "issues",
            "Room",
            "130Sponsored"
         ],
         "person":[
            "Elizabeth D Jackvony"
         ]
      }
   },
   {
      "title":"2/5: Lunch talk with Dr. Emily Button",
      "content":"From Center for the Study of Slavery and Justice <ruth_clark@brown.edu> for allE Pluribus Unum? An Archaeology of Race and Community in Sag Harbor, NYFriday 2/512 PMCSSJ, Seminar Room94 Waterman StLunch will be served. Please RSVP at link below.This talk will present an archaeological perspective on how people of color in and around the 19th century whaling port of Sag Harbor, NY, negotiated shifting boundaries of race and ethnicity in order to build community, seek prosperity, and pursue both shared and divergent political goals.",
      "summary":"An Archaeology of Race and Community in Sag Harbor, NYFriday 2/512 PMCSSJ, Seminar Room94 Waterman StLunch will be served.",
      "entities":{
         "organization":[
            "Center for the Study of Slavery"
         ],
         "location":[
            "Race",
            "Community",
            "Sag Harbor"
         ],
         "email":[
            "ruth_clark@brown.edu"
         ],
         "url":[
            "brown.edu",
            "below.This"
         ],
         "keyword":[
            "Archaeology",
            "Community",
            "Harbor",
            "Race",
            "Justice",
            "<ruth_clark@brown.edu>",
            "shared",
            "allE",
            "prosperity",
            "Slavery",
            "StLunch",
            "RSVP",
            "link",
            "Pluribus",
            "Waterman",
            "below.This",
            "divergent",
            "people",
            "talk",
            "color"
         ],
         "date":[
            "2/512"
         ]
      }
   },
   {
      "title":"2/12: Lunch talk with Prof. Caree Banton",
      "content":"From Center for the Study of Slavery and Justice <ruth_clark@brown.edu> for allEncounters on the African Coast: Labor in the Remaking of Blackness in LiberiaFriday 2/1212 PMCSSJ, Seminar Room94 Waterman StLunch will be served. Please RSVP at link below.Prof. Caree Banton is an Assistant Professor of Afro-Caribbean History at the University of Arkansas, jointly appointed in History and African and African American Studies.The Emerging Scholars series supports scholars early in their careers.",
      "places":{
         "place":"University",
         "preview":"Caree Banton is an Assistant Professor of Afro-Caribbean History at the University of Arkansas, jointly appointed in History and African and",
         "found":47
      },
      "summary":"Caree Banton is an Assistant Professor of Afro-Caribbean History at the University of Arkansas, jointly appointed in History and African and African American Studies.The Emerging Scholars series supports scholars early in their careers.",
      "entities":{
         "keyword":[
            "African and African",
            "African",
            "Justice",
            "<ruth_clark@brown.edu>",
            "StLunch",
            "Seminar",
            "Waterman",
            "link",
            "Room94",
            "RSVP",
            "allEncounters",
            "below.Prof",
            "PMCSSJ",
            "Caree",
            "Banton",
            "LiberiaFriday",
            "Blackness",
            "Slavery",
            "Assistant",
            "Remaking"
         ],
         "url":[
            "brown.edu",
            "below.Prof",
            "Studies.The"
         ],
         "email":[
            "ruth_clark@brown.edu"
         ],
         "organization":[
            "Center for the Study of Slavery",
            "Labor",
            "University of Arkansas"
         ]
      }
   },
   {
      "title":"***Brown EMS Open House***",
      "content":"From Brown EMS <harin_lee@brown.edu> for all undergraduatesWant to know what it's like to work as an EMT? Want to have some company on Valentine's Day? Brown EMS will be hosting two open houses for students interested in applying to work for our service starting Fall 2016. They will be on:- Sunday, February 14th from 11-1- Tuesday, February 23rd from 3-5Come see our headquarters and ambulance, talk with Brown EMTs, and have a good time!",
      "dates":{
         "year":2016,
         "month":2,
         "day":14,
         "preview":"They will be on:- Sunday, February 14th from 11-1- Tuesday, February 23rd from 3-5Come see our headquarters",
         "found":51
      },
      "summary":"From Brown EMS <harin_lee@brown.edu> for all undergraduatesWant to know what it's like to work as an EMT?",
      "entities":{
         "email":[
            "harin_lee@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "Brown",
            "February",
            "talk",
            "ambulance",
            "houses",
            "students",
            "open",
            "headquarters",
            "interested",
            "service",
            "Valentine",
            "Fall",
            "3-5Come",
            "Sunday",
            "EMTs",
            "23rd",
            "company",
            "Tuesday",
            "14th",
            "good"
         ],
         "date":[
            "Fall 2016",
            "Sunday",
            "February 14th",
            "Tuesday",
            "February 23rd"
         ],
         "person":[
            "Brown",
            "Brown EMTs"
         ]
      }
   },
   {
      "title":"Spring Career Fair at Sayles",
      "content":"From CareerLAB <careerlab@brown.edu> for all undergraduates, all graduate studentsTuesday, 02-16-16, 12:00 to 4:00 at Sayles Hall;GET READY FOR SPRING RECRUITING...Spring Career Fair - Coming FEB 16thLooking for full time or internship opportunities? Come meet over 40 employers with great opportunities for you.BEFORE YOU ARRIVE, download the CareerFairPlus App on your phone (i-tunes store; search Brown Career Fair Plus). Learn about all the employers and what they have to offer you!",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":16,
         "preview":"at Sayles Hall;GET READY FOR SPRING RECRUITING...Spring Career Fair - Coming FEB 16thLooking for full time or internship opportunities?",
         "found":24
      },
      "summary":"Come meet over 40 employers with great opportunities for you.BEFORE YOU ARRIVE, download the CareerFairPlus App on your phone (i-tunes store; search Brown Career Fair Plus).",
      "entities":{
         "organization":[
            "Career Fair Plus"
         ],
         "email":[
            "careerlab@brown.edu"
         ],
         "url":[
            "brown.edu",
            "you.BEFORE"
         ],
         "keyword":[
            "Career Fair",
            "Career",
            "Fair",
            "graduate",
            "studentsTuesday",
            "opportunities",
            "employers",
            "Sayles",
            "Hall",
            "undergraduates",
            "READY",
            "RECRUITING",
            "store",
            "phone",
            "i-tunes",
            "search",
            "Spring",
            "CareerFairPlus",
            "Brown",
            "you.BEFORE"
         ],
         "date":[
            "Tuesday"
         ],
         "person":[
            "Brown Career Fair Plus"
         ],
         "phone":[
            "02-16-16"
         ]
      }
   },
   {
      "title":"JCB Book Talk w/author of The Map Thief",
      "content":"From JCB Library <jcb-events@brown.edu> for allJoin us for an exciting talk by Michael Blanding, author of \"The Map Thief\" next Monday, February 8 at 5:30 pm.In addition to talking about Smiley’s thefts, Blanding will also talk about the history behind the maps he stole and the continuing implications for library security.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":8,
         "preview":"talk by Michael Blanding, author of \"The Map Thief\" next Monday, February 8 at 5:30 pm.In addition to talking about Smiley’s thefts, Blanding",
         "found":21
      },
      "times":{
         "hour":"5",
         "minute":"30",
         "daynight":"PM",
         "preview":"Blanding, author of \"The Map Thief\" next Monday, February 8 at 5:30 pm.In addition to talking about Smiley’s thefts, Blanding will also talk",
         "found":24
      },
      "entities":{
         "organization":[
            "JCB Library"
         ],
         "email":[
            "jcb-events@brown.edu"
         ],
         "url":[
            "brown.edu",
            "pm.In"
         ],
         "keyword":[
            "Blanding",
            "Library",
            "exciting",
            "history",
            "maps",
            "talk",
            "Michael",
            "thefts",
            "author",
            "Thief",
            "Smiley",
            "Monday",
            "addition",
            "February",
            "pm.In",
            "implications",
            "allJoin",
            "<jcb-events@brown.edu>",
            "security"
         ],
         "date":[
            "next Monday",
            "February 8"
         ],
         "person":[
            "Michael Blanding"
         ]
      }
   },
   {
      "title":"Career Con: Career Field Panels Session A",
      "content":"From CareerLAB <careerlab@brown.edu> for all undergraduatesTOMORROW Sat 1/30, 10am-11:30am. Hear from and connect with Alumni at the following Panels!Design & User Experience Panel,Location: Smith-Buonanno 201Public Health Panel,Location: BERT 130Jobs on the Hill Panel,Location: Pembroke Hall 305PR/Advertising/Marketing Panel,Location: Smith-Buonanno 106",
      "places":{
         "place":"PanelsDesign",
         "preview":"Hear from and connect with Alumni at the following Panels!Design & User Experience Panel,Location: Smith-Buonanno 201Public Health Panel,Location:",
         "found":15
      },
      "entities":{
         "organization":[
            "Health Panel, Location",
            "Smith-Buonanno 106"
         ],
         "location":[
            "Hill"
         ],
         "email":[
            "careerlab@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "Panel",
            "Location",
            "Alumni",
            "Panels!Design",
            "undergraduatesTOMORROW",
            "User",
            "<careerlab@brown.edu>",
            "Experience",
            "CareerLAB",
            "Smith-Buonanno",
            "Hill",
            "BERT",
            "Pembroke",
            "305PR/Advertising/Marketing",
            "Health",
            "130Jobs",
            "Hall",
            "201Public"
         ],
         "person":[
            "1/30"
         ]
      }
   },
   {
      "title":"Career Con: Career Field Panels Session B",
      "content":"From CareerLAB <careerlab@brown.edu> for all undergraduatesTOMORROW Sat 1/30, 1:30pm- 3:00pm. Hear from and connect with Alumni at the following Panels!Data Science Panel,Location: BERT 130Sustainability & Food Justice Panel,Location: Smith-Buonanno 201Jobs in Finance Panel,Location: Smith-Buonanno 106",
      "times":{
         "hour":"3",
         "minute":"00",
         "daynight":"Unknown",
         "preview":"3:00pm.",
         "found":9
      },
      "places":{
         "place":"PanelsData",
         "preview":"Hear from and connect with Alumni at the following Panels!Data Science Panel,Location: BERT 130Sustainability & Food Justice Panel,Location:",
         "found":16
      },
      "entities":{
         "organization":[
            "BERT 130Sustainability & Food Justice Panel,",
            "Smith-Buonanno 106"
         ],
         "email":[
            "careerlab@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "Panel",
            "Location",
            "Alumni",
            "Panels!Data",
            "undergraduatesTOMORROW",
            "Science",
            "<careerlab@brown.edu>",
            "BERT",
            "CareerLAB",
            "Justice",
            "130Sustainability",
            "Food",
            "Smith-Buonanno",
            "201Jobs",
            "Finance"
         ],
         "person":[
            "1/30"
         ]
      }
   },
   {
      "title":"Anthropology Talk by Dr. Jenny L. Davis",
      "content":"From Marjorie Sugrue <marjorie_sugrue@brown.edu> for allThe Brown Anthropology Colloquium Series Presents Dr. Jenny L. Davis from the University of Illinois, Urbana-Champaign.  The talk is titled \"What's Queer about Language Revitalization?: Exploring the Intersections of Two-Spirit Activism and Indigenous Language Reclamation.\"  This event takes place at noon today, the 29th of January here at Giddings - room 212 (128 Hope Street - corner of Hope and Power).  All are invited to attend.",
      "dates":{
         "year":"unknown",
         "month":1,
         "day":29,
         "preview":"Reclamation.\" This event takes place at noon today, the 29th of January here at Giddings - room 212 (128 Hope Street - corner",
         "found":50
      },
      "places":{
         "place":"Giddings",
         "preview":"event takes place at noon today, the 29th of January here at Giddings - room 212 (128 Hope Street - corner of Hope",
         "found":52
      },
      "summary":"The talk is titled \"What's Queer about Language Revitalization?",
      "entities":{
         "organization":[
            "University of Illinois"
         ],
         "location":[
            "Illinois",
            "Giddings",
            "Hope Street"
         ],
         "email":[
            "marjorie_sugrue@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "Language",
            "allThe",
            "Brown",
            "Anthropology",
            "Colloquium",
            "Series",
            "Jenny",
            "<marjorie_sugrue@brown.edu>",
            "Davis",
            "January",
            "Giddings",
            "University",
            "Hope",
            "29th",
            "room",
            "Illinois",
            "today",
            "noon",
            "Urbana-Champaign",
            "place"
         ],
         "date":[
            "today",
            "January"
         ],
         "person":[
            "Marjorie Sugrue",
            "Brown Anthropology Colloquium Series Presents Dr. Jenny"
         ]
      }
   },
   {
      "title":"Feb. 1 - Jessamyn Schertz, University of Toronto",
      "content":"From Michelle M Ross <michelle_ross@brown.edu> for all undergraduates, all graduate students, campus facultyMichael S. Goodman '74 Memorial Lecture Series. Speaker: Jessamyn Schertz, University of Toronto. Title: Linguistic constraints on phonetic adaptation. Department of Cognitive, Linguistic & Psychological Sciences, Friedman Auditorium, Metcalf 101, 190 Thayer Street, Monday, February 1, 2016, 4 p.m.",
      "dates":{
         "year":2016,
         "month":2,
         "day":1,
         "preview":"& Psychological Sciences, Friedman Auditorium, Metcalf 101, 190 Thayer Street, Monday, February 1, 2016, 4 p.m.",
         "found":46
      },
      "summary":"Title: Linguistic constraints on phonetic adaptation.",
      "entities":{
         "organization":[
            "University of Toronto",
            "Department of Cognitive",
            "Psychological Sciences"
         ],
         "location":[
            "Toronto"
         ],
         "email":[
            "michelle_ross@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "Linguistic",
            "undergraduates",
            "graduate",
            "Street",
            "Thayer",
            "students",
            "Metcalf",
            "campus",
            "Auditorium",
            "facultyMichael",
            "Goodman",
            "Series",
            "Lecture",
            "Memorial",
            "<michelle_ross@brown.edu>",
            "Monday",
            "Speaker",
            "Jessamyn",
            "Friedman",
            "University"
         ],
         "date":[
            "Monday",
            "February 1, 2016"
         ],
         "person":[
            "From",
            "Michelle M Ross",
            "101"
         ]
      }
   },
   {
      "title":"TODAY: Bio Summer Research and Internship Panel",
      "content":"From Lucy Xu <lucy_xu@brown.edu> for all undergraduatesHave no idea what you're doing this summer?Don't even know where to start looking?Join the Biology & Health + Human Biology DUGs to learn more about other students' past experiences with biological and clinical research! Panelists will discuss their experiences, how they secured their opportunities and funding, and how to become more involved in research.TODAY, Friday 1/294:30pm - 6:00pmWilson 101Food by Tina's Jamaican Restaurant will be served!",
      "summary":"Panelists will discuss their experiences, how they secured their opportunities and funding, and how to become more involved in research.TODAY, Friday 1/294:30pm - 6:00pmWilson 101Food by Tina's Jamaican Restaurant will be served!",
      "entities":{
         "organization":[
            "Biology & Health + Human Biology DUGs"
         ],
         "email":[
            "lucy_xu@brown.edu"
         ],
         "url":[
            "brown.edu",
            "research.TODAY"
         ],
         "keyword":[
            "experiences",
            "Biology",
            "101Food",
            "pmWilson",
            "idea",
            "Friday",
            "summer?Don",
            "research.TODAY",
            "Tina",
            "looking?Join",
            "undergraduatesHave",
            "funding",
            "opportunities",
            "Jamaican",
            "<lucy_xu@brown.edu>",
            "DUGs",
            "students",
            "Health",
            "Human",
            "Panelists"
         ],
         "date":[
            "this summer",
            "Friday"
         ],
         "person":[
            "Tina"
         ]
      }
   },
   {
      "title":"Film Screening: A Separation (Iran)/ Feb. 2 @7-9pm",
      "content":"From Tuba Tariq <tuba_tariq@brown.edu> for all students, campus facultyCome enjoy free pizza and a movie to get your semester started!When: Tuesday, Feb. 2nd, 7-9pmWhere: Joukowsky Forum, Watson InstituteWhat: Needing someone to care for his senile father while he is at work, Nader hires Razieh, a married woman whose chador hides her pregnancy. \"A Separation\" delivers a gripping, unflinching depiction of the inner workings of marriage and divorce in Iran.Organized by MESGSA and BUFF on behalf of Middle East Studies.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":2,
         "preview":"Feb.",
         "found":21
      },
      "entities":{
         "organization":[
            "Watson Institute What"
         ],
         "location":[
            "Middle East"
         ],
         "email":[
            "tuba_tariq@brown.edu"
         ],
         "url":[
            "brown.edu",
            "Iran.Organized"
         ],
         "keyword":[
            "work",
            "students",
            "campus",
            "behalf",
            "facultyCome",
            "BUFF",
            "MESGSA",
            "free",
            "divorce",
            "pizza",
            "movie",
            "semester",
            "Feb.",
            "started!When",
            "7-9pmWhere",
            "Tuesday",
            "<tuba_tariq@brown.edu>",
            "Joukowsky",
            "Middle",
            "gripping"
         ],
         "date":[
            "Tuesday"
         ]
      }
   },
   {
      "title":"New CAPS Acceptance and Commitment Support Group",
      "content":"From Dr. Joseph Meyer & Ms. Nikole Barnes <joseph_meyer@brown.edu> for all students\"Get Out of Your Mind and Into Your Life\" will be an Acceptance and Commitment Therapy (ACT-based) support group focused on developing coping skills for anxiety and emotional distress. Start date is Thursday, February 25th at 3:00 p.m. The location is the CAPS conference room on the 5th floor of J. Walter Wilson. We will meet weekly on Thursdays (3-4 p.m.). If you are interested, please RSVP with Ms. Barnes (nikole_barnes@brown.edu) or Dr. Meyer (joseph_meyer@brown.edu). Hope to see you there!",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":25,
         "preview":"Start date is Thursday, February 25th at 3:00 p.m.",
         "found":44
      },
      "summary":"If you are interested, please RSVP with Ms. Barnes (nikole_barnes@brown.edu) or Dr. Meyer (joseph_meyer@brown.edu).",
      "entities":{
         "email":[
            "joseph_meyer@brown.edu",
            "nikole_barnes@brown.edu",
            "joseph_meyer@brown.edu"
         ],
         "url":[
            "brown.edu",
            "brown.edu",
            "brown.edu"
         ],
         "keyword":[
            "coping skills for anxiety",
            "Therapy (ACT-based) support",
            "p.m.",
            "Barnes",
            "Meyer",
            "<joseph_meyer@brown.edu>",
            "support",
            "coping",
            "Therapy",
            "ACT-based",
            "anxiety",
            "skills",
            "group",
            "RSVP",
            "emotional",
            "Commitment",
            "Acceptance",
            "students",
            "Mind",
            "distress"
         ],
         "date":[
            "Thursday",
            "February 25th"
         ],
         "person":[
            "Walter Wilson",
            "Ms. Barnes"
         ]
      }
   },
   {
      "title":"Mad Decent Zete Party",
      "content":"From Peter Tun <pyae_tun@brown.edu> for all undergraduatesZete is stoked to host its first registered party of the semester starting at 10pm this Friday the 29th! Come by Marcy House, the coed frat house with the blue swings next to the Ratty. You definitely won't want to miss out with rush coming up next week!",
      "times":{
         "hour":10,
         "minute":"00",
         "daynight":"PM",
         "preview":"to host its first registered party of the semester starting at 10pm this Friday the 29th!",
         "found":20
      },
      "places":{
         "place":"Friday",
         "preview":"stoked to host its first registered party of the semester starting at 10pm this Friday the 29th!",
         "found":19
      },
      "entities":{
         "email":[
            "pyae_tun@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "House",
            "party",
            "semester",
            "swings",
            "Friday",
            "blue",
            "undergraduatesZete",
            "29th",
            "Ratty",
            "Marcy",
            "<pyae_tun@brown.edu>",
            "frat",
            "rush",
            "coed",
            "Peter",
            "week"
         ],
         "date":[
            "this Friday",
            "next week"
         ],
         "person":[
            "Peter Tun"
         ]
      }
   },
   {
      "title":"Register Your Personal Property with DPS",
      "content":"From Thomas L Shelton Jr <thomas_shelton_jr@brown.edu> for allFriday, January 29th. 11am - 2PM - J.W. Wilson - Main LobbyRegister your personal property today with Brown University Department of Public Safety. We register lap tops, cell phones, bicycles, tablets, and more! Receive one Bear tip coin with each personal property registration! and it's free!",
      "dates":{
         "year":"unknown",
         "month":1,
         "day":29,
         "preview":"From Thomas L Shelton Jr <thomas_shelton_jr@brown.edu> for allFriday, January 29th.",
         "found":8
      },
      "times":{
         "hour":2,
         "minute":"00",
         "daynight":"PM",
         "preview":"11am - 2PM - J.W.",
         "found":12
      },
      "summary":"Receive one Bear tip coin with each personal property registration!",
      "entities":{
         "organization":[
            "Brown University Department of Public Safety",
            "Bear"
         ],
         "location":[
            "Shelton Jr"
         ],
         "email":[
            "thomas_shelton_jr@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "personal property",
            "personal",
            "property",
            "allFriday",
            "January",
            "29th",
            "11am",
            "tops",
            "<thomas_shelton_jr@brown.edu>",
            "Safety",
            "cell",
            "Bear",
            "coin",
            "tablets",
            "Brown",
            "Public",
            "Main",
            "phones",
            "J.W.",
            "Wilson"
         ],
         "date":[
            "Friday",
            "January 29th",
            "today"
         ],
         "person":[
            "Thomas L Shelton Jr <thomas_shelton_jr@brown"
         ]
      }
   },
   {
      "title":"Jodi A Byrd 'Empire's Dead' Feb. 1 @ 5.30pm",
      "content":"From Anna Thomas, Department of English <anna_thomas@brown.edu> for all\"Empire's Dead: Incivility, Indigeneity, and the Cultural Politics of Settling\"Jodi A. Byrd, Associate Professor of English and Gender and Women's Studies, University of Illinois at Urbana-ChampaignMonday, February 1 @ 5.30-7pm. Smith Buonanno Hall room 201",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":1,
         "preview":"English and Gender and Women's Studies, University of Illinois at Urbana-ChampaignMonday, February 1 @ 5.30-7pm.",
         "found":34
      },
      "places":{
         "place":"Urbana-ChampaignMonday",
         "preview":"Professor of English and Gender and Women's Studies, University of Illinois at Urbana-ChampaignMonday, February 1 @ 5.30-7pm.",
         "found":32
      },
      "entities":{
         "organization":[
            "Department of English",
            "Studies",
            "University of Illinois"
         ],
         "email":[
            "anna_thomas@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "English",
            "Smith",
            "5.30-7pm",
            "February",
            "<anna_thomas@brown.edu>",
            "Urbana-ChampaignMonday",
            "Empire",
            "Dead",
            "Illinois",
            "Studies",
            "Byrd",
            "Buonanno",
            "Incivility",
            "Women",
            "Associate",
            "Indigeneity",
            "Cultural",
            "Politics",
            "Professor",
            "Gender"
         ],
         "date":[
            "February 1 @ 5.30-7pm"
         ],
         "person":[
            "Anna Thomas",
            "Byrd"
         ]
      }
   },
   {
      "title":"Middle East Studies DUG Registration Advising",
      "content":"From Alexander Samaha <alexander_samaha@brown.edu> for all undergraduatesInterested in taking a course on the Middle East? Shopping courses in Middle East Studies but not sure what to take? Anxious about fulfilling all of your requirements in the Middle East Studies concentration?The Middle East Studies DUG will be hosting course registration advising office hours at the Underground in Faunce on Friday January 29th from 2:00-4:00pm.  Feel free to stop by with questions about the MES course offerings or what to register for the semester.",
      "dates":{
         "year":"unknown",
         "month":1,
         "day":29,
         "preview":"registration advising office hours at the Underground in Faunce on Friday January 29th from 2:00-4:00pm.",
         "found":59
      },
      "places":{
         "place":"Underground",
         "preview":"East Studies DUG will be hosting course registration advising office hours at the Underground in Faunce on Friday January 29th from 2:00-4:00pm.",
         "found":52
      },
      "summary":"Shopping courses in Middle East Studies but not sure what to take?",
      "entities":{
         "organization":[
            "MES"
         ],
         "location":[
            "Middle East"
         ],
         "email":[
            "alexander_samaha@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "Middle East",
            "Middle",
            "East",
            "free",
            "29th",
            "January",
            "Friday",
            "questions",
            "Faunce",
            "Underground",
            "hours",
            "offerings",
            "undergraduatesInterested",
            "office",
            "<alexander_samaha@brown.edu>",
            "registration",
            "semester",
            "Samaha",
            "Alexander",
            "Shopping"
         ],
         "date":[
            "Friday",
            "January 29th"
         ],
         "person":[
            "Alexander Samaha"
         ]
      }
   },
   {
      "title":"Save the Date! Donna DeSalvo of the Whitney Museum",
      "content":"From Vice Provost for the Arts <luyuan_xing@brown.edu> for all5:30 PM, Thursday, February 18Granoff Center, Martinos AuditoriumEver wonder what it's like to be a curator at one of the leading art museums in the world? Donna De Salvo, Deputy Director and Senior Curator at the Whitney Museum, led the curation of the exhibit that opened the Whitney's new building, \"America Is Hard to See.\" Her talk will focus on the new building, and the vision behind this critically acclaimed exhibit.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":18,
         "preview":"From Vice Provost for the Arts <luyuan_xing@brown.edu> for all5:30 PM, Thursday, February 18Granoff Center, Martinos AuditoriumEver wonder what it's like to be a",
         "found":11
      },
      "places":{
         "place":"Whitney Museum",
         "preview":"Donna De Salvo, Deputy Director and Senior Curator at the Whitney Museum, led the curation of the exhibit that opened",
         "found":42
      },
      "summary":"Donna De Salvo, Deputy Director and Senior Curator at the Whitney Museum, led the curation of the exhibit that opened the Whitney's new building, \"America Is Hard to See.\"",
      "entities":{
         "organization":[
            "Museum"
         ],
         "email":[
            "luyuan_xing@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "curator",
            "<luyuan_xing@brown.edu>",
            "all5",
            "museums",
            "Thursday",
            "February",
            "Arts",
            "18Granoff",
            "building",
            "Center",
            "Whitney",
            "Martinos",
            "Provost",
            "AuditoriumEver",
            "exhibit",
            "leading",
            "Donna",
            "Salvo",
            "Deputy",
            "Director"
         ],
         "date":[
            "Thursday",
            "February 18Granoff"
         ],
         "person":[
            "Donna De Salvo"
         ]
      }
   },
   {
      "title":"Spring Break in Mississippi Info Session",
      "content":"From Dean of the College <cynthia_dumin@brown.edu> for all undergraduatesCome hear about a unique opportunity for Brown students  to visit and and conduct research in  the South. Spend spring break having the experience of a lifetime in the Mississippi Delta and at Tougaloo College.Professor Francoise Hamlin will meet with interested students on Thursday, February 4th at 12:00 noon (lunch will be provided), Churchill House Lower Level (Africana Studies, 155 Angell Street).For application and more information go to the link below.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":4,
         "preview":"Tougaloo College.Professor Francoise Hamlin will meet with interested students on Thursday, February 4th at 12:00 noon (lunch will be provided), Churchill House Lower",
         "found":52
      },
      "summary":"From Dean of the College <cynthia_dumin@brown.edu> for all undergraduatesCome hear about a unique opportunity for Brown students  to visit and and conduct research in  the South.",
      "entities":{
         "organization":[
            "College",
            "Tougaloo College",
            "House",
            "Africana Studies"
         ],
         "location":[
            "Mississippi Delta"
         ],
         "email":[
            "cynthia_dumin@brown.edu"
         ],
         "url":[
            "brown.edu",
            "College.Professor"
         ],
         "keyword":[
            "students",
            "Angell",
            "Studies",
            "unique",
            "undergraduatesCome",
            "Africana",
            "opportunity",
            "Level",
            "Brown",
            "House",
            "Street",
            "Delta",
            "Mississippi",
            "Churchill",
            "break",
            "Francoise",
            "lifetime",
            "Tougaloo",
            "noon",
            "<cynthia_dumin@brown.edu>"
         ],
         "date":[
            "spring",
            "Thursday",
            "February",
            "12:00"
         ]
      }
   },
   {
      "title":"Transnational Maghrebi Legacies - luncheon seminar",
      "content":"From Middle East Studies <cmes@brown.edu> for allRegister for Feb. 3, 2016, 12:00 p.m. Middle East Studies luncheon seminar \"Transnational Maghrebi Legacies in Latin America and the Caribbean: New Directions\" with Lara Dotson-Renta.Dating back over five centuries, there has existed a legacy of artistic, literary, and political cross-pollination between Latin America, the Maghreb, and the Arab Diaspora.McKinney Room, Watson Institute. Space limited. Registration on website required.",
      "dates":{
         "year":2016,
         "month":2,
         "day":3,
         "preview":"Feb.",
         "found":8
      },
      "summary":"Dating back over five centuries, there has existed a legacy of artistic, literary, and political cross-pollination between Latin America, the Maghreb, and the Arab Diaspora.McKinney Room, Watson Institute.",
      "entities":{
         "organization":[
            "Watson Institute"
         ],
         "location":[
            "Middle East",
            "Latin America",
            "Caribbean"
         ],
         "email":[
            "cmes@brown.edu"
         ],
         "url":[
            "brown.edu",
            "Dotson-Renta.Dating",
            "Diaspora.McKinney"
         ],
         "keyword":[
            "Legacies in Latin America",
            "Latin America",
            "East Studies",
            "Legacies",
            "America",
            "Latin",
            "Space",
            "Studies",
            "Institute",
            "Watson",
            "East",
            "Room",
            "limited",
            "Diaspora.McKinney",
            "Middle",
            "Arab",
            "Maghreb",
            "literary",
            "political",
            "Dotson-Renta"
         ],
         "date":[
            "five centuries"
         ]
      }
   },
   {
      "title":"Preparing For CareerCon- make connections matter",
      "content":"From CareerLAB <careerlab@brown.edu> for all undergraduatesTODAY, Jan. 27, 6:00pm- 7:00pm at CareerLABIf you're interested in talking with alumni at CareerCon, but you're not sure what you're supposed to get out of the conversation, how to best introduce yourself, or even how to get the conversation started, then this workshop is for you! CareerLAB staff and Brown alum Deborah Mills-Scofield’82 will review principles, help you draft and practice your elevator pitch, and get you ready to connect with alumni at the CareerCon event on Jan. 30.",
      "dates":{
         "year":"unknown",
         "month":1,
         "day":27,
         "preview":"Jan.",
         "found":6
      },
      "times":{
         "hour":"7",
         "minute":"00",
         "daynight":"Unknown",
         "preview":"27, 6:00pm- 7:00pm at CareerLABIf you're interested in talking with alumni at CareerCon, but",
         "found":9
      },
      "places":{
         "place":"CareerLABIf",
         "preview":"27, 6:00pm- 7:00pm at CareerLABIf you're interested in talking with alumni at CareerCon, but you're",
         "found":10
      },
      "summary":"From CareerLAB <careerlab@brown.edu> for all undergraduatesTODAY, Jan. 27, 6:00pm- 7:00pm at CareerLABIf you're interested in talking with alumni at CareerCon, but you're not sure what you're supposed to get out of the conversation, how to best introduce yourself, or even how to get the conversation started, then this workshop is for you!",
      "entities":{
         "email":[
            "careerlab@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "alumni at CareerCon",
            "alumni at the CareerCon",
            "alumni",
            "CareerCon",
            "CareerLAB",
            "Jan.",
            "alum",
            "Deborah",
            "Mills-Scofield",
            "principles",
            "elevator",
            "Brown",
            "pitch",
            "CareerLABIf",
            "staff",
            "ready",
            "interested",
            "conversation",
            "undergraduatesTODAY",
            "workshop"
         ],
         "date":[
            "Jan. 27",
            "Jan. 30"
         ],
         "person":[
            "Brown"
         ]
      }
   },
   {
      "title":"Next Week: SHAW Talk at the JCB!",
      "content":"From JCB Library <jcb-events@brown.edu> for allPlease join us on Thursday, February 4 at 4:00 p.m. for the next JCB SHAW Talk entitled, \"Paper, Ink, Vodun, and the Inquisition\" by Cécile Fromont (University of Chicago).Please note that this is a pre-circulated paper discussion; for access to the paper, please contact us at jcb-events@brown.edu",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":4,
         "preview":"From JCB Library <jcb-events@brown.edu> for allPlease join us on Thursday, February 4 at 4:00 p.m.",
         "found":10
      },
      "summary":"Please note that this is a pre-circulated paper discussion; for access to the paper, please contact us at jcb-events@brown.edu",
      "entities":{
         "organization":[
            "JCB Library",
            "University of Chicago"
         ],
         "location":[
            "Chicago"
         ],
         "email":[
            "jcb-events@brown.edu",
            "jcb-events@brown.edu"
         ],
         "url":[
            "brown.edu",
            "brown.edu"
         ],
         "keyword":[
            "Paper",
            "Thursday",
            "February",
            "p.m.",
            "SHAW",
            "allPlease",
            "Talk",
            "Chicago",
            "University",
            "pre-circulated",
            "Inquisition",
            "Cécile",
            "Vodun",
            "Fromont",
            "<jcb-events@brown.edu>",
            "discussion",
            "Library",
            "access",
            "jcb-events@brown.edu"
         ],
         "date":[
            "Thursday",
            "February 4"
         ],
         "person":[
            "Cécile Fromont"
         ]
      }
   },
   {
      "title":"TOMORROW! Bestock on 2016 Field Season in Sudan",
      "content":"From Joukowsky Institute for Archaeology <joukowsky_institute@brown.edu> for all undergraduates, all graduate students, campus faculty, all staffColonialism in Context: New Discoveries from Brown’s 2016 Field Season in SudanLaurel Bestock (Brown University)Thursday, January 28 at 5:30pmRhode Island Hall 108Prof. Laurel Bestock, fresh from the trenches, will discuss her team's recent archaeological field season at the site of Uronarti, Sudan. She will present the most recent finds, showing how they help us understand the nuances of Egyptian colonialism. She will also give a taste of the rigors of Uronarti life, modern and ancient.",
      "dates":{
         "year":2016,
         "month":1,
         "day":28,
         "preview":"Discoveries from Brown’s 2016 Field Season in SudanLaurel Bestock (Brown University)Thursday, January 28 at 5:30pmRhode Island Hall 108Prof.",
         "found":30
      },
      "places":{
         "place":"Island Hall",
         "preview":"Brown’s 2016 Field Season in SudanLaurel Bestock (Brown University)Thursday, January 28 at 5:30pmRhode Island Hall 108Prof.",
         "found":32
      },
      "summary":"Laurel Bestock, fresh from the trenches, will discuss her team's recent archaeological field season at the site of Uronarti, Sudan.",
      "entities":{
         "organization":[
            "Joukowsky Institute for Archaeology",
            "Field Season"
         ],
         "location":[
            "SudanLaurel",
            "5:30pmRhode Island Hall",
            "Uronarti",
            "Sudan"
         ],
         "email":[
            "joukowsky_institute@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "archaeological field season",
            "Brown’s 2016 Field Season",
            "rigors of Uronarti",
            "Bestock (Brown",
            "Uronarti",
            "Archaeology",
            "Bestock",
            "Field",
            "Season",
            "Brown",
            "rigors",
            "undergraduates",
            "graduate",
            "<joukowsky_institute@brown.edu>",
            "taste",
            "colonialism",
            "students",
            "nuances",
            "Hall",
            "Egyptian"
         ],
         "date":[
            "Thursday",
            "January 28"
         ],
         "person":[
            "Brown University) Thursday"
         ]
      }
   },
   {
      "title":"Annual Martin Luther King Jr. Lecture",
      "content":"From University Events <UniversityEvents@brown.edu> for allThe Annual Martin Luther King Jr. Lecture presentsJonathan WaltonPlummer Professor of Christian Morals, Faculty of Arts and SciencesProfessor of Religion and Society, Harvard Divinity School\"Love, Power, and Empathy in an iLife Era\"Tuesday, February 2, 20166:00 p.m. Lecture7:30 p.m. ReceptionSalomon Center for Teaching, De Ciccio Family Auditorium79 Waterman StreetProvidence, RIFree and open to the public.Register here: https://mlk-jonathanwalton.eventbrite.com",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":2,
         "preview":"Society, Harvard Divinity School\"Love, Power, and Empathy in an iLife Era\"Tuesday, February 2, 20166:00 p.m.",
         "found":37
      },
      "entities":{

      }
   },
   {
      "title":"JCB! Veronica Pacheco on Music in Colonial Mexico",
      "content":"From The John Carter Brown Library <JCB-Events@brown.edu> for allWednesday,January 27, 20164:00 p.m.MacMillan Reading Room, JCB Library\"Antiphons, Huehuetl, and Catechisms: Music and Indoctrination in Colonial Huasteca, Mexico\"Join us for a presentation by Veronica Pacheco, Independent Scholar, University of California, Los Angeles. The audience is invited to view special items from the JCB collection after the talk.For more information: 401-863-2725",
      "summary":"The audience is invited to view special items from the JCB collection after the talk.For more information: 401-863-2725",
      "entities":{
         "organization":[
            "University of California"
         ],
         "location":[
            "Los Angeles"
         ],
         "email":[
            "JCB-Events@brown.edu"
         ],
         "url":[
            "brown.edu",
            "p.m.MacMillan",
            "talk.For"
         ],
         "keyword":[
            "Library",
            "special",
            "audience",
            "Angeles",
            "California",
            "University",
            "<JCB-Events@brown.edu>",
            "Scholar",
            "Pacheco",
            "Mexico",
            "Independent",
            "Huasteca",
            "Veronica",
            "presentation",
            "items",
            "Colonial",
            "Catechisms",
            "allWednesday",
            "Indoctrination",
            "Huehuetl"
         ],
         "date":[
            "Wednesday",
            "January 27"
         ],
         "person":[
            "John Carter Brown Library",
            "Veronica Pacheco"
         ],
         "phone":[
            "401-863-2725"
         ]
      }
   },
   {
      "title":"Dr. Martin Luther King Jr. Remembrance Forum",
      "content":"From Alpha Phi Alpha Fraternity, Inc <ricardo_mullings@brown.edu> for all undergraduates, campus faculty, all staffJoin us for our MLK Remembrance forum featuring Herman W. Hemingway, attorney and retired professor at the University of Mass. at Boston. In 1953, Hemingway became the first Black man to graduate from Brandeis University and since then has lived up to the promise of the civil rights anthem. Through pledging the Sigma Chapter of Alpha Phi Alpha, Hemingway became the line brother and close friend of Dr. Martin Luther King, Jr.January 28th4:30PMSmith-Buonanno Hall 201",
      "places":{
         "place":"University",
         "preview":"Hemingway, attorney and retired professor at the University of Mass.",
         "found":28
      },
      "summary":{

      },
      "entities":{
         "organization":[
            "University of Mass",
            "Brandeis University"
         ],
         "location":[
            "Boston"
         ],
         "email":[
            "ricardo_mullings@brown.edu"
         ],
         "url":[
            "brown.edu",
            "Jr.January"
         ],
         "keyword":[
            "Alpha Phi Alpha",
            "Hemingway",
            "staffJoin us for our MLK Remembrance",
            "University",
            "Alpha",
            "King",
            "Luther",
            "Martin",
            "Jr.January",
            "friend",
            "Remembrance",
            "staffJoin",
            "faculty",
            "forum",
            "campus",
            "Herman",
            "promise",
            "Brandeis",
            "civil",
            "attorney"
         ],
         "date":[
            "1953"
         ],
         "person":[
            "Herman W. Hemingway",
            "Hemingway",
            "Martin Luther King"
         ]
      }
   },
   {
      "title":"Talk by Alcira Dueñas on Feb 3 at the Faculty Club",
      "content":"From The John Carter Brown Library <JCB-Events@brown.edu> for allWednesday,February 3, 201612:00 p.m.Faculty Club\"Better than Spaniards and Better than the Indians: The Politics and Perils of Andeans' Excelling in the ‘Ciudad Letrada’ \"We invite you to join us for a special presentation by Alcira Dueñas, Professor of Latin American History at Ohio State University, Newark. Professor Dueñas is a research fellow at the John Carter Brown Library and will share insight on her work in progress at the Library.For more information: 401-863-2725",
      "places":{
         "place":"John Carter",
         "preview":"Professor Dueñas is a research fellow at the John Carter Brown Library and will share insight on her",
         "found":60
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Volunteer with Camp Kesem this summer! Aug 21-26",
      "content":"From Mindy L Ng <mindy_ng@brown.edu> for all undergraduatesAre you looking for something meaningful to do this summer? Do you like kids, campfires, silly songs, and helping others? Apply to be a counselor at Camp Kesem: a cost-free, magical week of summer camp for kids who have a parent affected by cancer. Applications due on Jan. 29 at 11:59PM and camp dates are Aug. 21-26.Go to campkesem.org/brown or visit us on Facebook for more information!Make a s’more. Make a difference. Make magic.",
      "dates":{
         "year":"unknown",
         "month":1,
         "day":29,
         "preview":"Jan.",
         "found":54
      },
      "times":{
         "hour":"11",
         "minute":"59",
         "daynight":"Unknown",
         "preview":"29 at 11:59PM and camp dates are Aug.",
         "found":57
      },
      "places":{
         "place":"Camp Kesem:",
         "preview":"Apply to be a counselor at Camp Kesem: a cost-free, magical week of summer camp for kids",
         "found":32
      },
      "summary":{

      },
      "entities":{
         "location":[
            "Camp Kesem"
         ],
         "email":[
            "mindy_ng@brown.edu"
         ],
         "url":[
            "brown.edu",
            "21-26.Go",
            "campkesem.org/brown"
         ],
         "keyword":[
            "summer camp for kids",
            "Camp",
            "summer",
            "kids",
            "magical",
            "meaningful",
            "Aug.",
            "campkesem.org/brown",
            "Facebook",
            "dates",
            "campfires",
            "undergraduatesAre",
            "silly",
            "songs",
            "week",
            "cost-free",
            "parent",
            "Jan.",
            "information!Make",
            "Applications"
         ],
         "date":[
            "this summer",
            "summer",
            "Jan. 29 at 11:59PM"
         ]
      }
   },
   {
      "title":"ADHD Support Group",
      "content":"From Erin L Lane-Aaronian <erin_lane-aaronian@brown.edu> for all studentsCo-sponsored by SEAS and CAPS. The group will be meeting from 12:00-1:00 pm on Thursdays, starting 2/4/16. Group typically meets in the Chaplain's Conference Room, JWW, 4th floor, but 2/4/16 session will be in JWW room 440. Lunch is provided.RSVP to stephanie_veces@brown.edu or erin_lane-aaronian@brown.edu",
      "dates":{
         "year":16,
         "month":2,
         "day":4,
         "preview":"2/4/16.",
         "found":23
      },
      "summary":"The group will be meeting from 12:00-1:00 pm on Thursdays, starting 2/4/16.",
      "entities":{
         "organization":[
            "Conference Room",
            "JWW"
         ],
         "email":[
            "erin_lane-aaronian@brown.edu",
            "stephanie_veces@brown.edu",
            "erin_lane-aaronian@brown.edu"
         ],
         "url":[
            "brown.edu",
            "provided.RSVP",
            "brown.edu",
            "brown.edu"
         ],
         "keyword":[
            "Room",
            "studentsCo-sponsored",
            "Lunch",
            "<erin_lane-aaronian@brown.edu>",
            "provided.RSVP",
            "SEAS",
            "group",
            "session",
            "CAPS",
            "Lane-Aaronian",
            "stephanie_veces@brown.edu",
            "floor",
            "Erin",
            "Conference",
            "Chaplain",
            "erin_lane-aaronian@brown.edu"
         ],
         "date":[
            "2/4/16"
         ]
      }
   },
   {
      "title":"Register Your Personal Property with DPS",
      "content":"From Thomas L Shelton Jr <thomas_shelton_jr@brown.edu> for allWednesday, January 27th. 1PM - 4PM - Rockefeller Library (Near Heckler Room)Register your personal property with Brown University Department of Public Safety. We register lap tops, cell phones, bicycles, tablets, and more! Receive one Bear tip coin with each personal property registration!",
      "dates":{
         "year":"unknown",
         "month":1,
         "day":27,
         "preview":"From Thomas L Shelton Jr <thomas_shelton_jr@brown.edu> for allWednesday, January 27th.",
         "found":8
      },
      "times":{
         "hour":4,
         "minute":"00",
         "daynight":"PM",
         "preview":"1PM - 4PM - Rockefeller Library (Near Heckler Room)Register your personal property with Brown",
         "found":12
      },
      "summary":{

      },
      "entities":{
         "organization":[
            "Brown University Department of Public Safety",
            "Bear"
         ],
         "location":[
            "Shelton Jr"
         ],
         "email":[
            "thomas_shelton_jr@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "personal property",
            "personal",
            "property",
            "allWednesday",
            "January",
            "27th",
            "Rockefeller",
            "<thomas_shelton_jr@brown.edu>",
            "tops",
            "cell",
            "Bear",
            "tablets",
            "bicycles",
            "Safety",
            "Library",
            "phones",
            "Heckler",
            "University",
            "Room",
            "Department"
         ],
         "date":[
            "Wednesday",
            "January 27th"
         ],
         "person":[
            "Thomas L Shelton Jr <thomas_shelton_jr@brown"
         ]
      }
   },
   {
      "title":"Patsy Lewis, Development Dilemmas of small states",
      "content":"From Center for the Study of Race and Ethnicity in America <csrea@brown.edu> for allWhat I Am Thinking About Now: Patsy Lewis, Watson Faculty Fellow & Visiting Scholar, AfricanaTues. 2/2, 12-1pmCSREA Conference Rm, Hillel 303RSVP: csrea@brown.eduThis presentation charts the myriad challenges confronting small states, their general neglect in development debates, and the various approaches to development on which they have embarked. It points to the general failing of existing attempts to theorize small states and suggests alternative approaches to their study.",
      "times":{
         "hour":12,
         "minute":"00",
         "daynight":"PM",
         "preview":"2/2, 12-1pmCSREA Conference Rm, Hillel 303RSVP: csrea@brown.eduThis presentation charts the myriad challenges confronting",
         "found":29
      },
      "summary":"It points to the general failing of existing attempts to theorize small states and suggests alternative approaches to their study.",
      "entities":{

      }
   },
   {
      "title":"CLAB 0010: Unpacking CareerLAB",
      "content":"From CareerLAB <careerlab@brown.edu> for all undergraduatesJoin us TODAY (1/28) 6pm- 7pm at CareerLABPeer Career Advisors will teach you how to get started with the necessary tools offered by CareerLAB including: how to write a resume or cover letter, search for internships through BrownConnect, create your career profile in the Brown Job Board (JIB), and use Twitter and LinkedIn for the internship hunt!It's the perfect first step with CareerLAB.  We make it fun, and pizza will be provided.RSVP: http://tinyurl.com/h6aezzz",
      "times":{
         "hour":7,
         "minute":"00",
         "daynight":"PM",
         "preview":"From CareerLAB <careerlab@brown.edu> for all undergraduatesJoin us TODAY (1/28) 6pm- 7pm at CareerLABPeer Career Advisors will teach you how to get started",
         "found":10
      },
      "entities":{

      }
   },
   {
      "title":"Feb. 4 - The Crumbling of the Pax Americana",
      "content":"From Watson Institute <watson_institute@brown.edu> for all undergraduates, all graduate students, campus faculty, all staffThursday, February 4 at 4 p.m.Salomon Center for Teaching-Room 001, Main Green - 79 Waterman StreetReception to follow.What are the prospects for reestablishing an American role in world affairs commensurate with the matchless heritage of global leadership and the extraordinary natural endowment of the United States?This lecture is the first of a three part series delivered by          Chas Freeman.Part of the Chong Wook Lee and Vartan Gregorian Distinguished Lecture Series.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":4,
         "preview":"<watson_institute@brown.edu> for all undergraduates, all graduate students, campus faculty, all staffThursday, February 4 at 4 p.m.Salomon Center for Teaching-Room 001, Main Green -",
         "found":14
      },
      "places":{
         "place":"Center",
         "preview":"all undergraduates, all graduate students, campus faculty, all staffThursday, February 4 at 4 p.m.Salomon Center for Teaching-Room 001, Main Green - 79 Waterman",
         "found":16
      },
      "entities":{
         "organization":[
            "From",
            "Watson Institute",
            "Center for Teaching-Room"
         ],
         "email":[
            "watson_institute@brown.edu"
         ],
         "url":[
            "brown.edu",
            "p.m.Salomon",
            "follow.What",
            "Freeman.Part"
         ],
         "keyword":[
            "lecture is the first of a three part series",
            "Lecture Series",
            "lecture",
            "series",
            "undergraduates",
            "graduate",
            "students",
            "campus",
            "faculty",
            "staffThursday",
            "February",
            "follow.What",
            "role",
            "prospects",
            "StreetReception",
            "affairs",
            "matchless",
            "Waterman",
            "global",
            "Green"
         ],
         "date":[
            "Thursday",
            "February 4"
         ]
      }
   },
   {
      "title":"Opening: First public display of slave shackles",
      "content":"From Center for the Study of Slavery and Justice <ruth_clark@brown.edu> for allTomorrow, Friday, January 29th, 20162:30PMJohn Hay Library, 20 Prospect StreetPlease join us tomorrow for the opening of Vestiges of the Transatlantic Slave Trade, an exhibition featuring the first public display of slavery shackles on loan from the International Slavery Museum in Liverpool.On display through March 13, 2016.",
      "dates":{
         "year":"unknown",
         "month":1,
         "day":29,
         "preview":"for the Study of Slavery and Justice <ruth_clark@brown.edu> for allTomorrow, Friday, January 29th, 20162:30PMJohn Hay Library, 20 Prospect StreetPlease join us tomorrow for",
         "found":13
      },
      "summary":{

      },
      "entities":{
         "organization":[
            "Center for the Study of Slavery",
            "International Slavery Museum"
         ],
         "location":[
            "Prospect"
         ],
         "email":[
            "ruth_clark@brown.edu"
         ],
         "url":[
            "brown.edu",
            "Liverpool.On"
         ],
         "keyword":[
            "Slavery",
            "<ruth_clark@brown.edu>",
            "allTomorrow",
            "Friday",
            "PMJohn",
            "Library",
            "Vestiges",
            "opening",
            "StreetPlease",
            "tomorrow",
            "Prospect",
            "Justice",
            "Transatlantic",
            "29th",
            "January",
            "exhibition",
            "Slave",
            "Trade",
            "public",
            "display"
         ],
         "date":[
            "Friday",
            "January 29th",
            "tomorrow",
            "March 13, 2016"
         ],
         "person":[
            "20162:30PMJohn",
            "Hay Library"
         ]
      }
   },
   {
      "title":"2/12 - Public Lecture by Ramzi Kassem, CUNY Law",
      "content":"From Center for the Study of Race and Ethnicity in America <csrea@brown.edu> for all\"9/11 Warping and its Discontents: Our Security State, Racism, and Foreign Policy\"Ramzi Kassem, Associate Professor of Law, CUNY School of LawFriday, February 12, 4:00pmSmith-Buonanno 106Join us for an exploration of the links between 9/11 warping (the distorting effect of formulating policy through a total security prism), structural racism, and U.S. foreign policy.Free & open to the public.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":12,
         "preview":"Foreign Policy\"Ramzi Kassem, Associate Professor of Law, CUNY School of LawFriday, February 12, 4:00pmSmith-Buonanno 106Join us for an exploration of the links between",
         "found":34
      },
      "entities":{

      }
   },
   {
      "title":"SAVE THE DATE: 2/12:  Creole Grammatology",
      "content":"From COGUT CENTER FOR THE HUMANITIES <traude_kastner@brown.edu> for all undergraduates, humanities grad students, social sciences grad students, campus facultyYou are invited to attend any or all sessions of the symposium \"Creole Grammatology: What Became of European Letters, Images and Memory in Colonial Latin America\" on Friday, February 12, from 9:30AM–6:00PM, in Pembroke Hall, 172 Meeting Street.Speakers include Gordon Whittaker, Goettingen University; Jessica Stair, UC Berkeley; Laura Leon Llerena, Northwestern; Tom Cummins, Harvard; and Andrew Laird, Brown University.For more information about schedule and speakers please visit link below.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":12,
         "preview":"European Letters, Images and Memory in Colonial Latin America\" on Friday, February 12, from 9:30AM–6:00PM, in Pembroke Hall, 172 Meeting Street.Speakers include Gordon",
         "found":46
      },
      "entities":{

      }
   },
   {
      "title":"TODAY- The Soft Underbelly of Capitalism",
      "content":"From Watson Institute <watson_institute@brown.edu> for all undergraduates, all graduate students, campus faculty, all staffThursday, January 28 at 4 p.m.Joukowsky Forum, Watson InstituteKarthik Ramanna is an associate professor of business administration at Harvard Business School. “Thin political markets” are the processes through which some of the most complex and critical institutions of our capitalist system are determined. In thin political markets, corporate special interests are largely unopposed because of both their tacit knowledge and the general public’s low awareness of the issues.",
      "dates":{
         "year":"unknown",
         "month":1,
         "day":28,
         "preview":"<watson_institute@brown.edu> for all undergraduates, all graduate students, campus faculty, all staffThursday, January 28 at 4 p.m.Joukowsky Forum, Watson InstituteKarthik Ramanna is an associate",
         "found":14
      },
      "places":{
         "place":"Forum",
         "preview":"all undergraduates, all graduate students, campus faculty, all staffThursday, January 28 at 4 p.m.Joukowsky Forum, Watson InstituteKarthik Ramanna is an associate professor of",
         "found":16
      },
      "summary":{

      },
      "entities":{
         "organization":[
            "From",
            "Watson Institute",
            "Forum",
            "Watson InstituteKarthik Ramanna",
            "Harvard Business School"
         ],
         "email":[
            "watson_institute@brown.edu"
         ],
         "url":[
            "brown.edu",
            "p.m.Joukowsky"
         ],
         "keyword":[
            "Thin political markets",
            "thin political markets",
            "Watson Institute",
            "Watson",
            "Institute",
            "markets",
            "Thin",
            "political",
            "general",
            "knowledge",
            "tacit",
            "business",
            "public",
            "unopposed",
            "faculty",
            "January",
            "staffThursday",
            "campus",
            "p.m.Joukowsky",
            "undergraduates"
         ],
         "date":[
            "Thursday",
            "January 28"
         ]
      }
   },
   {
      "title":"TONIGHT: Opening Night Reception for 2x4 Exhibit",
      "content":"From Cassie A Bower <cassie_bower@brown.edu> for allJan. 28 (Tonight!): Opening Night Reception, Granoff Center, 8-10 pmCelebrate the opening of the eighth annual Brown|RISD Dual Degree  Program exhibition by attending a reception with interactive pieces, performances, and refreshments! 2 x 4 features work that responds to, embodies, and comments on ideas of fundamentals and construction.  All work is the product of BRDD students who are currently pursuing degrees at both institutions. 2x4 will be open to the public until 2/12.",
      "summary":"All work is the product of BRDD students who are currently pursuing degrees at both institutions.",
      "entities":{
         "keyword":[
            "Opening",
            "Degree",
            "Reception",
            "allJan",
            "Tonight",
            "ideas",
            "fundamentals",
            "comments",
            "construction",
            "features",
            "students",
            "product",
            "refreshments",
            "BRDD",
            "performances",
            "work",
            "<cassie_bower@brown.edu>",
            "Brown",
            "pieces",
            "Program"
         ],
         "url":[
            "brown.edu"
         ],
         "email":[
            "cassie_bower@brown.edu"
         ],
         "organization":[
            "BRDD"
         ]
      }
   },
   {
      "title":"Rasa in Yoga and Yoga in Performance",
      "content":"From Anne D Heyrman-Hart <anne_heyrman-hart@brown.edu> for allPlease join Brown Contemplative Studies and Theatre Arts and Performance Studies for a presentation and dance performance by Priyadarshini Shome that highlights the Natya Sastra and Indian Sanskrit Performance Techniques that are a complete Yogic System of embodied practice and lead to ultimate Rasa or aesthetic evocation both for the performer and the spectator. Ms. Shome will be performing on Friday, February 5, 3 - 5 pm in Ashamu Dance Studio, 77 Waterman St.  Free and open to the public.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":5,
         "preview":"Shome will be performing on Friday, February 5, 3 - 5 pm in Ashamu Dance Studio, 77 Waterman",
         "found":67
      },
      "times":{
         "hour":5,
         "minute":"00",
         "daynight":"PM",
         "preview":"Shome will be performing on Friday, February 5, 3 - 5 pm in Ashamu Dance Studio, 77 Waterman St.",
         "found":71
      },
      "places":{
         "place":"Rasa",
         "preview":"that are a complete Yogic System of embodied practice and lead to ultimate Rasa or aesthetic evocation both for the performer and the",
         "found":47
      },
      "summary":"Ms. Shome will be performing on Friday, February 5, 3 - 5 pm in Ashamu Dance Studio, 77 Waterman St.  Free and open to the public.",
      "entities":{

      }
   },
   {
      "title":"Pathology Seminar Presentation",
      "content":"From Department of Pathology and Laboratory Medicine <bijaya_karanjit@brown.edu> for all students, campus faculty, all staffThe department of Pathology and Laboratory Medicine invites you to attend a seminar presentation titled “Nanoparticles have Landed-Then What?\"”by Nagarun Konduru, Ph.D., Postdoctoral Research Fellow at the Harvard T.H. Chan School of Public Health. This presentation will take place on Jan. 29th, Friday at 11:30 a.m. in Room 107 at 70 Ship St. All are welcome.",
      "dates":{
         "year":"unknown",
         "month":1,
         "day":29,
         "preview":"Jan.",
         "found":54
      },
      "places":{
         "place":"Harvard TH.",
         "preview":"titled “Nanoparticles have Landed-Then What?\"”by Nagarun Konduru, Ph.D., Postdoctoral Research Fellow at the Harvard T.H.",
         "found":39
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Mark your calendar: JS DUG food/film/discussion",
      "content":"From Susan S Rottenberg <susan_rottenberg@brown.edu> for all undergraduatesMark your calendar for Judaic Studies DUG FILMS THIS SEMESTER:\"Walk on Water\", Thursday, February 11th in Salomon 001. \"Everything is Illuminated\", March 17th in 85 Waterman St #130. \"Sunshine\", May 5th in 85 Waterman St #130.  Food/refreshments at 6 PM, film screening @ 7 PM immediately followed by faculty-led discussion. Join the JS listserv to get all DUG announcements.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":11,
         "preview":"calendar for Judaic Studies DUG FILMS THIS SEMESTER:\"Walk on Water\", Thursday, February 11th in Salomon 001.",
         "found":20
      },
      "times":{
         "hour":7,
         "minute":"00",
         "daynight":"PM",
         "preview":"Food/refreshments at 6 PM, film screening @ 7 PM immediately followed by faculty-led discussion.",
         "found":50
      },
      "places":{
         "place":"DUG",
         "preview":"Join the JS listserv to get all DUG announcements.",
         "found":61
      },
      "summary":"Food/refreshments at 6 PM, film screening @ 7 PM immediately followed by faculty-led discussion.",
      "entities":{
         "organization":[
            "Judaic Studies DUG FILMS THIS SEMESTER",
            "Salomon",
            "JS"
         ],
         "location":[
            "5th"
         ],
         "email":[
            "susan_rottenberg@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "film screening @ 7 PM immediately followed by faculty-led",
            "FILMS",
            "calendar",
            "undergraduatesMark",
            "Judaic",
            "faculty-led",
            "Studies",
            "screening",
            "Waterman",
            "<susan_rottenberg@brown.edu>",
            "Thursday",
            "Water",
            "SEMESTER",
            "discussion",
            "February",
            "11th",
            "Salomon",
            "March",
            "Rottenberg",
            "listserv"
         ],
         "date":[
            "Thursday",
            "February 11th",
            "March 17th",
            "May"
         ]
      }
   },
   {
      "title":"Tonight! Korean 'Comfort Women' Film and Q&A",
      "content":"From Laura A Magee <eas@brown.edu> for allPlease join the Department of East Asian Studies on the evening of Thursday, January 28, for a special screening of \"Sprits' Homecoming,\" a new film about war-time Korean 'Comfort Women' by Director Cho Junglae. Director Cho will be visiting Brown and has agreed to participate in a Q&A with the audience after the screening. The film was recently featured in the New York Times.Time: 7:00pm, Thursday, January 28Place: List Art, Rm. 120",
      "dates":{
         "year":"unknown",
         "month":1,
         "day":28,
         "preview":"the Department of East Asian Studies on the evening of Thursday, January 28, for a special screening of \"Sprits' Homecoming,\" a new film",
         "found":19
      },
      "times":{
         "hour":"7",
         "minute":"00",
         "daynight":"Unknown",
         "preview":"The film was recently featured in the New York Times.Time: 7:00pm, Thursday, January 28Place: List Art, Rm.",
         "found":70
      },
      "summary":"From Laura A Magee <eas@brown.edu> for allPlease join the Department of East Asian Studies on the evening of Thursday, January 28, for a special screening of \"Sprits' Homecoming,\" a new film about war-time Korean 'Comfort Women' by Director Cho Junglae.",
      "entities":{
         "organization":[
            "Department of East Asian Studies"
         ],
         "location":[
            "New York"
         ],
         "email":[
            "eas@brown.edu"
         ],
         "url":[
            "brown.edu",
            "Times.Time"
         ],
         "keyword":[
            "Thursday",
            "film",
            "screening",
            "January",
            "allPlease",
            "Department",
            "East",
            "Asian",
            "<eas@brown.edu>",
            "Studies",
            "evening",
            "Director",
            "Times.Time",
            "special",
            "Sprits",
            "York",
            "Magee",
            "war-time",
            "Homecoming",
            "Korean"
         ],
         "date":[
            "Thursday",
            "January 28",
            "January 28Place"
         ]
      }
   },
   {
      "title":"Jewish Journeys: Michael Douglas & Natan Sharansky",
      "content":"From University Event and Conference Services <michele_calnan@brown.edu> for allAward-winning actor Michael Douglas and historic politician and Soviet Jew activist Natan Sharansky may not seem to have led similar lives. But both have unique stories to tell of the role faith, religious pluralism and human rights have played in their personal journeys.Join these two renowned figures as they discuss their relationships with Judaism at \"Jewish Journeys: A Conversation with Michael Douglas and Natan Sharansky\"1/28/167:30 pm followed by Q&ASalomon 101Registration required",
      "summary":"From University Event and Conference Services <michele_calnan@brown.edu> for allAward-winning actor Michael Douglas and historic politician and Soviet Jew activist Natan Sharansky may not seem to have led similar lives.",
      "entities":{

      }
   },
   {
      "title":"Insomnia at Work,  a lecture by Lorenzo Chiesa",
      "content":"From Pembroke Center <Pembroke_Center@brown.edu> for all undergraduates, humanities grad students, campus faculty, all staff\"Insomnia at Work: Between Psychoanalysis and Post-Workerism\"A lecture by Lorenzo Chiesa, Director, Genoa School of HumanitiesSAVE THE DATETuesday, February 16Pembroke Hall 3055:30 pmSponsored by the Pembroke Center and the Marshall Woods Fine Arts Lectureship",
      "dates":{
         "year":3055,
         "month":2,
         "day":16,
         "preview":"lecture by Lorenzo Chiesa, Director, Genoa School of HumanitiesSAVE THE DATETuesday, February 16Pembroke Hall 3055:30 pmSponsored by the Pembroke Center and the Marshall",
         "found":31
      },
      "entities":{

      }
   },
   {
      "title":"Space Horizons 2016 Workshop",
      "content":"From Tomoya A Mori <tomoya_mori@brown.edu> for allLooking to explore the possibility of lunar settlement?On February 19–21, the School of Engineering will host Space Horizons 2016, an integrative 3-day workshop that will invite students and professionals from all disciplines to take an integrated design approach to conceptualize the International Lunar City, addressing multiple aspects of the concept: Infrastructure, Politics, Science, Business&Technology. Registration is now open.Visit: http://www.spacehorizonsworkshop.com",
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Mellon Mays Information Session, Wed February 3",
      "content":"From Wendy A Sheridan <wendy_sheridan@brown.edu> for 1st year students, 2nd year students, campus faculty, all staffAre you a sophomore interested in conducting research and possibly pursuing a PhD? Do you have a commitment to eradicating racial disparities in higher ed? If so, join us for a reception & info. session to learn more about the Mellon Mays Undergraduate Fellowship Program. Dean Mary Grace Almandrez will be joined by current Mellon Fellows to answer your questions.Wednesday, February 3 4pm, Faculty Club (1 Magee Street, across from Keeney Quad)",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":3,
         "preview":"will be joined by current Mellon Fellows to answer your questions.Wednesday, February 3 4pm, Faculty Club (1 Magee Street, across from Keeney Quad)",
         "found":75
      },
      "times":{
         "hour":4,
         "minute":"00",
         "daynight":"PM",
         "preview":"joined by current Mellon Fellows to answer your questions.Wednesday, February 3 4pm, Faculty Club (1 Magee Street, across from Keeney Quad)",
         "found":77
      },
      "summary":"Dean Mary Grace Almandrez will be joined by current Mellon Fellows to answer your questions.Wednesday, February 3 4pm, Faculty Club (1 Magee Street, across from Keeney Quad)",
      "entities":{

      }
   },
   {
      "title":"Memorial Service for Prof. Emeritus Abbott Gleason",
      "content":"From Office of the Chaplains and Religious Life <jessica_wiles@brown.edu> for all students, campus faculty, all staffA memorial service for Abbott (Tom) Gleason, Professor Emeritus of History and Faculty Member in the Watson Institute, will be held Saturday, January 30 at 1:30 p.m. in First Unitarian Church of Providence, One Benevolent Street, Providence. All are welcome.",
      "dates":{
         "year":"unknown",
         "month":1,
         "day":30,
         "preview":"and Faculty Member in the Watson Institute, will be held Saturday, January 30 at 1:30 p.m.",
         "found":37
      },
      "entities":{

      }
   },
   {
      "title":"Brown-Harvard-MIT Joint Seminar @ Harvard | Feb 5",
      "content":"From Justine M Brown <justine_brown@brown.edu> for all undergraduates, humanities grad students, social sciences grad students, campus faculty, all staffJoint Seminar on South Asian Politics at Harvard - Adam Ziegfeld | Why Regional Parties? Clientelism, Elites, and the Indian Party System. February 5, 2016.",
      "dates":{
         "year":2016,
         "month":2,
         "day":5,
         "preview":"February 5, 2016.",
         "found":40
      },
      "places":{
         "place":"Harvard Adam",
         "preview":"grad students, campus faculty, all staffJoint Seminar on South Asian Politics at Harvard - Adam Ziegfeld | Why Regional Parties?",
         "found":24
      },
      "summary":"Clientelism, Elites, and the Indian Party System.",
      "entities":{

      }
   },
   {
      "title":"TOMORROW:  Kaffeestunde (German Coffee hour)",
      "content":"From German Studies <wendy_perelman@brown.edu> for all undergraduates, all graduate students, campus facultyJoin us on Fridays from 3-4pm for German conversation over coffee and snacks at the German Studies Department, 190 Hope Street, Library. German speakers of all levels are welcome.Kaffeestunde will be held every Friday from 1/29 - 4/29.",
      "times":{
         "hour":3,
         "minute":"00",
         "daynight":"PM",
         "preview":"all undergraduates, all graduate students, campus facultyJoin us on Fridays from 3-4pm for German conversation over coffee and snacks at the German Studies",
         "found":16
      },
      "places":{
         "place":"German Studies",
         "preview":"on Fridays from 3-4pm for German conversation over coffee and snacks at the German Studies Department, 190 Hope Street, Library.",
         "found":24
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Pediatric Research Colloquium",
      "content":"From James F Padbury <james_padbury@brown.edu> for all students, all facultyPediatric Research ColloquiumJanuary 29, 2016Amy Fleischman, M.D., MMScAssociate Clinical Director, EndocrinologyMedical Director, Optimal Weight for Life ProgramAssistant Professor, Division of EndocrinologyChildren’s Hospital Boston“The Pathophysiology of Insulin Resistance in Pediatric Obesity\"Women & Infants Hospital, South 41:30 – 2:30 p.m.Light Refreshments will be served",
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Green Corps Information Session",
      "content":"From CareerLAB <careerlab@brown.edu> for all undergraduatesTuesday, 02-02-16, 6:00 at CareerLAB: Green Corps is looking for college graduates who are ready to take on the most pressing environmental challenges of our day and join the Green Corps class of 2017. We are hiring for our year-long, paid training program during which participants receive eight weeks of classroom training and spend the remainder of the year running campaigns for established non-profits.NOTE: This session is offered Monday, 02/01 and again Tuesday, 02/02.",
      "entities":{
         "organization":[
            "Green Corps"
         ],
         "location":[
            "Green"
         ],
         "email":[
            "careerlab@brown.edu"
         ],
         "url":[
            "brown.edu",
            "non-profits.NOTE"
         ],
         "keyword":[
            "Green Corps",
            "Corps",
            "Green",
            "training",
            "non-profits",
            "established",
            "campaigns",
            "year",
            "session",
            "remainder",
            "environmental",
            "graduates",
            "challenges",
            "pressing",
            "college",
            "ready",
            "class",
            "classroom",
            "year-long",
            "Monday"
         ],
         "date":[
            "2017",
            "Monday",
            "Tuesday"
         ],
         "phone":[
            "02-02-16"
         ]
      }
   },
   {
      "title":"Brown EMS Information Session",
      "content":"From Harin Lee <harin_lee@brown.edu> for all undergraduatesThere will be an information session for students interested in volunteering with Brown EMS beginning in Fall 2016 on Thursday, February 11th at 7:00 PM in Metcalf Auditorium. There will be information about Brown EMS and the application process. Please plan to attend if you will be applying to work as a volunteer EMT.  Reach out to harin_lee@brown.edu with any questions!",
      "dates":{
         "year":2016,
         "month":2,
         "day":11,
         "preview":"in volunteering with Brown EMS beginning in Fall 2016 on Thursday, February 11th at 7:00 PM in Metcalf Auditorium.",
         "found":26
      },
      "times":{
         "hour":"7",
         "minute":"00",
         "daynight":"PM",
         "preview":"Brown EMS beginning in Fall 2016 on Thursday, February 11th at 7:00 PM in Metcalf Auditorium.",
         "found":29
      },
      "summary":{

      },
      "entities":{
         "date":[
            "2016",
            "Thursday",
            "February 11th"
         ],
         "keyword":[
            "Brown",
            "session",
            "process",
            "students",
            "application",
            "interested",
            "Auditorium",
            "plan",
            "Fall",
            "Metcalf",
            "undergraduatesThere",
            "Thursday",
            "February",
            "11th",
            "<harin_lee@brown.edu>",
            "volunteer",
            "Harin",
            "questions"
         ],
         "url":[
            "brown.edu",
            "brown.edu"
         ],
         "email":[
            "harin_lee@brown.edu",
            "harin_lee@brown.edu"
         ]
      }
   },
   {
      "title":"KVH Industries, Inc. Information Session",
      "content":"From CareerLAB <careerlab@brown.edu> for all undergraduates, all graduate studentsTuesday, 02-02-16, 6:00 p.m. at CareerLAB. We're hiring the next generation of Software Engineering Talent!Disruptive technology and smart people - that's why software engineers want to join KVH Industries.  Of course, pay, a great work environment and career growth are important but our real edge is giving talented people the opportunity to put their stamp on a growing company that values innovation.",
      "places":{
         "place":"CareerLAB",
         "preview":"at CareerLAB.",
         "found":12
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"TODAY! Annual Martin Luther King Jr. Lecture",
      "content":"From University Events <UniversityEvents@brown.edu> for allThe Annual Martin Luther King Jr. Lecture presentsJonathan WaltonPlummer Professor of Christian Morals, Faculty of Arts and SciencesProfessor of Religion and Society, Harvard Divinity School\"Love, Power, and Empathy in an iLife Era\"Tuesday, February 2, 20166:00 p.m. Lecture7:30 p.m. ReceptionSalomon Center for Teaching, De Ciccio Family Auditorium79 Waterman StreetProvidence, RIFree and open to the public.Register here: https://mlk-jonathanwalton.eventbrite.com",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":2,
         "preview":"Society, Harvard Divinity School\"Love, Power, and Empathy in an iLife Era\"Tuesday, February 2, 20166:00 p.m.",
         "found":37
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Brown Market Shares Program FLATBREAD BENEFIT!",
      "content":"From Bella Du Mond <isabella_dumond@brown.edu> for allCome by Flatbread Pizza Company on Tuesday, February 9th from 5–9 PM to support Brown Market Shares Program! Enjoy delicious pizza made from local ingredients while learning more about our program and the farmers we love! A portion of the night's proceeds will help fund our subsidized program.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":9,
         "preview":"Du Mond <isabella_dumond@brown.edu> for allCome by Flatbread Pizza Company on Tuesday, February 9th from 5–9 PM to support Brown Market Shares Program!",
         "found":13
      },
      "places":{
         "place":"Brown Market",
         "preview":"by Flatbread Pizza Company on Tuesday, February 9th from 5–9 PM to support Brown Market Shares Program!",
         "found":18
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"TOMORROW - Fernando Llanos, Purdue University",
      "content":"From Michelle M Ross <michelle_ross@brown.edu> for all undergraduates, all graduate students, campus faculty, all staffMichael S. Goodman '74 Memorial Lecture Series. Speaker: Fernando Llanos, Purdue University. Title: Relative importance of experience with 1st-order versus 2nd-order statistics in perceptual and statistical learning of vowel categories. Department of Cognitive, Linguistic & Psychological Sciences, Friedman Auditorium, Metcalf 101, 190 Thayer Street, Wednesday, February 3, 2016, 4 p.m.",
      "dates":{
         "year":2016,
         "month":2,
         "day":3,
         "preview":"& Psychological Sciences, Friedman Auditorium, Metcalf 101, 190 Thayer Street, Wednesday, February 3, 2016, 4 p.m.",
         "found":59
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Multiracial Dating Panel",
      "content":"From Multiracial Heritage Series <samuel_jones@brown.edu> for all undergraduatesJoin the Multiracial Heritage Series in Salomon 001 from 7:00-8:30 PM tonight, February 2nd, for a student panel on Multiracial dating moderated by Professor Barbara Tannenbaum. All are welcome to attend. If you have any questions, please contact Nimesha Gerlus (nimesha_gerlus@brown.edu) or Sam Jones (samuel_jones@brown.edu).",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":2,
         "preview":"the Multiracial Heritage Series in Salomon 001 from 7:00-8:30 PM tonight, February 2nd, for a student panel on Multiracial dating moderated by Professor",
         "found":19
      },
      "entities":{

      }
   },
   {
      "title":"2/9 at 4PM – Screening of ‘Examined Life’",
      "content":"From Cogut Center for the Humanities <traude_kastner@brown.edu> for all students, campus faculty, all staffFilm screening of \"Examined Life\" and Q & A with Astra Taylor2/9, 4:00PM, Pembroke Hall 305, 172 Meeting St.In \"Examined Life,\" filmmaker Astra Taylor accompanies some of today’s most influential thinkers: Kwame Anthony Appiah, Michael Hardt, Avital Ronell, Peter Singer, Slavoj Zizek, Judith Butler, Martha Nussbaum and Cornel West, on a series of excursions through places and spaces that hold particular resonance for them and their ideas.",
      "times":{
         "hour":"4",
         "minute":"00",
         "daynight":"Unknown",
         "preview":"screening of \"Examined Life\" and Q & A with Astra Taylor2/9, 4:00PM, Pembroke Hall 305, 172 Meeting St.In \"Examined Life,\" filmmaker Astra Taylor",
         "found":25
      },
      "entities":{

      }
   },
   {
      "title":"Community Service Opportunties Fair",
      "content":"From Swearer Center <swearer_center@brown.edu> for all7-9 pm, Tuesday, February 2Kasper Multipurpose RoomStephen Robert '62 Campus CenterMeet student leaders and representatives from community organizations throughout Rhode Island, learn about their work, and explore ways to get involved!",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":2,
         "preview":"From Swearer Center <swearer_center@brown.edu> for all7-9 pm, Tuesday, February 2Kasper Multipurpose RoomStephen Robert '62 Campus CenterMeet student leaders and representatives",
         "found":8
      },
      "entities":{
         "location":[
            "Rhode Island"
         ],
         "email":[
            "swearer_center@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "all7-9",
            "Rhode",
            "organizations",
            "Tuesday",
            "community",
            "February",
            "representatives",
            "2Kasper",
            "leaders",
            "Multipurpose",
            "student",
            "RoomStephen",
            "Robert",
            "Campus",
            "CenterMeet",
            "Island",
            "<swearer_center@brown.edu>",
            "work",
            "Center",
            "Swearer"
         ],
         "date":[
            "Tuesday",
            "February"
         ]
      }
   },
   {
      "title":"Screening of Vivir es facil",
      "content":"From Hispanic Studies <hispanic_studies@brown.edu> for all undergraduates, humanities grad students, life sciences biomed grad students, social sciences grad students, campus faculty, all staffMark your calendars! On February 10 at 7pm, The Department of Hispanic Studies will be screening \"Vivir es fácil\" as part of our Spanish Language Week Series. Check out the events page on our website to see the rest of our lineup! The movie screening will take place at Rochambeau House; 84 Prospect St.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":10,
         "preview":"On February 10 at 7pm, The Department of Hispanic Studies will be screening",
         "found":26
      },
      "times":{
         "hour":7,
         "minute":"00",
         "daynight":"PM",
         "preview":"On February 10 at 7pm, The Department of Hispanic Studies will be screening \"Vivir es fácil\"",
         "found":29
      },
      "places":{
         "place":"Rochambeau House;",
         "preview":"The movie screening will take place at Rochambeau House; 84 Prospect St.",
         "found":70
      },
      "summary":"On February 10 at 7pm, The Department of Hispanic Studies will be screening \"Vivir es fácil\" as part of our Spanish Language Week Series.",
      "entities":{

      }
   },
   {
      "title":"ALDUS JOURNAL OF TRANSLATION MEETING",
      "content":"From Graciela Rodriguez <graciela_rodriguez@brown.edu> for allAre you a polyglot? A.K.A. a person who knows more than one language? Or a poet? If you are, we want you to be a part of the Aldus Journal of Translation-- Brown’s only translation journal! We’ll be holding a meeting on Monday, February 10th at 8pm at J. Walter Wilson 401. Come learn how you can be a part of a journal that has already featured many famous translators! Please email us at AldusJournal@gmail.com for more information.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":10,
         "preview":"We’ll be holding a meeting on Monday, February 10th at 8pm at J.",
         "found":48
      },
      "times":{
         "hour":8,
         "minute":"00",
         "daynight":"PM",
         "preview":"We’ll be holding a meeting on Monday, February 10th at 8pm at J.",
         "found":51
      },
      "places":{
         "place":"AldusJournal@gmailcom",
         "preview":"Please email us at AldusJournal@gmail.com for more information.",
         "found":78
      },
      "summary":{

      },
      "entities":{
         "email":[
            "graciela_rodriguez@brown.edu",
            "AldusJournal@gmail.com"
         ],
         "url":[
            "brown.edu",
            "gmail.com"
         ],
         "keyword":[
            "Journal of Translation",
            "translation journal",
            "Journal",
            "allAre",
            "Translation",
            "polyglot",
            "A.K.A.",
            "<graciela_rodriguez@brown.edu>",
            "person",
            "language",
            "poet",
            "Walter",
            "Wilson",
            "10th",
            "February",
            "Rodriguez",
            "Monday",
            "Aldus",
            "meeting",
            "Graciela"
         ],
         "date":[
            "Monday",
            "February 10th"
         ],
         "person":[
            "Walter Wilson"
         ]
      }
   },
   {
      "title":"Come to Spectrum, a group for Trans* students!",
      "content":"From AJ Whitman <alana_whitman@brown.edu> for all studentsCome to Spectrum, a safe and confidential social/support group for trans*, non-binary, and gender-questioning students. Come as your beautiful selves, no labels necessary! We meet Wednesdays at 6:00pm in the lounge of the Sarah Doyle Women's Center. Our first meeting of the semester will be tomorrow, February 3. There will be snacks!",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":3,
         "preview":"Our first meeting of the semester will be tomorrow, February 3.",
         "found":52
      },
      "times":{
         "hour":"6",
         "minute":"00",
         "daynight":"Unknown",
         "preview":"We meet Wednesdays at 6:00pm in the lounge of the Sarah Doyle Women's Center.",
         "found":33
      },
      "places":{
         "place":"Spectrum",
         "preview":"From AJ Whitman <alana_whitman@brown.edu> for all studentsCome to Spectrum, a safe and confidential social/support group for trans*, non-binary, and",
         "found":7
      },
      "summary":{

      },
      "entities":{
         "organization":[
            "Center"
         ],
         "email":[
            "alana_whitman@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "Spectrum",
            "semester",
            "meeting",
            "safe",
            "Center",
            "confidential",
            "Women",
            "social/support",
            "Doyle",
            "group",
            "trans",
            "Sarah",
            "beautiful",
            "gender-questioning",
            "students",
            "non-binary",
            "lounge",
            "Wednesdays",
            "labels",
            "studentsCome"
         ],
         "date":[
            "tomorrow",
            "February"
         ],
         "person":[
            "Whitman"
         ]
      }
   },
   {
      "title":"Info Session MF's Production of CAROUSEL!",
      "content":"From Nicholas R Healy <nicholas_healy@brown.edu> for all undergraduatesCome to the Parth Formal Lounge in the BCSC at 5:00 PM this Sunday, February 7th to learn more about MF's production of CAROUSEL. We will discuss why an old play like Carousel should still be performed for college audiences today. We will also address the important social issues that arise in the play itself, most especially domestic violence, but also the issue of diversity (or lack thereof) in Brown theater. And don't forget to audition! Email nicholas_healy@brown.edu. for more information.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":7,
         "preview":"Parth Formal Lounge in the BCSC at 5:00 PM this Sunday, February 7th to learn more about MF's production of CAROUSEL.",
         "found":21
      },
      "times":{
         "hour":"5",
         "minute":"00",
         "daynight":"PM",
         "preview":"all undergraduatesCome to the Parth Formal Lounge in the BCSC at 5:00 PM this Sunday, February 7th to learn more about MF's production",
         "found":17
      },
      "places":{
         "place":"Parth Formal",
         "preview":"From Nicholas R Healy <nicholas_healy@brown.edu> for all undergraduatesCome to the Parth Formal Lounge in the BCSC at 5:00 PM this",
         "found":8
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Spring Semester Kick-Off",
      "content":"From Kathy Toro <kathy_toro@brown.edu> for all undergraduatesJoin Academic Support Services, Pre-Professional Advising, International Student and Visitor Experience for a study break! Meet our teams, gather helpful brochures and tip sheets.  Office presentations 12:30-12:45pm and 1:30-1:45pm. Refreshments will be provided.Wednesday, February 3J.W. Wilson Third Floor12-2pmDOC-Health Careers Advising",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":3,
         "preview":"Refreshments will be provided.Wednesday, February 3J.W.",
         "found":39
      },
      "summary":{

      },
      "entities":{
         "organization":[
            "Academic Support Services",
            "International Student and"
         ],
         "email":[
            "kathy_toro@brown.edu"
         ],
         "url":[
            "brown.edu",
            "provided.Wednesday"
         ],
         "keyword":[
            "undergraduatesJoin",
            "February",
            "provided.Wednesday",
            "Academic",
            "Refreshments",
            "Support",
            "presentations",
            "Services",
            "Pre-Professional",
            "Office",
            "sheets",
            "Advising",
            "break",
            "International",
            "teams",
            "brochures",
            "Visitor",
            "Experience",
            "helpful",
            "Meet"
         ],
         "date":[
            "February"
         ],
         "person":[
            "Wilson Third"
         ]
      }
   },
   {
      "title":"Biotechnology and Global Health Symposium",
      "content":"From Elizabeth D Jackvony <elizabeth_jackvony@brown.edu> for allThe Biotechnology and Global Health Symposium will address the growing challenges of health care in resource limited settings and elucidate how engineers and medical care providers can work together to help solve healthcare issues through innovative and outside-the-box thinking.Feb 11, 2016, 5pm - 7:30pm at The Institute at Brown for Environment & Society, 85 Waterman Street, Room 130Sponsored by Biomedical Engineering and the Global Health Initiative",
      "times":{
         "hour":"7",
         "minute":"30",
         "daynight":"Unknown",
         "preview":"healthcare issues through innovative and outside-the-box thinking.Feb 11, 2016, 5pm - 7:30pm at The Institute at Brown for Environment & Society, 85 Waterman",
         "found":49
      },
      "places":{
         "place":"Brown Environment",
         "preview":"and outside-the-box thinking.Feb 11, 2016, 5pm - 7:30pm at The Institute at Brown for Environment & Society, 85 Waterman Street, Room 130Sponsored by",
         "found":53
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Epidemiology Seminar with Susan Cu-Uvin, MD",
      "content":"From Kathryn Petterson <epidemiology@brown.edu> for allThe Department of Epidemiology welcomes Susan Cu-Uvin, MD, as the first speaker in its spring seminar series. Dr. Cu-Uvin is a Professor of Obstetrics and Gynecology, and Professor of Health Services, Policy and Practice at Brown University. She serves as director of both the Lifespan/Tufts/Brown Center for AIDS Research (CFAR) and Global Health Initiative. The lecture, entitled \"HIV in Women: Across the Lifespan\", will be held Tuesday, Feb 9th, from 4:30-5:30pm at 121 South Main St, Room 245.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":9,
         "preview":"entitled \"HIV in Women: Across the Lifespan\", will be held Tuesday, Feb 9th, from 4:30-5:30pm at 121 South Main St, Room 245.",
         "found":72
      },
      "places":{
         "place":"Brown University",
         "preview":"Obstetrics and Gynecology, and Professor of Health Services, Policy and Practice at Brown University.",
         "found":39
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Candidate Talk, Modern Russian Lit. and Culture",
      "content":"From Gisela U Belton <gisela_belton@brown.edu> for all undergraduates, humanities grad students, campus faculty, all staffCandidate Talk, Department of Slavic Studies, Faculty Search in Modern Russian Literature and Culture. \"Envisioning a Post-Historical Russian Empire:  Aleksandr Dugin's Eurasia Movement as an Aesthetic-Political Project\" presented by Fabrizio Fenghi, Yale University.February 4, 2016, 4:00 pm, Wilson Hall 301.",
      "times":{
         "hour":"4",
         "minute":"00",
         "daynight":"PM",
         "preview":"an Aesthetic-Political Project\" presented by Fabrizio Fenghi, Yale University.February 4, 2016, 4:00 pm, Wilson Hall 301.",
         "found":49
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Brown Brain Fair!",
      "content":"From Carin M Papendorp <carin_papendorp@brown.edu> for all students, all facultyFor Brain Awareness Week, the Brown Brain Bee and Cure Alliance for Mental Illness are hosting the first annual Brown Brain Fair!WHEN: Saturday, March 19th, 9am-12pmWHERE: Sayles Hall auditoriumThe Brain Fair will feature a wide range of interactive activities and research demonstrations that will educate audiences of all ages and backgrounds about the mind and brain.For more information, please contact admin@brownbrainbee.org!",
      "dates":{
         "year":"unknown",
         "month":3,
         "day":19,
         "preview":"Mental Illness are hosting the first annual Brown Brain Fair!WHEN: Saturday, March 19th, 9am-12pmWHERE: Sayles Hall auditoriumThe Brain Fair will feature a wide",
         "found":32
      },
      "entities":{
         "organization":[
            "Brain Fair"
         ],
         "email":[
            "carin_papendorp@brown.edu",
            "admin@brownbrainbee.org"
         ],
         "url":[
            "brown.edu",
            "brain.For",
            "brownbrainbee.org"
         ],
         "keyword":[
            "Brown Brain",
            "Brain",
            "Brown",
            "backgrounds",
            "ages",
            "audiences",
            "demonstrations",
            "students",
            "mind",
            "activities",
            "facultyFor",
            "interactive",
            "range",
            "<carin_papendorp@brown.edu>",
            "Hall",
            "wide",
            "Sayles",
            "auditoriumThe",
            "Fair",
            "9am-12pmWHERE"
         ],
         "date":[
            "Saturday",
            "March 19th"
         ],
         "person":[
            "Brain Awareness Week",
            "Cure Alliance"
         ]
      }
   },
   {
      "title":"Academic Coaching Open House 12 - 2 pm Today!",
      "content":"From Susan C Vieira <susan_vieira@brown.edu> for all undergraduatesAcademic Support Services invites you to come to the 1st floor lobby of J Walter Wilson today and meet the wonderful academic coaches! Learn how they can help you to jump start your spring semester!  We will have posters of upcoming academic workshops, a sign up sheet for academic coaching and other valuable academic resources! Tuesday, February 2, Noon - 2 pm, J Walter Wilson. Academic Support Services.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":2,
         "preview":"Tuesday, February 2, Noon - 2 pm, J Walter Wilson.",
         "found":63
      },
      "times":{
         "hour":2,
         "minute":"00",
         "daynight":"PM",
         "preview":"Tuesday, February 2, Noon - 2 pm, J Walter Wilson.",
         "found":67
      },
      "summary":{

      },
      "entities":{
         "organization":[
            "Support Services",
            "Academic Support Services"
         ],
         "email":[
            "susan_vieira@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "Walter Wilson",
            "academic",
            "Walter",
            "Support",
            "Wilson",
            "Services",
            "undergraduatesAcademic",
            "<susan_vieira@brown.edu>",
            "floor",
            "February",
            "Noon",
            "Tuesday",
            "today",
            "wonderful",
            "posters",
            "coaches",
            "Vieira",
            "lobby",
            "resources",
            "semester"
         ],
         "date":[
            "today",
            "spring",
            "Tuesday",
            "February 2"
         ],
         "person":[
            "Walter Wilson"
         ]
      }
   },
   {
      "title":"OIP:  First Step Information Session",
      "content":"From Office of International Programs <OIP_Office@brown.edu> for all undergraduates, campus faculty, all staffThinking about studying abroad and not sure where to start?  Drop by the Office of International Programs in J. Walter Wilson, Room 440 on Tuesday,February 2nd at 12pm to gather more information at the First Step Info Session.",
      "times":{
         "hour":12,
         "minute":"00",
         "daynight":"PM",
         "preview":"Walter Wilson, Room 440 on Tuesday,February 2nd at 12pm to gather more information at the First Step Info Session.",
         "found":39
      },
      "places":{
         "place":"First Step",
         "preview":"Room 440 on Tuesday,February 2nd at 12pm to gather more information at the First Step Info Session.",
         "found":44
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Cheese Night @ Tech House",
      "content":"From Christine H Yu <christine_yu@brown.edu> for all undergraduatesJoin Tech House at 8 PM in the Harkness Lounge (2/2) for a wide variety of fine cheeses, sparkling cider, and fine conversation.",
      "times":{
         "hour":8,
         "minute":"00",
         "daynight":"PM",
         "preview":"From Christine H Yu <christine_yu@brown.edu> for all undergraduatesJoin Tech House at 8 PM in the Harkness Lounge (2/2) for a wide variety of",
         "found":11
      },
      "entities":{

      }
   },
   {
      "title":"INFO SESSION Olneyville ESOL Program",
      "content":"From Olneyville ESOL Program <bruna_lee@brown.edu> for all undergraduates, all graduate studentsThe Olneyville ESOL program, through the Swearer Center for Public Service at Brown, offers English language and literacy classes to adult immigrants in the Providence community! Our student volunteers teach at William D'Abate Elementary School twice a week and work with learners to encourage language and community development. Info session will be Wednesday 2/3 at 6pm in Wilson 109. Look out for our Facebook page and flyers. Please email esololneyville@gmail.com if interested.",
      "times":{
         "hour":6,
         "minute":"00",
         "daynight":"PM",
         "preview":"Info session will be Wednesday 2/3 at 6pm in Wilson 109.",
         "found":65
      },
      "places":{
         "place":"Brown",
         "preview":"studentsThe Olneyville ESOL program, through the Swearer Center for Public Service at Brown, offers English language and literacy classes to adult immigrants in",
         "found":21
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Green Corps Information Session",
      "content":"From CareerLAB <careerlab@brown.edu> for all undergraduatesMonday, 02-01-16, 6:00 at CareerLAB:  Green Corps is looking for college graduates who are ready to take on the most pressing environmental challenges of our day and join the Green Corps class of 2017. We are hiring for our year-long, paid training program during which participants receive eight weeks of classroom training and spend the remainder of the year running campaigns for established non-profits.NOTE: This session is offered Monday, 02/01 and again Tuesday, 02/02.",
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Ernst & Young Information Session",
      "content":"From CareerLAB <careerlab@brown.edu> for 1st year students, 2nd year students, 3rd year studentsMonday, 02-01-16, 6:00 at Smith-B, 106: Parthenon-EY is a strategy consultancy, committed to bringing unconventional yet pragmatic thinking together with our clients’ smarts to deliver actionable strategies for real impact in today’s complex business landscape. Please join us at our information session for students interested in learning more about strategy consulting and internship opportunities at Parthenon-EY.",
      "places":{
         "place":"Smith-B",
         "preview":"1st year students, 2nd year students, 3rd year studentsMonday, 02-01-16, 6:00 at Smith-B, 106: Parthenon-EY is a strategy consultancy, committed to bringing unconventional",
         "found":15
      },
      "summary":"Please join us at our information session for students interested in learning more about strategy consulting and internship opportunities at Parthenon-EY.",
      "entities":{

      }
   },
   {
      "title":"Mockathon- mock interviews w/ CareerLab councilors",
      "content":"From CareerLAB <careerlab@brown.edu> for all undergraduatesEffective interviewing takes preparation and practice! Come practice with Career Counselors during Mockathon day. These are behavioral interviews, not case studies.Sign Up for a 30-min slot on Thurs 2/4/16 by clicking on the following links:10am-12pmhttps://shibboleth-brown-csm.symplicity.com/sso/index.php?mode=form&id=45e923375f6908ddadd5bac66c8207f2&s=event&ss=ws2pm-4pmhttps://shibboleth-brown-csm.symplicity.com/sso/index.php?mode=form&id=3b5d5c2729d97eea0dd0f4ae3a9f5279&s=event&ss=ws",
      "dates":{
         "year":16,
         "month":2,
         "day":4,
         "preview":"interviews, not case studies.Sign Up for a 30-min slot on Thurs 2/4/16 by clicking on the following links:10am-12pmhttps://shibboleth-brown-csm.symplicity.com/sso/index.php?mode=form&id=45e923375f6908ddadd5bac66c8207f2&s=event&ss=ws2pm-4pmhttps://shibboleth-brown-csm.symplicity.com/sso/index.php?mode=form&id=3b5d5c2729d97eea0dd0f4ae3a9f5279&s=event&ss=ws",
         "found":33
      },
      "summary":"Come practice with Career Counselors during Mockathon day.",
      "entities":{

      }
   },
   {
      "title":"TODAY - Public Trust in Human Rights NGOs",
      "content":"From Watson Institute <watson_institute@brown.edu> for all undergraduates, all graduate students, campus faculty, all staffMonday, February 1 at 4 p.m.Joukowsky Forum, Watson InstituteWhen security conditions are poor and the specter of violence is high, does the public support rights promoters, or do they regard them as untrustworthy irritants, political fifth columns, or worse?James Ron holds the Stassen Chair of International Affairs at the University of Minnesota, jointly appointed to the Humphrey School of Public Affairs and Department of Political Science.Part of the Security Seminar Series.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":1,
         "preview":"<watson_institute@brown.edu> for all undergraduates, all graduate students, campus faculty, all staffMonday, February 1 at 4 p.m.Joukowsky Forum, Watson InstituteWhen security conditions are poor",
         "found":14
      },
      "places":{
         "place":"Forum",
         "preview":"all undergraduates, all graduate students, campus faculty, all staffMonday, February 1 at 4 p.m.Joukowsky Forum, Watson InstituteWhen security conditions are poor and the",
         "found":16
      },
      "entities":{
         "organization":[
            "From",
            "Watson Institute",
            "Forum",
            "Watson InstituteWhen",
            "International Affairs",
            "University of Minnesota",
            "Humphrey School of Public Affairs and Department of Political Science",
            "Security Seminar"
         ],
         "email":[
            "watson_institute@brown.edu"
         ],
         "url":[
            "brown.edu",
            "p.m.Joukowsky",
            "Science.Part"
         ],
         "keyword":[
            "political",
            "public",
            "security",
            "Watson",
            "students",
            "undergraduates",
            "campus",
            "graduate",
            "faculty",
            "Forum",
            "February",
            "Stassen",
            "staffMonday",
            "Science.Part",
            "Affairs",
            "International",
            "Chair",
            "Department",
            "worse?James",
            "p.m.Joukowsky"
         ],
         "date":[
            "February 1"
         ],
         "person":[
            "James",
            "Ron"
         ]
      }
   },
   {
      "title":"What I Am Thinking About Now: Rolland Murray",
      "content":"From Center for the Study of Race and Ethnicity in America <csrea@brown.edu> for allWhat I Am Thinking About Now: Rolland Murray, Associate Professor of English\"Not Being and Blackness: Percival Everett, Negativity, and Institutional African American Culture\"Percival Everett’s fiction meditates on a contemporary American scene in which the widespread incorporation of African American culture into mainstream institutions has become an abiding problem for black writers...Tuesday, February 9, 12 - 1 pmCSREA Conference Room, Hillel 303Please RSVP: csrea@brown.edu",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":9,
         "preview":"into mainstream institutions has become an abiding problem for black writers...Tuesday, February 9, 12 - 1 pmCSREA Conference Room, Hillel 303Please RSVP: csrea@brown.edu",
         "found":64
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Today! Black History Month Films:Ghosts of Amistad",
      "content":"From Center for the Study of Slavery and Justice <ruth_clark@brown.edu> for allToday! Monday 2/1Ghosts of Amistad screening5:30PM, Petteruti Lounge, 75 Waterman StFollowed by conversation with Prof. Roquinaldo FerreiraThis documentary chronicles a trip to Sierra Leone in 2013 to visit the home villages of the people who seized the slave schooner Amistad in 1839 & to interview elders about local memory of the case.In partnership with the PVD Community Library & the Center for Reconciliation.Learn more about our Black History Month Film Series at the link.",
      "places":{
         "place":"Sierra Leone",
         "preview":"Roquinaldo FerreiraThis documentary chronicles a trip to Sierra Leone in 2013 to visit the home villages of the",
         "found":32
      },
      "summary":"From Center for the Study of Slavery and Justice <ruth_clark@brown.edu> for allToday!",
      "entities":{
         "organization":[
            "Center for the Study of Slavery",
            "Prof.",
            "Roquinaldo FerreiraThis",
            "PVD Community Library & the Center for"
         ],
         "location":[
            "Sierra Leone"
         ],
         "email":[
            "ruth_clark@brown.edu"
         ],
         "url":[
            "brown.edu",
            "case.In",
            "Reconciliation.Learn"
         ],
         "keyword":[
            "Amistad",
            "Center",
            "History",
            "Month",
            "Black",
            "Reconciliation.Learn",
            "Justice",
            "allToday",
            "trip",
            "Roquinaldo",
            "documentary",
            "Prof.",
            "FerreiraThis",
            "Monday",
            "conversation",
            "Sierra",
            "Library",
            "Film",
            "<ruth_clark@brown.edu>",
            "people"
         ],
         "date":[
            "Monday 2/1Ghosts",
            "2013",
            "1839"
         ]
      }
   },
   {
      "title":"2/8: Black History Month Films: Belle screening",
      "content":"From Center for the Study of Slavery and Justice <ruth_clark@brown.edu> for allMonday 2/8Belle screening5:30PMPetteruti Lounge, 75 Waterman StFollowed by conversation with Graduate Fellow Arielle Brown AM ‘18Belle is inspired by the true story of Dido Elizabeth Belle (Gugu Mbatha-Raw), the illegitimate mixed race daughter of Admiral Sir John Lindsay (Matthew Goode).In Partnership with the Providence Community Library and Center for Reconciliation.Learn more about our Black History Month Film Series at the link below.",
      "summary":"In Partnership with the Providence Community Library and Center for Reconciliation.Learn more about our Black History Month Film Series at the link below.",
      "entities":{

      }
   },
   {
      "title":"Info Session: Apply to be a Meiklejohn!!",
      "content":"From Dean of the College <meiklejohn@brown.edu> for 1st year students, 2nd year students, 3rd year studentsThink advising is an important part of the Open Curriculum?Passionate about helping first-years navigate Brown?Apply to be a Meiklejohn!Applications are due February 14, so come learn about the application and interview process at one of our two info sessions:Tuesday, February 2 at 7 pm, or Wednesday, February 3 at 7 pmFaunce Underground**FREE KABOB AND CURRY!**Come learn about how to become a Meik! It'll be one of the most rewarding decisions you make at Brown.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":14,
         "preview":"about helping first-years navigate Brown?Apply to be a Meiklejohn!Applications are due February 14, so come learn about the application and interview process at",
         "found":36
      },
      "times":{
         "hour":7,
         "minute":"00",
         "daynight":"PM",
         "preview":"process at one of our two info sessions:Tuesday, February 2 at 7 pm, or Wednesday, February 3 at 7 pmFaunce Underground**FREE KABOB AND",
         "found":57
      },
      "places":{
         "place":"MeiklejohnApplications",
         "preview":"important part of the Open Curriculum?Passionate about helping first-years navigate Brown?Apply to be a Meiklejohn!Applications are due February 14, so come learn about",
         "found":30
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"SAVE THE DATE! Screening of Metegol",
      "content":"From Hispanic Studies <hispanic_studies@brown.edu> for all undergraduates, humanities grad students, life sciences biomed grad students, physical sciences grad students, social sciences grad students, all faculty, all staffThe Department of Hispanic Studies will be screening \"Metegol\" as part of our Spanish Language Week Series. Check out the events page on our website to see the rest of our lineup! The screening will take place at 5pm on Febuary 8 at Rochambeau House; located at 84 Prospect St.",
      "times":{
         "hour":5,
         "minute":"00",
         "daynight":"PM",
         "preview":"The screening will take place at 5pm on Febuary 8 at Rochambeau House; located at 84 Prospect St.",
         "found":64
      },
      "places":{
         "place":"Febuary",
         "preview":"The screening will take place at 5pm on Febuary 8 at Rochambeau House; located at 84 Prospect",
         "found":63
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Wayfair Information Session",
      "content":"From CareerLAB <careerlab@brown.edu> for all undergraduates, humanities grad students, social sciences grad studentsMonday, 02-01-16, 6:00 at CareerLAB: Wayfair is looking forward to holding an Information Session to promote our Site Merchandising Associate role. This event will consist of a presentation lead by Site Merchandising team members followed up by a Q&A session.",
      "places":{
         "place":"CareerLAB: Wayfair",
         "preview":"all undergraduates, humanities grad students, social sciences grad studentsMonday, 02-01-16, 6:00 at CareerLAB: Wayfair is looking forward to holding an Information Session to",
         "found":15
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"TONIGHT: Chen Chanratana on Angkor Wat Temple",
      "content":"From Joukowsky Institute for Archaeology <joukowsky_institute@brown.edu> for all students, campus faculty, all staff\"Angkor Wat Temple, from Hindu to Buddhist Shrine\"Chen Chanratana (University of Cambodia)Monday, February 1, 2016 at 5:30pmRI Hall 108Dr. Chen Chanratana is the Founder/President of Kerdomnel Khmer (KDNK) Group, mainly focused on Cambodian culture preservation and protection through a culture-themed magazine called “Kerdomnel Khmer”. He received a post-graduate degree in Archaeology, Art history of Southeast Asia from University of Sorbonne Paris III in France.",
      "dates":{
         "year":2016,
         "month":2,
         "day":1,
         "preview":"Wat Temple, from Hindu to Buddhist Shrine\"Chen Chanratana (University of Cambodia)Monday, February 1, 2016 at 5:30pmRI Hall 108Dr.",
         "found":24
      },
      "places":{
         "place":"Hall",
         "preview":"Hindu to Buddhist Shrine\"Chen Chanratana (University of Cambodia)Monday, February 1, 2016 at 5:30pmRI Hall 108Dr.",
         "found":27
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Feb 2: Modeling and Decision Analysis Lecture",
      "content":"From Center for Evidence-Based Medicine <cebm@brown.edu> for allOn Tues. Feb. 2 @12pm, the Center for Evidence-based Medicine welcomes Dr. Hawre Jalal, MD, MsC, PhD, Assistant Professor of the Department of Health Policy and Management (HPM) and Public Health Dynamics Laboratory (PHDL)  University of Pittsburgh, for a special lecture:\"An Efficient Gaussian Approximation and Regression Metamodeling Approach to Value of Information Analysis\"Venue: 121 South Main, Room 375.  See extended info for abstract and details.  Snacks included with talk.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":2,
         "preview":"Feb.",
         "found":9
      },
      "places":{
         "place":"Value Information",
         "preview":"for a special lecture:\"An Efficient Gaussian Approximation and Regression Metamodeling Approach to Value of Information Analysis\"Venue: 121 South Main, Room 375.",
         "found":55
      },
      "summary":{

      },
      "entities":{
         "keyword":[
            "Evidence-Based Medicine",
            "Evidence-based Medicine",
            "Health",
            "Medicine",
            "abstract",
            "info",
            "Room",
            "Main",
            "Evidence-Based",
            "South",
            "Venue",
            "Regression",
            "Analysis",
            "Efficient",
            "Approximation",
            "Approach",
            "Metamodeling",
            "Gaussian",
            "details",
            "lecture"
         ],
         "url":[
            "brown.edu"
         ],
         "email":[
            "cebm@brown.edu"
         ],
         "organization":[
            "Center for Evidence-Based Medicine",
            "Center for Evidence-based Medicine",
            "Department of Health Policy and Management",
            "Public Health Dynamics Laboratory",
            "PHDL",
            "University of Pittsburgh",
            "Value of Information Analysis\"Venue"
         ]
      }
   },
   {
      "title":"Pathology Seminar Presentation",
      "content":"From Department of Pathology and Laboratory Medicine <bijaya_karanjit@brown.edu> for all students, campus faculty, all staffThe department of Pathology and Laboratory Medicine invites you to attend a seminar presentation titled “Linking Xenobiotic Exposure and Inflammation to Cardiometabolic Disease”by Changcheng Zhou, Ph.D., Associate Professor, Department of Pharmacology and Nutritional Sciences at the University of Kentucky. This presentation will take place on Feb. 2nd, Tuesday at 11:30 a.m. in Room 270 of Alpert Medical School. All are welcome.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":2,
         "preview":"Feb.",
         "found":59
      },
      "places":{
         "place":"University",
         "preview":"Changcheng Zhou, Ph.D., Associate Professor, Department of Pharmacology and Nutritional Sciences at the University of Kentucky.",
         "found":48
      },
      "summary":"This presentation will take place on Feb. 2nd, Tuesday at 11:30 a.m. in Room 270 of Alpert Medical School.",
      "entities":{

      }
   },
   {
      "title":"10th Annual Alpert Medical School Concert",
      "content":"From Alpert Medical School <rudy_chen@brown.edu> for allPlease join us on Thursday, February 4th from 7-9PM for the 10th annual Alpert Medical School concert. It will be held in Martinos Auditorium at Granoff Center. This event has been a long-running tradition at Brown, giving musicians the opportunity to share their talents and the joy of music with the entire Brown University community. The event is free and tickets are not required, but seating will be available on a first come, first serve basis. A reception will follow the concert.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":4,
         "preview":"From Alpert Medical School <rudy_chen@brown.edu> for allPlease join us on Thursday, February 4th from 7-9PM for the 10th annual Alpert Medical School concert.",
         "found":11
      },
      "times":{
         "hour":7,
         "minute":"00",
         "daynight":"PM",
         "preview":"School <rudy_chen@brown.edu> for allPlease join us on Thursday, February 4th from 7-9PM for the 10th annual Alpert Medical School concert.",
         "found":14
      },
      "places":{
         "place":"Granoff Center",
         "preview":"It will be held in Martinos Auditorium at Granoff Center.",
         "found":30
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"SAVE THE DATE: Jon Birger '90 on 'Date-onomics'",
      "content":"From Brown Bookstore <general_books@brown.edu> for allOn Tuesday, February 9th at 4:00pm the Brown Bookstore welcomes Jon Birger '90 who will read from, discuss and sign his new book \"Date-onomics.\"“A fascinating look at romance and what’s going on with the mating rituals of homo sapiens today.  This book will surprise and enlighten you.” -—A.J. Jacobs '90, \"New York Times\" bestselling author of \"The Year of Living Biblically\" and \"Drop Dead Healthy\"For more information visit: http://bit.ly/BookstoreEventsor call x3-3168",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":9,
         "preview":"From Brown Bookstore <general_books@brown.edu> for allOn Tuesday, February 9th at 4:00pm the Brown Bookstore welcomes Jon Birger '90 who",
         "found":7
      },
      "times":{
         "hour":"4",
         "minute":"00",
         "daynight":"Unknown",
         "preview":"From Brown Bookstore <general_books@brown.edu> for allOn Tuesday, February 9th at 4:00pm the Brown Bookstore welcomes Jon Birger '90 who will read from,",
         "found":10
      },
      "places":{
         "place":"Brown",
         "preview":"From Brown Bookstore <general_books@brown.edu> for allOn Tuesday, February 9th at 4:00pm the Brown Bookstore welcomes Jon Birger '90 who will read",
         "found":9
      },
      "summary":{

      },
      "entities":{
         "email":[
            "general_books@brown.edu"
         ],
         "url":[
            "brown.edu",
            "http://bit.ly/BookstoreEventsor"
         ],
         "keyword":[
            "book",
            "visit",
            "Healthy",
            "Dead",
            "Bookstore",
            "Drop",
            "Year",
            "http://bit.ly/BookstoreEventsor",
            "author",
            "York",
            "Times",
            "Brown",
            "sapiens",
            "homo",
            "Jacobs",
            "romance",
            "A.J.",
            "today",
            "rituals",
            "mating"
         ],
         "date":[
            "Tuesday",
            "February",
            "today"
         ],
         "person":[
            "Jon Birger"
         ]
      }
   },
   {
      "title":"First Beginner Swing Dance Lesson TODAY",
      "content":"From Swing Dance Club <deborah_pomeranz@brown.edu> for all studentsCome join the friendly folks of swing dance club for our first beginner swing dance lessons of the semester! Kick it with some Charleston Monday 2/1 (today!) at 9 in Alumnae Hall, and join us Thursday 2/4 in Sayles Hall for balboa at 8 and classic lindy-hop at 9. As always, everything is FREE and open to the public, no experience or partner necessary.",
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"2/8: Activism and Media - Organizing After Occupy",
      "content":"From Cogut Center for the Humanities <traude_kastner@brown.edu> for all students, campus faculty, all staff”Activism and Media - Organizing After Occupy”2/8, 5:30PM, Pembroke Hall 305, 172 Meeting StAstra Taylor, director of “Examined Life” (screening on 2/9 at 4PM) and founding member of the Rolling Jubilee Project and the Debt Collective, will talk about the difference between activism and organizing, new ways to create economic power after the possible demise of the traditional labor movement, and the importance of rethinking debt, debt activism and the politics of infrastructure.",
      "times":{
         "hour":"5",
         "minute":"30",
         "daynight":"Unknown",
         "preview":"students, campus faculty, all staff”Activism and Media - Organizing After Occupy”2/8, 5:30PM, Pembroke Hall 305, 172 Meeting StAstra Taylor, director of “Examined Life”",
         "found":20
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"TOMORROW: Bill Reynolds '68 discusses 'Hope'",
      "content":"From Brown Bookstore <general_books@brown.edu> for allJoin us on Tuesday, February 2nd at 4:00pm, as the Brown Bookstore welcomes award-winning sports columnist for the Providence Journal, Bill Reynolds '68, who will discuss & sign his new book \"Hope: A School, A Team, A Dream.\"\"Reynolds’ style is intimate and thought-provoking...[\"Hope\" is] a basketball book but also a candid look at inner-city life that should garner it a broad audience\" --Booklist (starred review)For more information visit: http://bit.ly/BookstoreEventsor call x3-3168",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":2,
         "preview":"From Brown Bookstore <general_books@brown.edu> for allJoin us on Tuesday, February 2nd at 4:00pm, as the Brown Bookstore welcomes award-winning sports columnist",
         "found":9
      },
      "times":{
         "hour":"4",
         "minute":"00",
         "daynight":"Unknown",
         "preview":"Brown Bookstore <general_books@brown.edu> for allJoin us on Tuesday, February 2nd at 4:00pm, as the Brown Bookstore welcomes award-winning sports columnist for the Providence",
         "found":12
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Life Beyond Fear",
      "content":"From Campus Ministry International <holly_doerflinger@brown.edu> for allWhat is your greatest fear? Dying Alone? Failure? Rejection? Fear is a normal part of life, but it can often control parts of our lives in ways we don't even realize.Campus Ministry International invites you to join us on Monday, February 1 at 7 pm in SmittyB 101 as we talk about fear--and overcoming fear--from a Biblical perspective. Your life will never be the same!",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":1,
         "preview":"even realize.Campus Ministry International invites you to join us on Monday, February 1 at 7 pm in SmittyB 101 as we talk about",
         "found":46
      },
      "times":{
         "hour":7,
         "minute":"00",
         "daynight":"PM",
         "preview":"International invites you to join us on Monday, February 1 at 7 pm in SmittyB 101 as we talk about fear--and overcoming fear--from",
         "found":49
      },
      "summary":"From Campus Ministry International <holly_doerflinger@brown.edu> for allWhat is your greatest fear?",
      "entities":{
         "organization":[
            "Campus Ministry International",
            "Ministry International"
         ],
         "email":[
            "holly_doerflinger@brown.edu"
         ],
         "url":[
            "brown.edu",
            "realize.Campus"
         ],
         "keyword":[
            "fear -- and overcoming fear",
            "fear",
            "International",
            "Ministry",
            "life",
            "ways",
            "lives",
            "realize.Campus",
            "parts",
            "allWhat",
            "<holly_doerflinger@brown.edu>",
            "normal",
            "Monday",
            "February",
            "Rejection",
            "Failure",
            "SmittyB",
            "Campus",
            "Biblical",
            "perspective"
         ],
         "date":[
            "Monday",
            "February 1"
         ]
      }
   },
   {
      "title":"2/25 Susan Lusi: Governing RI Schools",
      "content":"From Taubman Center for American Politics and Policy <publicpolicy@brown.edu> for allSusan Lusi\"Reflections of an Urban Superintendent:Working at the Nexus of Practice, Policy and Politics\"Thursday, February 25, 12:00 NoonWatson Institute, 111 Thayer St., McKinney Room (3rd floor)Superintendents are charged with improving teaching and learning while working within, and sometimes around, a complex system. Lusi will reflect on her ten years as a superintendent, including a recent four-year tenure as the superintendent of Providence public schools.A Taubman Center Lecture",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":25,
         "preview":"an Urban Superintendent:Working at the Nexus of Practice, Policy and Politics\"Thursday, February 25, 12:00 NoonWatson Institute, 111 Thayer St., McKinney Room (3rd floor)Superintendents",
         "found":24
      },
      "places":{
         "place":"Nexus",
         "preview":"Politics and Policy <publicpolicy@brown.edu> for allSusan Lusi\"Reflections of an Urban Superintendent:Working at the Nexus of Practice, Policy and Politics\"Thursday, February 25, 12:00 NoonWatson",
         "found":16
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Audition for PW Presents: Tallgrass Gothic",
      "content":"From Jonathan West <jonathan_west@brown.edu> for all undergraduatesDeep in the South is a town bound by a social code forgotten in the North; where obedience is a way of life, and those who are different live quietly in the shadows, surviving off of secrets, lust, longing, and betrayal.~~Audition for Production Workshop presents Tallgrass Gothic~~directed by Emily Garrison2/1: 1-4pm, 11pm-12am2/2: 4-6pm, 11pm-12am2/3: 1-4pm, 9pm-12amNew Dorm 116BVisit our Facebook event for more info, and email emily_garrison@brown.edu with any questions.",
      "times":{
         "hour":9,
         "minute":"00",
         "daynight":"AM",
         "preview":"presents Tallgrass Gothic~~directed by Emily Garrison2/1: 1-4pm, 11pm-12am2/2: 4-6pm, 11pm-12am2/3: 1-4pm, 9pm-12amNew Dorm 116BVisit our Facebook event for more info, and email emily_garrison@brown.edu",
         "found":61
      },
      "summary":{

      },
      "entities":{
         "keyword":[
            "Facebook event for more info",
            "undergraduatesDeep",
            "South",
            "info",
            "town",
            "event",
            "social",
            "Facebook",
            "code",
            "North",
            "secrets",
            "longing",
            "shadows",
            "Audition",
            "obedience",
            "betrayal",
            "live",
            "life",
            "Production",
            "lust"
         ],
         "url":[
            "brown.edu",
            "brown.edu"
         ],
         "email":[
            "jonathan_west@brown.edu",
            "emily_garrison@brown.edu"
         ]
      }
   },
   {
      "title":"TOMORROW - Songs From Hesperides",
      "content":"From History Department <history@brown.edu> for allSONGS FROM HESPERIDES - Michael Maier's 1618 Musical Alchemical Emblem Book Atalanta fugiensFriday,February 5, 2016  5:30-7:00pmAnnmary Brown Memorial, 21 Brown StreetLES CANARDS CHANTANTSsolo voice ensembleRobin and Graham BierdirectorsDONNA BILAKColumbia UniversityA Performance Lecture exploring the sound and structure of Maier's seventeenth-century canon as encoded instructions for making the philosopher's stone.",
      "entities":{
         "organization":[
            "History Department"
         ],
         "email":[
            "history@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "Maier",
            "Graham BierdirectorsDONNA",
            "allSONGS",
            "canon",
            "HESPERIDES",
            "seventeenth-century",
            "Michael",
            "structure",
            "Brown",
            "BierdirectorsDONNA",
            "Graham",
            "BILAKColumbia",
            "sound",
            "ensembleRobin",
            "Lecture",
            "UniversityA",
            "Musical",
            "Alchemical",
            "Emblem",
            "instructions"
         ],
         "date":[
            "Friday",
            "February 5, 2016"
         ],
         "person":[
            "Brown Memorial",
            "Brown",
            "Graham BierdirectorsDONNA BILAKColumbia UniversityA Performance Lecture"
         ]
      }
   },
   {
      "title":"TODAY - The Crumbling of the Pax Americana",
      "content":"From Watson Institute <watson_institute@brown.edu> for all undergraduates, all graduate students, campus faculty, all staffThursday, February 4 at 4 p.m.Salomon Center for Teaching-Room 001, Main Green - 79 Waterman StreetReception to follow.What are the prospects for reestablishing an American role in world affairs commensurate with the matchless heritage of global leadership and the extraordinary natural endowment of the United States?This lecture is the first of a three part series delivered by          Chas Freeman.Part of the Chong Wook Lee and Vartan Gregorian Distinguished Lecture Series.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":4,
         "preview":"<watson_institute@brown.edu> for all undergraduates, all graduate students, campus faculty, all staffThursday, February 4 at 4 p.m.Salomon Center for Teaching-Room 001, Main Green -",
         "found":14
      },
      "places":{
         "place":"Center",
         "preview":"all undergraduates, all graduate students, campus faculty, all staffThursday, February 4 at 4 p.m.Salomon Center for Teaching-Room 001, Main Green - 79 Waterman",
         "found":16
      },
      "entities":{
         "organization":[
            "From",
            "Watson Institute",
            "Center for Teaching-Room"
         ],
         "email":[
            "watson_institute@brown.edu"
         ],
         "url":[
            "brown.edu",
            "p.m.Salomon",
            "follow.What",
            "Freeman.Part"
         ],
         "keyword":[
            "lecture is the first of a three part series",
            "Lecture Series",
            "lecture",
            "series",
            "undergraduates",
            "graduate",
            "students",
            "campus",
            "faculty",
            "staffThursday",
            "February",
            "follow.What",
            "role",
            "prospects",
            "StreetReception",
            "affairs",
            "matchless",
            "Waterman",
            "global",
            "Green"
         ],
         "date":[
            "Thursday",
            "February 4"
         ]
      }
   },
   {
      "title":"Feb. 11 - Democracy of Credit",
      "content":"From Watson Institute <watson_institute@brown.edu> for all undergraduates, all graduate students, campus faculty, all staffThursday, February 11 at 1:30 p.m.McKinney Conference Room, Watson InstituteGreta Krippner, Associate Professor, Department of Sociology, University of Michigan. Her work explores how the rise of the market intersects broader social, cultural, and political transformations in the “long” twentieth century. She is also working on a book project that explores the problem of market freedom in American historical development.Part of the Political Economy and Labor Seminar Series.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":11,
         "preview":"<watson_institute@brown.edu> for all undergraduates, all graduate students, campus faculty, all staffThursday, February 11 at 1:30 p.m.McKinney Conference Room, Watson InstituteGreta Krippner, Associate Professor,",
         "found":14
      },
      "places":{
         "place":"Conference",
         "preview":"all undergraduates, all graduate students, campus faculty, all staffThursday, February 11 at 1:30 p.m.McKinney Conference Room, Watson InstituteGreta Krippner, Associate Professor, Department of",
         "found":16
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"2/18 Black History Month Films: Nightjohn",
      "content":"From Center for the Study of Slavery and Justice <ruth_clark@brown.edu> for allThursday 2/18Nightjohn screening5:30PMRochambeau Library, Community Room, 708 Hope StreetFollowed by story with Valerie TutsonBased on the novel by Gary Paulsen, Nightjohn is the triumphant story of twelve-year-old Sarny, a slave in the ante-bellum South who faces a grim future...until Nightjohn arrives.In Partnership with the Providence Community Library and Center for Reconciliation.Learn more about our Black History Month Film Series at the link below.",
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Feb. 11- United States in the New World Disorder",
      "content":"From Watson Institute <watson_institute@brown.edu> for all undergraduates, all graduate students, campus faculty, all staffThursday, February 11 at 4 p.m.Joukowsky Forum, Watson InstituteReception to follow.In the new world disorder the structure of our alliances and our approach to national security no longer make sense. What might?This lecture is the second of a three part series delivered by Chas Freeman. The next one is scheduled  February 18.Part of the Watson Distinguished Speaker Series. Sponsored by the China Initiative.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":11,
         "preview":"<watson_institute@brown.edu> for all undergraduates, all graduate students, campus faculty, all staffThursday, February 11 at 4 p.m.Joukowsky Forum, Watson InstituteReception to follow.In the new",
         "found":14
      },
      "places":{
         "place":"Forum",
         "preview":"all undergraduates, all graduate students, campus faculty, all staffThursday, February 11 at 4 p.m.Joukowsky Forum, Watson InstituteReception to follow.In the new world disorder",
         "found":16
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Mestizo Chronicles Colloquium at the JCB Library!",
      "content":"From JCB Library <jcb-events@brown.edu> for all\"Mestizo Chronicles: Sources, Readers, Orientation\" colloquium at the JCB Library. Saturday, February 13 | 12:00pmThe aim of this colloquium is to work towards a more fundamental understanding of these sources by taking the texts themselves as the point of departure, rather than the ethnicity of their authors.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":13,
         "preview":"Saturday, February 13 | 12:00pmThe aim of this colloquium is to work towards",
         "found":16
      },
      "places":{
         "place":"JCB Library",
         "preview":"From JCB Library <jcb-events@brown.edu> for all\"Mestizo Chronicles: Sources, Readers, Orientation\" colloquium at the JCB Library.",
         "found":11
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Today! Paper, Ink, Vodun, & the Inquisition",
      "content":"From JCB Library <jcb-events@brown.edu> for allJoin us this afternoon, February 4, 2016 at 4:00 pm, for the JCB's Seminar in the History of the Americas and the World (SHAW) pre-circulated paper discussion:\"Paper, Ink, Vodun, and the Inquisition\"Cécile Fromont (University of Chicago)For access to the paper, please email jcb-events@brown.edu",
      "dates":{
         "year":2016,
         "month":2,
         "day":4,
         "preview":"From JCB Library <jcb-events@brown.edu> for allJoin us this afternoon, February 4, 2016 at 4:00 pm, for the JCB's Seminar in the",
         "found":9
      },
      "times":{
         "hour":"4",
         "minute":"00",
         "daynight":"PM",
         "preview":"Library <jcb-events@brown.edu> for allJoin us this afternoon, February 4, 2016 at 4:00 pm, for the JCB's Seminar in the History of the Americas",
         "found":13
      },
      "summary":{

      },
      "entities":{
         "organization":[
            "JCB Library",
            "JCB",
            "University of Chicago"
         ],
         "location":[
            "the Americas"
         ],
         "email":[
            "jcb-events@brown.edu",
            "jcb-events@brown.edu"
         ],
         "url":[
            "brown.edu",
            "brown.edu"
         ],
         "keyword":[
            "paper",
            "afternoon",
            "February",
            "Seminar",
            "History",
            "allJoin",
            "Chicago",
            "access",
            "University",
            "Fromont",
            "Cécile",
            "SHAW",
            "Inquisition",
            "<jcb-events@brown.edu>",
            "pre-circulated",
            "Vodun",
            "discussion",
            "email",
            "Library",
            "jcb-events@brown.edu"
         ],
         "date":[
            "February 4"
         ]
      }
   },
   {
      "title":"2/12 - Public Lecture by Ramzi Kassem, CUNY Law",
      "content":"From Center for the Study of Race and Ethnicity in America <csrea@brown.edu> for all\"9/11 Warping and its Discontents: Our Security State, Racism, and Foreign Policy\"Ramzi Kassem, Associate Professor of Law, CUNY School of LawFriday, February 12, 4:00pmSmith-Buonanno 106Join us for an exploration of the links between 9/11 warping (the distorting effect of formulating policy through a total security prism), structural racism, and U.S. foreign policy.Free & open to the public.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":12,
         "preview":"Foreign Policy\"Ramzi Kassem, Associate Professor of Law, CUNY School of LawFriday, February 12, 4:00pmSmith-Buonanno 106Join us for an exploration of the links between",
         "found":34
      },
      "summary":{

      },
      "entities":{
         "organization":[
            "Center for the Study of Race",
            "CUNY School of Law Friday"
         ],
         "location":[
            "Ethnicity",
            "America"
         ],
         "email":[
            "csrea@brown.edu"
         ],
         "url":[
            "brown.edu",
            "policy.Free"
         ],
         "keyword":[
            "warping (the distorting effect of formulating policy",
            "CUNY School of LawFriday",
            "Ethnicity in America",
            "Foreign",
            "Warping",
            "Policy",
            "Racism",
            "Security",
            "Ethnicity",
            "America",
            "School",
            "LawFriday",
            "February",
            "CUNY",
            "Race",
            "pmSmith-Buonanno",
            "<csrea@brown.edu>",
            "Professor",
            "106Join",
            "U.S."
         ],
         "date":[
            "Friday",
            "February 12,"
         ]
      }
   },
   {
      "title":"TONIGHT: Liv Nilsson Stutz on Archaeothanatology",
      "content":"From Joukowsky Institute for Archaeology <joukowsky_institute@brown.edu> for all students, campus faculty, all staff\"Archaeothanatology- A Taphonomy of Ritual Practice. Reconstructing mortuary practices from archaeological sources. Examples from Mesolithic and Neolithic Europe.\"Liv Nilsson Stutz (Emory University)Thursday, Feb 4, 2016 at 5:30pmRI Hall 108Liv Nilsson Stutz is Senior Lecturer and Director of Undergraduate Studies in the Department of Anthropology at Emory University. She is an archaeologist and a biological anthropologist interested in the implementation of social theory in archaeology.",
      "dates":{
         "year":2016,
         "month":2,
         "day":4,
         "preview":"Examples from Mesolithic and Neolithic Europe.\"Liv Nilsson Stutz (Emory University)Thursday, Feb 4, 2016 at 5:30pmRI Hall 108Liv Nilsson Stutz is Senior Lecturer",
         "found":34
      },
      "places":{
         "place":"Hall",
         "preview":"Mesolithic and Neolithic Europe.\"Liv Nilsson Stutz (Emory University)Thursday, Feb 4, 2016 at 5:30pmRI Hall 108Liv Nilsson Stutz is Senior Lecturer and Director of",
         "found":37
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"How Chocolate Came to Be",
      "content":"From Geralyn M Ducady <geralyn_ducady@brown.edu> for all undergraduates, humanities grad students, social sciences grad students, campus faculty, all staffKathryn Sampeck. Chocolate has a grim past that involved some of the greatest horrors of Spanish colonialism. A cultural history of taste in a broad sense shows how the contemporary experience of chocolate has roots in colonial choices about who produced chocolate, where, when, and for whom and struggles against abuse and marginalization despite changes in the political economy designed to thwart those very efforts. Feb. 15, 5:30 pm Salomon 001. Tasting by Taza Chocolate. Spons by Haffenreffer",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":15,
         "preview":"Feb.",
         "found":83
      },
      "times":{
         "hour":"5",
         "minute":"30",
         "daynight":"PM",
         "preview":"15, 5:30 pm Salomon 001.",
         "found":85
      },
      "summary":"Tasting by Taza Chocolate.",
      "entities":{
         "keyword":[
            "Chocolate",
            "colonialism",
            "students",
            "undergraduates",
            "humanities",
            "Salomon",
            "Tasting",
            "Feb.",
            "Taza",
            "<geralyn_ducady@brown.edu>",
            "efforts",
            "political",
            "taste",
            "economy",
            "sense",
            "history",
            "broad",
            "cultural",
            "marginalization",
            "Spanish"
         ],
         "url":[
            "brown.edu"
         ],
         "email":[
            "geralyn_ducady@brown.edu"
         ],
         "organization":[
            "Salomon"
         ]
      }
   },
   {
      "title":"Saravah Film Screening - Brazil Initiative",
      "content":"From Aida P Palma Carpio <aida_palma@brown.edu> for allMark your calendar: In 1969, French filmmaker Pierre Barouh captured the changing of the guard in Brazilian popular music, capturing the Old Guard represented by João da Baiana and Pixinguinha as well as the generation of artists that included Maria Bethânia, Paulinho da Viola, and Baden Powell.*This film is in Portuguese only and has no English-language subtitles.Thursday, February 11, 20167p.m. – 9p.m.Joukowsky Forum, Watson Institute, 111 Thayer Street.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":11,
         "preview":"Powell.*This film is in Portuguese only and has no English-language subtitles.Thursday, February 11, 20167p.m.",
         "found":64
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Pathology Seminar Presentation",
      "content":"From Department of Pathology and Laboratory Medicine <bijaya_karanjit@brown.edu> for all students, campus faculty, all staffThe department of Pathology and Laboratory Medicine invites you to attend a seminar presentation titled “Pulmonary Toxicology of Inhaled Silver Nanomaterials” by Laura S. Van Winkle, Ph.D. DABT, Research Cell Biologist and Adjunct Professor at the University of California, Davis. This presentation will take place on Feb. 5th, Friday at 12:00 p.m. in Room 270 of Alpert Medical School. All are welcome.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":5,
         "preview":"Feb.",
         "found":60
      },
      "places":{
         "place":"University",
         "preview":"DABT, Research Cell Biologist and Adjunct Professor at the University of California, Davis.",
         "found":48
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"TOMORROW: Middle East Studies Book Swap",
      "content":"From Middle East Studies DUG <alexander_samaha@brown.edu> for all undergraduates, humanities grad students, campus facultyThe Middle East Studies DUG will be hosting a book swap on Friday February 5 from 2:00-4:00 in the Kim Koo Library on the 3rd floor of the Watson Institute.Bring any books relating to the Middle East you no longer need and pick up some new books from others! Many professors with extra books will be bringing generous donations to the swap, so come see what great read or course textbook you can find! Hot chocolate and Meeting Street cookies will be served.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":5,
         "preview":"East Studies DUG will be hosting a book swap on Friday February 5 from 2:00-4:00 in the Kim Koo Library on the 3rd",
         "found":26
      },
      "places":{
         "place":"Middle East",
         "preview":"on the 3rd floor of the Watson Institute.Bring any books relating to the Middle East you no longer need and pick up some",
         "found":46
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"****2/12:  ‘Creole Grammatology’ symposium****",
      "content":"From COGUT CENTER FOR THE HUMANITIES <traude_kastner@brown.edu> for all undergraduates, humanities grad students, social sciences grad students, campus facultyYou are invited to attend any or all sessions of the symposium \"Creole Grammatology: What Became of European Letters, Images and Memory in Colonial Latin America\" on Friday, February 12, from 9:30AM–6:00PM, in Pembroke Hall, 172 Meeting Street.Speakers include Gordon Whittaker, Goettingen University; Jessica Stair, UC Berkeley; Laura Leon Llerena, Northwestern; Tom Cummins, Harvard; and Andrew Laird, Brown University.For more information about schedule and speakers please visit link below.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":12,
         "preview":"European Letters, Images and Memory in Colonial Latin America\" on Friday, February 12, from 9:30AM–6:00PM, in Pembroke Hall, 172 Meeting Street.Speakers include Gordon",
         "found":46
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"2/11 Nicole Pollock: Innovation in City Government",
      "content":"From Taubman Center for American Politics and Policy <publicpolicy@brown.edu> for all\"Disrupting Government: Building Systems that Support Meaningful Change in the Public Sector\"Nicole PollockThursday, February 11, 12:00 NoonWatson Institute, 111 Thayer St., McKinney Room (3rd floor)Pollock, Providence's first chief innovation officer will talk about the challenges of establishing innovation functions within city government and will reflect on how innovation supports community inclusion, process transparency, and better overall governance.A Taubman Center lecture",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":11,
         "preview":"Building Systems that Support Meaningful Change in the Public Sector\"Nicole PollockThursday, February 11, 12:00 NoonWatson Institute, 111 Thayer St., McKinney Room (3rd floor)Pollock,",
         "found":23
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"***TODAY*** ENGN DUG presents CubeSAT",
      "content":"From ENGN DUG <engineeringdug@brown.edu> for allBH 190 | 5:30 PMTODAY (Feb. 4, 2016)Interested in finding out what one of Brown's coolest project teams has been up to recently? Want to know more about EQUiSat and how they're designing and building a satellite that's ACTUALLY going to space? Come to the Engineering DUG's second student spotlight and find out.As always,~*~*~*~*FREE FOOD*~*~*~*~*FREE FOOD*~*~*~*~",
      "places":{
         "place":"Engineering DUGs",
         "preview":"Come to the Engineering DUG's second student spotlight and find out.As always,~*~*~*~*FREE FOOD*~*~*~*~*FREE",
         "found":48
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Café, té y pan dulce",
      "content":"From Hispanic Studies <hispanic_studies@brown.edu> for all undergraduates, campus faculty, all staffJoin us for an afternoon of delightful conversation (en español), while taking an opportunity to meet our fantastic Hispanic Studies Department! Open to all students.  Our event will be held on February 12 from 2pm - 3pm at Rochambeau House; 84 Prospect St.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":12,
         "preview":"Our event will be held on February 12 from 2pm - 3pm at Rochambeau House; 84 Prospect St.",
         "found":41
      },
      "times":{
         "hour":3,
         "minute":"00",
         "daynight":"PM",
         "preview":"Our event will be held on February 12 from 2pm - 3pm at Rochambeau House; 84 Prospect St.",
         "found":46
      },
      "places":{
         "place":"Rochambeau House;",
         "preview":"event will be held on February 12 from 2pm - 3pm at Rochambeau House; 84 Prospect St.",
         "found":47
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"[TONIGHT] Free Screening of CITIZENFOUR",
      "content":"From Abel K Girma <abel_girma@brown.edu> for all studentsJoin the Rhode Island ACLU and the ACLU of Brown University for a FREE screening of the Academy Award winning CITIZENFOUR and a discussion of surveillance and privacy in the digital age.WHEN: Thursday, February 4, 2016 6:00 PM - 8:30 PM (Screening will start promptly at 6)WHERE: Smith-Buonanno, Room 106",
      "dates":{
         "year":2016,
         "month":2,
         "day":4,
         "preview":"a discussion of surveillance and privacy in the digital age.WHEN: Thursday, February 4, 2016 6:00 PM - 8:30 PM (Screening will start promptly",
         "found":40
      },
      "times":{
         "hour":"6",
         "minute":"00",
         "daynight":"PM",
         "preview":"surveillance and privacy in the digital age.WHEN: Thursday, February 4, 2016 6:00 PM - 8:30 PM (Screening will start promptly at 6)WHERE: Smith-Buonanno,",
         "found":43
      },
      "places":{
         "place":"Smith-Buonanno",
         "preview":"4, 2016 6:00 PM - 8:30 PM (Screening will start promptly at 6)WHERE: Smith-Buonanno, Room 106",
         "found":52
      },
      "entities":{
         "organization":[
            "ACLU of Brown University",
            "Academy",
            "CITIZENFOUR",
            "2016",
            "Room 106"
         ],
         "location":[
            "Rhode Island"
         ],
         "email":[
            "abel_girma@brown.edu"
         ],
         "url":[
            "brown.edu",
            "age.WHEN"
         ],
         "keyword":[
            "Award winning CITIZENFOUR",
            "screening",
            "Thursday",
            "age.WHEN",
            "February",
            "studentsJoin",
            "digital",
            "CITIZENFOUR",
            "privacy",
            "Award",
            "surveillance",
            "discussion",
            "Academy",
            "<abel_girma@brown.edu>",
            "Rhode",
            "ACLU",
            "FREE",
            "Island",
            "Girma",
            "Smith-Buonanno"
         ],
         "date":[
            "Thursday",
            "February 4"
         ]
      }
   },
   {
      "title":"++Rocky Horror Picture Show++ at St. Anthony Hall!",
      "content":"From Cherise G Pabia <cherise_pabia@brown.edu> for all undergraduatesFebruary 5, 10pm-12amSt. Anthony Hall (King House, 154 Hope St)Wax lips, golden underwear, the Time Warp dance, and unforgettable callback lines make this cult classic a must-see.  Come join us for a screening of this iconic film!",
      "times":{
         "hour":10,
         "minute":"00",
         "daynight":"AM",
         "preview":"10pm-12amSt.",
         "found":9
      },
      "summary":{

      },
      "entities":{
         "organization":[
            "King House"
         ],
         "email":[
            "cherise_pabia@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "must-see",
            "undergraduatesFebruary",
            "classic",
            "10pm-12amSt",
            "cult",
            "Anthony",
            "lines",
            "Hall",
            "King",
            "callback",
            "unforgettable",
            "House",
            "underwear",
            "lips",
            "Warp",
            "dance",
            "Hope",
            "Time",
            "golden",
            "<cherise_pabia@brown.edu>"
         ],
         "person":[
            "Anthony Hall"
         ]
      }
   },
   {
      "title":"Stuff Not to Microwave Night @ Tech House",
      "content":"From Christine H Yu <christine_yu@brown.edu> for all undergraduatesRemember all of those things people tell you not to microwave? CDs, grapes, aluminum foil, lightbulbs? Join Tech House at 8 PM in the Harkness lounge on THURSDAY (2/4) as we proceed to microwave all of the above, and more!",
      "times":{
         "hour":8,
         "minute":"00",
         "daynight":"PM",
         "preview":"Join Tech House at 8 PM in the Harkness lounge on THURSDAY (2/4) as we proceed",
         "found":27
      },
      "summary":"Join Tech House at 8 PM in the Harkness lounge on THURSDAY (2/4) as we proceed to microwave all of the above, and more!",
      "entities":{

      }
   },
   {
      "title":"Info Session: Millennium Management Internship",
      "content":"From CareerLAB <careerlab@brown.edu> for all undergraduatesTODAY, Thurs. Feb 4 6pm-7:30pm at CareerLABAjay Nagpal, Chief Operating Officer of Millennium Management and Alumni of Brown University Class of '90, will discuss Millennium and it's intern program.Deadline: Fri, Feb 5th - Apply in BrownConnectMillennium is an investment management firm, primarily focused around the Equities, Fixed Income, and Commodities markets. Millennium offers summer internships in several business areas, which Ajay will provide more information on during his session.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":4,
         "preview":"Feb 4 6pm-7:30pm at CareerLABAjay Nagpal, Chief Operating Officer of Millennium Management",
         "found":7
      },
      "places":{
         "place":"CareerLABAjay Nagpal",
         "preview":"Feb 4 6pm-7:30pm at CareerLABAjay Nagpal, Chief Operating Officer of Millennium Management and Alumni of",
         "found":10
      },
      "summary":{

      },
      "entities":{
         "organization":[
            "Millennium Management and Alumni of Brown University Class"
         ],
         "email":[
            "careerlab@brown.edu"
         ],
         "url":[
            "brown.edu",
            "program.Deadline"
         ],
         "keyword":[
            "Millennium Management",
            "Millennium",
            "Management",
            "Thurs.",
            "6pm-7",
            "business",
            "internships",
            "CareerLABAjay",
            "summer",
            "undergraduatesTODAY",
            "Nagpal",
            "Chief",
            "areas",
            "Operating",
            "markets",
            "Equities",
            "Commodities",
            "Fixed",
            "Income",
            "firm"
         ],
         "date":[
            "Feb 4 6pm-7:30pm",
            "summer"
         ],
         "person":[
            "Thurs",
            "Fixed Income"
         ]
      }
   },
   {
      "title":"Music of the Night: An Immersive Show",
      "content":"From Solomon Goldstein-Rose <solomon_goldstein-rose@brown.edu> for allNext weekend come see Brown's first full-scale immersive theater production, Music of the Night. This fully-accessible experience will take place all over Sayles 2/12-2/14 at 7:30pm. SotG's show combines Romeo and Juliet and Phantom of the Opera.Audience members are advised to wear clothes to walk in, and to be aware that the show contains many intense psychological situations, including sexual harassment, murders, and suicides. Markers to avoid seeing such scenes will be readily visible.",
      "times":{
         "hour":"7",
         "minute":"30",
         "daynight":"Unknown",
         "preview":"7:30pm.",
         "found":30
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"***Rush Beta Rho Pi: Shabbat Dinner***",
      "content":"From Beta Rho Pi <kevin_garcia@brown.edu> for 1st year students, 2nd year studentsInterested in rushing a fraternity? Join the brothers of Beta Rho Pi for our Shabbat dinner on Friday, February 5th from 7pm to 9pm in the Wriston side Marcy Lounge next to the Sharpe Refectory! For more details, check out our full rush calendar posted in Keeney and Andrews or email our rush chair Nate Conrad (nathaniel_conrad@brown.edu).",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":5,
         "preview":"brothers of Beta Rho Pi for our Shabbat dinner on Friday, February 5th from 7pm to 9pm in the Wriston side Marcy Lounge",
         "found":29
      },
      "times":{
         "hour":9,
         "minute":"00",
         "daynight":"PM",
         "preview":"for our Shabbat dinner on Friday, February 5th from 7pm to 9pm in the Wriston side Marcy Lounge next to the Sharpe Refectory!",
         "found":34
      },
      "places":{
         "place":"Sharpe Refectory",
         "preview":"from 7pm to 9pm in the Wriston side Marcy Lounge next to the Sharpe Refectory!",
         "found":42
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"TONIGHT BCF Presents 'Diversity: A Dirty Word?'",
      "content":"From Kathleen M Hay <kathleen_hay@brown.edu> for all studentsBrown Christian Fellowship presents Jesus and the True Promise of Racial Justice TONIGHT (2/4) at 7:30 pm in the Faunce Underground. Enjoy FREE dinner and join Rev. Jeremy Ogunba, Providence pastor and regional consultant for InterVarsity's Black Campus Ministries, as he shares how the hope of the Christian faith is inextricably bound to racial justice--and how Jesus redeems people and communities to live out something much deeper than shallow \"diversity\" efforts that plague our universities.",
      "times":{
         "hour":"7",
         "minute":"30",
         "daynight":"PM",
         "preview":"Jesus and the True Promise of Racial Justice TONIGHT (2/4) at 7:30 pm in the Faunce Underground.",
         "found":22
      },
      "summary":"From Kathleen M Hay <kathleen_hay@brown.edu> for all studentsBrown Christian Fellowship presents Jesus and the True Promise of Racial Justice TONIGHT (2/4) at 7:30 pm in the Faunce Underground.",
      "entities":{

      }
   },
   {
      "title":"2/11 Youth Talk: CSSJ's Civil Rights Initiative",
      "content":"From Center for the Study of Slavery and Justice <ruth_clark@brown.edu> for allYouth Lunch Talk: CSSJ's Civil Rights Movement InitiativeThurs 2/1112PMBassPas, Churchill House, 155 Angell StYouth from Hope High School will discuss their work as part of the CSSJ's CRMI, led by Graduate Fellow Maiyah Gamble-Rivers.  This initiative aims to get high school students to think of the Civil Rights Movement not as something that happened in the past but to use it as a lens to understand the present.Lunch will be served. Please RSVP at the link below.",
      "times":{
         "hour":2,
         "minute":"00",
         "daynight":"PM",
         "preview":"Justice <ruth_clark@brown.edu> for allYouth Lunch Talk: CSSJ's Civil Rights Movement InitiativeThurs 2/1112PMBassPas, Churchill House, 155 Angell StYouth from Hope High School will discuss",
         "found":19
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Save the Date! Donna DeSalvo of the Whitney Museum",
      "content":"From Vice Provost for the Arts <luyuan_xing@brown.edu> for all5:30PM, Thursday, 2/18Granoff Center, Martinos AuditoriumEver wonder what it's like to be a curator at one of the leading art museums in the world? Donna De Salvo, Deputy Director and Senior Curator at the Whitney Museum, led the curation of the exhibit that opened the Whitney's new building, \"America Is Hard to See.\" Her talk will focus on the new building, and the vision behind this critically acclaimed exhibit.Register at donnadesalvo-whitneymuseum.eventbrite.com",
      "places":{
         "place":"Whitney Museum",
         "preview":"Donna De Salvo, Deputy Director and Senior Curator at the Whitney Museum, led the curation of the exhibit that opened",
         "found":40
      },
      "summary":"Donna De Salvo, Deputy Director and Senior Curator at the Whitney Museum, led the curation of the exhibit that opened the Whitney's new building, \"America Is Hard to See.\"",
      "entities":{

      }
   },
   {
      "title":"Brown Journal of World Affairs Release Party",
      "content":"From Brown Journal of World Affairs <ekaterina_shaleva@brown.edu> for all studentsJoin the Brown Journal of World Affairs to celebrate the release of our Fall/Winter 2015 Issue Friday, February 5, in the Faunce Underground from 6 to 8 pm.There will be free Kabob and Curry, music, and many copies of our latest issue!Whether it's to learn more about the Journal, support a friend, or get some ~free~ food, we look forward to seeing you there!*Faunce Underground*Friday, February 5*6-8pm",
      "dates":{
         "year":2015,
         "month":2,
         "day":5,
         "preview":"Affairs to celebrate the release of our Fall/Winter 2015 Issue Friday, February 5, in the Faunce Underground from 6 to 8 pm.There will",
         "found":26
      },
      "times":{
         "hour":5,
         "minute":"00",
         "daynight":"PM",
         "preview":"~free~ food, we look forward to seeing you there!*Faunce Underground*Friday, February 5*6-8pm",
         "found":75
      },
      "summary":{

      },
      "entities":{
         "organization":[
            "World Affairs"
         ],
         "email":[
            "ekaterina_shaleva@brown.edu"
         ],
         "url":[
            "brown.edu",
            "pm.There"
         ],
         "keyword":[
            "Faunce Underground * Friday",
            "Faunce Underground",
            "Journal",
            "free",
            "Faunce",
            "music",
            "copies",
            "Curry",
            "issue!Whether",
            "Kabob",
            "Underground",
            "Friday",
            "friend",
            "Affairs",
            "pm.There",
            "Fall/Winter",
            "February",
            "food",
            "release",
            "Issue"
         ],
         "date":[
            "Friday",
            "February 5",
            "February"
         ]
      }
   },
   {
      "title":"TOMORROW:  Kaffeestunde (German Coffee hour)",
      "content":"From German Studies <wendy_perelman@brown.edu> for all undergraduates, all graduate students, campus facultyJoin us tomorrow, FRIDAY, FEBRUARY 5th from 3-4pm for German Conversation over coffee and snacks at the German Studies Department, 190 Hope Street, Library.  German speakers of all speakers are welcome.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":5,
         "preview":"for all undergraduates, all graduate students, campus facultyJoin us tomorrow, FRIDAY, FEBRUARY 5th from 3-4pm for German Conversation over coffee and snacks at",
         "found":15
      },
      "times":{
         "hour":3,
         "minute":"00",
         "daynight":"PM",
         "preview":"all graduate students, campus facultyJoin us tomorrow, FRIDAY, FEBRUARY 5th from 3-4pm for German Conversation over coffee and snacks at the German Studies",
         "found":18
      },
      "places":{
         "place":"German Studies",
         "preview":"FEBRUARY 5th from 3-4pm for German Conversation over coffee and snacks at the German Studies Department, 190 Hope Street, Library.",
         "found":26
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"TODAY: UCS Student Group info session",
      "content":"From Dara E Bernstein <dara_bernstein@brown.edu> for all undergraduatesInterested in starting a new student group? Trying to re-categorize an existing group? Come to Wilson 102 at 5pm TONIGHT, February 4th, to hear the Student Activities Committee explain the application process and answer any questions you may have. For more information about the Spring 2016 UCS Student Group Application, please visit http://www.brownucs.org/categorization-process/. Questions? Email studentactivities.ucs@gmail.com!",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":4,
         "preview":"Come to Wilson 102 at 5pm TONIGHT, February 4th, to hear the Student Activities Committee explain the application process",
         "found":27
      },
      "times":{
         "hour":5,
         "minute":"00",
         "daynight":"PM",
         "preview":"Come to Wilson 102 at 5pm TONIGHT, February 4th, to hear the Student Activities Committee explain the",
         "found":25
      },
      "places":{
         "place":"Wilson",
         "preview":"Come to Wilson 102 at 5pm TONIGHT, February 4th, to hear the Student",
         "found":21
      },
      "summary":"For more information about the Spring 2016 UCS Student Group Application, please visit http://www.brownucs.org/categorization-process/.",
      "entities":{
         "organization":[
            "Student Activities Committee",
            "UCS",
            "Student Group Application"
         ],
         "email":[
            "dara_bernstein@brown.edu",
            "studentactivities.ucs@gmail.com"
         ],
         "url":[
            "brown.edu",
            "http://www.brownucs.org/categorization-process",
            "studentactivities.ucs",
            "gmail.com"
         ],
         "keyword":[
            "Student Activities Committee explain the application",
            "student",
            "group",
            "questions",
            "application",
            "undergraduatesInterested",
            "visit",
            "<dara_bernstein@brown.edu>",
            "Committee",
            "Bernstein",
            "http://www.brownucs.org/categorization-process/",
            "February",
            "process",
            "Spring",
            "TONIGHT",
            "Dara",
            "Wilson",
            "studentactivities.ucs@gmail.com!"
         ],
         "date":[
            "February"
         ]
      }
   },
   {
      "title":"BOP's 'Winter' Arias Concert this Friday",
      "content":"From Flannery E McIntyre <flannery_mcintyre@brown.edu> for allBrown Opera Productions presents our annual winter arias concert! Come to Martino's Auditorium in the Granoff Center at 7:30 on Friday, February 5 to experience the chill of arias in the freezing cold! Okay, maybe not so cold, but come anyway! See you there!",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":5,
         "preview":"to Martino's Auditorium in the Granoff Center at 7:30 on Friday, February 5 to experience the chill of arias in the freezing cold!",
         "found":27
      },
      "places":{
         "place":"Martinos Auditorium",
         "preview":"Come to Martino's Auditorium in the Granoff Center at 7:30 on Friday, February",
         "found":16
      },
      "summary":{

      },
      "entities":{
         "organization":[
            "Opera Productions",
            "Granoff Center"
         ],
         "email":[
            "flannery_mcintyre@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "arias",
            "allBrown",
            "Opera",
            "Productions",
            "annual",
            "<flannery_mcintyre@brown.edu>",
            "Friday",
            "winter",
            "Martino",
            "Auditorium",
            "Center",
            "concert",
            "Granoff",
            "February",
            "chill",
            "McIntyre",
            "Flannery",
            "freezing",
            "cold"
         ],
         "date":[
            "Friday",
            "February 5"
         ]
      }
   },
   {
      "title":"Brown Democrats: Democratic Debate Watch",
      "content":"From Brown Democrats <kevin_garcia@brown.edu> for all undergraduatesJoin the Brown Democrats on Thursday, February 4th from 9pm to 11pm in Wilson 301 while we watch the newly sanctioned Democratic debate between Senator Sanders and Secretary Clinton.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":4,
         "preview":"Brown Democrats <kevin_garcia@brown.edu> for all undergraduatesJoin the Brown Democrats on Thursday, February 4th from 9pm to 11pm in Wilson 301 while we watch",
         "found":12
      },
      "times":{
         "hour":11,
         "minute":"00",
         "daynight":"PM",
         "preview":"undergraduatesJoin the Brown Democrats on Thursday, February 4th from 9pm to 11pm in Wilson 301 while we watch the newly sanctioned Democratic debate",
         "found":17
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Thursday Night Supper (TNS) TONIGHT",
      "content":"From Diego T Arene-Morley <diego_arene-morley@brown.edu> for all studentsEvery campaign season between Iowa & New Hampshire, there is a much needed Thursday Night Supper, Feb 4th at 58 Keene St from 5:30-7pm with Professor Lint Barrage of Environmental Science.Prof Barrage will explore her interfaith upbringing & the core values reflected in the economic approach to caring for the environment, & how we can find such an approach meaningful (woah!) She will also discuss finding & living our purpose with the pursuit of professional accomplishment. TNS is in the OCRL.",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":4,
         "preview":"& New Hampshire, there is a much needed Thursday Night Supper, Feb 4th at 58 Keene St from 5:30-7pm with Professor Lint Barrage",
         "found":23
      },
      "places":{
         "place":"Keene St",
         "preview":"Hampshire, there is a much needed Thursday Night Supper, Feb 4th at 58 Keene St from 5:30-7pm with Professor Lint Barrage of Environmental",
         "found":25
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"IGCAC A Capella Auditions!",
      "content":"From IGCAC <joohwan_kim@brown.edu> for all studentsIGCAC A Capella Auditions today Thursday, February 4 from 7-11 in Sayles Hall! Drop by and sign up for a group audition slot. Prepare a verse and a chorus from a song you think the groups you're auditioning for will vibe with. We look forward to meeting you!",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":4,
         "preview":"From IGCAC <joohwan_kim@brown.edu> for all studentsIGCAC A Capella Auditions today Thursday, February 4 from 7-11 in Sayles Hall!",
         "found":11
      },
      "summary":"Prepare a verse and a chorus from a song you think the groups you're auditioning for will vibe with.",
      "entities":{

      }
   },
   {
      "title":"Brown Theatre presents Writing Is Live 2016",
      "content":"From Brown Theatre <Paul_Margrave@brown.edu> for allWriting Is Live is an annual festival that celebrates the diversity and strength of new theatrical voices while simultaneously exploring the meaning of text in performance. Join us this weekend at Leeds Theatre for these workshop and reading performances. Tickets are free but advance reservations are recommended. Visit WritingIsLive.com for show details.",
      "places":{
         "place":"Leeds Theatre",
         "preview":"Join us this weekend at Leeds Theatre for these workshop and reading performances.",
         "found":35
      },
      "summary":"Join us this weekend at Leeds Theatre for these workshop and reading performances.",
      "entities":{
         "date":[
            "this weekend"
         ],
         "keyword":[
            "performance",
            "Theatre",
            "reservations",
            "advance",
            "free",
            "annual",
            "festival",
            "diversity",
            "Live",
            "Tickets",
            "strength",
            "Visit",
            "theatrical",
            "voices",
            "meaning",
            "reading",
            "text",
            "weekend",
            "workshop",
            "Leeds"
         ],
         "url":[
            "brown.edu",
            "WritingIsLive.com"
         ],
         "email":[
            "Paul_Margrave@brown.edu"
         ]
      }
   },
   {
      "title":"2/11 Public Policy Concentration Info Session",
      "content":"From Public Policy Program <publicpolicy@brown.edu> for all undergraduates, campus facultyThinking about Public Policy?Join us for a Public Policy Concentration Open House and Information SessionThursday, February 11, 20164:00-5:00 p.m.59 Charlesfield Street, 3rd Floor (New home of Public Policy!)Refreshments provided• Ask questions about the concentration• Hear about summer internship funding opportunities exclusively for public policy concentrators• Meet Director Jim Morone and Carrie Nordlund, the new Associate Director of Public Policy",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":11,
         "preview":"us for a Public Policy Concentration Open House and Information SessionThursday, February 11, 20164:00-5:00 p.m.59 Charlesfield Street, 3rd Floor (New home of Public",
         "found":24
      },
      "summary":"Refreshments provided• Ask questions about the concentration• Hear about summer internship funding opportunities exclusively for public policy concentrators• Meet Director Jim Morone and Carrie Nordlund, the new Associate Director of Public Policy",
      "entities":{
         "organization":[
            "Public Policy Program",
            "Public Policy",
            "Public Policy Concentration Open House"
         ],
         "email":[
            "publicpolicy@brown.edu"
         ],
         "url":[
            "brown.edu"
         ],
         "keyword":[
            "public policy concentrators",
            "Public Policy Concentration",
            "Director of Public Policy",
            "Public Policy",
            "Public",
            "Policy",
            "Concentration",
            "Director",
            "Charlesfield",
            "p.m.",
            "SessionThursday",
            "February",
            "Street",
            "House",
            "Open",
            "Floor",
            "<publicpolicy@brown.edu>",
            "undergraduates",
            "questions",
            "opportunities"
         ],
         "date":[
            "February 11, 20164",
            "summer"
         ],
         "person":[
            "Meet Director Jim Morone"
         ]
      }
   },
   {
      "title":"First Year and New Student Information Session",
      "content":"From Kathy Toro <kathy_toro@brown.edu> for all undergraduatesAll students new to the premed/health careers track should attend. Students must attend a session before meeting with Dean VassilevThursday, February 11, 20164:00-5:00pmCareerLAB 1st FloorDOC-Health Careers Advising",
      "dates":{
         "year":"unknown",
         "month":2,
         "day":11,
         "preview":"Students must attend a session before meeting with Dean VassilevThursday, February 11, 20164:00-5:00pmCareerLAB 1st FloorDOC-Health Careers Advising",
         "found":26
      },
      "summary":{

      },
      "entities":{

      }
   },
   {
      "title":"Mass Incarceration & Prison Reform: lecture-Feb.11",
      "content":"From Bradley W Brockmann <bradley_brockmann@brown.edu> for all students, campus facultyOn Thursday, February 11, 2016, join The Center for Prisoner Health and Human Rights and the Brown ACLU for a talk by Don Specter, Executive Director of the Prison Law Office in California and lead attorney for the incarcerated complainants in Brown v. Plata Supreme Court case. Mr. Specter will discuss the Supreme Court victory and its aftermath, as well as what the future holds for prison reform in California and nationally. Smith-Buonanno Hall, room 106, 5:45-7:00 pm.",
      "dates":{
         "year":2016,
         "month":2,
         "day":11,
         "preview":"From Bradley W Brockmann <bradley_brockmann@brown.edu> for all students, campus facultyOn Thursday, February 11, 2016, join The Center for Prisoner Health and Human Rights",
         "found":11
      },
      "summary":"Mr. Specter will discuss the Supreme Court victory and its aftermath, as well as what the future holds for prison reform in California and nationally.",
      "entities":{

      }
   }];

const ms = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

var events = [];
for (var i = 0; i < data.length; i ++) {
  var e = {title: data[i].title, content: data[i].content};
  if (data[i].dates) {
    e.month = ms[data[i].dates.month];
    e.day = data[i].dates.day;
  } else {
    e.month = '';
    e.day = '';
  }

  if (data[i].places)
    e.location = data[i].places.place;
  else
    e.location = '';

  if (data[i].times)
    e.time = data[i].times.hour.toString() + ':' + data[i].times.minute + (data[i].times.daynight == 'Unknown' ? '' : data[i].times.daynight);
  else
    e.time = '';

  events.push(e);
}

jsonfile.writeFile('tmp/events.json', events, null);