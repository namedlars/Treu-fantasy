/* ---- Die Rechtstexte, eine Quelle fuer App und Website ----
   Vorher standen sie nur in screens/app.html. Die Website braucht dieselben
   Texte, und zwei Kopien laufen nach dem ersten Update auseinander, ohne dass
   jemand merkt welcher Stand gilt. Deshalb liegen sie hier und werden von
   screens/app.html und screens/legal.html eingebunden.

   Kein Modul und kein fetch: beides scheitert unter file://, und der Prototyp
   wird als Datei geoeffnet. Ein einfaches <script src> funktioniert. */
window.LEGAL_DOCS = [
    { k:'terms', g:'The basics', t:'Terms of Service', d:'The rules for using True Fantasy', up:'12 August 2026',
      abs:[
        ['Who we are and what this is',
         'True Fantasy is operated by True Fantasy GmbH, Musterstrasse 12, 10115 Berlin. These terms apply whenever you open the site or the app, whether or not you have an account.',
         'If you do not agree with them, do not use the service. There is no version of the service that runs without them.'],
        ['Your account',
         'You must be 18 or older. One person, one account. You are responsible for what happens under your account, including anything someone else does with it if you let them in.',
         'We may suspend an account when these terms are broken. What that looks like, and how to reach us afterwards, is described in the suspension screen you would see.'],
        ['Coins and payments',
         'Coins are prepaid credit for use inside True Fantasy. They are not money, they earn no interest, and they cannot be transferred between accounts or paid out.',
         'Prices are shown before every purchase. Statutory rights of withdrawal are not affected by anything in this section.'],
        ['Content you create',
         'You keep the rights to what you create. You give us the licence we need to store it, show it to the people you allow, and back it up.',
         'That licence ends when you delete the content, except for copies we are legally required to keep.'],
        ['Earnings and payouts',
         'Creators earn a share of subscriptions and unlocks. Payouts require identity verification, because we are required to know who we are paying.',
         'Balances are held until verification is complete. Nothing is forfeited in the meantime.'],
        ['Changes to these terms',
         'We tell you before material changes take effect and give you time to read them. Carrying on using the service after that counts as agreement.']
      ]},

    { k:'privacy', g:'The basics', t:'Privacy Policy', d:'What we collect and why', up:'12 August 2026',
      abs:[
        ['What we collect',
         'Account data such as your email address and username. Usage data such as which models you open. Payment data, which our payment provider handles rather than us. For creators, identity documents.',
         'We do not ask for your real name unless you want to be paid.'],
        ['Why we collect it',
         'To run the service, to bill correctly, to keep minors out, and to answer you when something goes wrong. Analytics and marketing only happen with your consent, which you give or withhold in the cookie settings.'],
        ['Conversations with models',
         'Chats are stored so the model can remember earlier conversations. That memory is the point of the product, so this cannot be turned off separately without breaking it.',
         'Whether conversations are used to improve our models is a separate decision and is stated here explicitly once made.'],
        ['Identity documents',
         'Documents from creator verification are kept only as long as we are required to keep them, then deleted. They are never shown to other users and never attached to a public profile.'],
        ['How long we keep things',
         'Account data until you delete your account, plus the 30 day recovery window described in the deletion flow. Invoices for as long as tax law requires. Chats until you delete them.'],
        ['Your rights',
         'Access, correction, deletion, portability and objection. You can export your data from your account settings. Write to privacy@true-fantasy.ai for anything the app does not cover.',
         'You can also complain to a supervisory authority. For us that is the Berlin data protection authority.']
      ]},

    { k:'cookies', g:'The basics', t:'Cookie Policy', d:'Which cookies we set and what they do', up:'12 August 2026',
      abs:[
        ['The four categories',
         'Necessary cookies keep you signed in and remember your age confirmation. Functional cookies remember your theme and language. Analytics cookies count usage. Marketing cookies measure which advert brought you here.',
         'Only the first group is set without asking.'],
        ['Changing your mind',
         'Cookie settings sit in your profile settings and can be changed at any time. Withdrawing consent is exactly as easy as giving it.'],
        ['What we do not do',
         'We do not share what you look at with advertisers, and no cookie carries the name of a model you opened.']
      ]},

    { k:'use', g:'Content and conduct', t:'Acceptable Use', d:'What you may and may not create', up:'12 August 2026',
      abs:[
        ['The hard limits',
         'No content depicting or suggesting minors, in any style, at any age setting. No content depicting real people without their consent. No content depicting violence, coercion or animals.',
         'These are not warnings. Accounts that break them are suspended and, where required, reported.'],
        ['Likeness of real people',
         'You may create a likeness of yourself through a Digital Twin, after verification. You may not create a likeness of anyone else, including public figures.',
         'If you believe a model resembles you and you did not consent, use the content removal request. It does not require an account.'],
        ['Age of depicted characters',
         'Every generated character must read as an adult. Age related settings have a floor and it is enforced when generating, not only in the interface.'],
        ['Reporting',
         'Every post and every model has a report option. Reports are read by people, not only by systems.']
      ]},

    { k:'removal', g:'Content and conduct', t:'Content Removal', d:'Ask us to take something down', up:'12 August 2026',
      abs:[
        ['Who this is for',
         'Anyone who believes content on True Fantasy shows them, or a likeness of them, without their consent. You do not need an account and you do not need to sign up to file a request.'],
        ['What we need from you',
         'A link to the content, what the problem is, and a way to reach you. Nothing more. We do not ask for identity documents to open a case.'],
        ['What happens next',
         'You get a case number immediately. Content that plausibly shows a real person is hidden while we look, not after. We answer within five working days.'],
        ['If you disagree with the outcome',
         'The case number stays valid. Reply to it and a different person looks at it.']
      ]},

    { k:'ai', g:'Content and conduct', t:'AI Content and 18 U.S.C. 2257', d:'What is generated and what is a real person', up:'12 August 2026',
      abs:[
        ['Two kinds of content live here',
         'Most models on True Fantasy are generated. No real person is depicted, no real person performed, and 18 U.S.C. 2257 record keeping does not apply to them.',
         'Digital Twins are different. A Twin is built from reference material of a real, verified, consenting adult. Records are kept for those.'],
        ['How you can tell them apart',
         'Twins carry a visible marker on the profile and in the feed. This is deliberate. Someone paying to talk to a person should know whether there is one.'],
        ['Records for Twins',
         'Verification records, consent confirmations and the date of consent are kept for every Twin. The custodian of records is reachable at the address in the imprint.'],
        ['Consent can be withdrawn',
         'A verified person can withdraw consent and delete their Twin. Deletion removes the model and its content. Records we are required to keep survive the deletion, nothing else does.']
      ]},

    { k:'dmca', g:'Content and conduct', t:'Copyright and DMCA', d:'Report content that is yours', up:'12 August 2026',
      abs:[
        ['Filing a notice',
         'Send us the work you own, the link to the copy on True Fantasy, your contact details, and a statement that you believe the use is not authorised. Send it to copyright@true-fantasy.ai.'],
        ['What we do',
         'We remove or disable access to the material and tell the person who posted it. Repeat infringers lose their account.'],
        ['Counter notices',
         'If your content was removed and you think that was wrong, you can send a counter notice. We forward it and, absent a court filing, restore the material.']
      ]},

    { k:'complaints', g:'Company', t:'Complaints', d:'When something goes wrong', up:'12 August 2026',
      abs:[
        ['How to complain',
         'Write to complaints@true-fantasy.ai, or use the support form if your account is suspended and you cannot reach the app.'],
        ['How long it takes',
         'We confirm within one working day and answer within seven. If it takes longer than that, we say why rather than going quiet.'],
        ['If we cannot agree',
         'You can take the matter to a consumer arbitration board. We name the competent one in our reply, and we are not obliged to take part.']
      ]},

    { k:'imprint', g:'Company', t:'Imprint', d:'Who runs this service', up:'12 August 2026',
      abs:[
        ['Provider',
         'True Fantasy GmbH, Musterstrasse 12, 10115 Berlin, Germany. Commercial register Berlin Charlottenburg, HRB 000000. VAT identification number DE000000000.'],
        ['Represented by',
         'The managing directors, named in the commercial register.'],
        ['Contact',
         'hello@true-fantasy.ai. Responsible for content under section 18 paragraph 2 MStV: the managing directors at the address above.']
      ]}
  ];
