const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
let visitorCount = 0;
const hostname = '127.0.0.1';
const port = 8000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
// app.get('/',(req,res)=>{
//     const filepath = path.resolve(__dirname,'./public/index.html');
//     console.log("inside got");
//     res.sendFile(filepath)
    
// })
// const createFolder = async(folderName)=>{
//     streamName = `public/${folderName}`
//     if (!fs.existsSync(streamName)) {
//         await fs.mkdirSync(streamName, { recursive: true });
//         console.log(`Folder '${streamName}' created successfully.`);
//         const sourceDirectory = 'public/wetech';

//         // Define an array of file names you want to copy
//         const filesToCopy = ['eng.json', 'french.json', 'script.js','style.css'];

//         // Loop through the files and copy them to the new stream folder
//         for (const file of filesToCopy) {
//             const sourceFilePath = path.join(sourceDirectory, file);
//             const destinationFilePath = path.join(streamName, file);

//             try {
//                 fs.copyFileSync(sourceFilePath, destinationFilePath);
//                 console.log(`Copied ${file} to ${streamName}`);
//             } catch (err) {
//                 console.error(`Error copying ${file} to ${streamName}: ${err}`);
//             }
//         }
//     } else {
//         console.log(`Folder '${streamName}' already exists.`);
//     }
// }
// app.post('/submit', async(req, res) => {
//     const fname = req.body.fname;
//     const lname = req.body.lname;
//     const stream = req.body.stream;
//     const image = req.body.image;
    
//   const streamPath = path.join(__dirname, `public/${stream}`);
//   if (fs.existsSync(streamPath)) {
//     return res.status(400).redirect('/404');
//   }
//     if(stream){
//     await createFolder(stream);
//     }
//     // Create and write data to files
// const file1Content = `<!DOCTYPE html>
// <html lang="en" >
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>${stream} Alliance- Event Live Captioning, powered by BeAware</title>
//   <meta name="description" content="WeTech Event Live Captioning, powered by BeAware">    
//   <meta charset="utf-8">
//   <meta name="author" content="Saamer Mansoor">
//   <!--[if IE]><meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'><![endif]-->
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />

//   <meta name="keywords" content="Deaf, HoH, HardofHearing, Hard, Hearing, Assistant, Android, iPhone, iOS, App, Website" />
//   <link rel="canonical" href="https://www.conferencecaptioning.com/wetech">  
//   <meta property="og:site_name" content="WeTech Event Live-Captioning by BeAware">
//   <!-- Twitter Meta Tags -->
//   <meta name="twitter:card" content="summary_large_image">
//   <meta name="twitter:title" content="WeTech Event Live-Captioning By BeAware">
//   <meta name="twitter:description" content="Native Conference Live-Captioning for serving Deaf & Hard of Hearing attendees">
//   <meta name="twitter:image" content="https://conferencecaptioning.com/images/author.png">
//   <!-- Google / Search Engine Tags -->
//   <meta itemprop="name" content="WeTech Event Live-Captioning By BeAware">
//   <meta itemprop="description" content="WeTech Event Live Captioning for serving Deaf & Hard of Hearing attendees">
//   <meta itemprop="image" content="https://conferencecaptioning.com/images/author.png">
//   <!-- Facebook Open Graph -->
//   <meta property="og:url" content="https://conferencecaptioning.com">
//   <meta property="og:type" content="website">
//   <meta property="og:title" content="WeTech Event Live-Captioning by BeAware">
//   <meta property="og:description" content="WeTech Event Live-Captioning for serving Deaf & Hard of Hearing attendees">
//   <meta property="og:image" content="https://conferencecaptioning.com/images/author.png">
//   <meta name="robots" content="noodp,noydir">
//     <!-- Facebook Open Graph end -->

//   <link rel="apple-touch-icon" sizes="57x57" href="../images/apple-touch-icon.png">
//   <link rel="apple-touch-icon" sizes="72x72" href="../images/apple-touch-icon-72x72.png">
//   <link rel="apple-touch-icon" sizes="114x114" href="../images/apple-touch-icon-114x114.png">
//   <!-- <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png"> Need 180x180 icon medium-->
//   <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon.png">
//   <!-- <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"> Need this low-->
//   <link rel="manifest" href="../favicon/site.webmanifest">

