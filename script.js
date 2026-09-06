
const galleryItems = [{"type":"video","url":"media/1000024804.mp4","poster":"media/1000024805.jpg","caption":"CM Tuition Classes Batch B Champions Trophy Presentation & Student Speech","tag":"Batch Champions Video","isNew":true},{"type":"image","url":"media/1000024805.jpg","caption":"CM Tuition Classes Champions Group with Merit Trophy","tag":"Batch Champions","isNew":true},{"type":"image","url":"media/1000024807.jpg","caption":"Champions 2026 Merit Award & Trophy Celebration","tag":"Merit Award","isNew":true},{"type":"image","url":"media/1000024784.jpg","caption":"Interactive Classroom Session & Dedicated Doubt Clearing","tag":"Classroom Session","isNew":true},{"type":"image","url":"media/1000024809.jpg","caption":"Deep Focus Peer Study Cohort in Action","tag":"Study Cohort","isNew":true},{"type":"image","url":"media/1000024789.jpg","caption":"Active Problem Solving & Concept Building Discussion","tag":"Learning Hub","isNew":true},{"type":"image","url":"media/1000024809.jpg","caption":"Focused Batch Review & Question Discussion","tag":"Practice Session","isNew":true},{"type":"image","url":"media/WhatsApp_Image_2026-06-04_at_23.30.30.jpeg","caption":"Interactive doubts desk with personalized guidance","tag":"Doubt Desk"},{"type":"image","url":"media/WhatsApp_Image_2026-06-04_at_23.30.30_1.jpeg","caption":"Peer-to-peer focused session","tag":"Peer Learning"},{"type":"image","url":"media/WhatsApp_Image_2026-06-04_at_23.30.31.jpeg","caption":"Active lecture and derivations breakdown","tag":"Lectures"},{"type":"image","url":"media/WhatsApp_Image_2026-06-04_at_23.30.31_1.jpeg","caption":"Deep focus study cohort","tag":"Study Cohort"},{"type":"image","url":"media/WhatsApp_Image_2026-06-04_at_23.30.32.jpeg","caption":"Class VI Foundation workspace","tag":"Foundation"},{"type":"image","url":"media/WhatsApp_Image_2026-06-04_at_23.30.32_1.jpeg","caption":"Evening review and worksheets drill","tag":"Worksheet Drills"},{"type":"image","url":"media/WhatsApp_Image_2026-06-04_at_23.30.33.jpeg","caption":"Elite standard preparation desk","tag":"Preparation Desk"},{"type":"image","url":"media/new/unnamed.webp","caption":"Modern Classroom Experience","tag":"Modern Classroom"},{"type":"image","url":"media/new/unnamed_1.webp","caption":"Immersive Learning Environment","tag":"Campus"},{"type":"image","url":"media/new/unnamed_2.webp","caption":"Focus and Productivity","tag":"Focus"},{"type":"image","url":"media/new/unnamed_3.webp","caption":"Interactive Sessions","tag":"Interactive"},{"type":"image","url":"media/new/unnamed_4.webp","caption":"Elite Student Batches","tag":"Batches"},{"type":"image","url":"media/new/unnamed_5.webp","caption":"Dedicated Study Spaces","tag":"Study Spaces"},{"type":"image","url":"media/new/unnamed_6.webp","caption":"Concept Building","tag":"Concepts"},{"type":"image","url":"media/new/unnamed_7.webp","caption":"Group Discussion Area","tag":"Group Work"},{"type":"image","url":"media/new/unnamed_8.webp","caption":"Doubt Clearing Sessions","tag":"Doubt Clearing"},{"type":"image","url":"media/new/unnamed_10.webp","caption":"Advanced Learning Hub","tag":"Advanced Hub"},{"type":"image","url":"media/new/unnamed_11.webp","caption":"Smart Preparation","tag":"Smart Prep"},{"type":"image","url":"media/new/unnamed.jpg","caption":"Excellence in Action","tag":"Excellence"},{"type":"image","url":"media/sanskrit-diwas-celebration.jpg","caption":"Sanskrit Diwas Celebration at CM Tuition Classes","tag":"Campus Life","isNew":true},{"type":"image","url":"media/sarmistha-mentor.jpg","caption":"Sarmistha Madam \u2014 Senior Mentor & HOD at CM Tuition Classes","tag":"Faculty Mentor","isNew":true}];
const branchBatchesData = {"sastitala":[{"id":"sas-foundation","className":"Class 4 to 8","name":"Foundation & Standard Batches","teacher":"Multiple Expert Faculty","subject":"All Subjects (CBSE / ICSE / WBBSE) - Maths, Science, English, SST, Computer","routine":[{"day":"Flexible Timings","time":"Contact for Schedule"}],"tag":"Enrolling Now","handwrittenSheetUrl":"media/schedules/WhatsApp_Image_2026-06-05_at_23.51.18.jpeg"},{"id":"sas-secondary","className":"Class 9 & 10","name":"Secondary Board Preps","teacher":"Subject Matter Experts","subject":"All Subjects (CBSE / ICSE / WBBSE) - Maths, Science, English, SST, Computer","routine":[{"day":"Multiple Slots Available","time":"Contact for Details"}],"tag":"Filling Fast","handwrittenSheetUrl":"media/schedules/WhatsApp_Image_2026-06-05_at_23.51.19.jpeg"},{"id":"sas-senior","className":"Class 11 & 12","name":"Higher Secondary & Boards","teacher":"Senior Faculty","subject":"Physics, Math, Biology, Chemistry, Commerce, Humanities (CBSE / ISC / WBCHSE)","routine":[{"day":"Weekend & Weekday Batches","time":"Contact for Info"}],"tag":"Enrolling Now","handwrittenSheetUrl":"media/schedules/WhatsApp_Image_2026-06-05_at_23.51.20.jpeg"},{"id":"sas-rmc","className":"Competitive","name":"RMC / RMS / RIMC / Sainik School","teacher":"Specialized Mentors","subject":"Aptitude, Maths & General Knowledge","routine":[{"day":"Dedicated Weekend Sessions","time":"Contact for Details"}],"tag":"Special Batch","handwrittenSheetUrl":"media/schedules/WhatsApp_Image_2026-06-05_at_23.51.21.jpeg"},{"id":"sas-jeeneet","className":"Target Batch","name":"JEE / NEET Foundation","teacher":"Elite Faculty (BP Sir, Suprokash Sir, Abhijit Sir, Mrityunjoy Sir)","subject":"Advanced Physics, Chemistry, Math, Biology","routine":[{"day":"Intensive Sessions","time":"Contact for Schedule"}],"tag":"High Yield","handwrittenSheetUrl":"media/schedules/WhatsApp_Image_2026-06-05_at_23.51.22.jpeg"},{"id":"sas-govt","className":"Govt. Jobs","name":"SSC / Railway / Banking / PSC","teacher":"Expert Competitive Faculty","subject":"General Studies, Aptitude, Reasoning, English","routine":[{"day":"Weekend & Weekday Batches","time":"Contact for Details"}],"tag":"New Batch","handwrittenSheetUrl":"media/schedules/WhatsApp_Image_2026-06-05_at_23.51.23.jpeg"}],"wirelesspara":[{"id":"wp-foundation","className":"Class 4 to 8","name":"Foundation & Standard Batches","teacher":"Multiple Expert Faculty","subject":"All Subjects (CBSE / ICSE / WBBSE Board)","routine":[{"day":"Flexible Timings","time":"Contact for Schedule"}],"tag":"Enrolling Now","handwrittenSheetUrl":"media/schedules/WhatsApp_Image_2026-06-05_at_23.51.18.jpeg"},{"id":"wp-secondary","className":"Class 9 & 10","name":"Secondary Board Preps","teacher":"Subject Matter Experts","subject":"Mathematics, Science, English & SST","routine":[{"day":"Multiple Slots Available","time":"Contact for Details"}],"tag":"Filling Fast","handwrittenSheetUrl":"media/schedules/WhatsApp_Image_2026-06-05_at_23.51.19.jpeg"},{"id":"wp-senior","className":"Class 11 & 12","name":"Higher Secondary & Boards","teacher":"Senior Faculty","subject":"Physics, Chemistry, Math, Biology, Arts (CBSE / ISC / WBCHSE)","routine":[{"day":"Weekend & Weekday Batches","time":"Contact for Info"}],"tag":"Enrolling Now","handwrittenSheetUrl":"media/schedules/WhatsApp_Image_2026-06-05_at_23.51.20.jpeg"},{"id":"wp-rmc","className":"Competitive","name":"RMC / RMS / RIMC / Sainik School","teacher":"Specialized Mentors","subject":"Aptitude, Maths & General Knowledge","routine":[{"day":"Dedicated Weekend Sessions","time":"Contact for Details"}],"tag":"Special Batch","handwrittenSheetUrl":"media/schedules/WhatsApp_Image_2026-06-05_at_23.51.21.jpeg"},{"id":"wp-jeeneet","className":"Target Batch","name":"JEE / NEET Foundation","teacher":"Elite Faculty (BP Sir, Suprokash Sir, Abhijit Sir, Mrityunjoy Sir)","subject":"Advanced Physics, Chemistry, Math, Biology","routine":[{"day":"Intensive Sessions","time":"Contact for Schedule"}],"tag":"High Yield","handwrittenSheetUrl":"media/schedules/WhatsApp_Image_2026-06-05_at_23.51.22.jpeg"},{"id":"wp-govt","className":"Govt. Jobs","name":"SSC / Railway / Banking / PSC","teacher":"Expert Competitive Faculty","subject":"General Studies, Aptitude, Reasoning, English","routine":[{"day":"Weekend & Weekday Batches","time":"Contact for Details"}],"tag":"New Batch","handwrittenSheetUrl":"media/schedules/WhatsApp_Image_2026-06-05_at_23.51.23.jpeg"}]};
const studentsData = [{"id":"stud-new-1","name":"Verified Student","grade":"CM Tuition Classes","achievement":"Excellent Results","type":"video","avatar":"VS","feedbackText":"The environment and the way concepts are explained are brilliant. The regular mock tests really helped me perform well.","videoUrl":"media/WhatsApp_Video_2026-06-07_at_14.08.56.mp4","posterUrl":"media/1000024805.jpg","videoDuration":"1:10","videoThumbBg":"from-indigo-500/30 to-purple-500/30"},{"id":"stud-new-2","name":"Verified Student","grade":"CM Tuition Classes","achievement":"Excellent Results","type":"video","avatar":"VS","feedbackText":"Highly recommend for anyone looking to build a strong foundation. The personalized attention makes a huge difference.","videoUrl":"media/WhatsApp_Video_2026-06-07_at_14.09.01.mp4","posterUrl":"media/1000024807.jpg","videoDuration":"0:55","videoThumbBg":"from-amber-500/30 to-rose-500/30"},{"id":"stud-new-3","name":"Verified Student","grade":"CM Tuition Classes","achievement":"Excellent Results","type":"video","avatar":"VS","feedbackText":"The notes provided are extremely comprehensive. It really makes learning a lot easier and less stressful.","videoUrl":"media/WhatsApp_Video_2026-06-07_at_14.09.28.mp4","posterUrl":"media/1000024784.jpg","videoDuration":"1:25","videoThumbBg":"from-emerald-500/30 to-teal-500/30"},{"id":"stud-1","name":"Rohan S.","grade":"Class 10 (Secondary Boards)","achievement":"Score: 98.4% in Mathematics","type":"video","avatar":"RS","feedbackText":"CM Tuition Classes completely changed my approach to studying. The personalized attention from BP Sir is incredible! Before joining, I struggled to solve board papers in time. Now I finish early with full confidence.","videoUrl":"media/student-1.mp4","posterUrl":"media/1000024809.jpg","videoDuration":"1:42","videoThumbBg":"from-amber-500/30 to-indigo-500/30"},{"id":"stud-2","name":"Ananya M.","grade":"Class 12 (Board Prep)","achievement":"Score: 96% in Physics","type":"video","avatar":"AM","feedbackText":"The mock tests are exactly like the real board exams. The pressure handling training and the exact same paper pattern gives so much confidence.","videoUrl":"media/student-2.mp4","posterUrl":"media/1000024789.jpg","videoDuration":"0:58","videoThumbBg":"from-indigo-500/30 to-emerald-500/30"},{"id":"stud-3","name":"Vikram Das","grade":"Class 11 (JEE Base)","achievement":"Score: State Rank 14","type":"video","avatar":"VD","feedbackText":"I always feared Chemistry, but the faculty here made it my favorite subject. Highly recommended for everyone! Capped cohorts of strictly 10-15 students ensure every doubt is resolved.","videoUrl":"media/student-3.mp4","posterUrl":"media/1000024809.jpg","videoDuration":"1:15","videoThumbBg":"from-purple-500/30 to-amber-500/30"},{"id":"stud-4","name":"Sneha P.","grade":"Class 6 (Science Base)","achievement":"Score: 95.8% Overall in Science","type":"video","avatar":"SP","feedbackText":"The regular mock tests and doubt-clearing sessions are what make CM Tuition the absolute best in town. The memory maps provided make revision effortless.","videoUrl":"media/student-4.mp4","posterUrl":"media/1000024805.jpg","videoDuration":"2:12","videoThumbBg":"from-emerald-500/30 to-amber-500/30"},{"id":"stud-5","name":"Aditya Roy","grade":"Class 10 (English Masterclass)","achievement":"Score: Improved from C to A+ in Literature","type":"text","avatar":"AR","feedbackText":"I used to make silly grammar mistakes and dread essays. The feedback worksheets customized for my script writing pattern helped me develop a strong narrative grasp. Highly recommend the English module here!","videoThumbBg":""},{"id":"stud-6","name":"Diya Kapoor","grade":"Class 12 (NEET Biology Prep)","achievement":"Score: 340+ in Mock Biology Series","type":"text","avatar":"DK","feedbackText":"The interactive memory-maps and NCERT revision sheets provided were absolute game changers. You don't just study, you visualize the processes in detail.","videoThumbBg":""},{"id":"stud-7","name":"Sandeep Chatterjee","grade":"Parent Review","achievement":"Parent of Class 10 Student","type":"text","avatar":"SC","feedbackText":"The best coaching centre in Barrackpore. BP Sir's math classes are phenomenal and the personalized attention really helped my son overcome his fear of mathematics.","videoThumbBg":""},{"id":"stud-8","name":"Riya Sen","grade":"Google Review","achievement":"Class 12 Board Examinee","type":"text","avatar":"RS","feedbackText":"Exceptional faculty and management. The strictly capped batches of 10-15 students mean every student gets focus. Highly structured classes and regular mock tests.","videoThumbBg":""},{"id":"stud-9","name":"Prakash Dey","grade":"Google Review","achievement":"Competitive Aspirant","type":"text","avatar":"PD","feedbackText":"Faculty makes Science incredibly easy to understand with memory maps. CM Tuition classes completely changed my approach to studying.","videoThumbBg":""}];
const teachersData = [{"id":"teach-bp-sir","name":"Brindaban Pramanik (BP Sir)","role":"Founder & CEO \u2022 Maths & Science Director","subjects":"Maths & Science (Class 7-10) \u2022 Chemistry (Class 11 & 12 NEET/JEE)","boards":"CBSE \u2022 ICSE \u2022 ISC \u2022 NEET \u2022 JEE","photo":"media/teachers/1000005960.jpg","education":"Founder, CM Tuition Classes","experience":"12+ Years Experience \u2022 Institute Director & Head Mentor","categories":["All","CBSE","ICSE","ISC","JEE/NEET","Competitive Exams"],"badge":"Founder & CEO","badgeColor":"bg-amber-500 text-stone-950 font-black"},{"id":"teach-suprokash","name":"Suprokash Sir","role":"Senior Biology & NEET Specialist","subjects":"Biology & Life Sciences (Class 9 to 12 \u2022 NEET Preps & Boards)","boards":"NEET \u2022 CBSE \u2022 ISC \u2022 WBCHSE","photo":"media/biology/1000025208.jpg","education":"Senior Biology Educator & NEET Specialist","experience":"Expert in NCERT Biology, DNA Replication, Genetics & NEET High-Yield Questions","categories":["All","JEE/NEET","CBSE","ISC"],"badge":"NEET Biology Specialist","badgeColor":"bg-emerald-600 text-white font-bold"},{"id":"teach-abhijit","name":"Abhijit Sir","role":"Senior Mathematics Specialist (JEE)","subjects":"Mathematics (Class 11 & 12 \u2022 JEE Mains & Advanced)","boards":"JEE Mains \u2022 JEE Advanced \u2022 CBSE \u2022 ISC","photo":"media/teachers/1000024851 (1).jpg","education":"Senior Mathematics Mentor","experience":"Advanced Problem Solving, Calculus & Analytical Geometry","categories":["All","JEE/NEET","CBSE","ISC"],"badge":"JEE Specialist","badgeColor":"bg-rose-600 text-white font-bold"},{"id":"teach-mrityunjoy","name":"Mrityunjoy Sarkar","role":"Senior Physics Faculty (NEET/JEE)","subjects":"Physics (Class 11 & 12 \u2022 NEET & JEE)","boards":"NEET \u2022 JEE \u2022 CBSE \u2022 ISC \u2022 WBCHSE","photo":"media/teachers/1000024845.jpg","education":"M.Sc in Physics","experience":"Specialized in Mechanics, Electrodynamics & NEET Formulations","categories":["All","JEE/NEET","CBSE","ISC"],"badge":"NEET/JEE Physics","badgeColor":"bg-indigo-600 text-white font-bold"},{"id":"teach-sujata","name":"Sujata Chakraborty","role":"Senior Commerce & Humanities Faculty","subjects":"Economics, Accountancy, BST, Tax & Costing (11 & 12) \u2022 English & SST (5-10)","boards":"CBSE \u2022 ICSE \u2022 ISC \u2022 WBCHSE","photo":"media/teachers/1000024856 (1).jpg","education":"Senior Commerce & Arts Specialist","experience":"Expert in Accountancy, Financial Formulations & Board Preps","categories":["All","Commerce","CBSE","ICSE","ISC"],"badge":"Commerce Wing Head","badgeColor":"bg-emerald-600 text-white font-bold"},{"id":"teach-roumodip","name":"Roumodip Sir","role":"AI, IT & Computer Applications Specialist","subjects":"AI / IT / Computer Science (Class 5 to 12)","boards":"CBSE \u2022 ICSE \u2022 ISC","photo":"media/teachers/1000024853 (1).jpg","education":"Computer Science & IT Specialist","experience":"Practical Coding, Python, Java & Computer Applications","categories":["All","CBSE","ICSE","ISC"],"badge":"AI & Tech Wing","badgeColor":"bg-cyan-600 text-white font-bold"},{"id":"teach-nandita","name":"Nandita Pandit","role":"ICSE Mathematics & Science Faculty","subjects":"Mathematics & Science (Class 4 to 10)","boards":"ICSE \u2022 CBSE","photo":"media/teachers/1000024852 (1).jpg","education":"Experienced Academic Mentor","experience":"Dedicated ICSE Numerical Drills & Science Foundations","categories":["All","ICSE","CBSE"],"badge":"ICSE Mentor","badgeColor":"bg-amber-600 text-white font-bold"},{"id":"teach-sudipto","name":"Sudipto Sir","role":"Mathematics & Science Faculty","subjects":"Maths & Science (Class 5 to 10)","boards":"CBSE \u2022 ICSE \u2022 WBBSE","photo":"media/teachers/1000024847 (1).jpg","education":"Science & Math Mentor","experience":"Concept-first approach to Algebra, Geometry & Sciences","categories":["All","CBSE","ICSE"],"badge":"Math & Science","badgeColor":"bg-blue-600 text-white font-bold"},{"id":"teach-sumona","name":"Sumona Chakraborty","role":"English Language & Literature Faculty","subjects":"English (Class 5 to 12)","boards":"CBSE \u2022 WBBSE \u2022 WBCHSE \u2022 ISC","photo":"media/teachers/1000024818.jpg","education":"Senior English Specialist","experience":"Comprehensive Literature Analysis & Creative Writing","categories":["All","Languages","CBSE","ISC"],"badge":"English Specialist","badgeColor":"bg-purple-600 text-white font-bold"},{"id":"teach-riddhish","name":"Riddhish Sir","role":"Senior Humanities & Social Studies Mentor","subjects":"History, Geography, Pol. Science, English (11 & 12) \u2022 English & SST (4-10)","boards":"CBSE \u2022 ICSE \u2022 ISC \u2022 WBBSE \u2022 WBCHSE","photo":"media/teachers/1000024831.jpg","education":"Senior Humanities Specialist","experience":"Structured Answer Framing & Competitive Foundations","categories":["All","Commerce","Languages","CBSE","ICSE","ISC","Competitive Exams"],"badge":"Humanities Specialist","badgeColor":"bg-stone-800 text-amber-300 font-bold"},{"id":"teach-sarmistha","name":"Sarmistha Das","role":"HOD of Hindi & Sanskrit \u2022 Academic Mentor","subjects":"Hindi & Sanskrit (Class 6 to 10) \u2022 Sanskrit (Class 11 & 12)","boards":"CBSE \u2022 ICSE \u2022 ISC \u2022 WBBSE \u2022 WBCHSE","photo":"media/teachers/sarmistha-hod.jpg","education":"HOD & Senior Language Specialist","experience":"Classical Sanskrit Grammar, Hindi Board Scoring Techniques & Academic Mentorship","categories":["All","Languages","CBSE","ICSE","ISC"],"badge":"HOD & Mentor","badgeColor":"bg-purple-700 text-white font-bold"},{"id":"teach-saptak","name":"Saptak Das","role":"Social Studies (SST) Faculty","subjects":"Social Studies (SST) (Class 5 to 10)","boards":"CBSE \u2022 ICSE \u2022 WBBSE","photo":"media/teachers/1000024850 (1).jpg","education":"Social Sciences Educator","experience":"Map-Pointing, History Timelines & Geography Concepts","categories":["All","CBSE","ICSE"],"badge":"SST Expert","badgeColor":"bg-teal-600 text-white font-bold"},{"id":"teach-debarati","name":"Debarati Chakraborty","role":"English & Social Studies Educator","subjects":"English & SST (Class 4 to 8)","boards":"CBSE \u2022 ICSE \u2022 WBBSE","photo":"media/teachers/1000024848 (1).jpg","education":"Foundation Learning Mentor","experience":"Interactive Middle School Foundations & Language Drills","categories":["All","Languages","CBSE","ICSE"],"badge":"Foundation Faculty","badgeColor":"bg-emerald-700 text-white font-bold"},{"id":"teach-puja","name":"Puja Madam","role":"Hindi Language Educator","subjects":"Hindi (Class 9 & 10 CBSE)","boards":"CBSE","photo":"","education":"CBSE Hindi Specialist","experience":"Targeted Grammar, Literature & Essay Writing Modules","categories":["All","Languages","CBSE"],"badge":"CBSE Hindi","badgeColor":"bg-amber-700 text-white font-bold"},{"id":"teach-senior-humanities","name":"Senior Academic Faculty","role":"Competitive Exam & Higher Secondary Faculty","subjects":"General Studies & Advanced Humanities (Class 11 & 12)","boards":"CBSE \u2022 ISC \u2022 Competitive Exams","photo":"media/teachers/1000024858 (1).jpg","education":"Experienced Academic Faculty","experience":"Comprehensive coaching for competitive entrance & boards","categories":["All","Commerce","Competitive Exams","CBSE","ISC"],"badge":"Competitive Mentor","badgeColor":"bg-indigo-800 text-white font-bold"},{"id":"teach-moumita","name":"Moumita Madam","role":"Accountant & Academic Administration","subjects":"Accounts & Fee Management \u2022 Admissions & Student Academic Support","boards":"CM Tuition Classes Administration","photo":"media/teachers/moumita-madam.jpg","education":"Accounting & Management Specialist","experience":"Student records, fee structures & institutional accounting","categories":["All","Commerce","Administration"],"badge":"Accountant","badgeColor":"bg-emerald-700 text-white font-bold"}];
const qaList = [{"q":"Where is the coaching center located?","a":"We have two branches in Barrackpore: one at Sastitala (near BKP Rail Gate) and another at Wireless Para Road."},{"q":"Which boards do you cover?","a":"We cover CBSE, ICSE/ISC, WBBSE, and WBCHSE boards comprehensively across All Subjects."},{"q":"What is the batch size?","a":"To ensure personal attention, our batches are strictly limited to a maximum of 10-15 students depending on the module."},{"q":"Do you offer competitive exam prep?","a":"Yes, we offer rigorous foundation courses for JEE/NEET along with dedicated Olympiad and Government job preparation (Railways, SSC, Banking, PSC)."},{"q":"Who are the primary faculties?","a":"BP Sir leads the Mathematics, Science & Chemistry wing, Suprokash Sir heads Biology & NEET, supported by specialized faculty for Physics, AI/IT, Commerce, SST, English, Hindi, and Sanskrit."},{"q":"Do you provide study materials?","a":"Absolutely. Every student receives detailed handwritten notes, digital memory maps, and exhaustive practice sheets chapter by chapter."},{"q":"How can I contact BP Sir?","a":"You can call directly at +91 91236 06084 or use the WhatsApp chat button on our website."}];

