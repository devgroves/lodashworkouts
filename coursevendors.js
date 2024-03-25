const _ = require('lodash');
const coursesWithVendors = [{
      "id": 1,
      "subjectSpan": "Network_Cyber_Security",
      "title": "CompTIA A+ Core-1 & Core-2",
      "type": "Self-Paced",
      "lessonscount": "9 lessons",
      "mode": "",
      "marketPrice": "$678.0",
      "offerPrice": "$339.0",
      "description": "The assessment will certify that the successful candidate has the knowledge, skills, and abilities required to identify the common risks associated with using conventional end-user technology and safely protect themselves and their organizations from security risks.CompTIA A+ certified professionals are proven problem solvers. They support today’s core technologies from security to networking to virtualization and more. CompTIA A+ is the industry standard for launching IT careers into today’s digital world. It is trusted by employers around the world to identify the go-to person in end point management & technical support roles. CompTIA A+ appears in more tech support job listings than any other IT credential. Increased reliance on SaaS applications for remote work More on troubleshooting and how to remotely diagnose and correct common software, hardware, or connectivity problems Changing core technologies from cloud virtualization and IoT device security to data management and scripting Multiple operating systems and how to keep them running properly Reflects the changing nature of the job role, the very need to assess whether it’s best to fix something on site, or to send proprietary technologies directly to vendors IMPORTANT: This course requires TWO exams to be passed - CompTIA A+ 220-1101 (Core 1) and 220-1102 (Core 2) Candidates must complete both 1101 and 1102 to earn certification",
      "audienceProfile": "CompTIA A+ certification is specifically designed for computer technicians who are responsible for the installation, maintenance, and repair of computer hardware and software systems. Here are some of the job roles that the CompTIA A+ certification is suitable for: IT Support Specialists, Field Service Technicians, Computer Technicians, Help Desk Technicians, Network Administrators, Junior System Administrators, IT Support Analysts.",
      "requirements": "Individuals who have at least six to twelve months of hands-on experience in the IT field, working with hardware and software technologies are good a fit. This will give them a solid foundation of knowledge to build upon when preparing for the exam. The exam covers a wide range of topics related to computer hardware and software, including installation, configuration, troubleshooting, security, and mobile devices.",
      "courseLevel": "Beginner",
      "courseSpan": "",
      "durationSpan": "",
      "vendor": "network++",
      "courseOrder": 10108,
      "coursePackages": [{
            "id": 1,
            "packageOrder": 1,
            "name": "Learn - One CompTIA CertMaster Learn license for this course. Includes self-paced lessons with practice questions, videos, and performance-based questions.Validity: 12 months"
         },
         {
            "id": 2,
            "packageOrder": 2,
            "name": "Lab - Gradable hands-on assessments provide an accurate picture of your ability to correctly and efficiently perform job tasks. This is a browser-based lab, aligned with CompTIA exam objectives. Validity: 12 months"
         },
         {
            "id": 3,
            "packageOrder": 3,
            "name": "Practice - One CompTIA CertMaster Practice License for this course. This is an online companion tool to reinforce what you know and close knowledge gaps. It has timed practice test with performance-based questions. Validity: 12 months"
         },
         {
            "id": 4,
            "packageOrder": 4,
            "name": "Exam - Exam Vouchers, one each for  A+(Core1 and Core2) certification. Validity: 12 months"
         },
         {
            "id": 120,
            "packageOrder": 5,
            "name": "Mentor Hour - Opportunity to discuss, clarify and learn with a technology champion from the industry. Talentstreasure will arrange for a live call between candidates and mentor as per convenient schedule."
         }
      ],
      "courseFeeCombos": [{
            "id": 1,
            "offerfeeid": "offerfee1",
            "name": "<p style=\"color: indianred; text-align: center; font-weight: bold;margin: 0\">MOST POPULAR</p> <p style=\"font-weight:bold;font-size:20px;margin: 0;\">CompTIA CertMaster Learn Bundle</p>",
            "description": "<ul style=\"list-style-type: none;padding: 10px;background-color: white;font-size: 16px;color: black;font-weight: 30;border-radius: 5px;\"><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>Browser-based CompTIA Lab</li> <li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>Practice Questions & Videos </li><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>Aligned with CompTIA exam </li></ul>",
            "marketPrice": "$944.0",
            "offerPrice": "$472.0",
            "isDefault": null,
            "trainingBatches": []
         },
         {
            "id": 2,
            "offerfeeid": "offerfee2",
            "name": "<p style=\"font-weight:bold;font-size:20px;margin: 0;\">CompTIA Exam Bundle</p>\t",
            "description": "<ul style=\"list-style-type: none;padding: 10px;background-color: white;font-size: 16px;color: black;font-weight: 30;border-radius: 5px;\"><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>CompTIA Exam Voucher</li> <li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>CertMaster Practice questions</li> <li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>Track learning progress</li><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>Aligned with CompTIA exam</li> </ul>",
            "marketPrice": "$1208.0",
            "offerPrice": "$604.0",
            "isDefault": true,
            "trainingBatches": []
         },
         {
            "id": 3,
            "offerfeeid": "offerfee3",
            "name": "<p style=\"font-weight:bold;font-size:20px;margin: 0;\">Exam Voucher</p>\t",
            "description": "<ul style=\"list-style-type: none;padding: 10px;background-color: white;font-size: 16px;color: black;font-weight: 30;border-radius: 5px;\"><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i> CompTIA A+ Core-1 & Core-2 exam voucher</li> <li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>One CompTIA exam attempt</li></ul>",
            "marketPrice": "$792.0",
            "offerPrice": "$396.0",
            "isDefault": false,
            "trainingBatches": []
         },
         {
            "id": 126,
            "offerfeeid": "offerfee4",
            "name": "<p style=\"font-weight:bold;font-size:20px;margin: 0;\">eBook</p>",
            "description": "<ul style=\"list-style-type: none;padding: 10px;background-color: white;font-size: 16px;color: black;font-weight: 30;border-radius: 5px;\"><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i> Self-Paced Study Guide</li> <li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>Designed by CompTIA</li><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>Review questions at the end of lessons.</li></ul>",
            "marketPrice": "$128.0",
            "offerPrice": "$64.0",
            "isDefault": true,
            "trainingBatches": []
         },
         {
            "id": 168,
            "offerfeeid": "offerfee6",
            "name": "<p style=\"font-weight:bold;font-size:20px;margin: 0;\"> CompTIA A+ Practice Exam</p>",
            "description": "<ul style=\"list-style-type: none;padding: 10px;background-color: white;font-size: 16px;color: black;font-weight: 30;border-radius: 5px;\"><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i> CompTia A+ Syllabus based questions</li> </ul>",
            "marketPrice": "$25.0",
            "offerPrice": "$0.0",
            "isDefault": false,
            "trainingBatches": []
         },
         {
            "id": 139,
            "offerfeeid": "offerfee7",
            "name": "<p style=\"font-weight:bold;font-size:20px;margin: 0;\">CompTIA A+ Core 1&2 Exam  Objectives </p>\t",
            "description": "<ul style=\"list-style-type: none;padding: 10px;background-color: white;font-size: 16px;color: black;font-weight: 30;border-radius: 5px;\"><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>CompTIA A+ Core 1&2 Exam  Objectives</li></ul> ",
            "marketPrice": "$25.0",
            "offerPrice": "$0.0",
            "isDefault": true,
            "trainingBatches": []
         }
      ],
      "courseModules": [{
            "id": 1,
            "lessonOrder": 1,
            "lessonTitle": "<style> .sphighlight {     color: black;   } @media only screen and (max-width: 600px) {   .sphighlight {     color: lightgray;   } } </style> <p class=\"sphighlight\">1) Hardware - Identifying, using and connecting hardware components and devices, including the broad knowledge about different devices that is now necessary to support the remote workforce</p>"
         },
         {
            "id": 2,
            "lessonOrder": 2,
            "lessonTitle": "2) Networking - Explain types of networks and connections including TCP/IP, WIFI and SOHO"
         },
         {
            "id": 3,
            "lessonOrder": 3,
            "lessonTitle": "3) Troubleshooting - Troubleshoot real-world device and network issues quickly and efficiently\t"
         },
         {
            "id": 4,
            "lessonOrder": 4,
            "lessonTitle": "4) Mobile Devices - Install and configure laptops and other mobile devices and support applications to ensure connectivity for end users\t"
         },
         {
            "id": 5,
            "lessonOrder": 5,
            "lessonTitle": "5) Virtualization and Cloud Computing - Compare and contrast cloud computing concepts and set up client-side virtualization\t"
         },
         {
            "id": 6,
            "lessonOrder": 6,
            "lessonTitle": "6) Software Troubleshooting - Troubleshoot PC and mobile device issues including common OS, malware and security issues"
         },
         {
            "id": 7,
            "lessonOrder": 7,
            "lessonTitle": "7) Operating Systems - Install and support Windows OS including command line and client support, system configuration imaging and troubleshooting for Mac OS, Chrome OS, Android and Linux OS"
         },
         {
            "id": 8,
            "lessonOrder": 8,
            "lessonTitle": "8) Security - Identify and protect against security vulnerabilities for devices and their network connections"
         },
         {
            "id": 9,
            "lessonOrder": 9,
            "lessonTitle": "9) Operational Procedures - Follow best practices for safety, environmental impacts, and communication and professionalism"
         }
      ],
      "courseCategory": {
         "id": 1,
         "name": "Network & Security"
      }
   },
   {
      "id": 34,
      "subjectSpan": "Network_Cyber_Security",
      "title": "CompTIA A+ Core-1",
      "type": "Self-Paced",
      "lessonscount": "5 lessons",
      "mode": "",
      "marketPrice": "$339.0",
      "offerPrice": "$169.0",
      "description": "<p>     CompTIA A+ is the industry standard for launching IT careers into today’s digital world. The CompTIA A+ Core Series requires candidates to pass two exams: Core 1 (220-1101) and Core 2 (220-1102) and covers the following content, emphasizing the technologies and skills IT pros need to support a hybrid workforce:  </p> <ol style=\"list-style-type:upper-latin;\">     <li>         Increased reliance on SaaS applications for remote work      </li>     <li>         How to remotely diagnose and correct common software, hardware or connectivity problems      </li>     <li>         Evolving core technologies from cloud virtualization and IoT device security to data management and scripting      </li>     <li>         Multiple operating systems, when to use them and how to keep them running properly      </li>     <li>         Reflects the changing nature of the job, including how to assess if it’s best to fix something on site, or send it to a specialized provider Note on CompTIA A+ 220-1101 (Core 1) and 220-1102 (Core 2).      </li> </ol> <p>     Certification - Candidates must complete both 1101 and 1102 to earn certification. Exams cannot be combined across the series </p>",
      "audienceProfile": "CompTIA A+ Certification is specifically designed for computer technicians who are responsible for the installation, maintenance, and repair of computer hardware and software systems. Here are some of the job roles that the CompTIA A+ certification is suitable for: IT Support Specialists, Field Service Technicians, Computer Technicians, Help Desk Technicians, Network Administrators, Junior System Administrators and IT Support Analysts",
      "requirements": "CompTIA A+ Core 1(220-1101) covers Mobile devices, Networking Technology, Hardware, Virtualization and Cloud computing. ",
      "courseLevel": "Beginner",
      "courseSpan": "",
      "durationSpan": "40 Hours",
      "vendor": "CompTIA",
      "courseOrder": 10106,
      "coursePackages": [{
            "id": 64,
            "packageOrder": 1,
            "name": "Learn - One CompTIA CertMaster Learn for A+ Core 1 (220-1101) license. Includes self-paced lessons with practice questions, videos, and performance-based questions.Validity: 12 months"
         },
         {
            "id": 65,
            "packageOrder": 2,
            "name": "Lab - Gradable hands-on assessments provide an accurate picture of your ability to correctly and efficiently perform job tasks. This is a browser-based lab, aligned with CompTIA exam objectives. Validity: 12 months"
         },
         {
            "id": 66,
            "packageOrder": 3,
            "name": "Practice - One CompTIA CertMaster Practice for A+ Core 1 (220-1101) License. This is an online companion tool to reinforce what you know and close knowledge gaps. It has timed practice test with performance-based questions. Validity: 12 months"
         },
         {
            "id": 67,
            "packageOrder": 4,
            "name": "Exam - Exam Voucher for A+ Core 1(220-1101). Validity: 12 months"
         },
         {
            "id": 115,
            "packageOrder": 5,
            "name": "Instructor Led A+"
         },
         {
            "id": 118,
            "packageOrder": 6,
            "name": "Mentor Hour - Opportunity to discuss, clarify and learn with a technology champion from the industry. Talentstreasure will arrange for a live call between candidates and mentor as per convenient schedule."
         }
      ],
      "courseFeeCombos": [{
            "id": 47,
            "offerfeeid": "offerfee1",
            "name": "<p style=\"font-weight:bold;font-size:20px;margin: 0;\">CompTIA CertMaster Learn Bundle</p>",
            "description": "<ul style=\"list-style-type: none;padding: 10px;background-color: white;font-size: 16px;color: black;font-weight: 30;border-radius: 5px;\"><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>CompTIA's self-paced lessons</li> <li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i> Browser-based CompTIA Lab</li><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i> Practice Questions & Videos </li><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i> Aligned with CompTIA exam</li></ul>\t",
            "marketPrice": "$472.0",
            "offerPrice": "$236.0",
            "isDefault": null,
            "trainingBatches": []
         },
         {
            "id": 48,
            "offerfeeid": "offerfee2",
            "name": "<p style=\"color: indianred; text-align: center; font-weight: bold;margin: 0\">MOST POPULAR</p> <p style=\"font-weight:bold;font-size:20px;margin: 0;\">CompTIA Exam Bundle</p>",
            "description": "<ul style=\"list-style-type: none;padding: 10px;background-color: white;font-size: 16px;color: black;font-weight: 30;border-radius: 5px;\"><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>CompTIA Exam Voucher </li> <li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i> CertMaster Practice questions</li><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>Track learning progress</li><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i> Aligned with CompTIA exam</li></ul>\t",
            "marketPrice": "$472.0",
            "offerPrice": "$302.0",
            "isDefault": null,
            "trainingBatches": []
         },
         {
            "id": 107,
            "offerfeeid": "offerfee3",
            "name": "<p style=\"font-weight:bold;font-size:20px;margin: 0;\">Exam Voucher </p>\t",
            "description": "<ul style=\"list-style-type: none;padding: 10px;background-color: white;font-size: 16px;color: black;font-weight: 30;border-radius: 5px;\"><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>CompTIA A+ Core-1 exam voucher</li> <li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i> One CompTIA exam attempt</li></ul>",
            "marketPrice": "$396.0",
            "offerPrice": "$198.0",
            "isDefault": null,
            "trainingBatches": []
         },
         {
            "id": 124,
            "offerfeeid": "offerfee4",
            "name": "<p style=\"font-weight:bold;font-size:20px;margin: 0;\">eBook</p>",
            "description": " <ul style=\"list-style-type: none;padding: 10px;background-color: white;font-size: 16px;color: black;font-weight: 30;border-radius: 5px;\"><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>Self-Paced Study Guide</li> <li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>Designed by CompTIA</li><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>Review questions at the end of lessons.</li></ul>",
            "marketPrice": "$64.0",
            "offerPrice": "$32.0",
            "isDefault": null,
            "trainingBatches": []
         },
         {
            "id": 141,
            "offerfeeid": "offerfee5",
            "name": "<p style=\"font-weight:bold;font-size:20px;margin: 0;\">CompTIA A+ Exam Objectives </p>",
            "description": " <ul style=\"list-style-type: none;padding: 10px;background-color: white;font-size: 16px;color: black;font-weight: 30;border-radius: 5px;\"><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>Detailed Syllabus</li> <li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>CompTIA A+ Acronym List </li><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>CompTIA A+ Test Details </li></ul>",
            "marketPrice": "$25.0",
            "offerPrice": "$0.0",
            "isDefault": false,
            "trainingBatches": []
         },
         {
            "id": 142,
            "offerfeeid": "offerfee6",
            "name": "<p style=\"font-weight:bold;font-size:20px;margin: 0;\">CompTIA A+ Practice Questions</p> ",
            "description": " <ul style=\"list-style-type: none;padding: 10px;background-color: white;font-size: 16px;color: black;font-weight: 30;border-radius: 5px;\"><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>CompTia A+ Syllabus based questions </li> </ul>",
            "marketPrice": "$25.0",
            "offerPrice": "$0.0",
            "isDefault": true,
            "trainingBatches": []
         }
      ],
      "courseModules": [{
            "id": 257,
            "lessonOrder": 1,
            "lessonTitle": "1) Hardware - Identifying, using and connecting hardware components and devices, including the broad knowledge about different devices that is now necessary to support the remote workforce"
         },
         {
            "id": 258,
            "lessonOrder": 2,
            "lessonTitle": "2) Networking - Explain types of networks and connections including TCP/IP, WIFI and SOHO"
         },
         {
            "id": 259,
            "lessonOrder": 3,
            "lessonTitle": "3) Troubleshooting - Troubleshoot real-world device and network issues quickly and efficiently"
         },
         {
            "id": 260,
            "lessonOrder": 4,
            "lessonTitle": "4) Mobile Devices - Install and configure laptops and other mobile devices and support applications to ensure connectivity for end users"
         },
         {
            "id": 261,
            "lessonOrder": 5,
            "lessonTitle": "5) Virtualization and Cloud Computing - Compare and contrast cloud computing concepts and set up client-side virtualization"
         }
      ],
      "courseCategory": {
         "id": 1,
         "name": "Network & Security"
      }
   },
   {
      "id": 35,
      "subjectSpan": "Network_Cyber_Security",
      "title": "CompTIA A+ Core-2",
      "type": "Self-Paced",
      "lessonscount": "4 lessons",
      "mode": null,
      "marketPrice": "$339.0",
      "offerPrice": "$169.5",
      "description": "CompTIA A+ is the industry standard for launching IT careers into today’s digital world. The CompTIA A+ Core Series requires candidates to pass two exams: Core 1 (220-1101) and Core 2 (220-1102) and covers the following content, emphasizing the technologies and skills IT pros need to support a hybrid workforce: (a) Increased reliance on SaaS applications for remote work (b) How to remotely diagnose and correct common software, hardware or connectivity problems (c) Evolving core technologies from cloud virtualization and IoT device security to data management and scripting (d) Multiple operating systems, when to use them and how to keep them running properly (e) Reflects the changing nature of the job, including how to assess if it’s best to fix something on site, or send it to a specialized provider Note on CompTIA A+ 220-1101 (Core 1) and 220-1102 (Core 2) Certification - Candidates must complete both 1101 and 1102 to earn certification. Exams cannot be combined across the series",
      "audienceProfile": "CompTIA A+ certification is specifically designed for computer technicians who are responsible for the installation, maintenance, and repair of computer hardware and software systems. Here are some of the job roles that the CompTIA A+ certification is suitable for: IT Support Specialists Field Service Technicians Computer Technicians Help Desk Technicians Network Administrators Junior System Administrators IT Support Analysts",
      "requirements": "CompTIA A+ Core 2(220-1102) covers operating systems, security, software and operational procedures.",
      "courseLevel": "Beginner",
      "courseSpan": null,
      "durationSpan": null,
      "vendor": "CompTIA",
      "courseOrder": 10107,
      "coursePackages": [{
            "id": 68,
            "packageOrder": 1,
            "name": "Learn - One CompTIA CertMaster Learn license for this course. Includes self-paced lessons with practice questions, videos, and performance-based questions.Validity: 12 months"
         },
         {
            "id": 69,
            "packageOrder": 2,
            "name": "Lab - Gradable hands-on assessments provide an accurate picture of your ability to correctly and efficiently perform job tasks. This is a browser-based lab, aligned with CompTIA exam objectives. Validity: 12 months"
         },
         {
            "id": 70,
            "packageOrder": 3,
            "name": "Practice - One CompTIA CertMaster Practice License for this course. This is an online companion tool to reinforce what you know and close knowledge gaps. It has timed practice test with performance-based questions. Validity: 12 months"
         },
         {
            "id": 71,
            "packageOrder": 4,
            "name": "Exam - Exam Voucher for A+ Core 2(220-1102). Validity: 12 months"
         },
         {
            "id": 119,
            "packageOrder": 5,
            "name": "Mentor Hour - Opportunity to discuss, clarify and learn with a technology champion from the industry. Talentstreasure will arrange for a live call between candidates and mentor as per convenient schedule."
         }
      ],
      "courseFeeCombos": [{
            "id": 52,
            "offerfeeid": "offerfee1",
            "name": "<p style=\"font-weight:bold;font-size:20px;margin: 0;\">CompTIA CertMaster Learn Bundle</p>",
            "description": " <ul style=\"list-style-type: none;padding: 10px;background-color: white;font-size: 16px;color: black;font-weight: 30;border-radius: 5px;\"><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>CompTIA's self-paced lessons</li> <li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i> Browser-based CompTIA Lab</li><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i> Practice Questions & Videos </li><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i> Aligned with CompTIA exam</li></ul>\t",
            "marketPrice": "$472.0",
            "offerPrice": "$236.0",
            "isDefault": null,
            "trainingBatches": []
         },
         {
            "id": 53,
            "offerfeeid": "offerfee2",
            "name": "<p style=\"color: indianred; text-align: center; font-weight: bold;margin: 0\">MOST POPULAR</p> <p style=\"font-weight:bold;font-size:20px;margin: 0;\">CompTIA Exam Bundle</p>",
            "description": "<ul style=\"list-style-type: none;padding: 10px;background-color: white;font-size: 16px;color: black;font-weight: 30;border-radius: 5px;\"><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>CompTIA Exam Voucher</li> <li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>  CertMaster Practice questions</li><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i> Track learning progress</li><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i> Aligned with CompTIA exam</li></ul>\t",
            "marketPrice": "$604.0",
            "offerPrice": "$302.0",
            "isDefault": null,
            "trainingBatches": []
         },
         {
            "id": 108,
            "offerfeeid": "offerfee3",
            "name": "<p style=\"font-weight:bold;font-size:20px;margin: 0;\">Exam Voucher </p>\t",
            "description": " <ul style=\"list-style-type: none;padding: 10px;background-color: white;font-size: 16px;color: black;font-weight: 30;border-radius: 5px;\"><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>CompTIA A+ Core-2 exam voucher</li> <li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>One CompTIA exam attempt</li>",
            "marketPrice": "$396.0",
            "offerPrice": "$198.0",
            "isDefault": null,
            "trainingBatches": []
         },
         {
            "id": 125,
            "offerfeeid": "offerfee4",
            "name": "<p style=\"font-weight:bold;font-size:20px;margin: 0;\">eBook</p>",
            "description": "<ul style=\"list-style-type: none;padding: 10px;background-color: white;font-size: 16px;color: black;font-weight: 30;border-radius: 5px;\"><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>Self-Paced Study Guide</li> <li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>Designed by CompTIA</li><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>Review questions at the end of lessons.   </li></ul>",
            "marketPrice": "$64.0",
            "offerPrice": "$32.0",
            "isDefault": null,
            "trainingBatches": []
         },
         {
            "id": 140,
            "offerfeeid": "offerfee5",
            "name": "<p style=\"font-weight:bold;font-size:20px;margin: 0;\">CompTIA A+ Exam Objectives </p>",
            "description": " <ul style=\"list-style-type: none;padding: 10px;background-color: white;font-size: 16px;color: black;font-weight: 30;border-radius: 5px;\"><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>Detailed Syllabus </li> <li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>CompTIA A+ Acronym List </li><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>CompTIA A+ Test Details </li>",
            "marketPrice": "$25.0",
            "offerPrice": "$0.0",
            "isDefault": true,
            "trainingBatches": []
         },
         {
            "id": 143,
            "offerfeeid": "offerfee6",
            "name": "<p style=\"font-weight:bold;font-size:20px;margin: 0;\">CompTIA A+ Practice Questions</p>",
            "description": " <ul style=\"list-style-type: none;padding: 10px;background-color: white;font-size: 16px;color: black;font-weight: 30;border-radius: 5px;\"><li><i class=\"fas fa-check-circle\" style=\"color: darkblue;padding-right: 5px;\"></i>CompTia A+ Syllabus based questions </li></ul>",
            "marketPrice": "$25.0",
            "offerPrice": "$0.0",
            "isDefault": false,
            "trainingBatches": []
         }
      ],
      "courseModules": [{
            "id": 262,
            "lessonOrder": 1,
            "lessonTitle": "1) Software Troubleshooting - Troubleshoot PC and mobile device issues including common OS, malware and security issues"
         },
         {
            "id": 263,
            "lessonOrder": 2,
            "lessonTitle": "2) Operating Systems - Install and support Windows OS including command line and client support, system configuration imaging and troubleshooting for Mac OS, Chrome OS, Android and Linux OS"
         },
         {
            "id": 264,
            "lessonOrder": 3,
            "lessonTitle": "3) Security - Identify and protect against security vulnerabilities for devices and their network connections"
         },
         {
            "id": 265,
            "lessonOrder": 4,
            "lessonTitle": "4) Operational Procedures - Follow best practices for safety, environmental impacts, and communication and professionalism "
         }
      ],
      "courseCategory": {
         "id": 1,
         "name": "Network & Security"
      }
   }
]
for (let i = 0; i < coursesWithVendors.length; i++) {
   if (coursesWithVendors[i].courseModules && Array.isArray(coursesWithVendors[i].courseModules)) {
      coursesWithVendors[i] = {
         ...coursesWithVendors[i],
         courseModules: coursesWithVendors[i].courseModules.map(JSON.stringify)
      };

   }
   if (coursesWithVendors[i].coursePackages && Array.isArray(coursesWithVendors[i].coursePackages)) {
      coursesWithVendors[i] = {
         ...coursesWithVendors[i],
         coursePackages: coursesWithVendors[i].coursePackages.map(JSON.stringify)
      };
   }
   if (coursesWithVendors[i].courseFeeCombos && Array.isArray(coursesWithVendors[i].courseFeeCombos)) {
      coursesWithVendors[i] = {
         ...coursesWithVendors[i],
         courseFeeCombos: coursesWithVendors[i].courseFeeCombos.map(JSON.stringify)
      };
   }
}

function uniqueVendors(coursesWithVendors) {
   return _.uniq(_.map(coursesWithVendors, 'vendor'));
}

// Function to get courses for a given vendor
function coursesForVendor(coursesWithVendors, vendor) {
   return _.filter(coursesWithVendors, {
      'vendor': vendor
   });
}
// Function to count courses offered by vendor for a course category
function countCoursesByVendorForCategory(coursesWithVendors, vendor, courseCategory) {
   let count = 0;
   coursesWithVendors.forEach(course => {
      if (course.vendor === vendor && course.courseCategory.name === courseCategory) {
         count++;
      }
   });
   return count;
}
console.log("Unique Vendors:", uniqueVendors(coursesWithVendors));
console.log("Courses for Vendor CompTIA:", coursesForVendor(coursesWithVendors, 'network++'));
console.log("Count of courses offered by vendor ", countCoursesByVendorForCategory(coursesWithVendors, 'CompTIA', 'Network & Security'));