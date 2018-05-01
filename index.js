$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'السؤال %current من %total  اسئلة',
  questions: [
    {
      'q': 'هل الشمس نجم او كوكب؟',
      'options': [
        'نجم',
        'كوكب'
      ],
      'correctIndex': 0,
      'correctResponse': 'الشمس (رمزها ☉) هي النجم المركزي للمجموعة الشمسية.',
      'incorrectResponse': 'الشمس تعتبر نجما وليس كوكبا'
    },


    {
      'q': 'ما هو الضوء ؟',
      'options': [
        'الإلكترونات',
        'البروتونات',
        'طاقة مشعةا'
      ],
      'correctIndex': 2,
      'correctResponse': 'الضوء هو طاقة مشعة يشار إليها بأنها إشعاع كهرومغناطيسي مرئي للعين البشرية',
      'incorrectResponse': 'لا بل طاقة مشعة'
    },
    {
      'q': 'هل الفيزياء تحتاج الى الرياضيات ؟',
      'options': [
        'صحيح',
        'خطأ'
      ],
      'correctIndex': 0,
      'correctResponse': 'صحيح تستخدم الفيزياء الرياضيات باعتبارها لغة قادرة على التعبير عن القوانين والظواهر الفيزيائية بشكل واضح ومفهوم.',
      'incorrectResponse': 'خطأ الفيزياء تحتاج الى الرياضيات'
    },
    {
      'q': 'كم تساوي 20*2+1 ؟',
      'options': [
        '60',
        '41',
        '40'
      ],
      'correctIndex': 1,
      'correctResponse': 'صحيح',
      'incorrectResponse': 'خطأ'
    }
  ]
});