let activeBranch = "sastitala";
let galleryCurrentIndex = 0;
let isPlayingGalleryVideo = false;
let galleryIsHovered = false;
let galleryTimer = null;
let currentRotationAngle = 90;
let activeTestimonialTab = "all";
let activeFacultyTab = "All";

function initCanvasDots() {
  const canvas = document.getElementById("canvas-dots");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const dots = [];
  const numDots = Math.floor((width * height) / 15000);

  for (let i = 0; i < numDots; i++) {
    dots.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.5 + 0.5
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "rgba(100, 116, 139, 0.4)";

    dots.forEach((dot) => {
      dot.x += dot.vx;
      dot.y += dot.vy;

      if (dot.x < 0 || dot.x > width) dot.vx *= -1;
      if (dot.y < 0 || dot.y > height) dot.vy *= -1;

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.strokeStyle = "rgba(100, 116, 139, 0.1)";
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const dist = dx * dx + dy * dy;
        if (dist < 12000) {
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(render);
  }
  render();

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
}

function setBranch(branch) {
  activeBranch = branch;

  document.querySelectorAll("[data-branch-btn]").forEach((btn) => {
    const isTarget = btn.getAttribute("data-branch-btn") === branch;
    btn.className = isTarget
      ? "px-3 py-1 rounded-full transition-all relative bg-stone-900 text-amber-100 shadow-xs cursor-pointer"
      : "px-3 py-1 rounded-full transition-all relative text-stone-600 hover:text-stone-900 cursor-pointer";
  });

  document.querySelectorAll("[data-mobile-branch-btn]").forEach((btn) => {
    const isTarget = btn.getAttribute("data-mobile-branch-btn") === branch;
    btn.className = isTarget
      ? "flex-1 py-2 rounded-lg text-center transition-all bg-stone-900 text-amber-100 shadow-xs cursor-pointer"
      : "flex-1 py-2 rounded-lg text-center transition-all text-stone-600 cursor-pointer";
  });

  document.querySelectorAll("[data-hero-branch-btn]").forEach((btn) => {
    const isTarget = btn.getAttribute("data-hero-branch-btn") === branch;
    btn.className = isTarget
      ? "py-2 px-3 rounded-lg text-[11px] sm:text-xs font-bold transition-all bg-stone-900 text-amber-100 shadow-md cursor-pointer"
      : "py-2 px-3 rounded-lg text-[11px] sm:text-xs font-bold transition-all text-stone-700 hover:bg-stone-900/10 cursor-pointer";
  });

  const branchSelect = document.getElementById("selectedBranch");
  if (branchSelect) branchSelect.value = branch;

  document.querySelectorAll("[data-branch]").forEach((card) => {
    const belongsToBranch = card.getAttribute("data-branch") === branch;
    card.classList.toggle("hidden", !belongsToBranch);
  });
}

function renderGallery() {
  const currentItem = galleryItems[galleryCurrentIndex];
  const stage = document.getElementById("gallery-stage");
  const captionEl = document.getElementById("gallery-caption");
  const counterEl = document.getElementById("gallery-counter");
  const badgeContainer = document.getElementById("gallery-badges");
  const zoomBtn = document.getElementById("gallery-zoom-btn");

  if (!stage || !currentItem) return;

  if (badgeContainer) {
    let badgesHtml = "";
    if (currentItem.isNew) {
      badgesHtml += `
        <span class="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-800 border border-amber-500/30">
          <svg class="w-3 h-3 text-amber-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
          New Highlight
        </span>
      `;
    }
    if (currentItem.tag) {
      badgesHtml += `
        <span class="text-[11px] font-semibold text-stone-600 bg-stone-100/80 px-2.5 py-0.5 rounded-full border border-stone-200">
          ${currentItem.tag}
        </span>
      `;
    }
    badgeContainer.innerHTML = badgesHtml;
  }

  if (counterEl) {
    const typeLabel = currentItem.type === "video"
      ? `<span class="flex items-center gap-1 text-amber-700"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg> Video</span>`
      : `<span class="flex items-center gap-1 text-stone-600"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg> Photo</span>`;
    counterEl.innerHTML = `${typeLabel} <span>•</span> <span>${galleryCurrentIndex + 1} / ${galleryItems.length}</span>`;
  }

  if (currentItem.type === "video") {
    if (zoomBtn) zoomBtn.classList.add("hidden");
    stage.innerHTML = `
      <div class="relative w-full h-full flex items-center justify-center bg-black">
        <video
          id="gallery-main-video"
          src="${currentItem.url}"
          poster="${currentItem.poster || ''}"
          class="w-full h-full object-contain"
          controls
          playsinline
          webkit-playsinline
          preload="metadata"
        ></video>
        <div id="gallery-video-play-overlay" class="absolute inset-0 flex flex-col items-center justify-center bg-black/40 cursor-pointer group/play transition-all duration-300 z-10">
          <div class="w-20 h-20 rounded-full bg-amber-500/90 hover:bg-amber-400 text-stone-950 flex items-center justify-center shadow-2xl backdrop-blur-md transition-colors scale-100 hover:scale-110 active:scale-95">
            <svg class="w-9 h-9 fill-stone-950 translate-x-1" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
          <span class="mt-3 px-3 py-1 rounded-full bg-black/70 text-white text-xs font-semibold tracking-wide border border-white/10 backdrop-blur-md">
            Click to Play Video
          </span>
        </div>
      </div>
    `;

    const vid = document.getElementById("gallery-main-video");
    const overlay = document.getElementById("gallery-video-play-overlay");
    if (vid && overlay) {
      overlay.addEventListener("click", () => {
        overlay.classList.add("hidden");
        document.querySelectorAll("video").forEach((v) => {
          if (v !== vid && !v.paused) v.pause();
        });
        vid.play().catch(e => console.log('Gallery play:', e));
        isPlayingGalleryVideo = true;
      });
      vid.addEventListener("play", () => {
        overlay.classList.add("hidden");
        isPlayingGalleryVideo = true;
      });
      vid.addEventListener("pause", () => {
        isPlayingGalleryVideo = false;
      });
      vid.addEventListener("ended", () => {
        isPlayingGalleryVideo = false;
        overlay.classList.remove("hidden");
      });
    }
  } else {
    if (zoomBtn) zoomBtn.classList.remove("hidden");
    isPlayingGalleryVideo = false;
    stage.innerHTML = `
      <div class="w-full h-full cursor-zoom-in relative" onclick="openLightbox('${currentItem.url}', '${escapeHtml(currentItem.caption)}')">
        <img
          src="${currentItem.url}"
          alt="${escapeHtml(currentItem.caption)}"
          class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
    `;
  }

  if (captionEl) {
    captionEl.textContent = currentItem.caption;
  }

  document.querySelectorAll("[id^='thumb-']").forEach((thumb, idx) => {
    const isActive = idx === galleryCurrentIndex;
    thumb.className = `relative w-20 sm:w-24 aspect-video rounded-xl overflow-hidden border-2 shrink-0 transition-all duration-200 cursor-pointer ${
      isActive
        ? "border-amber-500 scale-105 shadow-md ring-2 ring-amber-500/40 z-10 opacity-100"
        : "border-transparent opacity-60 hover:opacity-100 hover:scale-100"
    }`;
  });

  const activeThumb = document.getElementById(`thumb-${galleryCurrentIndex}`);
  if (activeThumb) {
    activeThumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }
}

function selectGallerySlide(idx) {
  galleryCurrentIndex = idx;
  renderGallery();
}

function prevGallerySlide() {
  galleryCurrentIndex = galleryCurrentIndex === 0 ? galleryItems.length - 1 : galleryCurrentIndex - 1;
  renderGallery();
}

function nextGallerySlide() {
  galleryCurrentIndex = galleryCurrentIndex === galleryItems.length - 1 ? 0 : galleryCurrentIndex + 1;
  renderGallery();
}

function initGalleryAutoSlide() {
  const container = document.getElementById("gallery-container");
  if (container) {
    container.addEventListener("mouseenter", () => (galleryIsHovered = true));
    container.addEventListener("mouseleave", () => (galleryIsHovered = false));
  }

  const stage = document.getElementById("gallery-stage");
  if (stage) {
    let touchStartX = 0;
    let touchEndX = 0;
    stage.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    stage.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        nextGallerySlide();
      } else if (touchEndX - touchStartX > 50) {
        prevGallerySlide();
      }
    }, { passive: true });
  }

  if (galleryTimer) clearInterval(galleryTimer);
  galleryTimer = setInterval(() => {
    if (!isPlayingGalleryVideo && !galleryIsHovered && galleryItems[galleryCurrentIndex].type !== "video") {
      nextGallerySlide();
    }
  }, 4500);
}