//   <!-- Favicons -->
//   <link rel="shortcut icon" href="../images/favicon.png">
  



//   <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'>
//   <link rel="stylesheet" href="./style.css">
// </head>
// <body style="width: 100%; margin: 0px">
//   <!-- partial:index.partial.html -->
//   <div id="header" class="customPadding" style="justify-content: center;">
//     <!-- <div style="display:flex"> -->
//       <img style="height:40px; width:150px; justify-content: center;" src="../images/logo-footer.png">
//       <img style="height:24px; width:24px; justify-content: center;" src="../images/x.png">
//       <img style="height: 43.3px; width:122px; justify-content: center;" src=${image}>
//       <h1 id="caption-header" class="caption-header" style="font-size: 24px; justify-content: center;">Event Live Captioning for ${stream}</h1>
//     <!-- </div> -->
//   </div>
//   <div class="holder">
//   <div style="display: flex; justify-content: center; padding: 0px 0px 10px 0px">
//     <button id="get-live-caption" class="center ios-button ios-button-text">Get Live Captions</button>
//   </div>
//   <div style="height: 400px; border: #1d3b78; border-style: solid;">
//     <div id="live-caption-empty" class="scroller scroller-empty">Transcription will display here</div>
//     <div id="live-caption" class="scroller"></div>
//     <div style="display: flex; justify-content: center;">
//       <i id="#arrow" class="fa-solid fa-arrow-down fa-fade center"></i>
//     </div>
//   </div>
//   <div style="display: flex; justify-content: center; padding:20px">
//     <i class="fa fa-language" aria-hidden="true" style="padding: 0px 10px 0px 10px; color:#1d3b78"></i>
//     <a href="javascript:void(0);"><div id="eng" style="font-size: 18px; padding: 0px 10px 0px 10px;" class="active">English</div></a>
//     <a href="javascript:void(0);"><div id="french" style="font-size: 18px; padding: 0px 10px 0px 10px;" class="disabled">Français</div></a>
//   </div>
//   <div>
//   <span id="hotmail" style="justify-content: center; padding:0px; font-size: 18px; color:#000000; text-decoration: none;">
//     PS: I love you. Get your free live-event transcription at
//   </span>
//   <a href="https://conferencecaptioning.com/?src=wetech" style="justify-content: center; padding:0px; font-size: 18px; text-decoration:underline;color:#0000ff;">
//     ConferenceCaptioning
//   </a>
//   </div>
//   </div>
//   <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js'></script>
//   <script src='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.min.js'></script>
//   <script src="./script.js"></script>
//   <script src="../js/analytics.js"></script>
  
//   </body>  
// </html>
// `;


//     await fs.writeFileSync(`public/${stream}/index.html`, file1Content);
    
    
//     // Perform validation and further processing as needed
//     // For this example, we'll just send a response back
//     res.send(`http://localhost:8000/${stream}/`);
// });
// app.get('/404', (req, res) => {
//   console.log("inside 404 page");
//   res.sendFile(path.join(__dirname, './public/404.html'));
// });

// const printLog= async()=>{
//   await new Promise((resolve) => setTimeout(resolve, 10000));
//   console.log("inside print Log");
  
// } 
// app.get('/:username', async(req,res)=>{
//     const username = req.params.username;
//     console.log("inside ",username);
//     await printLog();
//     if (!req.cookies.visited) {
//       // Increment the visitor count if the visitor is new
//       visitorCount++;
  
//       // Set a cookie to mark that this user has visited
//       res.cookie('visited', '1', {
//         maxAge: 86400000, // Cookie expires after 24 hours, you can set it as needed
//         httpOnly: true // This helps to prevent XSS attacks
//       });
//     }
//     console.log("total count: ",visitorCount);
//     const filepath = path.resolve(__dirname,`./public/${username}/index.html`);
    
//     if(filepath){
//     res.sendFile(filepath)
//     }
// else
// {
// res.send(`This file does not exist`);
// }
//     // Send a dynamic response based on the username
    
// })

app.listen(8000, () => {
  
  console.log(`Server running at http://${hostname}:${port}/`);
});