function openLightbox(url, caption) {
  const modal = document.getElementById("lightbox-modal");
  const img = document.getElementById("lightbox-img");
  const captionEl = document.getElementById("lightbox-caption");
  if (!modal || !img) return;

  img.src = url;
  if (captionEl) captionEl.textContent = caption;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

function openRoutineSheetModal(imageUrl) {
  const modal = document.getElementById("routine-modal");
  const img = document.getElementById("routine-modal-img");
  if (!modal || !img) return;

  currentRotationAngle = 90;
  img.src = imageUrl;
  img.style.transform = `rotate(${currentRotationAngle}deg)`;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeRoutineSheetModal() {
  const modal = document.getElementById("routine-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

function rotateRoutineSheet(delta) {
  currentRotationAngle += delta;
  const img = document.getElementById("routine-modal-img");
  if (img) {
    img.style.transform = `rotate(${currentRotationAngle}deg)`;
  }
}

function setTestimonialTab(tab) {
  activeTestimonialTab = tab;

  document.querySelectorAll("[data-feedback-tab]").forEach((btn) => {
    const isTarget = btn.getAttribute("data-feedback-tab") === tab;
    btn.className = isTarget
      ? "px-4.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors duration-200 bg-white text-stone-900 shadow-xs cursor-pointer"
      : "px-4.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors duration-200 text-stone-500 hover:text-stone-800 cursor-pointer";
  });

  document.querySelectorAll("[data-feedback-type]").forEach((card) => {
    const type = card.getAttribute("data-feedback-type");
    if (tab === "all") {
      card.classList.remove("hidden");
    } else {
      card.classList.toggle("hidden", type !== tab);
    }
  });
}

function playVideoDirect(studentId) {
  const vid = document.getElementById(`vid-element-${studentId}`);
  const overlay = document.getElementById(`vid-play-screen-${studentId}`);
  const topBar = document.getElementById(`vid-top-bar-${studentId}`);

  if (!vid) return;

  document.querySelectorAll("video").forEach((other) => {
    if (other !== vid && !other.paused) other.pause();
  });

  if (overlay) overlay.classList.add("hidden");
  if (topBar) topBar.classList.add("hidden");

  vid.play().catch((err) => {
    console.log("Direct play error:", err);
    if (overlay) overlay.classList.remove("hidden");
  });
}

function openVideoModalById(studentId) {
  const student = studentsData.find((s) => s.id === studentId);
  if (student) openVideoModal(student);
}

function openVideoModal(student) {
  const modal = document.getElementById("testimonial-video-modal");
  const vid = document.getElementById("modal-video-element");
  const avatar = document.getElementById("modal-video-avatar");
  const name = document.getElementById("modal-video-name");
  const grade = document.getElementById("modal-video-grade");
  const text = document.getElementById("modal-video-text");

  if (!modal || !vid) return;

  document.querySelectorAll("video").forEach((v) => {
    if (!v.paused) v.pause();
  });

  vid.src = student.videoUrl || "";
  vid.poster = student.posterUrl || "";
  if (avatar) avatar.textContent = student.avatar;
  if (name) name.textContent = student.name;
  if (grade) grade.innerHTML = `${student.grade} • <strong class="text-emerald-400">${student.achievement}</strong>`;
  if (text) text.innerHTML = `&ldquo;${student.feedbackText}&rdquo;`;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  vid.play().catch(e => console.log('Modal video:', e));
}

function closeVideoModal() {
  const modal = document.getElementById("testimonial-video-modal");
  const vid = document.getElementById("modal-video-element");
  if (vid) vid.pause();
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

function setFacultyTab(cat) {
  activeFacultyTab = cat;

  document.querySelectorAll("[data-faculty-tab]").forEach((btn) => {
    const isTarget = btn.getAttribute("data-faculty-tab") === cat;
    btn.className = isTarget
      ? "px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm border bg-stone-900 text-amber-400 border-stone-900 scale-105 cursor-pointer"
      : "px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm border bg-white text-stone-600 border-stone-200 hover:border-stone-300 hover:bg-stone-50 cursor-pointer";
  });

  document.querySelectorAll("[data-categories]").forEach((card) => {
    const categories = card.getAttribute("data-categories").split(",");
    if (cat === "All") {
      card.classList.remove("hidden");
    } else {
      const matches = categories.includes(cat);
      card.classList.toggle("hidden", !matches);
    }
  });
}

function toggleFaq(idx) {
  const content = document.getElementById(`faq-content-${idx}`);
  const icon = document.getElementById(`faq-icon-${idx}`);
  if (!content || !icon) return;

  const isOpen = !content.classList.contains("hidden");
  if (isOpen) {
    content.classList.add("hidden");
    icon.innerHTML = `<svg class="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>`;
  } else {
    content.classList.remove("hidden");
    icon.innerHTML = `<svg class="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>`;
  }
}

function handleEnquirySubmit(e) {
  e.preventDefault();
  const form = document.getElementById("enquiry-form");
  const submitBtn = document.getElementById("submit-enquiry-btn");
  const successAlert = document.getElementById("enquiry-success-alert");
  const errorAlert = document.getElementById("enquiry-error-alert");

  const name = document.getElementById("studentName").value.trim();
  const phone = document.getElementById("phoneNumber").value.trim();

  if (!name || !phone) {
    if (errorAlert) errorAlert.classList.remove("hidden");
    return;
  }
  if (errorAlert) errorAlert.classList.add("hidden");

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending inquiry descriptors...</span>`;
  }

  setTimeout(() => {
    if (successAlert) successAlert.classList.remove("hidden");
    if (form) form.reset();
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <span>Submit Registration Query</span>
        <svg class="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      `;
    }
  }, 1200);
}

let isChatbotOpen = false;

function toggleChatbot() {
  isChatbotOpen = !isChatbotOpen;
  const chatWindow = document.getElementById("chatbot-window");
  const chatBtnIcon = document.getElementById("chatbot-btn-icon");

  if (!chatWindow || !chatBtnIcon) return;

  if (isChatbotOpen) {
    chatWindow.classList.remove("hidden");
    chatWindow.classList.add("flex");
    chatBtnIcon.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`;
  } else {
    chatWindow.classList.add("hidden");
    chatWindow.classList.remove("flex");
    chatBtnIcon.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>`;
  }
}

function handleChatQuestion(idx) {
  const qa = qaList[idx];
  if (!qa) return;

  const messagesContainer = document.getElementById("chatbot-messages");
  if (!messagesContainer) return;

  const userBubble = document.createElement("div");
  userBubble.className = "flex justify-end";
  userBubble.innerHTML = `<div class="max-w-[85%] p-3 rounded-2xl text-xs bg-indigo-600 text-white rounded-tr-sm shadow-xs">${escapeHtml(qa.q)}</div>`;
  messagesContainer.appendChild(userBubble);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  setTimeout(() => {
    const botBubble = document.createElement("div");
    botBubble.className = "flex justify-start";
    botBubble.innerHTML = `<div class="max-w-[85%] p-3 rounded-2xl text-xs bg-white border border-stone-200 text-stone-700 rounded-tl-sm shadow-xs">${escapeHtml(qa.a)}</div>`;
    messagesContainer.appendChild(botBubble);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 450);
}

function toggleGoogleTranslate() {
  const select = document.querySelector(".goog-te-combo");
  if (select) {
    const isBen = select.value === "bn";
    select.value = isBen ? "en" : "bn";
    select.dispatchEvent(new Event("change"));
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function setupEventListeners() {
  const mobileToggleBtn = document.getElementById("mobile-nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileToggleBtn && mobileMenu) {
    mobileToggleBtn.addEventListener("click", () => {
      const isClosed = mobileMenu.classList.contains("hidden");
      if (isClosed) {
        mobileMenu.classList.remove("hidden");
        mobileToggleBtn.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`;
      } else {
        mobileMenu.classList.add("hidden");
        mobileToggleBtn.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>`;
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox();
      closeRoutineSheetModal();
      closeVideoModal();
    }
  });

  studentsData.forEach((student) => {
    if (student.type === "video") {
      const vid = document.getElementById(`vid-element-${student.id}`);
      const overlay = document.getElementById(`vid-play-screen-${student.id}`);
      const topBar = document.getElementById(`vid-top-bar-${student.id}`);
      if (vid) {
        vid.addEventListener("play", () => {
          if (overlay) overlay.classList.add("hidden");
          if (topBar) topBar.classList.add("hidden");
          document.querySelectorAll("video").forEach((v) => {
            if (v !== vid && !v.paused) v.pause();
          });
        });
        vid.addEventListener("pause", () => {
          if (overlay) overlay.classList.remove("hidden");
          if (topBar) topBar.classList.remove("hidden");
        });
        vid.addEventListener("ended", () => {
          if (overlay) overlay.classList.remove("hidden");
          if (topBar) topBar.classList.remove("hidden");
        });
      }
    }
  });
}

function initializeApp() {
  initCanvasDots();
  initGalleryAutoSlide();
  setupEventListeners();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
